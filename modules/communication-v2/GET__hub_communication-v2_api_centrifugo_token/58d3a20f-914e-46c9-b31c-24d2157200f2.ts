/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "58d3a20f-914e-46c9-b31c-24d2157200f2",
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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjg5NzU0NC0zMmI2LTRhOTUtYWRkZi1jMmQ2NTZjZTA1YWMiLCJleHAiOjE3NzYzNzUxNTF9.W_Y3_RkPxODUQx-Fk7f4HWi50_eh4B6_6Gw1NTs-ZMM",
    "subscriptions": [
      {
        "channel": "inbox#c6897544-32b6-4a95-addf-c2d656ce05ac",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjg5NzU0NC0zMmI2LTRhOTUtYWRkZi1jMmQ2NTZjZTA1YWMiLCJjaGFubmVsIjoiaW5ib3gjYzY4OTc1NDQtMzJiNi00YTk1LWFkZGYtYzJkNjU2Y2UwNWFjIiwiZXhwIjoxNzc2Mzc1MTUxfQ.-V8tpIYnB4FZkxxmBhgda-DsY4X5MSL9OlGm5KrSuCM"
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
