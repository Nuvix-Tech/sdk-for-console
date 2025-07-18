import { Models } from './models';
import { io, Socket } from "socket.io-client";

/**
 * Payload type representing a key-value pair with string keys and any values.
 */
type Payload = {
  [key: string]: any;
}

/**
* Headers type representing a key-value pair with string keys and string values.
*/
type Headers = {
  [key: string]: string;
}

/**
* Realtime response structure with different types.
*/
type RealtimeResponse = {
  /**
   * Type of the response: 'error', 'event', 'connected', or 'response'.
   */
  type: 'error' | 'event' | 'connected' | 'response';

  /**
   * Data associated with the response based on the response type.
   */
  data: RealtimeResponseAuthenticated | RealtimeResponseConnected | RealtimeResponseError | RealtimeResponseEvent<unknown>;
}

/**
* Realtime request structure for authentication.
*/
type RealtimeRequest = {
  /**
   * Type of the request: 'authentication'.
   */
  type: 'authentication';

  /**
   * Data required for authentication.
   */
  data: RealtimeRequestAuthenticate;
}

/**
* Realtime event response structure with generic payload type.
*/
type RealtimeResponseEvent<T extends unknown> = {
  /**
   * List of event names associated with the response.
   */
  events: string[];

  /**
   * List of channel names associated with the response.
   */
  channels: string[];

  /**
   * Timestamp indicating the time of the event.
   */
  timestamp: number;

  /**
   * Payload containing event-specific data.
   */
  payload: T;
}

/**
* Realtime response structure for errors.
*/
type RealtimeResponseError = {
  /**
   * Numeric error code indicating the type of error.
   */
  code: number;

  /**
   * Error message describing the encountered error.
   */
  message: string;
}

/**
* Realtime response structure for a successful connection.
*/
type RealtimeResponseConnected = {
  /**
   * List of channels the user is connected to.
   */
  channels: string[];

  /**
   * User object representing the connected user (optional).
   */
  user?: object;
}

/**
* Realtime response structure for authenticated connections.
*/
type RealtimeResponseAuthenticated = {
  /**
   * Destination channel for the response.
   */
  to: string;

  /**
   * Boolean indicating the success of the authentication process.
   */
  success: boolean;

  /**
   * User object representing the authenticated user.
   */
  user: object;
}

/**
* Realtime request structure for authentication.
*/
type RealtimeRequestAuthenticate = {
  /**
   * Session identifier for authentication.
   */
  session: string;
}

/**
* Realtime interface representing the structure of a realtime communication object.
*/
type Realtime = {
  /**
   * WebSocket instance for realtime communication.
   */
  socket?: Socket;

  /**
   * Timeout duration for communication operations.
   */
  timeout?: number;

  /**
   * URL for establishing the WebSocket connection.
   */
  url?: string;

  /**
   * Last received message from the realtime server.
   */
  lastMessage?: RealtimeResponse;

  /**
   * Set of channel names the client is subscribed to.
   */
  channels: Set<string>;

  /**
   * Map of subscriptions containing channel names and corresponding callback functions.
   */
  subscriptions: Map<number, {
    channels: string[];
    callback: (payload: RealtimeResponseEvent<any>) => void
  }>;

  /**
   * Counter for managing subscriptions.
   */
  subscriptionsCounter: number;

  /**
   * Boolean indicating whether automatic reconnection is enabled.
   */
  reconnect: boolean;

  /**
   * Number of reconnection attempts made.
   */
  reconnectAttempts: number;

  /**
   * Function to get the timeout duration for communication operations.
   */
  getTimeout: () => number;

  /**
   * Function to establish a WebSocket connection.
   */
  connect: () => void;

  /**
   * Function to create a new WebSocket instance.
   */
  createSocket: () => void;

  /**
   * Function to clean up resources associated with specified channels.
   *
   * @param {string[]} channels - List of channel names to clean up.
   */
  cleanUp: (channels: string[]) => void;

  /**
   * Function to handle incoming messages from the WebSocket connection.
   *
   * @param {MessageEvent} event - Event containing the received message.
   */
  onMessage: (event: MessageEvent) => void;
}

