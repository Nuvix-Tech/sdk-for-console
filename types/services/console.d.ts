import { Client } from '../client';
import type { Models } from '../models';
export declare class Console {
    client: Client;
    constructor(client: Client);
    /**
     * Get campaign details
     *
     *
     * @param {string} campaignId
     * @throws {NuvixException}
     * @returns {Promise<Models.Campaign>}
     */
    getCampaign(campaignId: string): Promise<Models.Campaign>;
    /**
     * Get coupon details
     *
     *
     * @param {string} couponId
     * @throws {NuvixException}
     * @returns {Promise<Models.Coupon>}
     */
    getCoupon(couponId: string): Promise<Models.Coupon>;
    /**
     * Get plans
     *
     *
     * @throws {NuvixException}
     * @returns {Promise<Models.BillingPlanList>}
     */
    plans(): Promise<Models.BillingPlanList>;
    /**
     * Get Regions
     *
     *
     * @throws {NuvixException}
     * @returns {Promise<Models.ConsoleRegionList>}
     */
    regions(): Promise<Models.ConsoleRegionList>;
    /**
     * Create source
     *
     *
     * @param {string} ref
     * @param {string} referrer
     * @param {string} utmSource
     * @param {string} utmCampaign
     * @param {string} utmMedium
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    createSource(ref?: string, referrer?: string, utmSource?: string, utmCampaign?: string, utmMedium?: string): Promise<{}>;
    /**
     * Get variables
     *
     * Get all Environment Variables that are relevant for the console.
     *
     * @throws {NuvixException}
     * @returns {Promise<Models.ConsoleVariables>}
     */
    variables(): Promise<Models.ConsoleVariables>;
}
