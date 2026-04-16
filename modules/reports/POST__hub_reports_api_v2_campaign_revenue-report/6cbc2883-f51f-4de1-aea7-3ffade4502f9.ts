/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "6cbc2883-f51f-4de1-aea7-3ffade4502f9",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/campaign/revenue-report",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "startDate": "2026-03-17 00:00:00",
    "endDate": "2026-04-16 23:59:59"
  },
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.data[0].orderValue"
    ],
    "ignoreResponsePaths": [
      "$.data[0].dateRange",
      "$.updatedAt"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "data": [
      {
        "dateRange": "2026-03-17 - 2026-03-21",
        "orderValue": 0
      },
      {
        "dateRange": "2026-03-22 - 2026-03-26",
        "orderValue": 0
      },
      {
        "dateRange": "2026-03-27 - 2026-03-31",
        "orderValue": 0
      },
      {
        "dateRange": "2026-04-01 - 2026-04-05",
        "orderValue": 0
      },
      {
        "dateRange": "2026-04-06 - 2026-04-10",
        "orderValue": 0
      },
      {
        "dateRange": "2026-04-11 - 2026-04-15",
        "orderValue": 0
      },
      {
        "dateRange": "2026-04-16 - 2026-04-16",
        "orderValue": 0
      }
    ],
    "updatedAt": "2026-03-16T07:06:18.786831"
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