/**
* Type representing upload progress information.
*/
type UploadProgress = {
  /**
   * Identifier for the upload progress.
   */
  $id: string;

  /**
   * Current progress of the upload (in percentage).
   */
  progress: number;

  /**
   * Total size uploaded (in bytes) during the upload process.
   */
  sizeUploaded: number;

  /**
   * Total number of chunks that need to be uploaded.
   */
  chunksTotal: number;

  /**
   * Number of chunks that have been successfully uploaded.
   */
  chunksUploaded: number;
}

/**
* Exception thrown by the  package
*/
class NuvixException extends Error {
  /**
   * The error code associated with the exception.
   */
  code: number;

  /**
   * The response string associated with the exception.
   */
  response: string;

  /**
   * Error type.
   * See [Error Types](https://nuvix.io/docs/response-codes#errorTypes) for more information.
   */
  type: string;

  /**
   * Initializes a Nuvix Exception.
   *
   * @param {string} message - The error message.
   * @param {number} code - The error code. Default is 0.
   * @param {string} type - The error type. Default is an empty string.
   * @param {string} response - The response string. Default is an empty string.
   */
  constructor(message: string, code: number = 0, type: string = '', response: string = '') {
    super(message);
    this.name = 'NuvixException';
    this.message = message;
    this.code = code;
    this.type = type;
    this.response = response;
  }
}

/**
* Client that handles requests to Nuvix
*/
class Client {
  static CHUNK_SIZE = 1024 * 1024 * 5;

  /**
   * Holds configuration such as project.
   */
  config = {
    endpoint: 'http://api.nuvix.in/v1',
    endpointRealtime: '',
    project: '',
    key: '',
    jwt: '',
    locale: '',
    mode: '',
  };
  /**
   * Custom headers for API requests.
   */
  headers: Headers = {
    'x-sdk-name': 'Console',
    'x-sdk-platform': 'console',
    'x-sdk-language': 'web',
    'x-sdk-version': '0.0.3',
    'X-Nuvix-Response-Format': '1.0.0',
  };

  /**
   * Set Endpoint
   *
   * Your project endpoint
   *
   * @param {string} endpoint
   *
   * @returns {this}
   */
  setEndpoint(endpoint: string): this {
    this.config.endpoint = endpoint;
    this.config.endpointRealtime = this.config.endpointRealtime || this.config.endpoint.replace('https://', 'wss://').replace('http://', 'ws://');

    return this;
  }

  /**
   * Set Realtime Endpoint
   *
   * @param {string} endpointRealtime
   *
   * @returns {this}
   */
  setEndpointRealtime(endpointRealtime: string): this {
    this.config.endpointRealtime = endpointRealtime;

    return this;
  }

  /**
   * Set Project
   *
   * Your project ID
   *
   * @param value string
   *
   * @return {this}
   */
  setProject(value: string): this {
    this.headers['X-Nuvix-Project'] = value;
    this.config.project = value;
    return this;
  }
  /**
   * Set Key
   *
   * Your secret API key
   *
   * @param value string
   *
   * @return {this}
   */
  setKey(value: string): this {
    this.headers['X-Nuvix-Key'] = value;
    this.config.key = value;
    return this;
  }
  /**
   * Set JWT
   *
   * Your secret JSON Web Token
   *
   * @param value string
   *
   * @return {this}
   */
  setJWT(value: string): this {
    this.headers['X-Nuvix-JWT'] = value;
    this.config.jwt = value;
    return this;
  }
  /**
   * Set Locale
   *
   * @param value string
   *
   * @return {this}
   */
  setLocale(value: string): this {
    this.headers['X-Nuvix-Locale'] = value;
    this.config.locale = value;
    return this;
  }
  /**
   * Set Mode
   *
   * @param value string
   *
   * @return {this}
   */
  setMode(value: string): this {
    this.headers['X-Nuvix-Mode'] = value;
    this.config.mode = value;
    return this;
  }

