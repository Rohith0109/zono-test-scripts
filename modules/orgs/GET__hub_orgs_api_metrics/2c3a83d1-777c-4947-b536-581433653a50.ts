/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "2c3a83d1-777c-4947-b536-581433653a50",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/metrics",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&active=true",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$[0].name",
      "$[0].description",
      "$[0].dataType",
      "$[0].sourceTable",
      "$[0].sourceColumn",
      "$[0].isActive",
      "$[0].validOperators[0]"
    ],
    "ignoreResponsePaths": [
      "$[0].id",
      "$[0].requiresTimePeriod",
      "$[0].createdDate",
      "$[0].updatedDate",
      "$[0].availableTimePeriods"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": [
    {
      "id": "1b7b36ee-ada2-4a59-a16d-201a8d09c962",
      "name": "Total invoices till date",
      "description": "",
      "requiresTimePeriod": false,
      "dataType": "INTEGER",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "totalInvoicesTillDate",
      "isActive": true,
      "createdDate": "2025-09-02T15:37:03.000Z",
      "updatedDate": "2025-09-02T15:37:03.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": []
    },
    {
      "id": "2109314e-3461-4374-8642-5c4d285d16c6",
      "name": "Average invoice value",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "DECIMAL",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "avginvoicevalue",
      "isActive": true,
      "createdDate": "2025-06-03T11:17:53.000Z",
      "updatedDate": "2025-06-03T11:17:53.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    },
    {
      "id": "2bd9b3bd-16e6-45f1-a833-e937dae47972",
      "name": "Outstanding amount",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "DECIMAL",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "outstandingamount",
      "isActive": true,
      "createdDate": "2025-06-03T11:17:55.000Z",
      "updatedDate": "2025-06-03T11:17:55.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    },
    {
      "id": "38b1cea9-4a13-46da-beac-96fd6c880f2f",
      "name": "Number of days since last invoice",
      "description": "",
      "requiresTimePeriod": false,
      "dataType": "DECIMAL",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "dayssincelastinvoice",
      "isActive": true,
      "createdDate": "2025-09-02T15:37:03.000Z",
      "updatedDate": "2025-09-02T15:37:03.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": []
    },
    {
      "id": "4a5f2ad9-4124-46fa-a372-77e74be89fb3",
      "name": "Average items per order",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "INTEGER",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "avgitemsperorder",
      "isActive": true,
      "createdDate": "2025-06-03T11:17:54.000Z",
      "updatedDate": "2025-06-03T11:17:54.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    },
    {
      "id": "57f96a04-9435-4e53-94e3-b569212bd51c",
      "name": "Total invoices",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "INTEGER",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "totalinvoices",
      "isActive": true,
      "createdDate": "2025-09-02T15:37:02.000Z",
      "updatedDate": "2025-09-02T15:37:02.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    },
    {
      "id": "58e195a7-7e1a-4321-a402-d102fe856199",
      "name": "Average orders",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "DECIMAL",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "avgorders",
      "isActive": true,
      "createdDate": "2025-06-03T11:17:54.000Z",
      "updatedDate": "2025-06-03T11:17:54.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    },
    {
      "id": "5adea54f-1762-44a0-9d26-0e443960d43b",
      "name": "Number of days since last order",
      "description": "",
      "requiresTimePeriod": false,
      "dataType": "INTEGER",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "dayssincelastorder",
      "isActive": true,
      "createdDate": "2025-06-04T06:41:23.000Z",
      "updatedDate": "2025-06-04T06:41:23.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": []
    },
    {
      "id": "6142a81d-37a4-4ff8-957a-fe6f5af344e3",
      "name": "Average order value",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "DECIMAL",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "avgordervalue",
      "isActive": true,
      "createdDate": "2025-06-03T11:17:54.000Z",
      "updatedDate": "2025-06-03T11:17:54.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    },
    {
      "id": "677942e0-178c-46f8-8ba7-5b436a015711",
      "name": "Total orders till date",
      "description": "",
      "requiresTimePeriod": false,
      "dataType": "INTEGER",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "totalOrdersTillDate",
      "isActive": true,
      "createdDate": "2025-09-01T14:18:49.000Z",
      "updatedDate": "2025-09-01T14:18:49.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": []
    },
    {
      "id": "7954f7a8-576e-43d1-a3d5-4f7515d7ec37",
      "name": "Total invoice value",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "DECIMAL",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "totalinvoicevalue",
      "isActive": true,
      "createdDate": "2025-06-03T11:17:53.000Z",
      "updatedDate": "2025-06-03T11:17:53.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    },
    {
      "id": "a102c88b-6cc6-4c04-9319-05081480739c",
      "name": "Total order value",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "DECIMAL",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "totalordervalue",
      "isActive": true,
      "createdDate": "2025-06-03T11:17:53.000Z",
      "updatedDate": "2025-06-03T11:17:53.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    },
    {
      "id": "cb0a23f9-311e-493f-82aa-ace89677cd2d",
      "name": "Total payments value",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "DECIMAL",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "totalpaymentsvalue",
      "isActive": true,
      "createdDate": "2025-06-05T08:47:50.000Z",
      "updatedDate": "2025-06-05T08:47:50.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    },
    {
      "id": "d139c21c-6de3-4239-8ccf-1d058d900fdf",
      "name": "Number of payments",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "INTEGER",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "totalpayments",
      "isActive": true,
      "createdDate": "2025-06-03T11:17:54.000Z",
      "updatedDate": "2025-06-05T08:59:18.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    },
    {
      "id": "ea0bcee6-2dc1-4cae-955f-0dd5addb7fff",
      "name": "Total orders",
      "description": "",
      "requiresTimePeriod": true,
      "dataType": "INTEGER",
      "sourceTable": "customer_metrics_report",
      "sourceColumn": "totalorders",
      "isActive": true,
      "createdDate": "2025-06-03T11:17:53.000Z",
      "updatedDate": "2025-06-03T11:17:53.000Z",
      "validOperators": [
        "EQUAL",
        "GREATER",
        "LESS",
        "GREATER_EQUAL",
        "LESS_EQUAL",
        "BETWEEN"
      ],
      "availableTimePeriods": [
        "7",
        "15",
        "30",
        "60",
        "90"
      ]
    }
  ],
  "label": "",
  "suite": "Unassigned",
  "disabled": false
} as const;

export async function run(context: {
  baseUrl: string;
  authToken?: string;
  pathParams?: Record<string, string>;
  fetchImpl?: typeof fetch;
}) {
  const fetcher = context.fetchImpl || fetch;
  const normalizedBase = context.baseUrl.endsWith('/')
    ? context.baseUrl.slice(0, -1)
    : context.baseUrl;
  const [method, ...pathParts] = metadata.endpoint.split(' ');
  // Substitute path params: use context overrides first, then metadata defaults
  const resolvedPathParams = { ...(metadata.pathParams || {}), ...(context.pathParams || {}) };
  let path = pathParts.join(' ').trim() || '/';
  for (const [key, value] of Object.entries(resolvedPathParams)) {
    path = path.replaceAll(`{${key}}`, String(value));
  }
  const query = metadata.query || '';
  const queryPart = query ? (query.startsWith('?') ? query : `?${query}`) : '';
  const url = `${normalizedBase}${path}${queryPart}`;
  const headers: Record<string, string> = { ...(metadata.headers || {}) };
  if (context.authToken && !headers.authorization) {
    headers.authorization = context.authToken.startsWith('Bearer ')
      ? context.authToken
      : `Bearer ${context.authToken}`;
  }
  const body =
    metadata.body !== '' && metadata.body !== null && metadata.body !== undefined
      ? (typeof metadata.body === 'string' ? metadata.body : JSON.stringify(metadata.body))
      : undefined;

  const startedAt = Date.now();
  const response = await fetcher(url, {
    method: method || metadata.method,
    headers,
    body,
  });
  const durationMs = Date.now() - startedAt;
  const text = await response.text();
  let json: unknown = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = text;
  }

  return {
    status: response.status,
    durationMs,
    body: json,
    rawText: text,
  };
}
