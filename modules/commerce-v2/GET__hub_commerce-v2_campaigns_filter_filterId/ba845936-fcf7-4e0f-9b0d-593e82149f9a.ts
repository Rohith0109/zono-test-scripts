/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "ba845936-fcf7-4e0f-9b0d-593e82149f9a",
  "method": "GET",
  "endpoint": "GET /hub/commerce-v2/campaigns/filter/{filterId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "commerce-v2",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&pageNo=1&pageSize=40",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "assertions": {
    "expectedStatus": [
      400
    ],
    "requiredResponsePaths": [
      "$.statusCode",
      "$.message.method",
      "$.message.body",
      "$.message.query.pageNo",
      "$.message.query.pageSize",
      "$.message.url",
      "$.message.message"
    ],
    "ignoreResponsePaths": [
      "$.message.query.sellerWorkspaceId",
      "$.message.channelId",
      "$.message.requestId",
      "$.message.workspaceId",
      "$.timestamp"
    ],
    "equals": {}
  },
  "expectedStatus": 400,
  "responseSample": {
    "statusCode": 400,
    "message": {
      "method": "GET",
      "body": {},
      "query": {
        "pageNo": "1",
        "pageSize": "40",
        "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
      },
      "channelId": 13574,
      "requestId": "5c93fdd7-f5d8-494e-bf8f-b2b738bada62",
      "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
      "url": "/commerce-v2/campaigns/filter/be436b63-64ba-4f94-bfcf-3e3e0bc4e375?pageNo=1&pageSize=40&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
      "message": "Http Exception"
    },
    "timestamp": "2026-04-16T08:58:46.603Z"
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
