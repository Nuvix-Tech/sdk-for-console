import { Client } from '../client';
export declare class Assistant {
    client: Client;
    constructor(client: Client);
    /**
     * Ask query
     *
     *
     * @param {string} prompt
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    chat(prompt: string): Promise<{}>;
}
