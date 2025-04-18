import { Service } from '../service';
import { NuvixException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { PasswordHash } from '../enums/password-hash';
import { UserUsageRange } from '../enums/user-usage-range';
import { AuthenticatorType } from '../enums/authenticator-type';
import { MessagingProviderType } from '../enums/messaging-provider-type';

export class ConsoleUsers {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * List users
   *
   * Get a list of all the project&#039;s users. You can use the query params to filter your results.
   *
   * @param {string[]} queries
   * @param {string} search
   * @throws {NuvixException}
   * @returns {Promise<Models.UserList<Preferences>>}
   */
  async list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.UserList<Preferences>> {
    const apiPath = '/users';
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
   * Create user
   *
   * Create a new user.
   *
   * @param {string} userId
   * @param {string} email
   * @param {string} phone
   * @param {string} password
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async create<Preferences extends Models.Preferences>(userId: string, email?: string, phone?: string, password?: string, name?: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users';
    const payload: Payload = {};
    if (typeof userId !== 'undefined') {
      payload['userId'] = userId;
    }
    if (typeof email !== 'undefined') {
      payload['email'] = email;
    }
    if (typeof phone !== 'undefined') {
      payload['phone'] = phone;
    }
    if (typeof password !== 'undefined') {
      payload['password'] = password;
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
   * Create user with Argon2 password
   *
   * Create a new user. Password provided must be hashed with the [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST /users](https://nuvix.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
   *
   * @param {string} userId
   * @param {string} email
   * @param {string} password
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async createArgon2User<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof email === 'undefined') {
      throw new NuvixException('Missing required parameter: "email"');
    }
    if (typeof password === 'undefined') {
      throw new NuvixException('Missing required parameter: "password"');
    }
    const apiPath = '/users/argon2';
    const payload: Payload = {};
    if (typeof userId !== 'undefined') {
      payload['userId'] = userId;
    }
    if (typeof email !== 'undefined') {
      payload['email'] = email;
    }
    if (typeof password !== 'undefined') {
      payload['password'] = password;
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
   * Create user with bcrypt password
   *
   * Create a new user. Password provided must be hashed with the [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST /users](https://nuvix.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
   *
   * @param {string} userId
   * @param {string} email
   * @param {string} password
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async createBcryptUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof email === 'undefined') {
      throw new NuvixException('Missing required parameter: "email"');
    }
    if (typeof password === 'undefined') {
      throw new NuvixException('Missing required parameter: "password"');
    }
    const apiPath = '/users/bcrypt';
    const payload: Payload = {};
    if (typeof userId !== 'undefined') {
      payload['userId'] = userId;
    }
    if (typeof email !== 'undefined') {
      payload['email'] = email;
    }
    if (typeof password !== 'undefined') {
      payload['password'] = password;
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
   * List identities
   *
   * Get identities for all users.
   *
   * @param {string[]} queries
   * @param {string} search
   * @throws {NuvixException}
   * @returns {Promise<Models.IdentityList>}
   */
  async listIdentities(queries?: string[], search?: string): Promise<Models.IdentityList> {
    const apiPath = '/users/identities';
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
   * Delete identity
   *
   * Delete an identity by its unique ID.
   *
   * @param {string} identityId
   * @throws {NuvixException}
   * @returns {Promise<{}>}
   */
  async deleteIdentity(identityId: string): Promise<{}> {
    if (typeof identityId === 'undefined') {
      throw new NuvixException('Missing required parameter: "identityId"');
    }
    const apiPath = '/users/identities/{identityId}'.replace('{identityId}', identityId);
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
   * Create user with MD5 password
   *
   * Create a new user. Password provided must be hashed with the [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST /users](https://nuvix.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
   *
   * @param {string} userId
   * @param {string} email
   * @param {string} password
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async createMD5User<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof email === 'undefined') {
      throw new NuvixException('Missing required parameter: "email"');
    }
    if (typeof password === 'undefined') {
      throw new NuvixException('Missing required parameter: "password"');
    }
    const apiPath = '/users/md5';
    const payload: Payload = {};
    if (typeof userId !== 'undefined') {
      payload['userId'] = userId;
    }
    if (typeof email !== 'undefined') {
      payload['email'] = email;
    }
    if (typeof password !== 'undefined') {
      payload['password'] = password;
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
   * Create user with PHPass password
   *
   * Create a new user. Password provided must be hashed with the [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST /users](https://nuvix.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
   *
   * @param {string} userId
   * @param {string} email
   * @param {string} password
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async createPHPassUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof email === 'undefined') {
      throw new NuvixException('Missing required parameter: "email"');
    }
    if (typeof password === 'undefined') {
      throw new NuvixException('Missing required parameter: "password"');
    }
    const apiPath = '/users/phpass';
    const payload: Payload = {};
    if (typeof userId !== 'undefined') {
      payload['userId'] = userId;
    }
    if (typeof email !== 'undefined') {
      payload['email'] = email;
    }
    if (typeof password !== 'undefined') {
      payload['password'] = password;
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
   * Create user with Scrypt password
   *
   * Create a new user. Password provided must be hashed with the [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST /users](https://nuvix.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
   *
   * @param {string} userId
   * @param {string} email
   * @param {string} password
   * @param {string} passwordSalt
   * @param {number} passwordCpu
   * @param {number} passwordMemory
   * @param {number} passwordParallel
   * @param {number} passwordLength
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async createScryptUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof email === 'undefined') {
      throw new NuvixException('Missing required parameter: "email"');
    }
    if (typeof password === 'undefined') {
      throw new NuvixException('Missing required parameter: "password"');
    }
    if (typeof passwordSalt === 'undefined') {
      throw new NuvixException('Missing required parameter: "passwordSalt"');
    }
    if (typeof passwordCpu === 'undefined') {
      throw new NuvixException('Missing required parameter: "passwordCpu"');
    }
    if (typeof passwordMemory === 'undefined') {
      throw new NuvixException('Missing required parameter: "passwordMemory"');
    }
    if (typeof passwordParallel === 'undefined') {
      throw new NuvixException('Missing required parameter: "passwordParallel"');
    }
    if (typeof passwordLength === 'undefined') {
      throw new NuvixException('Missing required parameter: "passwordLength"');
    }
    const apiPath = '/users/scrypt';
    const payload: Payload = {};
    if (typeof userId !== 'undefined') {
      payload['userId'] = userId;
    }
    if (typeof email !== 'undefined') {
      payload['email'] = email;
    }
    if (typeof password !== 'undefined') {
      payload['password'] = password;
    }
    if (typeof passwordSalt !== 'undefined') {
      payload['passwordSalt'] = passwordSalt;
    }
    if (typeof passwordCpu !== 'undefined') {
      payload['passwordCpu'] = passwordCpu;
    }
    if (typeof passwordMemory !== 'undefined') {
      payload['passwordMemory'] = passwordMemory;
    }
    if (typeof passwordParallel !== 'undefined') {
      payload['passwordParallel'] = passwordParallel;
    }
    if (typeof passwordLength !== 'undefined') {
      payload['passwordLength'] = passwordLength;
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
   * Create user with Scrypt modified password
   *
   * Create a new user. Password provided must be hashed with the [Scrypt Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc) algorithm. Use the [POST /users](https://nuvix.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
   *
   * @param {string} userId
   * @param {string} email
   * @param {string} password
   * @param {string} passwordSalt
   * @param {string} passwordSaltSeparator
   * @param {string} passwordSignerKey
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async createScryptModifiedUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof email === 'undefined') {
      throw new NuvixException('Missing required parameter: "email"');
    }
    if (typeof password === 'undefined') {
      throw new NuvixException('Missing required parameter: "password"');
    }
    if (typeof passwordSalt === 'undefined') {
      throw new NuvixException('Missing required parameter: "passwordSalt"');
    }
    if (typeof passwordSaltSeparator === 'undefined') {
      throw new NuvixException('Missing required parameter: "passwordSaltSeparator"');
    }
    if (typeof passwordSignerKey === 'undefined') {
      throw new NuvixException('Missing required parameter: "passwordSignerKey"');
    }
    const apiPath = '/users/scrypt-modified';
    const payload: Payload = {};
    if (typeof userId !== 'undefined') {
      payload['userId'] = userId;
    }
    if (typeof email !== 'undefined') {
      payload['email'] = email;
    }
    if (typeof password !== 'undefined') {
      payload['password'] = password;
    }
    if (typeof passwordSalt !== 'undefined') {
      payload['passwordSalt'] = passwordSalt;
    }
    if (typeof passwordSaltSeparator !== 'undefined') {
      payload['passwordSaltSeparator'] = passwordSaltSeparator;
    }
    if (typeof passwordSignerKey !== 'undefined') {
      payload['passwordSignerKey'] = passwordSignerKey;
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
   * Create user with SHA password
   *
   * Create a new user. Password provided must be hashed with the [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use the [POST /users](https://nuvix.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
   *
   * @param {string} userId
   * @param {string} email
   * @param {string} password
   * @param {PasswordHash} passwordVersion
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async createSHAUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof email === 'undefined') {
      throw new NuvixException('Missing required parameter: "email"');
    }
    if (typeof password === 'undefined') {
      throw new NuvixException('Missing required parameter: "password"');
    }
    const apiPath = '/users/sha';
    const payload: Payload = {};
    if (typeof userId !== 'undefined') {
      payload['userId'] = userId;
    }
    if (typeof email !== 'undefined') {
      payload['email'] = email;
    }
    if (typeof password !== 'undefined') {
      payload['password'] = password;
    }
    if (typeof passwordVersion !== 'undefined') {
      payload['passwordVersion'] = passwordVersion;
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
   * Get users usage stats
   *
   *
   * @param {UserUsageRange} range
   * @throws {NuvixException}
   * @returns {Promise<Models.UsageUsers>}
   */
  async getUsage(range?: UserUsageRange): Promise<Models.UsageUsers> {
    const apiPath = '/users/usage';
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
   * Get user
   *
   * Get a user by its unique ID.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async get<Preferences extends Models.Preferences>(userId: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}'.replace('{userId}', userId);
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
   * Delete user
   *
   * Delete a user by its unique ID, thereby releasing it&#039;s ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the [updateStatus](https://nuvix.io/docs/server/users#usersUpdateStatus) endpoint instead.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<{}>}
   */
  async delete(userId: string): Promise<{}> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}'.replace('{userId}', userId);
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
   * Update email
   *
   * Update the user email by its unique ID.
   *
   * @param {string} userId
   * @param {string} email
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async updateEmail<Preferences extends Models.Preferences>(userId: string, email: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof email === 'undefined') {
      throw new NuvixException('Missing required parameter: "email"');
    }
    const apiPath = '/users/{userId}/email'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof email !== 'undefined') {
      payload['email'] = email;
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
   * Create user JWT
   *
   * Use this endpoint to create a JSON Web Token for user by its unique ID. You can use the resulting JWT to authenticate on behalf of the user. The JWT secret will become invalid if the session it uses gets deleted.
   *
   * @param {string} userId
   * @param {string} sessionId
   * @param {number} duration
   * @throws {NuvixException}
   * @returns {Promise<Models.Jwt>}
   */
  async createJWT(userId: string, sessionId?: string, duration?: number): Promise<Models.Jwt> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/jwts'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof sessionId !== 'undefined') {
      payload['sessionId'] = sessionId;
    }
    if (typeof duration !== 'undefined') {
      payload['duration'] = duration;
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
   * Update user labels
   *
   * Update the user labels by its unique ID. 

Labels can be used to grant access to resources. While teams are a way for user&#039;s to share access to a resource, labels can be defined by the developer to grant access without an invitation. See the [Permissions docs](https://nuvix.io/docs/permissions) for more info.
   *
   * @param {string} userId
   * @param {string[]} labels
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async updateLabels<Preferences extends Models.Preferences>(userId: string, labels: string[]): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof labels === 'undefined') {
      throw new NuvixException('Missing required parameter: "labels"');
    }
    const apiPath = '/users/{userId}/labels'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof labels !== 'undefined') {
      payload['labels'] = labels;
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
   * List user logs
   *
   * Get the user activity logs list by its unique ID.
   *
   * @param {string} userId
   * @param {string[]} queries
   * @throws {NuvixException}
   * @returns {Promise<Models.LogList>}
   */
  async listLogs(userId: string, queries?: string[]): Promise<Models.LogList> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/logs'.replace('{userId}', userId);
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
   * List user memberships
   *
   * Get the user membership list by its unique ID.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<Models.MembershipList>}
   */
  async listMemberships(userId: string): Promise<Models.MembershipList> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/memberships'.replace('{userId}', userId);
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
   * Update MFA
   *
   * Enable or disable MFA on a user account.
   *
   * @param {string} userId
   * @param {boolean} mfa
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async updateMfa<Preferences extends Models.Preferences>(userId: string, mfa: boolean): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof mfa === 'undefined') {
      throw new NuvixException('Missing required parameter: "mfa"');
    }
    const apiPath = '/users/{userId}/mfa'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof mfa !== 'undefined') {
      payload['mfa'] = mfa;
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
   * Delete authenticator
   *
   * Delete an authenticator app.
   *
   * @param {string} userId
   * @param {AuthenticatorType} type
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async deleteMfaAuthenticator<Preferences extends Models.Preferences>(userId: string, type: AuthenticatorType): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof type === 'undefined') {
      throw new NuvixException('Missing required parameter: "type"');
    }
    const apiPath = '/users/{userId}/mfa/authenticators/{type}'.replace('{userId}', userId).replace('{type}', type);
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
   * List factors
   *
   * List the factors available on the account to be used as a MFA challange.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<Models.MfaFactors>}
   */
  async listMfaFactors(userId: string): Promise<Models.MfaFactors> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/mfa/factors'.replace('{userId}', userId);
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
   * Get MFA recovery codes
   *
   * Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<Models.MfaRecoveryCodes>}
   */
  async getMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/mfa/recovery-codes'.replace('{userId}', userId);
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
   * Regenerate MFA recovery codes
   *
   * Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<Models.MfaRecoveryCodes>}
   */
  async updateMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/mfa/recovery-codes'.replace('{userId}', userId);
    const payload: Payload = {};
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
   * Create MFA recovery codes
   *
   * Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method by client SDK.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<Models.MfaRecoveryCodes>}
   */
  async createMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/mfa/recovery-codes'.replace('{userId}', userId);
    const payload: Payload = {};
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
   * Update name
   *
   * Update the user name by its unique ID.
   *
   * @param {string} userId
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async updateName<Preferences extends Models.Preferences>(userId: string, name: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof name === 'undefined') {
      throw new NuvixException('Missing required parameter: "name"');
    }
    const apiPath = '/users/{userId}/name'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof name !== 'undefined') {
      payload['name'] = name;
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
   * Update password
   *
   * Update the user password by its unique ID.
   *
   * @param {string} userId
   * @param {string} password
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async updatePassword<Preferences extends Models.Preferences>(userId: string, password: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof password === 'undefined') {
      throw new NuvixException('Missing required parameter: "password"');
    }
    const apiPath = '/users/{userId}/password'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof password !== 'undefined') {
      payload['password'] = password;
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
   * Update phone
   *
   * Update the user phone by its unique ID.
   *
   * @param {string} userId
   * @param {string} number
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async updatePhone<Preferences extends Models.Preferences>(userId: string, number: string): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof number === 'undefined') {
      throw new NuvixException('Missing required parameter: "number"');
    }
    const apiPath = '/users/{userId}/phone'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof number !== 'undefined') {
      payload['number'] = number;
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
   * Get user preferences
   *
   * Get the user preferences by its unique ID.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<Preferences>}
   */
  async getPrefs<Preferences extends Models.Preferences>(userId: string): Promise<Preferences> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/prefs'.replace('{userId}', userId);
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
   * Update user preferences
   *
   * Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.
   *
   * @param {string} userId
   * @param {object} prefs
   * @throws {NuvixException}
   * @returns {Promise<Preferences>}
   */
  async updatePrefs<Preferences extends Models.Preferences>(userId: string, prefs: object): Promise<Preferences> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof prefs === 'undefined') {
      throw new NuvixException('Missing required parameter: "prefs"');
    }
    const apiPath = '/users/{userId}/prefs'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof prefs !== 'undefined') {
      payload['prefs'] = prefs;
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
   * List user sessions
   *
   * Get the user sessions list by its unique ID.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<Models.SessionList>}
   */
  async listSessions(userId: string): Promise<Models.SessionList> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
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
   * Create session
   *
   * Creates a session for a user. Returns an immediately usable session object.

If you want to generate a token for a custom authentication flow, use the [POST /users/{userId}/tokens](https://nuvix.io/docs/server/users#createToken) endpoint.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<Models.Session>}
   */
  async createSession(userId: string): Promise<Models.Session> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
    const payload: Payload = {};
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
   * Delete user sessions
   *
   * Delete all user&#039;s sessions by using the user&#039;s unique ID.
   *
   * @param {string} userId
   * @throws {NuvixException}
   * @returns {Promise<{}>}
   */
  async deleteSessions(userId: string): Promise<{}> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
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
   * Delete user session
   *
   * Delete a user sessions by its unique ID.
   *
   * @param {string} userId
   * @param {string} sessionId
   * @throws {NuvixException}
   * @returns {Promise<{}>}
   */
  async deleteSession(userId: string, sessionId: string): Promise<{}> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof sessionId === 'undefined') {
      throw new NuvixException('Missing required parameter: "sessionId"');
    }
    const apiPath = '/users/{userId}/sessions/{sessionId}'.replace('{userId}', userId).replace('{sessionId}', sessionId);
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
   * Update user status
   *
   * Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user&#039;s ID reserved.
   *
   * @param {string} userId
   * @param {boolean} status
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async updateStatus<Preferences extends Models.Preferences>(userId: string, status: boolean): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof status === 'undefined') {
      throw new NuvixException('Missing required parameter: "status"');
    }
    const apiPath = '/users/{userId}/status'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof status !== 'undefined') {
      payload['status'] = status;
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
   * List user targets
   *
   * List the messaging targets that are associated with a user.
   *
   * @param {string} userId
   * @param {string[]} queries
   * @throws {NuvixException}
   * @returns {Promise<Models.TargetList>}
   */
  async listTargets(userId: string, queries?: string[]): Promise<Models.TargetList> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/targets'.replace('{userId}', userId);
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
   * Create user target
   *
   * Create a messaging target.
   *
   * @param {string} userId
   * @param {string} targetId
   * @param {MessagingProviderType} providerType
   * @param {string} identifier
   * @param {string} providerId
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.Target>}
   */
  async createTarget(userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string): Promise<Models.Target> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof targetId === 'undefined') {
      throw new NuvixException('Missing required parameter: "targetId"');
    }
    if (typeof providerType === 'undefined') {
      throw new NuvixException('Missing required parameter: "providerType"');
    }
    if (typeof identifier === 'undefined') {
      throw new NuvixException('Missing required parameter: "identifier"');
    }
    const apiPath = '/users/{userId}/targets'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof targetId !== 'undefined') {
      payload['targetId'] = targetId;
    }
    if (typeof providerType !== 'undefined') {
      payload['providerType'] = providerType;
    }
    if (typeof identifier !== 'undefined') {
      payload['identifier'] = identifier;
    }
    if (typeof providerId !== 'undefined') {
      payload['providerId'] = providerId;
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
   * Get user target
   *
   * Get a user&#039;s push notification target by ID.
   *
   * @param {string} userId
   * @param {string} targetId
   * @throws {NuvixException}
   * @returns {Promise<Models.Target>}
   */
  async getTarget(userId: string, targetId: string): Promise<Models.Target> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof targetId === 'undefined') {
      throw new NuvixException('Missing required parameter: "targetId"');
    }
    const apiPath = '/users/{userId}/targets/{targetId}'.replace('{userId}', userId).replace('{targetId}', targetId);
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
   * Update user target
   *
   * Update a messaging target.
   *
   * @param {string} userId
   * @param {string} targetId
   * @param {string} identifier
   * @param {string} providerId
   * @param {string} name
   * @throws {NuvixException}
   * @returns {Promise<Models.Target>}
   */
  async updateTarget(userId: string, targetId: string, identifier?: string, providerId?: string, name?: string): Promise<Models.Target> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof targetId === 'undefined') {
      throw new NuvixException('Missing required parameter: "targetId"');
    }
    const apiPath = '/users/{userId}/targets/{targetId}'.replace('{userId}', userId).replace('{targetId}', targetId);
    const payload: Payload = {};
    if (typeof identifier !== 'undefined') {
      payload['identifier'] = identifier;
    }
    if (typeof providerId !== 'undefined') {
      payload['providerId'] = providerId;
    }
    if (typeof name !== 'undefined') {
      payload['name'] = name;
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
   * Delete user target
   *
   * Delete a messaging target.
   *
   * @param {string} userId
   * @param {string} targetId
   * @throws {NuvixException}
   * @returns {Promise<{}>}
   */
  async deleteTarget(userId: string, targetId: string): Promise<{}> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof targetId === 'undefined') {
      throw new NuvixException('Missing required parameter: "targetId"');
    }
    const apiPath = '/users/{userId}/targets/{targetId}'.replace('{userId}', userId).replace('{targetId}', targetId);
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
   * Create token
   *
   * Returns a token with a secret key for creating a session. Use the user ID and secret and submit a request to the [PUT /account/sessions/token](https://nuvix.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process.

   *
   * @param {string} userId
   * @param {number} length
   * @param {number} expire
   * @throws {NuvixException}
   * @returns {Promise<Models.Token>}
   */
  async createToken(userId: string, length?: number, expire?: number): Promise<Models.Token> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    const apiPath = '/users/{userId}/tokens'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof length !== 'undefined') {
      payload['length'] = length;
    }
    if (typeof expire !== 'undefined') {
      payload['expire'] = expire;
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
   * Update email verification
   *
   * Update the user email verification status by its unique ID.
   *
   * @param {string} userId
   * @param {boolean} emailVerification
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async updateEmailVerification<Preferences extends Models.Preferences>(userId: string, emailVerification: boolean): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof emailVerification === 'undefined') {
      throw new NuvixException('Missing required parameter: "emailVerification"');
    }
    const apiPath = '/users/{userId}/verification'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof emailVerification !== 'undefined') {
      payload['emailVerification'] = emailVerification;
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
   * Update phone verification
   *
   * Update the user phone verification status by its unique ID.
   *
   * @param {string} userId
   * @param {boolean} phoneVerification
   * @throws {NuvixException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  async updatePhoneVerification<Preferences extends Models.Preferences>(userId: string, phoneVerification: boolean): Promise<Models.User<Preferences>> {
    if (typeof userId === 'undefined') {
      throw new NuvixException('Missing required parameter: "userId"');
    }
    if (typeof phoneVerification === 'undefined') {
      throw new NuvixException('Missing required parameter: "phoneVerification"');
    }
    const apiPath = '/users/{userId}/verification/phone'.replace('{userId}', userId);
    const payload: Payload = {};
    if (typeof phoneVerification !== 'undefined') {
      payload['phoneVerification'] = phoneVerification;
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
}
