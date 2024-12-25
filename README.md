Welcome to the **Nuvix Console SDK**! This SDK allows developers to interact with the Nuvix platform via the console, enabling the creation, management, and configuration of projects, databases, collections, and documents. The SDK provides an easy-to-use interface for integrating your Nuvix-powered applications directly from the command line.

## Prerequisites

- **Node.js**: Ensure that Node.js is installed (preferably version 16 or higher).
- **Nuvix Account**: You must have a registered Nuvix account.
- **API Key**: Obtain an API key from your Nuvix console to authenticate your requests.

## Installation

To install the Nuvix Console SDK, use npm or yarn:

```bash
npm install -g @nuvix/console
```

or

```bash
yarn global add @nuvix/console
```

## Authentication

Before using the SDK, you need to authenticate using your Nuvix API key.

To set up authentication:

1. Run the following command:

```bash
nuvix login
```

2. Enter your **API Key** when prompted.

Once authenticated, the SDK will store your credentials locally, so you don't need to log in again for subsequent uses.

## Usage

### 1. **Create a New Project**

To create a new project, use the following command:

```bash
nuvix create project <project-name>
```

This will create a new project on the Nuvix platform.

### 2. **List Projects**

To view all your projects:

```bash
nuvix list projects
```

This will display a list of all your projects, including project IDs and names.

### 3. **Create a Database**

To create a database within a project:

```bash
nuvix create database <project-name> <database-name>
```

### 4. **List Databases**

To list all databases within a project:

```bash
nuvix list databases <project-name>
```

### 5. **Create a Collection**

To create a collection in a specific database:

```bash
nuvix create collection <project-name> <database-name> <collection-name>
```

### 6. **List Collections**

To list all collections within a database:

```bash
nuvix list collections <project-name> <database-name>
```

### 7. **Create Document**

To create a document in a collection:

```bash
nuvix create document <project-name> <database-name> <collection-name> --data "<document-data>"
```

Ensure you replace `<document-data>` with the actual data you wish to insert into the document in JSON format.

### 8. **List Documents**

To view all documents in a collection:

```bash
nuvix list documents <project-name> <database-name> <collection-name>
```

### 9. **Delete a Document**

To delete a specific document:

```bash
nuvix delete document <project-name> <database-name> <collection-name> <document-id>
```

### 10. **Delete a Database**

To delete an entire database:

```bash
nuvix delete database <project-name> <database-name>
```

### 11. **Delete a Project**

To delete a project:

```bash
nuvix delete project <project-name>
```

## Configuration

The Nuvix Console SDK uses a configuration file stored in your home directory under `~/.nuvix/config.json`. You can manually edit this file to adjust settings or configure additional profiles.

## Error Handling

In case of an error, the SDK will display an appropriate error message, which you can use for troubleshooting. If you encounter any issues, please check the Nuvix documentation or reach out to support.

## Contributing

We welcome contributions to the Nuvix Console SDK! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

### Reporting Issues

If you encounter any issues or bugs, please report them by opening an issue in the GitHub repository or reaching out to support.

## License

This SDK is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, please contact us at support@nuvix.com.
