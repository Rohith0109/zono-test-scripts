/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "ea0defb8-3834-429d-bdfe-12e0dd047e63",
  "method": "GET",
  "endpoint": "GET /hub/communication-v2/api/centrifugo/token",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "communication-v2",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
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
      "$.websocketUrl",
      "$.subscriptions[0].channel"
    ],
    "ignoreResponsePaths": [
      "$.userId",
      "$.sellerWorkspaceId",
      "$.token",
      "$.subscriptions[0].token"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": {
    "userId": "c6897544-32b6-4a95-addf-c2d656ce05ac",
    "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "websocketUrl": "wss://api-qa.zotok.ai/centrifugo/connection/websocket",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjg5NzU0NC0zMmI2LTRhOTUtYWRkZi1jMmQ2NTZjZTA1YWMiLCJleHAiOjE3NzY0MDk1Mzl9.9eDRIepR9GhLpJdj94H0cw7cd8syWOouKXiaMMvScVA",
    "subscriptions": [
      {
        "channel": "inbox#c6897544-32b6-4a95-addf-c2d656ce05ac",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjg5NzU0NC0zMmI2LTRhOTUtYWRkZi1jMmQ2NTZjZTA1YWMiLCJjaGFubmVsIjoiaW5ib3gjYzY4OTc1NDQtMzJiNi00YTk1LWFkZGYtYzJkNjU2Y2UwNWFjIiwiZXhwIjoxNzc2NDA5NTM5fQ.QrRVqkiXWcXRf5tR29o3ss0UUn1VOO91JZT_mcFCeXg"
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
