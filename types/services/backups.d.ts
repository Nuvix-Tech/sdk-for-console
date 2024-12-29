import { Client } from '../client';
import type { Models } from '../models';
export declare class Backups {
    client: Client;
    constructor(client: Client);
    /**
     * List archives
     *
     *
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.BackupArchiveList>}
     */
    listArchives(queries?: string[]): Promise<Models.BackupArchiveList>;
    /**
     * Create archive
     *
     *
     * @param {string[]} services
     * @param {string} resourceId
     * @throws {NuvixException}
     * @returns {Promise<Models.BackupArchive>}
     */
    createArchive(services: string[], resourceId?: string): Promise<Models.BackupArchive>;
    /**
     * Get backup archive
     *
     *
     * @param {string} archiveId
     * @throws {NuvixException}
     * @returns {Promise<Models.BackupArchive>}
     */
    getArchive(archiveId: string): Promise<Models.BackupArchive>;
    /**
     * Delete archive
     *
     *
     * @param {string} archiveId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    deleteArchive(archiveId: string): Promise<{}>;
    /**
     * List backup policies
     *
     *
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.BackupPolicyList>}
     */
    listPolicies(queries?: string[]): Promise<Models.BackupPolicyList>;
    /**
     * Create backup policy
     *
     *
     * @param {string} policyId
     * @param {string[]} services
     * @param {number} retention
     * @param {string} schedule
     * @param {string} name
     * @param {string} resourceId
     * @param {boolean} enabled
     * @throws {NuvixException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    createPolicy(policyId: string, services: string[], retention: number, schedule: string, name?: string, resourceId?: string, enabled?: boolean): Promise<Models.BackupPolicy>;
    /**
     * Get backup policy
     *
     *
     * @param {string} policyId
     * @throws {NuvixException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    getPolicy(policyId: string): Promise<Models.BackupPolicy>;
    /**
     * Update backup policy
     *
     *
     * @param {string} policyId
     * @param {string} name
     * @param {number} retention
     * @param {string} schedule
     * @param {boolean} enabled
     * @throws {NuvixException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    updatePolicy(policyId: string, name?: string, retention?: number, schedule?: string, enabled?: boolean): Promise<Models.BackupPolicy>;
    /**
     * Delete backup policy
     *
     *
     * @param {string} policyId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    deletePolicy(policyId: string): Promise<{}>;
    /**
     * Create restoration
     *
     *
     * @param {string} archiveId
     * @param {string[]} services
     * @param {string} newResourceId
     * @param {string} newResourceName
     * @throws {NuvixException}
     * @returns {Promise<Models.BackupRestoration>}
     */
    createRestoration(archiveId: string, services: string[], newResourceId?: string, newResourceName?: string): Promise<Models.BackupRestoration>;
    /**
     * List restorations
     *
     *
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.BackupRestorationList>}
     */
    listRestorations(queries?: string[]): Promise<Models.BackupRestorationList>;
    /**
     * Get backup restoration
     *
     *
     * @param {string} restorationId
     * @throws {NuvixException}
     * @returns {Promise<Models.BackupArchive>}
     */
    getRestoration(restorationId: string): Promise<Models.BackupArchive>;
}
