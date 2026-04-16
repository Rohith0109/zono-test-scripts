/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "923904bf-c577-4f05-aadc-5bab1738bb50",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/cfa-product-wise-order-grouping-report/filter",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "startDate": "2026-04-12",
    "endDate": "2026-04-17",
    "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "isSeller": true
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.fulfillments[0].cfaName"
    ],
    "ignoreResponsePaths": [
      "$.fulfillments[0].cfaId"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "fulfillments": [
      {
        "cfaId": "00419f39-8845-4103-b96f-03786e99d423",
        "cfaName": "CFA-141052"
      },
      {
        "cfaId": "1229236f-b697-44b6-ae5f-7c04b3ec1d2e",
        "cfaName": "Vijayawada"
      },
      {
        "cfaId": "17404347-ccd3-424b-bca6-6cc1d42affb5",
        "cfaName": "Testing 3636"
      },
      {
        "cfaId": "40a914c1-4dcf-429f-a019-58cf1f2a7f49",
        "cfaName": "Default-CFA"
      },
      {
        "cfaId": "59cdb393-2af6-42d9-b3c6-eced0869e6e6",
        "cfaName": "Steel "
      },
      {
        "cfaId": "79dd8802-3118-4850-ac33-3a8b8e191010",
        "cfaName": "BirlaNu CFA"
      },
      {
        "cfaId": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "cfaName": "Apparels CFA"
      },
      {
        "cfaId": "8c7ce6dd-35ae-4b90-8d66-8526972bc7a8",
        "cfaName": "Manish plywood CFA"
      },
      {
        "cfaId": "a5dd64db-0121-4355-8ba5-6222d7a1d266",
        "cfaName": "Crocodile_KB"
      },
      {
        "cfaId": "b87fc61e-a3ea-406c-b886-41bc49887c71",
        "cfaName": "CFA-145144"
      },
      {
        "cfaId": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "cfaName": "Crocodile CFA"
      },
      {
        "cfaId": "c4bf452e-a601-48f4-8c59-d4d50af1851e",
        "cfaName": "Plywood CFA"
      },
      {
        "cfaId": "c8f8feb9-f705-4d62-a938-ff1f692551e8",
        "cfaName": "Test CFA"
      },
      {
        "cfaId": "e281af2b-26c8-405d-82c4-a29071a341ee",
        "cfaName": "Testing CFA 200"
      },
      {
        "cfaId": "eedd7f1f-870c-4d26-bbd1-e012bfabf815",
        "cfaName": "Fertilizers"
      },
      {
        "cfaId": "f307179c-65d0-4f70-a724-d6767882d68f",
        "cfaName": "Snacks"
      },
      {
        "cfaId": "fdd94b97-e2e2-439c-b7b3-01805f3f9e70",
        "cfaName": "CFA Hyd"
      },
      {
        "cfaId": "2c31f3a1-d95b-4d8f-b7ca-949990b97ecd",
        "cfaName": "Test FL-111"
      },
      {
        "cfaId": "a34610f0-657b-407b-be9e-62c6e23f0fbe",
        "cfaName": "Shobavat CFA"
      },
      {
        "cfaId": "e8193bc2-716e-4c93-9c26-60326dd47c8d",
        "cfaName": "Hyderabad"
      },
      {
        "cfaId": "01fc404f-8688-45be-9037-db36f0001677",
        "cfaName": "CFA DIST445"
      }
    ]
  },
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
