import { Client } from '../client';
import type { Models } from '../models';
import { DatabaseUsageRange } from '../enums/database-usage-range';
import { RelationshipType } from '../enums/relationship-type';
import { RelationMutate } from '../enums/relation-mutate';
import { IndexType } from '../enums/index-type';
export declare class Databases {
    client: Client;
    constructor(client: Client);
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
    list(queries?: string[], search?: string): Promise<Models.DatabaseList>;
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
    create(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database>;
    /**
     * Get databases usage stats
     *
     *
     * @param {DatabaseUsageRange} range
     * @throws {NuvixException}
     * @returns {Promise<Models.UsageDatabases>}
     */
    getUsage(range?: DatabaseUsageRange): Promise<Models.UsageDatabases>;
    /**
     * Get database
     *
     * Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.
     *
     * @param {string} databaseId
     * @throws {NuvixException}
     * @returns {Promise<Models.Database>}
     */
    get(databaseId: string): Promise<Models.Database>;
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
    update(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database>;
    /**
     * Delete database
     *
     * Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.
     *
     * @param {string} databaseId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    delete(databaseId: string): Promise<{}>;
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
    listCollections(databaseId: string, queries?: string[], search?: string): Promise<Models.CollectionList>;
    /**
     * Create collection
     *
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://nuvix.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
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
    createCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
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
    getCollection(databaseId: string, collectionId: string): Promise<Models.Collection>;
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
    updateCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
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
    deleteCollection(databaseId: string, collectionId: string): Promise<{}>;
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
    listAttributes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.AttributeList>;
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
    createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean>;
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
    updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.AttributeBoolean>;
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
    createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeDatetime>;
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
    updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeDatetime>;
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
    createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail>;
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
    updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEmail>;
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
    createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum>;
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
    updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEnum>;
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
    createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat>;
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
    updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: number, max: number, xdefault?: number, newKey?: string): Promise<Models.AttributeFloat>;
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
    createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeInteger>;
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
    updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: number, max: number, xdefault?: number, newKey?: string): Promise<Models.AttributeInteger>;
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
    createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp>;
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
    updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeIp>;
    /**
     * Create relationship attribute
     *
     * Create relationship attribute. [Learn more about relationship attributes](https://nuvix.io/docs/databases-relationships#relationship-attributes).

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
    createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.AttributeRelationship>;
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
    createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeString>;
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
    updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.AttributeString>;
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
    createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl>;
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
    updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeUrl>;
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
    getAttribute(databaseId: string, collectionId: string, key: string): Promise<{}>;
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
    deleteAttribute(databaseId: string, collectionId: string, key: string): Promise<{}>;
    /**
     * Update relationship attribute
     *
     * Update relationship attribute. [Learn more about relationship attributes](https://nuvix.io/docs/databases-relationships#relationship-attributes).

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {RelationMutate} onDelete
     * @param {string} newKey
     * @throws {NuvixException}
     * @returns {Promise<Models.AttributeRelationship>}
     */
    updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.AttributeRelationship>;
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
    listDocuments<Document extends Models.Document>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>>;
    /**
     * Create document
     *
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://nuvix.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Omit<Document, keyof Models.Document>} data
     * @param {string[]} permissions
     * @throws {NuvixException}
     * @returns {Promise<Document>}
     */
    createDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data: Omit<Document, keyof Models.Document>, permissions?: string[]): Promise<Document>;
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
    getDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Document>;
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
    updateDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data?: Partial<Omit<Document, keyof Models.Document>>, permissions?: string[]): Promise<Document>;
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
    deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<{}>;
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
    listDocumentLogs(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Models.LogList>;
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
    listIndexes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.IndexList>;
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
    createIndex(databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[]): Promise<Models.Index>;
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
    getIndex(databaseId: string, collectionId: string, key: string): Promise<Models.Index>;
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
    deleteIndex(databaseId: string, collectionId: string, key: string): Promise<{}>;
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
    listCollectionLogs(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.LogList>;
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
    getCollectionUsage(databaseId: string, collectionId: string, range?: DatabaseUsageRange): Promise<Models.UsageCollection>;
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
    listLogs(databaseId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * Get database usage stats
     *
     *
     * @param {string} databaseId
     * @param {DatabaseUsageRange} range
     * @throws {NuvixException}
     * @returns {Promise<Models.UsageDatabase>}
     */
    getDatabaseUsage(databaseId: string, range?: DatabaseUsageRange): Promise<Models.UsageDatabase>;
}