  private realtime: Realtime = {
    socket: undefined,
    timeout: undefined,
    url: '',
    channels: new Set(),
    subscriptions: new Map(),
    subscriptionsCounter: 0,
    reconnect: true,
    reconnectAttempts: 0,
    lastMessage: undefined,
    connect: () => {
      clearTimeout(this.realtime.timeout);
      this.realtime.timeout = window?.setTimeout(() => {
        this.realtime.createSocket();
      }, 50);
    },
    getTimeout: () => {
      switch (true) {
        case this.realtime.reconnectAttempts < 5:
          return 1000;
        case this.realtime.reconnectAttempts < 15:
          return 5000;
        case this.realtime.reconnectAttempts < 100:
          return 10_000;
        default:
          return 60_000;
      }
    },
    createSocket: () => {
      if (this.realtime.channels.size < 1) {
        this.realtime.reconnect = false;
        this.realtime.socket?.disconnect();
        return;
      }

      const channels = Array.from(this.realtime.channels);
      const url = this.config.endpointRealtime;

      if (
        url !== this.realtime.url || // Check if URL is present
        !this.realtime.socket // Check if Socket.IO client has not been created
      ) {
        this.realtime.url = url;
        this.realtime.socket?.disconnect();
        this.realtime.socket = io(url, {
          query: {
            project: this.config.project,
            channels: channels.join(","),
          },
          reconnection: false,
        });

        this.realtime.socket.on("connect", () => {
          this.realtime.reconnectAttempts = 0;
        });

        this.realtime.socket.on("disconnect", (reason: any) => {
          if (
            !this.realtime.reconnect ||
            (
              this.realtime?.lastMessage?.type === 'error' &&
              (<RealtimeResponseError>this.realtime?.lastMessage.data).code === 1008
            )
          ) {
            this.realtime.reconnect = true;
            return;
          }

          const timeout = this.realtime.getTimeout();
          console.error(`Realtime disconnected. Reconnect in ${timeout / 1000} seconds. Reason: ${reason}`);

          setTimeout(() => {
            this.realtime.reconnectAttempts++;
            this.realtime.createSocket();
          }, timeout);
        });

        this.realtime.socket.on("message", this.realtime.onMessage);
      }
    },
    onMessage: (data) => {
      try {
        const message: RealtimeResponse = typeof data === "string" ? JSON.parse(data) : data;
        this.realtime.lastMessage = message;

        switch (message.type) {
          case "connected":
            const cookie = JSON.parse(window.localStorage.getItem("cookieFallback") ?? "{}");
            const session = cookie?.[`a_session_${this.config.project}`];
            const messageData = <RealtimeResponseConnected>message.data;

            if (session && !messageData.user) {
              this.realtime.socket?.emit("authentication", { session });
            }
            break;

          case "event":
            let eventData = <RealtimeResponseEvent<unknown>>message.data;
            if (eventData?.channels) {
              const isSubscribed = eventData.channels.some(channel => this.realtime.channels.has(channel));
              if (!isSubscribed) return;

              this.realtime.subscriptions.forEach(subscription => {
                if (eventData.channels.some(channel => subscription.channels.includes(channel))) {
                  setTimeout(() => subscription.callback(eventData));
                }
              });
            }
            break;

          case "error":
            throw message.data;

          default:
            break;
        }
      } catch (e) {
        console.error(e);
      }
    },
    cleanUp: (channels) => {
      this.realtime.channels.forEach(channel => {
        if (channels.includes(channel)) {
          let found = Array.from(this.realtime.subscriptions).some(([_key, subscription]) => {
            return subscription.channels.includes(channel);
          });

          if (!found) {
            this.realtime.channels.delete(channel);
          }
        }
      });
    }
  };

  /**
   * Subscribes to Nuvix events and passes you the payload in realtime.
   *
   * @param {string|string[]} channels
   * Channel to subscribe - pass a single channel as a string or multiple with an array of strings.
   *
   * Possible channels are:
   * - account
   * - collections
   * - collections.[ID]
   * - collections.[ID].documents
   * - documents
   * - documents.[ID]
   * - files
   * - files.[ID]
   * - executions
   * - executions.[ID]
   * - functions.[ID]
   * - teams
   * - teams.[ID]
   * - memberships
   * - memberships.[ID]
   * @param {(payload: RealtimeMessage) => void} callback Is called on every realtime update.
   * @returns {() => void} Unsubscribes from events.
   */
  subscribe<T extends unknown>(channels: string | string[], callback: (payload: RealtimeResponseEvent<T>) => void): () => void {
    let channelArray = typeof channels === 'string' ? [channels] : channels;
    channelArray.forEach(channel => this.realtime.channels.add(channel));

    const counter = this.realtime.subscriptionsCounter++;
    this.realtime.subscriptions.set(counter, {
      channels: channelArray,
      callback
    });

    this.realtime.connect();

    return () => {
      this.realtime.subscriptions.delete(counter);
      this.realtime.cleanUp(channelArray);
      this.realtime.connect();
    };
  }

