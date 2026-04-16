/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "26a4384a-3569-4a0d-add7-b0eedfabfa85",
  "method": "POST",
  "endpoint": "POST /hub/orgs/api/docs/zo-file/list/{listId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "documentType": "drive"
  },
  "pathParams": {
    "listId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
  },
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.data.files[0]"
    ],
    "ignoreResponsePaths": [],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "data": {
      "files": [
        {
          "id": "",
          "name": "customers",
          "isDir": true,
          "documentType": "customers"
        },
        {
          "id": "",
          "name": "dispatch",
          "isDir": true,
          "documentType": "dispatch"
        },
        {
          "id": "",
          "name": "erp-sync",
          "isDir": true,
          "documentType": "erp-sync"
        },
        {
          "id": "",
          "name": "invoice",
          "isDir": true,
          "documentType": "invoice"
        },
        {
          "id": "",
          "name": "knowledge",
          "isDir": true,
          "documentType": "knowledge"
        },
        {
          "id": "",
          "name": "orders",
          "isDir": true,
          "documentType": "orders"
        },
        {
          "id": "",
          "name": "payment",
          "isDir": true,
          "documentType": "payment"
        },
        {
          "id": "",
          "name": "products",
          "isDir": true,
          "documentType": "products"
        },
        {
          "id": "",
          "name": "reports",
          "isDir": true,
          "documentType": "reports"
        },
        {
          "id": "",
          "name": "template",
          "isDir": true,
          "documentType": "template"
        },
        {
          "id": "",
          "name": "templates",
          "isDir": true,
          "documentType": "templates"
        },
        {
          "id": "",
          "name": "turnover_schemes",
          "isDir": true,
          "documentType": "turnover_schemes"
        }
      ]
    }
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
