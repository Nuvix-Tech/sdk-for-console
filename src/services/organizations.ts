import { Service } from '../service';
import { NuvixException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { BillingPlan } from '../enums/billing-plan';

export class Organizations {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List Orgnizations
     *
     * Get a list of all the Organizations in which the current user is a member. You can use the parameters to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {NuvixException}
     * @returns {Promise<Models.OrganizationList<Preferences>>}
     */
    async list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.OrganizationList<Preferences>> {
        const apiPath = '/organizations';
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
     * Create Organization
     *
     * Create a new Organization. The user who creates the Organization will automatically be assigned as the owner of the Organization. Only the users with the owner role can invite new members, add new owners and delete or update the Organization.
     *
     * @param {string} organizationId
     * @param {string} name
     * @param {BillingPlan} billingPlan
     * @param {string} paymentMethodId
     * @param {string} billingAddressId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async create<Preferences extends Models.Preferences>(organizationId: string, name: string, billingPlan: BillingPlan, paymentMethodId?: string, billingAddressId?: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof name === 'undefined') {
            throw new NuvixException('Missing required parameter: "name"');
        }
        if (typeof billingPlan === 'undefined') {
            throw new NuvixException('Missing required parameter: "billingPlan"');
        }
        const apiPath = '/organizations';
        const payload: Payload = {};
        if (typeof organizationId !== 'undefined') {
            payload['organizationId'] = organizationId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof billingPlan !== 'undefined') {
            payload['billingPlan'] = billingPlan;
        }
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        if (typeof billingAddressId !== 'undefined') {
            payload['billingAddressId'] = billingAddressId;
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
 * Get Organization
 *
 * Get a Organization by its ID. All Organization members have read access for this resource.
 *
 * @param {string} organizationId
 * @throws {NuvixException}
 * @returns {Promise<Models.Organization<Preferences>>}
 */
    async get<Preferences extends Models.Preferences>(organizationId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}'.replace('{organizationId}', organizationId);
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
     * Delete Organization
     *
     * Delete a Organization using its ID. Only Organization members with the owner role can delete the Organization.
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async delete(organizationId: string): Promise<{}> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}'.replace('{organizationId}', organizationId);
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
     * List aggregations
     *
     *
     * @param {string} organizationId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.AggregationTeamList>}
     */
    async listAggregations(organizationId: string, queries?: string[]): Promise<Models.AggregationTeamList> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/aggregations'.replace('{organizationId}', organizationId);
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
     * Get invoice
     *
     *
     * @param {string} organizationId
     * @param {string} aggregationId
     * @throws {NuvixException}
     * @returns {Promise<Models.AggregationTeam>}
     */
    async getAggregation(organizationId: string, aggregationId: string): Promise<Models.AggregationTeam> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof aggregationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "aggregationId"');
        }
        const apiPath = '/organizations/{organizationId}/aggregations/{aggregationId}'.replace('{organizationId}', organizationId).replace('{aggregationId}', aggregationId);
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
     * Set Organization&#039;s billing address
     *
     *
     * @param {string} organizationId
     * @param {string} billingAddressId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async setBillingAddress<Preferences extends Models.Preferences>(organizationId: string, billingAddressId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof billingAddressId === 'undefined') {
            throw new NuvixException('Missing required parameter: "billingAddressId"');
        }
        const apiPath = '/organizations/{organizationId}/billing-address'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof billingAddressId !== 'undefined') {
            payload['billingAddressId'] = billingAddressId;
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
     * Delete Organization&#039;s billing address
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async deleteBillingAddress(organizationId: string): Promise<{}> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/billing-address'.replace('{organizationId}', organizationId);
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
     * Get billing address
     *
     *
     * @param {string} organizationId
     * @param {string} billingAddressId
     * @throws {NuvixException}
     * @returns {Promise<Models.BillingAddress>}
     */
    async getBillingAddress(organizationId: string, billingAddressId: string): Promise<Models.BillingAddress> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof billingAddressId === 'undefined') {
            throw new NuvixException('Missing required parameter: "billingAddressId"');
        }
        const apiPath = '/organizations/{organizationId}/billing-addresses/{billingAddressId}'.replace('{organizationId}', organizationId).replace('{billingAddressId}', billingAddressId);
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
     * Set Organization&#039;s billing email
     *
     *
     * @param {string} organizationId
     * @param {string} billingEmail
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async setBillingEmail<Preferences extends Models.Preferences>(organizationId: string, billingEmail: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof billingEmail === 'undefined') {
            throw new NuvixException('Missing required parameter: "billingEmail"');
        }
        const apiPath = '/organizations/{organizationId}/billing-email'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof billingEmail !== 'undefined') {
            payload['billingEmail'] = billingEmail;
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
     * Update organization budget
     *
     *
     * @param {string} organizationId
     * @param {number} budget
     * @param {number[]} alerts
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async updateBudget<Preferences extends Models.Preferences>(organizationId: string, budget: number, alerts?: number[]): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof budget === 'undefined') {
            throw new NuvixException('Missing required parameter: "budget"');
        }
        const apiPath = '/organizations/{organizationId}/budget'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof budget !== 'undefined') {
            payload['budget'] = budget;
        }
        if (typeof alerts !== 'undefined') {
            payload['alerts'] = alerts;
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
     * List credits
     *
     *
     * @param {string} organizationId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.CreditList>}
     */
    async listCredits(organizationId: string, queries?: string[]): Promise<Models.CreditList> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/credits'.replace('{organizationId}', organizationId);
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
     * Add credits from coupon
     *
     *
     * @param {string} organizationId
     * @param {string} couponId
     * @throws {NuvixException}
     * @returns {Promise<Models.Credit>}
     */
    async addCredit(organizationId: string, couponId: string): Promise<Models.Credit> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof couponId === 'undefined') {
            throw new NuvixException('Missing required parameter: "couponId"');
        }
        const apiPath = '/organizations/{organizationId}/credits'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof couponId !== 'undefined') {
            payload['couponId'] = couponId;
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
     * Get credit details
     *
     *
     * @param {string} organizationId
     * @param {string} creditId
     * @throws {NuvixException}
     * @returns {Promise<Models.Credit>}
     */
    async getCredit(organizationId: string, creditId: string): Promise<Models.Credit> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof creditId === 'undefined') {
            throw new NuvixException('Missing required parameter: "creditId"');
        }
        const apiPath = '/organizations/{organizationId}/credits/{creditId}'.replace('{organizationId}', organizationId).replace('{creditId}', creditId);
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
     * List invoices
     *
     *
     * @param {string} organizationId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.InvoiceList>}
     */
    async listInvoices(organizationId: string, queries?: string[]): Promise<Models.InvoiceList> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/invoices'.replace('{organizationId}', organizationId);
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
     * Get invoice
     *
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @throws {NuvixException}
     * @returns {Promise<Models.Invoice>}
     */
    async getInvoice(organizationId: string, invoiceId: string): Promise<Models.Invoice> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new NuvixException('Missing required parameter: "invoiceId"');
        }
        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
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
     * View invoice in PDF
     *
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @throws {NuvixException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    async getInvoiceDownload(organizationId: string, invoiceId: string): Promise<Models.PaymentMethod> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new NuvixException('Missing required parameter: "invoiceId"');
        }
        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}/download'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
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
     * Initiate payment for failed invoice to pay live from console
     *
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @param {string} paymentMethodId
     * @throws {NuvixException}
     * @returns {Promise<Models.Invoice>}
     */
    async createInvoicePayment(organizationId: string, invoiceId: string, paymentMethodId: string): Promise<Models.Invoice> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new NuvixException('Missing required parameter: "invoiceId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new NuvixException('Missing required parameter: "paymentMethodId"');
        }
        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}/payments'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
        const payload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
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
     * View invoice in PDF
     *
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @throws {NuvixException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    async getInvoiceView(organizationId: string, invoiceId: string): Promise<Models.PaymentMethod> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new NuvixException('Missing required parameter: "invoiceId"');
        }
        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}/view'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
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
     * Set Organization&#039;s payment method
     *
     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async setDefaultPaymentMethod<Preferences extends Models.Preferences>(organizationId: string, paymentMethodId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new NuvixException('Missing required parameter: "paymentMethodId"');
        }
        const apiPath = '/organizations/{organizationId}/payment-method'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
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
     * Delete Organization&#039;s default payment method
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async deleteDefaultPaymentMethod<Preferences extends Models.Preferences>(organizationId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/payment-method'.replace('{organizationId}', organizationId);
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
     * Set Organization&#039;s backup payment method
     *
     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async setBackupPaymentMethod<Preferences extends Models.Preferences>(organizationId: string, paymentMethodId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new NuvixException('Missing required parameter: "paymentMethodId"');
        }
        const apiPath = '/organizations/{organizationId}/payment-method/backup'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
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
     * Delete Organization&#039;s backup payment method
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async deleteBackupPaymentMethod<Preferences extends Models.Preferences>(organizationId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/payment-method/backup'.replace('{organizationId}', organizationId);
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
     * Get payment method
     *
     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {NuvixException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    async getPaymentMethod(organizationId: string, paymentMethodId: string): Promise<Models.PaymentMethod> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new NuvixException('Missing required parameter: "paymentMethodId"');
        }
        const apiPath = '/organizations/{organizationId}/payment-methods/{paymentMethodId}'.replace('{organizationId}', organizationId).replace('{paymentMethodId}', paymentMethodId);
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
     * Get organization billing plan details
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<Models.BillingPlan>}
     */
    async getPlan(organizationId: string): Promise<Models.BillingPlan> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/plan'.replace('{organizationId}', organizationId);
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
     * Update organization billing plan
     *
     *
     * @param {string} organizationId
     * @param {BillingPlan} billingPlan
     * @param {string} paymentMethodId
     * @param {string} billingAddressId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async updatePlan<Preferences extends Models.Preferences>(organizationId: string, billingPlan: BillingPlan, paymentMethodId?: string, billingAddressId?: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof billingPlan === 'undefined') {
            throw new NuvixException('Missing required parameter: "billingPlan"');
        }
        const apiPath = '/organizations/{organizationId}/plan'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof billingPlan !== 'undefined') {
            payload['billingPlan'] = billingPlan;
        }
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        if (typeof billingAddressId !== 'undefined') {
            payload['billingAddressId'] = billingAddressId;
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
     * Get Scopes
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<Models.Roles>}
     */
    async getScopes(organizationId: string): Promise<Models.Roles> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/roles'.replace('{organizationId}', organizationId);
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
     * Set Organization&#039;s tax Id
     *
     *
     * @param {string} organizationId
     * @param {string} taxId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async setBillingTaxId<Preferences extends Models.Preferences>(organizationId: string, taxId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof taxId === 'undefined') {
            throw new NuvixException('Missing required parameter: "taxId"');
        }
        const apiPath = '/organizations/{organizationId}/taxId'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof taxId !== 'undefined') {
            payload['taxId'] = taxId;
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
     * Get Organization&#039;s usage data
     *
     *
     * @param {string} organizationId
     * @param {string} startDate
     * @param {string} endDate
     * @throws {NuvixException}
     * @returns {Promise<Models.UsageOrganization>}
     */
    async getUsage(organizationId: string, startDate?: string, endDate?: string): Promise<Models.UsageOrganization> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/usage'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof startDate !== 'undefined') {
            payload['startDate'] = startDate;
        }
        if (typeof endDate !== 'undefined') {
            payload['endDate'] = endDate;
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

    // **
    /**
         * Update name
         *
         * Update the team&#039;s name by its unique ID.
         *
         * @param {string} organizationId
         * @param {string} name
         * @throws {NuvixException}
         * @returns {Promise<Models.Organization<Preferences>>}
         */
    async updateName<Preferences extends Models.Preferences>(organizationId: string, name: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof name === 'undefined') {
            throw new NuvixException('Missing required parameter: "name"');
        }
        const apiPath = '/organizations/{organizationId}'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
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
     * List team memberships
     *
     * Use this endpoint to list a team&#039;s members using the team&#039;s ID. All team members have read access to this endpoint. Hide sensitive attributes from the response by toggling membership privacy in the Console.
     *
     * @param {string} organizationId
     * @param {string[]} queries
     * @param {string} search
     * @throws {NuvixException}
     * @returns {Promise<Models.MembershipList>}
     */
    async listMemberships(organizationId: string, queries?: string[], search?: string): Promise<Models.MembershipList> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/memberships'.replace('{organizationId}', organizationId);
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
     * Create team membership
     *
     * Invite a new member to join your team. Provide an ID for existing users, or invite unregistered users using an email or phone number. If initiated from a Client SDK, Nuvix will send an email or sms with a link to join the team to the invited user, and an account will be created for them if one doesn&#039;t exist. If initiated from a Server SDK, the new member will be added automatically to the team.

You only need to provide one of a user ID, email, or phone number. Nuvix will prioritize accepting the user ID &gt; email &gt; phone number if you provide more than one of these parameters.

Use the `url` parameter to redirect the user from the invitation email to your app. After the user is redirected, use the [Update Team Membership Status](https://nuvix.io/docs/references/cloud/client-web/teams#updateMembershipStatus) endpoint to allow the user to accept the invitation to the team. 

Please note that to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) Nuvix will accept the only redirect URLs under the domains you have added as a platform on the Nuvix Console.

     *
     * @param {string} organizationId
     * @param {string[]} roles
     * @param {string} email
     * @param {string} userId
     * @param {string} phone
     * @param {string} url
     * @param {string} name
     * @throws {NuvixException}
     * @returns {Promise<Models.Membership>}
     */
    async createMembership(organizationId: string, roles: string[], email?: string, userId?: string, phone?: string, url?: string, name?: string): Promise<Models.Membership> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof roles === 'undefined') {
            throw new NuvixException('Missing required parameter: "roles"');
        }
        const apiPath = '/organizations/{organizationId}/memberships'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof phone !== 'undefined') {
            payload['phone'] = phone;
        }
        if (typeof roles !== 'undefined') {
            payload['roles'] = roles;
        }
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
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
     * Get team membership
     *
     * Get a team member by the membership unique id. All team members have read access for this resource. Hide sensitive attributes from the response by toggling membership privacy in the Console.
     *
     * @param {string} organizationId
     * @param {string} membershipId
     * @throws {NuvixException}
     * @returns {Promise<Models.Membership>}
     */
    async getMembership(organizationId: string, membershipId: string): Promise<Models.Membership> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof membershipId === 'undefined') {
            throw new NuvixException('Missing required parameter: "membershipId"');
        }
        const apiPath = '/organizations/{organizationId}/memberships/{membershipId}'.replace('{organizationId}', organizationId).replace('{membershipId}', membershipId);
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
     * Update membership
     *
     * Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about [roles and permissions](https://nuvix.io/docs/permissions).

     *
     * @param {string} organizationId
     * @param {string} membershipId
     * @param {string[]} roles
     * @throws {NuvixException}
     * @returns {Promise<Models.Membership>}
     */
    async updateMembership(organizationId: string, membershipId: string, roles: string[]): Promise<Models.Membership> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof membershipId === 'undefined') {
            throw new NuvixException('Missing required parameter: "membershipId"');
        }
        if (typeof roles === 'undefined') {
            throw new NuvixException('Missing required parameter: "roles"');
        }
        const apiPath = '/organizations/{organizationId}/memberships/{membershipId}'.replace('{organizationId}', organizationId).replace('{membershipId}', membershipId);
        const payload: Payload = {};
        if (typeof roles !== 'undefined') {
            payload['roles'] = roles;
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
     * Delete team membership
     *
     * This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.
     *
     * @param {string} organizationId
     * @param {string} membershipId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    async deleteMembership(organizationId: string, membershipId: string): Promise<{}> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof membershipId === 'undefined') {
            throw new NuvixException('Missing required parameter: "membershipId"');
        }
        const apiPath = '/organizations/{organizationId}/memberships/{membershipId}'.replace('{organizationId}', organizationId).replace('{membershipId}', membershipId);
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
     * Update team membership status
     *
     * Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.

