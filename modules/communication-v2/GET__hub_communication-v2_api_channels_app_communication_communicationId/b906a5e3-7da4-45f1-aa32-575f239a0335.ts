/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "b906a5e3-7da4-45f1-aa32-575f239a0335",
  "method": "GET",
  "endpoint": "GET /hub/communication-v2/api/channels/app/communication/{communicationId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "communication-v2",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "cache-control": "no-cache"
  },
  "body": "",
  "pathParams": {
    "communicationId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
  },
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$.NotificationPreferences[0].partyType",
      "$.NotificationPreferences[0].isEmail",
      "$.NotificationPreferences[0].isSms",
      "$.NotificationPreferences[0].isWeb",
      "$.NotificationPreferences[0].isNative",
      "$.NotificationPreferences[0].isPartailEnabled",
      "$.NotificationPreferences[0].isWhatsappNotificationEnabled"
    ],
    "ignoreResponsePaths": [
      "$.workspaceId",
      "$.userId",
      "$.NotificationPreferences[0].appId"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": {
    "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "userId": "c6897544-32b6-4a95-addf-c2d656ce05ac",
    "NotificationPreferences": [
      {
        "appId": "ORDAPP01",
        "partyType": "SELLER",
        "isEmail": false,
        "isSms": false,
        "isWeb": false,
        "isNative": false,
        "isPartailEnabled": false,
        "isWhatsappNotificationEnabled": false
      },
      {
        "appId": "zo-ai",
        "partyType": "SELLER",
        "isEmail": false,
        "isSms": false,
        "isWeb": false,
        "isNative": false,
        "isPartailEnabled": false,
        "isWhatsappNotificationEnabled": false
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
