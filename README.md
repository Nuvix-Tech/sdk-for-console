# Nuvix Console SDK

The **Nuvix Console SDK** provides developers with a convenient way to interact with the Nuvix backend, designed for managing projects, organizations, and related resources. This SDK is fully compatible with **Nuvix server version 1.0.x**. For compatibility with older server versions, refer to the [release notes](https://github.com/ravikn6/nuvix-console-sdk/releases).

---

## Features

- Manage **Accounts** and **Users**.
- Operate on **Projects**, **Organizations**, and **Teams**.
- Utilize **Databases**, **Functions**, **Storage**, and **Backups**.
- Handle real-time updates with **RealtimeResponseEvent**.
- Comprehensive support for **Messaging**, **Health Checks**, **GraphQL**, and **Locale** services.
- Authentication and OAuth support via enums like `AuthenticatorType` and `OAuthProvider`.
- Simplified management of roles, permissions, and configurations.

---

## Installation

Install the SDK via npm:

```bash
npm install @nuvix/console
```

Or using Yarn:

```bash
yarn add @nuvix/console
```

---

## Getting Started

### Initializing the Client

```typescript
import { Client } from '@nuvix/console';

const client = new Client({
  endpoint: '',
  project: 'YOUR_PROJECT_ID',
  key: 'YOUR_API_KEY',
});
const client = new Client();
    .setEndpoint('https://api.nuvix.com/v1')  // API endpoint
    .setEndpointRealtime('https://api.nuvix.com/v1/realtime')  // Realtime API endpoint
    .setLocale('en-US')  // Locale setting (optional)
```

### Example: Managing Accounts

```typescript
import { Account } from '@nuvix/console';

const accountService = new Account(client);

// Create a new account
accountService.create({
  email: 'user@example.com',
  password: 'securepassword',
});

// Retrieve account details
const accountDetails = await accountService.get();
console.log(accountDetails);
```

### Example: Real-Time Subscriptions

```typescript
import { RealtimeResponseEvent } from '@nuvix/console';

client.subscribe('projects', (event: RealtimeResponseEvent) => {
  console.log('Realtime event:', event);
});
```

---

## Services

The SDK includes services for interacting with various Nuvix resources:

- **Account**: Manage user accounts.
- **Avatars**: Handle user avatars.
- **Backups**: Manage database backups.
- **Databases**: Operate on databases and collections.
- **Functions**: Deploy and execute serverless functions.
- **Organizations**: Manage organizations and their members.
- **Projects**: Create and manage projects.
- **Storage**: Handle file uploads and downloads.
- **Teams**: Manage team memberships and permissions.
- **Users**: Operate on users within the platform.

For a full list of services, refer to the [API documentation](https://docs.nuvix.com/console-sdk).

---

## Advanced Usage

### Enums

The SDK provides a rich set of enums for standardizing interactions:

- `AuthenticatorType`: Authentication mechanisms.
- `OAuthProvider`: Supported OAuth providers.
- `Region`: Available regions for resource deployment.
- And many more.

### Types

Type safety is provided through:

- `Models`
- `Payload`
- `RealtimeResponseEvent`
- `UploadProgress`

### Permissions and Roles

Use the `Permission` and `Role` classes to manage user and team permissions.

---

## Contributing

Contributions are welcome! Please read our [Contributing Guide](https://github.com/ravikn6/nuvix-console-sdk/blob/main/CONTRIBUTING.md) for guidelines.

---

## License

This SDK is licensed under the BSD 3-Clause License. See the [LICENSE](https://github.com/ravikn6/nuvix-console-sdk/blob/main/LICENSE) file for details.

---

## Support

If you encounter any issues, feel free to open an [issue](https://github.com/ravikn6/nuvix-console-sdk/issues) or contact us at [support@nuvix.com](mailto:support@nuvix.com).

---