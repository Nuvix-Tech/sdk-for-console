import { Client } from '../client';
import type { Models } from '../models';
import { BillingPlan } from '../enums/billing-plan';
export declare class Organizations {
    client: Client;
    constructor(client: Client);
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
    list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.OrganizationList<Preferences>>;
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
    create<Preferences extends Models.Preferences>(organizationId: string, name: string, billingPlan: BillingPlan, paymentMethodId?: string, billingAddressId?: string): Promise<Models.Organization<Preferences>>;
    /**
 * Get Organization
 *
 * Get a Organization by its ID. All Organization members have read access for this resource.
 *
 * @param {string} organizationId
 * @throws {NuvixException}
 * @returns {Promise<Models.Organization<Preferences>>}
 */
    get<Preferences extends Models.Preferences>(organizationId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Delete Organization
     *
     * Delete a Organization using its ID. Only Organization members with the owner role can delete the Organization.
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
     * Set Organization&#039;s billing address
     *
     *
     * @param {string} organizationId
     * @param {string} billingAddressId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingAddress<Preferences extends Models.Preferences>(organizationId: string, billingAddressId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Delete Organization&#039;s billing address
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
     * Set Organization&#039;s billing email
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
     * Set Organization&#039;s payment method
     *
     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setDefaultPaymentMethod<Preferences extends Models.Preferences>(organizationId: string, paymentMethodId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Delete Organization&#039;s default payment method
     *
     *
     * @param {string} organizationId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    deleteDefaultPaymentMethod<Preferences extends Models.Preferences>(organizationId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Set Organization&#039;s backup payment method
     *
     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBackupPaymentMethod<Preferences extends Models.Preferences>(organizationId: string, paymentMethodId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Delete Organization&#039;s backup payment method
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
     * Set Organization&#039;s tax Id
     *
     *
     * @param {string} organizationId
     * @param {string} taxId
     * @throws {NuvixException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingTaxId<Preferences extends Models.Preferences>(organizationId: string, taxId: string): Promise<Models.Organization<Preferences>>;
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
    getUsage(organizationId: string, startDate?: string, endDate?: string): Promise<Models.UsageOrganization>;
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
    updateName<Preferences extends Models.Preferences>(organizationId: string, name: string): Promise<Models.Organization<Preferences>>;
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
    listMemberships(organizationId: string, queries?: string[], search?: string): Promise<Models.MembershipList>;
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
    createMembership(organizationId: string, roles: string[], email?: string, userId?: string, phone?: string, url?: string, name?: string): Promise<Models.Membership>;
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
    getMembership(organizationId: string, membershipId: string): Promise<Models.Membership>;
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
    updateMembership(organizationId: string, membershipId: string, roles: string[]): Promise<Models.Membership>;
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
    deleteMembership(organizationId: string, membershipId: string): Promise<{}>;
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
    updateMembershipStatus(organizationId: string, membershipId: string, userId: string, secret: string): Promise<Models.Membership>;
}
