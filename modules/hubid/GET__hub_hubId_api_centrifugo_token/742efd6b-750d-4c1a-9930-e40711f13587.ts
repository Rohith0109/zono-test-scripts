/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "742efd6b-750d-4c1a-9930-e40711f13587",
  "method": "GET",
  "endpoint": "GET /hub/{hubId}/api/centrifugo/token",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "-hubid-",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjg5NzU0NC0zMmI2LTRhOTUtYWRkZi1jMmQ2NTZjZTA1YWMiLCJleHAiOjE3NzYzMzMwNTZ9.jhkr-dMmaW2QrnjqcFakdHy4c-W67WnfKx1HmQykD8A",
    "subscriptions": [
      {
        "channel": "inbox#c6897544-32b6-4a95-addf-c2d656ce05ac",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjg5NzU0NC0zMmI2LTRhOTUtYWRkZi1jMmQ2NTZjZTA1YWMiLCJjaGFubmVsIjoiaW5ib3gjYzY4OTc1NDQtMzJiNi00YTk1LWFkZGYtYzJkNjU2Y2UwNWFjIiwiZXhwIjoxNzc2MzMzMDU2fQ.MKQMxOM-RZ29yh79PiLoPnSafaJBef4_E2t2vU_b2s4"
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
  fetchImpl?: typeof fetch;
}) {
  const fetcher = context.fetchImpl || fetch;
  const normalizedBase = context.baseUrl.endsWith('/')
    ? context.baseUrl.slice(0, -1)
    : context.baseUrl;
  const [method, ...pathParts] = metadata.endpoint.split(' ');
  const path = pathParts.join(' ').trim() || '/';
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