  prepareRequest(method: string, url: URL, headers: Headers = {}, params: Payload = {}): { uri: string, options: RequestInit } {
    method = method.toUpperCase();

    headers = Object.assign({}, this.headers, headers);

    if (typeof window !== 'undefined' && window.localStorage) {
      const cookieFallback = window.localStorage.getItem('cookieFallback');
      if (cookieFallback) {
        headers['X-Fallback-Cookies'] = cookieFallback;
      }
    }

    let options: RequestInit = {
      method,
      headers,
      credentials: 'include',
    };

    if (method === 'GET') {
      for (const [key, value] of Object.entries(Client.flatten(params))) {
        url.searchParams.append(key, value);
      }
    } else {
      switch (headers['content-type']) {
        case 'application/json':
          options.body = JSON.stringify(params);
          break;

        case 'multipart/form-data':
          const formData = new FormData();

          for (const [key, value] of Object.entries(params)) {
            if (value instanceof File) {
              formData.append(key, value, value.name);
            } else if (Array.isArray(value)) {
              for (const nestedValue of value) {
                formData.append(`${key}[]`, nestedValue);
              }
            } else {
              formData.append(key, value);
            }
          }

          options.body = formData;
          delete headers['content-type'];
          break;
      }
    }

    return { uri: url.toString(), options };
  }

  async chunkedUpload(method: string, url: URL, headers: Headers = {}, originalPayload: Payload = {}, onProgress: (progress: UploadProgress) => void) {
    const file: any = Object.values(originalPayload).find((value) => value instanceof File);

    if (file.size <= Client.CHUNK_SIZE) {
      return await this.call(method, url, headers, originalPayload);
    }

    let start = 0;
    let response = null;

    while (start < file.size) {
      let end = start + Client.CHUNK_SIZE; // Prepare end for the next chunk
      if (end >= file.size) {
        end = file.size; // Adjust for the last chunk to include the last byte
      }

      headers['content-range'] = `bytes ${start}-${end - 1}/${file.size}`;
      const chunk = file.slice(start, end);

      let payload = { ...originalPayload, file: new File([chunk], file.name) };

      response = await this.call(method, url, headers, payload);

      if (onProgress && typeof onProgress === 'function') {
        onProgress({
          $id: response.$id,
          progress: Math.round((end / file.size) * 100),
          sizeUploaded: end,
          chunksTotal: Math.ceil(file.size / Client.CHUNK_SIZE),
          chunksUploaded: Math.ceil(end / Client.CHUNK_SIZE)
        });
      }

      if (response && response.$id) {
        headers['x-nuvix-id'] = response.$id;
      }

      start = end;
    }

    return response;
  }

  async ping(): Promise<string> {
    return this.call('GET', new URL(this.config.endpoint + '/ping'));
  }

  async call(method: string, url: URL, headers: Headers = {}, params: Payload = {}, responseType = 'json'): Promise<any> {
    const { uri, options } = this.prepareRequest(method, url, headers, params);

    let data: any = null;

    const response = await fetch(uri, options);

    const warnings = response.headers.get('x-nuvix-warning');
    if (warnings) {
      warnings.split(';').forEach((warning: string) => console.warn('Warning: ' + warning));
    }

    if (response.headers.get('content-type')?.includes('application/json')) {
      data = await response.json();
    } else if (responseType === 'arrayBuffer') {
      data = await response.arrayBuffer();
    } else {
      data = {
        message: await response.text()
      };
    }

    if (400 <= response.status) {
      throw new NuvixException(data?.message, response.status, data?.type, data);
    }

    const cookieFallback = response.headers.get('X-Fallback-Cookies');

    if (typeof window !== 'undefined' && window.localStorage && cookieFallback) {
      window.console.warn('Nuvix is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint.');
      window.localStorage.setItem('cookieFallback', cookieFallback);
    }

    return data;
  }

  static flatten(data: Payload, prefix = ''): Payload {
    let output: Payload = {};

    for (const [key, value] of Object.entries(data)) {
      let finalKey = prefix ? prefix + '[' + key + ']' : key;
      if (Array.isArray(value)) {
        output = { ...output, ...Client.flatten(value, finalKey) };
      } else {
        output[finalKey] = value;
      }
    }

    return output;
  }
}

export { Client, NuvixException };
export { Query } from './query';
export type { Models, Payload, UploadProgress };
export type { RealtimeResponseEvent };
export type { QueryTypes, QueryTypesList } from './query';
