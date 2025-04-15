import { Client, Models } from "client";

export type PaymentMethodData = {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    providerMethodId: string;
    providerUserId: string;
    userId: string;
    expiryMonth: number;
    expiryYear: number;
    expired: boolean;
    last4: string;
    country: string;
    brand: string;
    clientSecret: string;
    failed: boolean;
    name: string;
    mandateId?: string;
    lastError?: string;
};

export type PaymentList = {
    paymentMethods: PaymentMethodData[];
    total: number;
};

export type Aggregation = {
    $id: string;
    /**
     * Aggregation creation time in ISO 8601 format.
     */
    $createdAt: string;
    /**
     * Aggregation update date in ISO 8601 format.
     */
    $updatedAt: string;
    /**
     * Beginning date of the invoice.
     */
    from: string;
    /**
     * End date of the invoice.
     */
    to: string;
    /**
     * Total amount of the invoice.
     */
    amount: number;
    /**
     * Price for additional members
     */
    additionalMembers: number;
    /**
     * Total storage usage.
     */
    usageStorage: number;
    /**
     * Total active users for the billing period.
     */
    usageUsers: number;
    /**
     * Total number of executions for the billing period.
     */
    usageExecutions: number;
    /**
     * Total bandwidth usage for the billing period.
     */
    usageBandwidth: number;
    /**
     * Total realtime usage for the billing period.
     */
    usageRealtime: number;
    /**
     * Usage logs for the billing period.
     */
    resources: OrganizationUsage;
};

export type OrganizationUsage = {
    bandwidth: Array<Models.Metric>;
    executions: Array<Models.Metric>;
    executionsTotal: number;
    filesStorageTotal: number;
    buildsStorageTotal: number;
    deploymentsStorageTotal: number;
    executionsMBSecondsTotal: number;
    buildsMBSecondsTotal: number;
    backupsStorageTotal: number;
    storageTotal: number;
    users: Array<Models.Metric>;
    usersTotal: number;
    projects: Array<{
        projectId: string;
        storage: number;
        executions: number;
        bandwidth: number;
        users: number;
    }>;
};

export type AggregationList = {
    aggregations: Aggregation[];
    total: number;
};

export type AllowedRegions =
    | 'fra'
    | 'nyc'
    | 'sfo'
    | 'blr'
    | 'lon'
    | 'ams'
    | 'sgp'
    | 'tor'
    | 'syd'
    | 'default'; //TODO: remove after migration

export type Region = {
    $id: AllowedRegions;
    name: string;
    disabled: boolean;
    default: boolean;
    flag: string;
};

export type RegionList = {
    regions: Region[];
    total: number;
};

export type Address = {
    $id: string;
    streetAddress: string;
    addressLine2?: string;
    country: string;
    city: string;
    state?: string;
    postalCode: string;
    userId: string;
};

export type AddressesList = {
    billingAddresses: Address[];
    total: number;
};

export type AdditionalResource = {
    currency: string;
    invoiceDesc: string;
    price: number;
    unit: string;
    value: number;
    multiplier?: number;
};

export type Plan = {
    $id: string;
    name: string;
    price: number;
    bandwidth: number;
    storage: number;
    members: number;
    webhooks: number;
    users: number;
    teams: number;
    databases: number;
    buckets: number;
    fileSize: number;
    functions: number;
    executions: number;
    realtime: number;
    logs: number;
    addons: {
        bandwidth: AdditionalResource;
        executions: AdditionalResource;
        member: AdditionalResource;
        realtime: AdditionalResource;
        storage: AdditionalResource;
        users: AdditionalResource;
    };
    trialDays: number;
    isAvailable: boolean;
    selfService: boolean;
    premiumSupport: boolean;
    budgeting: boolean;
    supportsMockNumbers: boolean;
    backupsEnabled: boolean;
    backupPolicies: number;
    emailBranding: boolean;
};

export type PlansInfo = {
    plans: Plan[];
    total: number;
};

export class Billing {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async listPaymentMethods(queries: [] = []): Promise<PaymentList> {
        const path = `/account/payment-methods`;
        const params = {
            queries
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'GET',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async getPaymentMethod(paymentMethodId: string): Promise<PaymentMethodData> {
        const path = `/account/payment-methods/${paymentMethodId}`;
        const params = {
            paymentMethodId
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'GET',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async createPaymentMethod(): Promise<PaymentMethodData> {
        const path = `/account/payment-methods`;
        const params = {};
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'POST',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async setPaymentMethod(
        paymentMethodId: string,
        providerMethodId: string,
        name: string
    ): Promise<PaymentMethodData> {
        const path = `/account/payment-methods/${paymentMethodId}/provider`;
        const params = {
            paymentMethodId,
            providerMethodId,
            name
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'patch',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async updatePaymentMethod(
        paymentMethodId: string,
        expiryMonth: string,
        expiryYear: string
    ): Promise<PaymentMethodData> {
        const path = `/account/payment-methods/${paymentMethodId}`;
        const params = {
            paymentMethodId,
            expiryMonth,
            expiryYear
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'patch',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async deletePaymentMethod(paymentMethodId: string): Promise<PaymentMethodData> {
        const path = `/account/payment-methods/${paymentMethodId}`;
        const params = {
            paymentMethodId
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'delete',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }
    async setDefaultPaymentMethod(paymentMethodId: string): Promise<PaymentMethodData> {
        const path = `/account/payment-methods/${paymentMethodId}/default`;
        const params = {
            paymentMethodId
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'patch',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async setupPaymentMandate(
        organizationId: string,
        paymentMethodId: string
    ): Promise<PaymentMethodData> {
        const path = `/account/payment-methods/${paymentMethodId}/setup`;
        const params = {
            organizationId,
            paymentMethodId
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'patch',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async listAddresses(queries: string[] = []): Promise<AddressesList> {
        const path = `/account/billing-addresses`;
        const params = {
            queries
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'get',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async getAddress(billingAddressId: string): Promise<Address> {
        const path = `/account/billing-addresses/${billingAddressId}`;
        const params = {
            billingAddressId
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'get',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async createAddress(
        country: string,
        streetAddress: string,
        city: string,
        state: string,
        postalCode: string,
        addressLine2?: string
    ): Promise<Address> {
        const path = `/account/billing-addresses`;
        const params = {
            country,
            streetAddress,
            city,
            state,
            postalCode,
            addressLine2
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'POST',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }
    async updateAddress(
        billingAddressId: string,
        country: string,
        streetAddress: string,
        city: string,
        state: string,
        postalCode: string,
        addressLine2?: string
    ): Promise<Address> {
        const path = `/account/billing-addresses/${billingAddressId}`;
        const params = {
            billingAddressId,
            country,
            streetAddress,
            city,
            state,
            postalCode,
            addressLine2
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'PUT',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }
    async deleteAddress(billingAddressId: string): Promise<void> {
        const path = `/account/billing-addresses/${billingAddressId}`;
        const params = {
            billingAddressId
        };
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'delete',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async listRegions(): Promise<RegionList> {
        const path = `/regions`;
        const params = {};
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'GET',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }

    async listPlans(): Promise<PlansInfo> {
        const path = `/plans`;
        const params = {};
        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call(
            'GET',
            uri,
            {
                'content-type': 'application/json'
            },
            params
        );
    }
}