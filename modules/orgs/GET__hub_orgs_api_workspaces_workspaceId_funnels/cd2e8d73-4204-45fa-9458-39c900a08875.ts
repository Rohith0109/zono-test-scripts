/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "cd2e8d73-4204-45fa-9458-39c900a08875",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/workspaces/{workspaceId}/funnels",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "pathParams": {
    "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
  },
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$.success",
      "$.data.funnels[0]"
    ],
    "ignoreResponsePaths": [],
    "equals": {
      "success": true
    }
  },
  "expectedStatus": 200,
  "responseSample": {
    "success": true,
    "data": {
      "funnels": [
        {
          "id": "f9338b29-fa87-4d98-bb12-752114f7f28e",
          "name": "Marketing",
          "type": "marketing",
          "sequence": 1,
          "has_groups": true,
          "group_count": 4,
          "customer_card_attributes": "[REDACTED]"
        },
        {
          "id": "1d7a972c-322d-41d7-8dca-55409bb133de",
          "name": "Sales",
          "type": "sales",
          "sequence": 2,
          "has_groups": true,
          "group_count": 4,
          "customer_card_attributes": "[REDACTED]"
        },
        {
          "id": "46be0078-c22f-48de-8ab2-738b3aef3ad8",
          "name": "Conversations",
          "type": "conversation",
          "sequence": 3,
          "has_groups": false,
          "group_count": 0,
          "customer_card_attributes": "[REDACTED]"
        },
        {
          "id": "b5e41a5f-1930-4310-af89-4d46ae834514",
          "name": "Summary",
          "type": "summary",
          "sequence": 5,
          "has_groups": false,
          "group_count": 0,
          "customer_card_attributes": "[REDACTED]"
        },
        {
          "id": "5a936bc4-a8ad-4d70-a281-136c94489ed5",
          "name": "Zotok",
          "type": "user_created",
          "sequence": 6,
          "has_groups": false,
          "group_count": 0,
          "customer_card_attributes": "[REDACTED]"
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
