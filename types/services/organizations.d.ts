import { Client } from '../client';
import type { Models } from '../models';
import { BillingPlan } from '../enums/billing-plan';
export declare class Organizations {
    client: Client;
    constructor(client: Client);
    /**
     * List Orgnizations
     *
     * Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {NuvixException}
     * @returns {Promise<Models.OrganizationList<Preferences>>}
     */
    list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.OrganizationList<Preferences>>;
    /**
     * Create Organization
     *
     * Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.
     *
     * @param {string} organizationId
     * @param {string} name
     * @param {BillingPlan} billingPlan
     * @param {string} paymentMethodId
     * @param {string} billingAddressId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    create<Preferences extends Models.Preferences>(organizationId: string, name: string, billingPlan: BillingPlan, paymentMethodId?: string, billingAddressId?: string): Promise<Models.Organization<Preferences>>;
    /**
     * Delete team
     *
     * Delete a team using its ID. Only team members with the owner role can delete the team.
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    delete(organizationId: string): Promise<{}>;
    /**
     * List aggregations
     *
     *
     * @param {string} organizationId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.AggregationTeamList>}
     */
    listAggregations(organizationId: string, queries?: string[]): Promise<Models.AggregationTeamList>;
    /**
     * Get invoice
     *
     *
     * @param {string} organizationId
     * @param {string} aggregationId
     * @throws {NuvixException}
     * @returns {Promise<Models.AggregationTeam>}
     */
    getAggregation(organizationId: string, aggregationId: string): Promise<Models.AggregationTeam>;
    /**
     * Set team&#039;s billing address
     *
     *
     * @param {string} organizationId
     * @param {string} billingAddressId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingAddress<Preferences extends Models.Preferences>(organizationId: string, billingAddressId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Delete team&#039;s billing address
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    deleteBillingAddress(organizationId: string): Promise<{}>;
    /**
     * Get billing address
     *
     *
     * @param {string} organizationId
     * @param {string} billingAddressId
     * @throws {NuvixException}
     * @returns {Promise<Models.BillingAddress>}
     */
    getBillingAddress(organizationId: string, billingAddressId: string): Promise<Models.BillingAddress>;
    /**
     * Set team&#039;s billing email
     *
     *
     * @param {string} organizationId
     * @param {string} billingEmail
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingEmail<Preferences extends Models.Preferences>(organizationId: string, billingEmail: string): Promise<Models.Organization<Preferences>>;
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
    updateBudget<Preferences extends Models.Preferences>(organizationId: string, budget: number, alerts?: number[]): Promise<Models.Organization<Preferences>>;
    /**
     * List credits
     *
     *
     * @param {string} organizationId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.CreditList>}
     */
    listCredits(organizationId: string, queries?: string[]): Promise<Models.CreditList>;
    /**
     * Add credits from coupon
     *
     *
     * @param {string} organizationId
     * @param {string} couponId
     * @throws {NuvixException}
     * @returns {Promise<Models.Credit>}
     */
    addCredit(organizationId: string, couponId: string): Promise<Models.Credit>;
    /**
     * Get credit details
     *
     *
     * @param {string} organizationId
     * @param {string} creditId
     * @throws {NuvixException}
     * @returns {Promise<Models.Credit>}
     */
    getCredit(organizationId: string, creditId: string): Promise<Models.Credit>;
    /**
     * List invoices
     *
     *
     * @param {string} organizationId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.InvoiceList>}
     */
    listInvoices(organizationId: string, queries?: string[]): Promise<Models.InvoiceList>;
    /**
     * Get invoice
     *
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @throws {NuvixException}
     * @returns {Promise<Models.Invoice>}
     */
    getInvoice(organizationId: string, invoiceId: string): Promise<Models.Invoice>;
    /**
     * View invoice in PDF
     *
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @throws {NuvixException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    getInvoiceDownload(organizationId: string, invoiceId: string): Promise<Models.PaymentMethod>;
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
    createInvoicePayment(organizationId: string, invoiceId: string, paymentMethodId: string): Promise<Models.Invoice>;
    /**
     * View invoice in PDF
     *
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @throws {NuvixException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    getInvoiceView(organizationId: string, invoiceId: string): Promise<Models.PaymentMethod>;
    /**
     * Set team&#039;s payment method
     *
     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setDefaultPaymentMethod<Preferences extends Models.Preferences>(organizationId: string, paymentMethodId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Delete team&#039;s default payment method
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    deleteDefaultPaymentMethod<Preferences extends Models.Preferences>(organizationId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Set team&#039;s backup payment method
     *
     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBackupPaymentMethod<Preferences extends Models.Preferences>(organizationId: string, paymentMethodId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Delete team&#039;s backup payment method
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    deleteBackupPaymentMethod<Preferences extends Models.Preferences>(organizationId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Get payment method
     *
     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {NuvixException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    getPaymentMethod(organizationId: string, paymentMethodId: string): Promise<Models.PaymentMethod>;
    /**
     * Get organization billing plan details
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<Models.BillingPlan>}
     */
    getPlan(organizationId: string): Promise<Models.BillingPlan>;
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
    updatePlan<Preferences extends Models.Preferences>(organizationId: string, billingPlan: BillingPlan, paymentMethodId?: string, billingAddressId?: string): Promise<Models.Organization<Preferences>>;
    /**
     * Get Scopes
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<Models.Roles>}
     */
    getScopes(organizationId: string): Promise<Models.Roles>;
    /**
     * Set team&#039;s tax Id
     *
     *
     * @param {string} organizationId
     * @param {string} taxId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingTaxId<Preferences extends Models.Preferences>(organizationId: string, taxId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Get team&#039;s usage data
     *
     *
     * @param {string} organizationId
     * @param {string} startDate
     * @param {string} endDate
     * @throws {NuvixException}
     * @returns {Promise<Models.UsageOrganization>}
     */
    getUsage(organizationId: string, startDate?: string, endDate?: string): Promise<Models.UsageOrganization>;
}
