import { Client } from '../client';
import type { Models } from '../models';
export declare class Teams {
    client: Client;
    constructor(client: Client);
    /**
     * List teams
     *
     * Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {NuvixException}
     * @returns {Promise<Models.TeamList<Preferences>>}
     */
    list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.TeamList<Preferences>>;
    /**
     * Create team
     *
     * Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.
     *
     * @param {string} teamId
     * @param {string} name
     * @param {string[]} roles
     * @throws {NuvixException}
     * @returns {Promise<Models.Team<Preferences>>}
     */
    create<Preferences extends Models.Preferences>(teamId: string, name: string, roles?: string[]): Promise<Models.Team<Preferences>>;
    /**
     * Get team
     *
     * Get a team by its ID. All team members have read access for this resource.
     *
     * @param {string} teamId
     * @throws {NuvixException}
     * @returns {Promise<Models.Team<Preferences>>}
     */
    get<Preferences extends Models.Preferences>(teamId: string): Promise<Models.Team<Preferences>>;
    /**
     * Update name
     *
     * Update the team&#039;s name by its unique ID.
     *
     * @param {string} teamId
     * @param {string} name
     * @throws {NuvixException}
     * @returns {Promise<Models.Team<Preferences>>}
     */
    updateName<Preferences extends Models.Preferences>(teamId: string, name: string): Promise<Models.Team<Preferences>>;
    /**
     * Delete team
     *
     * Delete a team using its ID. Only team members with the owner role can delete the team.
     *
     * @param {string} teamId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    delete(teamId: string): Promise<{}>;
    /**
     * List team logs
     *
     * Get the team activity logs list by its unique ID.
     *
     * @param {string} teamId
     * @param {string[]} queries
     * @throws {NuvixException}
     * @returns {Promise<Models.LogList>}
     */
    listLogs(teamId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * List team memberships
     *
     * Use this endpoint to list a team&#039;s members using the team&#039;s ID. All team members have read access to this endpoint. Hide sensitive attributes from the response by toggling membership privacy in the Console.
     *
     * @param {string} teamId
     * @param {string[]} queries
     * @param {string} search
     * @throws {NuvixException}
     * @returns {Promise<Models.MembershipList>}
     */
    listMemberships(teamId: string, queries?: string[], search?: string): Promise<Models.MembershipList>;
    /**
     * Create team membership
     *
     * Invite a new member to join your team. Provide an ID for existing users, or invite unregistered users using an email or phone number. If initiated from a Client SDK, Nuvix will send an email or sms with a link to join the team to the invited user, and an account will be created for them if one doesn&#039;t exist. If initiated from a Server SDK, the new member will be added automatically to the team.

You only need to provide one of a user ID, email, or phone number. Nuvix will prioritize accepting the user ID &gt; email &gt; phone number if you provide more than one of these parameters.

Use the `url` parameter to redirect the user from the invitation email to your app. After the user is redirected, use the [Update Team Membership Status](https://nuvix.io/docs/references/cloud/client-web/teams#updateMembershipStatus) endpoint to allow the user to accept the invitation to the team.

Please note that to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) Nuvix will accept the only redirect URLs under the domains you have added as a platform on the Nuvix Console.

     *
     * @param {string} teamId
     * @param {string[]} roles
     * @param {string} email
     * @param {string} userId
     * @param {string} phone
     * @param {string} url
     * @param {string} name
     * @throws {NuvixException}
     * @returns {Promise<Models.Membership>}
     */
    createMembership(teamId: string, roles: string[], email?: string, userId?: string, phone?: string, url?: string, name?: string): Promise<Models.Membership>;
    /**
     * Get team membership
     *
     * Get a team member by the membership unique id. All team members have read access for this resource. Hide sensitive attributes from the response by toggling membership privacy in the Console.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @throws {NuvixException}
     * @returns {Promise<Models.Membership>}
     */
    getMembership(teamId: string, membershipId: string): Promise<Models.Membership>;
    /**
     * Update membership
     *
     * Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about [roles and permissions](https://nuvix.io/docs/permissions).

     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string[]} roles
     * @throws {NuvixException}
     * @returns {Promise<Models.Membership>}
     */
    updateMembership(teamId: string, membershipId: string, roles: string[]): Promise<Models.Membership>;
    /**
     * Delete team membership
     *
     * This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @throws {NuvixException}
     * @returns {Promise<{}>}
     */
    deleteMembership(teamId: string, membershipId: string): Promise<{}>;
    /**
     * Update team membership status
     *
     * Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.

If the request is successful, a session for the user is automatically created.

     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string} userId
     * @param {string} secret
     * @throws {NuvixException}
     * @returns {Promise<Models.Membership>}
     */
    updateMembershipStatus(teamId: string, membershipId: string, userId: string, secret: string): Promise<Models.Membership>;
    /**
     * Get team preferences
     *
     * Get the team&#039;s shared preferences by its unique ID. If a preference doesn&#039;t need to be shared by all team members, prefer storing them in [user preferences](https://nuvix.io/docs/references/cloud/client-web/account#getPrefs).
     *
     * @param {string} teamId
     * @throws {NuvixException}
     * @returns {Promise<Preferences>}
     */
    getPrefs<Preferences extends Models.Preferences>(teamId: string): Promise<Preferences>;
    /**
     * Update preferences
     *
     * Update the team&#039;s preferences by its unique ID. The object you pass is stored as is and replaces any previous value. The maximum allowed prefs size is 64kB and throws an error if exceeded.
     *
     * @param {string} teamId
     * @param {object} prefs
     * @throws {NuvixException}
     * @returns {Promise<Preferences>}
     */
    updatePrefs<Preferences extends Models.Preferences>(teamId: string, prefs: object): Promise<Preferences>;
}
