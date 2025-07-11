import { Service } from '../service';
import { NuvixException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { DatabaseUsageRange } from '../enums/database-usage-range';
import { RelationshipType } from '../enums/relationship-type';
import { RelationMutate } from '../enums/relation-mutate';
import { IndexType } from '../enums/index-type';

export class Databases {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List databases
     *
     * Get a list of all databases from the current Nuvix project. You can use the search parameter to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {NuvixException}
     * @returns {Promise<Models.DatabaseList>}
     */
    async list(queries?: string[], search?: string): Promise<Models.DatabaseList> {
        const apiPath = '/schemas';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create database
     *
     * Create a new Database.

     *
     * @param {string} databaseId
     * @param {string} name
     * @param {boolean} enabled
     * @throws {NuvixException}
     * @returns {Promise<Models.Database>}
     */
    async create(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof name === 'undefined') {
            throw new NuvixException('Missing required parameter: "name"');
        }
        const apiPath = '/schemas';
        const payload: Payload = {};
        if (typeof databaseId !== 'undefined') {
            payload['databaseId'] = databaseId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
    /**
     * Get databases usage stats
     *
     *
     * @param {DatabaseUsageRange} range
     * @throws {NuvixException}
     * @returns {Promise<Models.UsageDatabases>}
     */
    async getUsage(range?: DatabaseUsageRange): Promise<Models.UsageDatabases> {
        const apiPath = '/schemas/usage';
        const payload: Payload = {};
        if (typeof range !== 'undefined') {
            payload['range'] = range;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get database
     *
     * Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.
     *
     * @param {string} databaseId
     * @throws {NuvixException}
     * @returns {Promise<Models.Database>}
     */
    async get(databaseId: string): Promise<Models.Database> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        const apiPath = '/schemas/{databaseId}'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Update database
     *
     * Update a database by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} name
     * @param {boolean} enabled
     * @throws {NuvixException}
     * @returns {Promise<Models.Database>}
     */
    async update(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof name === 'undefined') {
            throw new NuvixException('Missing required parameter: "name"');
        }
        const apiPath = '/schemas/{databaseId}'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete database
     *
     * Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.
     *
     * @param {string} databaseId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async delete(databaseId: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        const apiPath = '/schemas/{databaseId}'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List collections
     *
     * Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} databaseId
     * @param {string[]} queries
     * @param {string} search
     * @throws {NuvixException}
     * @returns {Promise<Models.CollectionList>}
     */
    async listCollections(databaseId: string, queries?: string[], search?: string): Promise<Models.CollectionList> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        const apiPath = '/schemas/{databaseId}/collections'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create collection
     *
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://nuvix.io/docs/server/schemas#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} documentSecurity
     * @param {boolean} enabled
     * @throws {NuvixException}
     * @returns {Promise<Models.Collection>}
     */
    async createCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof name === 'undefined') {
            throw new NuvixException('Missing required parameter: "name"');
        }
        const apiPath = '/schemas/{databaseId}/collections'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof collectionId !== 'undefined') {
            payload['collectionId'] = collectionId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof documentSecurity !== 'undefined') {
            payload['documentSecurity'] = documentSecurity;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
    /**
     * Get collection
     *
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {NuvixException}
     * @returns {Promise<Models.Collection>}
     */
    async getCollection(databaseId: string, collectionId: string): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Update collection
     *
     * Update a collection by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} documentSecurity
     * @param {boolean} enabled
     * @throws {NuvixException}
     * @returns {Promise<Models.Collection>}
     */
    async updateCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof name === 'undefined') {
            throw new NuvixException('Missing required parameter: "name"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof documentSecurity !== 'undefined') {
            payload['documentSecurity'] = documentSecurity;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete collection
     *
     * Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async deleteCollection(databaseId: string, collectionId: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List attributes
     *
     * List attributes in the collection.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeList>}
     */
    async listAttributes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.AttributeList> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create boolean attribute
     *
     * Create a boolean attribute.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {boolean} array
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeBoolean>}
     */
    async createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/boolean'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
    /**
     * Update boolean attribute
     *
     * Update a boolean attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeBoolean>}
     */
    async updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.AttributeBoolean> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new NuvixException('Missing required parameter: "xdefault"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/boolean/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create datetime attribute
     *
     * Create a date time attribute according to the ISO 8601 standard.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeDatetime>}
     */
    async createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeDatetime> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/datetime'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
    /**
     * Update dateTime attribute
     *
     * Update a date time attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeDatetime>}
     */
    async updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeDatetime> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new NuvixException('Missing required parameter: "xdefault"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/datetime/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create email attribute
     *
     * Create an email attribute.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeEmail>}
     */
    async createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/email'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
    /**
     * Update email attribute
     *
     * Update an email attribute. Changing the `default` value will not update already existing documents.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeEmail>}
     */
    async updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEmail> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new NuvixException('Missing required parameter: "xdefault"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/email/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create enum attribute
     *
     * Create an enumeration attribute. The `elements` param acts as a white-list of accepted values for this attribute. 

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeEnum>}
     */
    async createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof elements === 'undefined') {
            throw new NuvixException('Missing required parameter: "elements"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/enum'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof elements !== 'undefined') {
            payload['elements'] = elements;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
    /**
     * Update enum attribute
     *
     * Update an enum attribute. Changing the `default` value will not update already existing documents.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeEnum>}
     */
    async updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEnum> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof elements === 'undefined') {
            throw new NuvixException('Missing required parameter: "elements"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new NuvixException('Missing required parameter: "xdefault"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/enum/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof elements !== 'undefined') {
            payload['elements'] = elements;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create float attribute
     *
     * Create a float attribute. Optionally, minimum and maximum values can be provided.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeFloat>}
     */
    async createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/float'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
    /**
     * Update float attribute
     *
     * Update a float attribute. Changing the `default` value will not update already existing documents.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeFloat>}
     */
    async updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: number, max: number, xdefault?: number, newKey?: string): Promise<Models.AttributeFloat> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        if (typeof min === 'undefined') {
            throw new NuvixException('Missing required parameter: "min"');
        }
        if (typeof max === 'undefined') {
            throw new NuvixException('Missing required parameter: "max"');
        }
        if (typeof xdefault === 'undefined') {
            throw new NuvixException('Missing required parameter: "xdefault"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/float/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create integer attribute
     *
     * Create an integer attribute. Optionally, minimum and maximum values can be provided.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeInteger>}
     */
    async createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeInteger> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/integer'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
    /**
     * Update integer attribute
     *
     * Update an integer attribute. Changing the `default` value will not update already existing documents.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeInteger>}
     */
    async updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: number, max: number, xdefault?: number, newKey?: string): Promise<Models.AttributeInteger> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        if (typeof min === 'undefined') {
            throw new NuvixException('Missing required parameter: "min"');
        }
        if (typeof max === 'undefined') {
            throw new NuvixException('Missing required parameter: "max"');
        }
        if (typeof xdefault === 'undefined') {
            throw new NuvixException('Missing required parameter: "xdefault"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/integer/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create IP address attribute
     *
     * Create IP address attribute.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeIp>}
     */
    async createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/ip'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
    /**
     * Update IP address attribute
     *
     * Update an ip attribute. Changing the `default` value will not update already existing documents.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeIp>}
     */
    async updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeIp> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new NuvixException('Missing required parameter: "xdefault"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/ip/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create relationship attribute
     *
     * Create relationship attribute. [Learn more about relationship attributes](https://nuvix.io/docs/schemas-relationships#relationship-attributes).

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} relatedCollectionId
     * @param {RelationshipType} type
     * @param {boolean} twoWay
     * @param {string} key
     * @param {string} twoWayKey
     * @param {RelationMutate} onDelete
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeRelationship>}
     */
    async createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.AttributeRelationship> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof relatedCollectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "relatedCollectionId"');
        }
        if (typeof type === 'undefined') {
            throw new NuvixException('Missing required parameter: "type"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/relationship'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof relatedCollectionId !== 'undefined') {
            payload['relatedCollectionId'] = relatedCollectionId;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof twoWay !== 'undefined') {
            payload['twoWay'] = twoWay;
        }
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof twoWayKey !== 'undefined') {
            payload['twoWayKey'] = twoWayKey;
        }
        if (typeof onDelete !== 'undefined') {
            payload['onDelete'] = onDelete;
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
    /**
     * Create string attribute
     *
     * Create a string attribute.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {number} size
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @param {boolean} encrypt
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeString>}
     */
    async createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeString> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof size === 'undefined') {
            throw new NuvixException('Missing required parameter: "size"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/string'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof size !== 'undefined') {
            payload['size'] = size;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        if (typeof encrypt !== 'undefined') {
            payload['encrypt'] = encrypt;
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
    /**
     * Update string attribute
     *
     * Update a string attribute. Changing the `default` value will not update already existing documents.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {number} size
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeString>}
     */
    async updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.AttributeString> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new NuvixException('Missing required parameter: "xdefault"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/string/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof size !== 'undefined') {
            payload['size'] = size;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create URL attribute
     *
     * Create a URL attribute.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeUrl>}
     */
    async createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/url'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
    /**
     * Update URL attribute
     *
     * Update an url attribute. Changing the `default` value will not update already existing documents.

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeUrl>}
     */
    async updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeUrl> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new NuvixException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new NuvixException('Missing required parameter: "xdefault"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/url/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get attribute
     *
     * Get attribute by ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async getAttribute(databaseId: string, collectionId: string, key: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete attribute
     *
     * Deletes an attribute.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async deleteAttribute(databaseId: string, collectionId: string, key: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Update relationship attribute
     *
     * Update relationship attribute. [Learn more about relationship attributes](https://nuvix.io/docs/schemas-relationships#relationship-attributes).

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {RelationMutate} onDelete
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeRelationship>}
     */
    async updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.AttributeRelationship> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/attributes/{key}/relationship'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof onDelete !== 'undefined') {
            payload['onDelete'] = onDelete;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List documents
     *
     * Get a list of all the user&#039;s documents in a given collection. You can use the query params to filter your results.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    async listDocuments<Document extends Models.Document>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create document
     *
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://nuvix.io/docs/server/schemas#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Omit<Document, keyof Models.Document>} data
     * @param {string[]} permissions
     * @throws {NuvixException}
     * @returns {Promise<Document>}
     */
    async createDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data: Omit<Document, keyof Models.Document>, permissions?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new NuvixException('Missing required parameter: "documentId"');
        }
        if (typeof data === 'undefined') {
            throw new NuvixException('Missing required parameter: "data"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof documentId !== 'undefined') {
            payload['documentId'] = documentId;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
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
    /**
     * Get document
     *
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Document>}
     */
    async getDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new NuvixException('Missing required parameter: "documentId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Update document
     *
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Partial<Omit<Document, keyof Models.Document>>} data
     * @param {string[]} permissions
     * @throws {NuvixException}
     * @returns {Promise<Document>}
     */
    async updateDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data?: Partial<Omit<Document, keyof Models.Document>>, permissions?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new NuvixException('Missing required parameter: "documentId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        const payload: Payload = {};
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete document
     *
     * Delete a document by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new NuvixException('Missing required parameter: "documentId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List document logs
     *
     * Get the document activity logs list by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.LogList>}
     */
    async listDocumentLogs(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Models.LogList> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new NuvixException('Missing required parameter: "documentId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/documents/{documentId}/logs'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List indexes
     *
     * List indexes in the collection.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.IndexList>}
     */
    async listIndexes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.IndexList> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create index
     *
     * Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
Attributes can be `key`, `fulltext`, and `unique`.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {IndexType} type
     * @param {string[]} attributes
     * @param {string[]} orders
     * @throws {NuvixException}
     * @returns {Promise<Models.Index>}
     */
    async createIndex(databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[]): Promise<Models.Index> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        if (typeof type === 'undefined') {
            throw new NuvixException('Missing required parameter: "type"');
        }
        if (typeof attributes === 'undefined') {
            throw new NuvixException('Missing required parameter: "attributes"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof attributes !== 'undefined') {
            payload['attributes'] = attributes;
        }
        if (typeof orders !== 'undefined') {
            payload['orders'] = orders;
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
    /**
     * Get index
     *
     * Get index by ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {NuvixException}
     * @returns {Promise<Models.Index>}
     */
    async getIndex(databaseId: string, collectionId: string, key: string): Promise<Models.Index> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete index
     *
     * Delete an index.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async deleteIndex(databaseId: string, collectionId: string, key: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new NuvixException('Missing required parameter: "key"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List collection logs
     *
     * Get the collection activity logs list by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.LogList>}
     */
    async listCollectionLogs(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.LogList> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/logs'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get collection usage stats
     *
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {DatabaseUsageRange} range
     * @throws {NuvixException}
     * @returns {Promise<Models.UsageCollection>}
     */
    async getCollectionUsage(databaseId: string, collectionId: string, range?: DatabaseUsageRange): Promise<Models.UsageCollection> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new NuvixException('Missing required parameter: "collectionId"');
        }
        const apiPath = '/schemas/{databaseId}/collections/{collectionId}/usage'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof range !== 'undefined') {
            payload['range'] = range;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List database logs
     *
     * Get the database activity logs list by its unique ID.
     *
     * @param {string} databaseId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.LogList>}
     */
    async listLogs(databaseId: string, queries?: string[]): Promise<Models.LogList> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        const apiPath = '/schemas/{databaseId}/logs'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get database usage stats
     *
     *
     * @param {string} databaseId
     * @param {DatabaseUsageRange} range
     * @throws {NuvixException}
     * @returns {Promise<Models.UsageDatabase>}
     */
    async getDatabaseUsage(databaseId: string, range?: DatabaseUsageRange): Promise<Models.UsageDatabase> {
        if (typeof databaseId === 'undefined') {
            throw new NuvixException('Missing required parameter: "databaseId"');
        }
        const apiPath = '/schemas/{databaseId}/usage'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof range !== 'undefined') {
            payload['range'] = range;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
}
