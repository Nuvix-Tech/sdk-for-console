# Nuvix Console SDK

The **Nuvix Console SDK** provides an easy-to-use set of tools for interacting with the backend of your Next.js-based console or admin panel. It allows you to perform various operations such as data retrieval, user authentication, and real-time event handling.

This SDK is designed to work seamlessly with your backend, making it easy to integrate API requests, handle real-time updates, and manage complex operations like chunked uploads.

## Features

- **Backend Integration**: Easily connect your Next.js frontend to the backend using GraphQL API.
- **Real-time Event Handling**: Subscribe to and listen for real-time updates.
- **Chunked File Uploads**: Upload large files in manageable chunks.
- **Flexible Configuration**: Configure endpoints, authentication, and project details with ease.
- **Extensible and Easy to Use**: The SDK is designed for flexibility and ease of integration into your existing projects.

## Installation

To install the SDK, use npm or yarn:

```bash
npm install @nuvix/console
```

or

```bash
yarn add @nuvix/console
```

## Getting Started

1. **Initialize the SDK**: Import the SDK and create a client instance.

```js
import { Client } from '@nuvix/console';

// Initialize the SDK client
const client = new Client();
client.setEndpoint('https://api.your-backend.com')  // API endpoint
      .setEndpointRealtime('https://realtime-api.your-backend.com')  // Realtime API endpoint
      .setProject('your-project-id')  // Project ID
      .setKey('your-api-key')  // API key
      .setJWT('your-jwt')  // JWT token
      .setLocale('en-US')  // Locale setting (optional)
      .setMode('production');  // Application mode (optional)
```

2. **Make API Calls**: You can perform basic API operations such as fetching data, creating resources, and updating records.

```js
// Fetch data from the backend
async function fetchData() {
  try {
    const data = await client.call('GET', new URL('https://api.your-backend.com/data'));
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

3. **Real-time Event Subscription**: The SDK supports real-time event subscriptions, so you can listen for updates on resources like documents, collections, or files.

```js
// Subscribe to real-time updates for documents
const unsubscribe = client.subscribe('documents', (payload) => {
  console.log('Real-time document update:', payload);
});

// Later, you can unsubscribe from the event
unsubscribe();
```

4. **Chunked Uploads**: For large file uploads, you can use the chunked upload method to upload files in parts.

```js
// Upload a large file in chunks
async function uploadFile(file) {
  const url = new URL('https://api.your-backend.com/upload');
  const headers = {  };

  try {
    const response = await client.chunkedUpload('POST', url, headers, { file }, (progress) => {
      console.log(`Upload Progress: ${progress.progress}%`);
    });
    console.log('Upload completed:', response);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

const file = {};  // Your file or data here
uploadFile(file);
```

## SDK Methods

### `client.setEndpoint(endpoint: string): this`
Sets the API endpoint for making requests.

**Parameters**:
- `endpoint`: The base URL for your backend API.

### `client.setEndpointRealtime(endpointRealtime: string): this`
Sets the Realtime API endpoint.

**Parameters**:
- `endpointRealtime`: The base URL for real-time events.

### `client.setProject(value: string): this`
Sets the project ID.

**Parameters**:
- `value`: Your project ID.

### `client.setKey(value: string): this`
Sets the API key.

**Parameters**:
- `value`: Your API key.

### `client.setJWT(value: string): this`
Sets the JWT token.

**Parameters**:
- `value`: Your JWT token.

### `client.setLocale(value: string): this`
Sets the locale for the client (optional).

**Parameters**:
- `value`: The locale, e.g., 'en-US'.

### `client.setMode(value: string): this`
Sets the mode of the application, such as 'production' or 'development'.

**Parameters**:
- `value`: The mode of the application.

### `client.call(method: string, url: URL, headers?: Headers, params?: Payload): Promise<any>`
Performs an API call to the backend.

**Parameters**:
- `method`: HTTP method (e.g., 'GET', 'POST').
- `url`: The endpoint URL.
- `headers`: Optional request headers.
- `params`: Optional parameters.

**Returns**:
- A promise with the response data.

### `client.subscribe<T>(channels: string | string[], callback: (payload: RealtimeResponseEvent<T>) => void): () => void`
Subscribes to real-time events.

**Parameters**:
- `channels`: The channels to subscribe to.
- `callback`: A function that will be called when a real-time update occurs.

**Returns**:
- A function to unsubscribe from the event.

### `client.chunkedUpload(method: string, url: URL, headers: Headers, originalPayload: Payload, onProgress: (progress: UploadProgress) => void): Promise<any>`
Performs a chunked upload for large files.

**Parameters**:
- `method`: The HTTP method (e.g., 'POST').
- `url`: The URL for the upload endpoint.
- `headers`: The request headers.
- `originalPayload`: The data or file to upload.
- `onProgress`: A callback function to track upload progress.

**Returns**:
- A promise with the upload response.

### `client.flatten(data: Payload, prefix?: string): Payload`
Flattens nested data into a simple key-value pair format.

**Parameters**:
- `data`: The data to flatten.
- `prefix`: An optional prefix to prepend to the keys.

**Returns**:
- The flattened data.

## Contributing

We welcome contributions to the SDK! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request with a description of the changes.

Please ensure that your code adheres to the project's coding standards and includes tests (if applicable).

## License

This SDK is licensed under the [BSD 3-Clause License](LICENSE).

## Contact

For questions or support, please reach out to us at [support@nuvix.com](mailto:support@nuvix.com).