If the request is successful, a session for the user is automatically created.

     *
     * @param {string} organizationId
     * @param {string} membershipId
     * @param {string} userId
     * @param {string} secret
     * @throws {NuvixException}
     * @returns {Promise<Models.Membership>}
     */
    async updateMembershipStatus(organizationId: string, membershipId: string, userId: string, secret: string): Promise<Models.Membership> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof membershipId === 'undefined') {
            throw new NuvixException('Missing required parameter: "membershipId"');
        }
        if (typeof userId === 'undefined') {
            throw new NuvixException('Missing required parameter: "userId"');
        }
        if (typeof secret === 'undefined') {
            throw new NuvixException('Missing required parameter: "secret"');
        }
        const apiPath = '/organizations/{organizationId}/memberships/{membershipId}/status'.replace('{organizationId}', organizationId).replace('{membershipId}', membershipId);
        const payload: Payload = {};
        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
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
      * Get team preferences
      *
      * Get the team&#039;s shared preferences by its unique ID. If a preference doesn&#039;t need to be shared by all team members, prefer storing them in [user preferences](https://nuvix.io/docs/references/cloud/client-web/account#getPrefs).
      *
      * @param {string} organizationId
      * @throws {NuvixException}
      * @returns {Promise<Preferences>}
      */
    async getPrefs<Preferences extends Models.Preferences>(organizationId: string): Promise<Preferences> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/prefs'.replace('{organizationId}', organizationId);
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
     * Update preferences
     *
     * Update the team&#039;s preferences by its unique ID. The object you pass is stored as is and replaces any previous value. The maximum allowed prefs size is 64kB and throws an error if exceeded.
     *
     * @param {string} organizationId
     * @param {object} prefs
     * @throws {NuvixException}
     * @returns {Promise<Preferences>}
     */
    async updatePrefs<Preferences extends Models.Preferences>(organizationId: string, prefs: object): Promise<Preferences> {
        if (typeof organizationId === 'undefined') {
            throw new NuvixException('Missing required parameter: "organizationId"');
        }
        if (typeof prefs === 'undefined') {
            throw new NuvixException('Missing required parameter: "prefs"');
        }
        const apiPath = '/organizations/{organizationId}/prefs'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof prefs !== 'undefined') {
            payload['prefs'] = prefs;
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
}
