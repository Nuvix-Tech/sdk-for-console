import { Client } from '../client';
import type { Models } from '../models';
export declare class Migrations {
    client: Client;
    constructor(client: Client);
    /**
     * List migrations
     *
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {NuvixException}
     * @returns {Promise<Models.MigrationList>}
     */
    list(queries?: string[], search?: string): Promise<Models.MigrationList>;
    /**
     * Migrate Nuvix data
     *
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} projectId
     * @param {string} apiKey
     * @throws {NuvixException}
     * @returns {Promise<Models.Migration>}
     */
    createNuvixMigration(resources: string[], endpoint: string, projectId: string, apiKey: string): Promise<Models.Migration>;
    /**
     * Generate a report on Nuvix data
     *
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} projectID
     * @param {string} key
     * @throws {NuvixException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getNuvixReport(resources: string[], endpoint: string, projectID: string, key: string): Promise<Models.MigrationReport>;
    /**
     * Migrate Firebase data (Service Account)
     *
     *
     * @param {string[]} resources
     * @param {string} serviceAccount
     * @throws {NuvixException}
     * @returns {Promise<Models.Migration>}
     */
    createFirebaseMigration(resources: string[], serviceAccount: string): Promise<Models.Migration>;
    /**
     * Revoke Nuvix&#039;s authorization to access Firebase projects
     *
     *
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    deleteFirebaseAuth(): Promise<{}>;
    /**
     * Migrate Firebase data (OAuth)
     *
     *
     * @param {string[]} resources
     * @param {string} projectId
     * @throws {NuvixException}
     * @returns {Promise<Models.Migration>}
     */
    createFirebaseOAuthMigration(resources: string[], projectId: string): Promise<Models.Migration>;
    /**
     * List Firebase projects
     *
     *
     * @throws {NuvixException}
     * @returns {Promise<Models.FirebaseProjectList>}
     */
    listFirebaseProjects(): Promise<Models.FirebaseProjectList>;
    /**
     * Generate a report on Firebase data
     *
     *
     * @param {string[]} resources
     * @param {string} serviceAccount
     * @throws {NuvixException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getFirebaseReport(resources: string[], serviceAccount: string): Promise<Models.MigrationReport>;
    /**
     * Generate a report on Firebase data using OAuth
     *
     *
     * @param {string[]} resources
     * @param {string} projectId
     * @throws {NuvixException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getFirebaseReportOAuth(resources: string[], projectId: string): Promise<Models.MigrationReport>;
    /**
     * Migrate NHost data
     *
     *
     * @param {string[]} resources
     * @param {string} subdomain
     * @param {string} region
     * @param {string} adminSecret
     * @param {string} database
     * @param {string} username
     * @param {string} password
     * @param {number} port
     * @throws {NuvixException}
     * @returns {Promise<Models.Migration>}
     */
    createNHostMigration(resources: string[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.Migration>;
    /**
     * Generate a report on NHost Data
     *
     *
     * @param {string[]} resources
     * @param {string} subdomain
     * @param {string} region
     * @param {string} adminSecret
     * @param {string} database
     * @param {string} username
     * @param {string} password
     * @param {number} port
     * @throws {NuvixException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getNHostReport(resources: string[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.MigrationReport>;
    /**
     * Migrate Supabase data
     *
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} apiKey
     * @param {string} databaseHost
     * @param {string} username
     * @param {string} password
     * @param {number} port
     * @throws {NuvixException}
     * @returns {Promise<Models.Migration>}
     */
    createSupabaseMigration(resources: string[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.Migration>;
    /**
     * Generate a report on Supabase Data
     *
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} apiKey
     * @param {string} databaseHost
     * @param {string} username
     * @param {string} password
     * @param {number} port
     * @throws {NuvixException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getSupabaseReport(resources: string[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.MigrationReport>;
    /**
     * Get migration
     *
     *
     * @param {string} migrationId
     * @throws {NuvixException}
     * @returns {Promise<Models.Migration>}
     */
    get(migrationId: string): Promise<Models.Migration>;
    /**
     * Retry migration
     *
     *
     * @param {string} migrationId
     * @throws {NuvixException}
     * @returns {Promise<Models.Migration>}
     */
    retry(migrationId: string): Promise<Models.Migration>;
    /**
     * Delete migration
     *
     *
     * @param {string} migrationId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    delete(migrationId: string): Promise<{}>;
}
