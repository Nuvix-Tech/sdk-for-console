import { Service } from '../service';
import { NuvixException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

export class Assistant {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Ask query
     *
     *
     * @param {string} prompt
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async chat(prompt: string): Promise<{}> {
        if (typeof prompt === 'undefined') {
            throw new NuvixException('Missing required parameter: "prompt"');
        }
        const apiPath = '/console/assistant';
        const payload: Payload = {};
        if (typeof prompt !== 'undefined') {
            payload['prompt'] = prompt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
}
