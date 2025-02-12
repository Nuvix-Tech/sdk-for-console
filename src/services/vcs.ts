import { Service } from '../service';
import { NuvixException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

export class Vcs {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List repositories
     *
     *
     * @param {string} installationId
     * @param {string} search
     * @throws {NuvixException}
     * @returns {Promise<Models.ProviderRepositoryList>}
     */
    async listRepositories(installationId: string, search?: string): Promise<Models.ProviderRepositoryList> {
        if (typeof installationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "installationId"');
        }
        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories'.replace('{installationId}', installationId);
        const payload: Payload = {};
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
     * Create repository
     *
     *
     * @param {string} installationId
     * @param {string} name
     * @param {boolean} xprivate
     * @throws {NuvixException}
     * @returns {Promise<Models.ProviderRepository>}
     */
    async createRepository(installationId: string, name: string, xprivate: boolean): Promise<Models.ProviderRepository> {
        if (typeof installationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "installationId"');
        }
        if (typeof name === 'undefined') {
            throw new NuvixException('Missing required parameter: "name"');
        }
        if (typeof xprivate === 'undefined') {
            throw new NuvixException('Missing required parameter: "xprivate"');
        }
        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories'.replace('{installationId}', installationId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof xprivate !== 'undefined') {
            payload['private'] = xprivate;
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
     * Get repository
     *
     *
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @throws {NuvixException}
     * @returns {Promise<Models.ProviderRepository>}
     */
    async getRepository(installationId: string, providerRepositoryId: string): Promise<Models.ProviderRepository> {
        if (typeof installationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "installationId"');
        }
        if (typeof providerRepositoryId === 'undefined') {
            throw new NuvixException('Missing required parameter: "providerRepositoryId"');
        }
        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}'.replace('{installationId}', installationId).replace('{providerRepositoryId}', providerRepositoryId);
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
     * List repository branches
     *
     *
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @throws {NuvixException}
     * @returns {Promise<Models.BranchList>}
     */
    async listRepositoryBranches(installationId: string, providerRepositoryId: string): Promise<Models.BranchList> {
        if (typeof installationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "installationId"');
        }
        if (typeof providerRepositoryId === 'undefined') {
            throw new NuvixException('Missing required parameter: "providerRepositoryId"');
        }
        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}/branches'.replace('{installationId}', installationId).replace('{providerRepositoryId}', providerRepositoryId);
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
     * Get files and directories of a VCS repository
     *
     *
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerRootDirectory
     * @throws {NuvixException}
     * @returns {Promise<Models.VcsContentList>}
     */
    async getRepositoryContents(installationId: string, providerRepositoryId: string, providerRootDirectory?: string): Promise<Models.VcsContentList> {
        if (typeof installationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "installationId"');
        }
        if (typeof providerRepositoryId === 'undefined') {
            throw new NuvixException('Missing required parameter: "providerRepositoryId"');
        }
        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}/contents'.replace('{installationId}', installationId).replace('{providerRepositoryId}', providerRepositoryId);
        const payload: Payload = {};
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
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
     * Detect runtime settings from source code
     *
     *
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerRootDirectory
     * @throws {NuvixException}
     * @returns {Promise<Models.Detection>}
     */
    async createRepositoryDetection(installationId: string, providerRepositoryId: string, providerRootDirectory?: string): Promise<Models.Detection> {
        if (typeof installationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "installationId"');
        }
        if (typeof providerRepositoryId === 'undefined') {
            throw new NuvixException('Missing required parameter: "providerRepositoryId"');
        }
        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}/detection'.replace('{installationId}', installationId).replace('{providerRepositoryId}', providerRepositoryId);
        const payload: Payload = {};
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
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
     * Authorize external deployment
     *
     *
     * @param {string} installationId
     * @param {string} repositoryId
     * @param {string} providerPullRequestId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async updateExternalDeployments(installationId: string, repositoryId: string, providerPullRequestId: string): Promise<{}> {
        if (typeof installationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "installationId"');
        }
        if (typeof repositoryId === 'undefined') {
            throw new NuvixException('Missing required parameter: "repositoryId"');
        }
        if (typeof providerPullRequestId === 'undefined') {
            throw new NuvixException('Missing required parameter: "providerPullRequestId"');
        }
        const apiPath = '/vcs/github/installations/{installationId}/repositories/{repositoryId}'.replace('{installationId}', installationId).replace('{repositoryId}', repositoryId);
        const payload: Payload = {};
        if (typeof providerPullRequestId !== 'undefined') {
            payload['providerPullRequestId'] = providerPullRequestId;
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
     * List installations
     *
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {NuvixException}
     * @returns {Promise<Models.InstallationList>}
     */
    async listInstallations(queries?: string[], search?: string): Promise<Models.InstallationList> {
        const apiPath = '/vcs/installations';
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
     * Get installation
     *
     *
     * @param {string} installationId
     * @throws {NuvixException}
     * @returns {Promise<Models.Installation>}
     */
    async getInstallation(installationId: string): Promise<Models.Installation> {
        if (typeof installationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "installationId"');
        }
        const apiPath = '/vcs/installations/{installationId}'.replace('{installationId}', installationId);
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
     * Delete installation
     *
     *
     * @param {string} installationId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async deleteInstallation(installationId: string): Promise<{}> {
        if (typeof installationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "installationId"');
        }
        const apiPath = '/vcs/installations/{installationId}'.replace('{installationId}', installationId);
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
}
