/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "bf755c91-84d6-449d-ae9d-29b8b4f8f160",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/revenue-by-source",
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
    "startDate": "2026-03-18 00:00:00",
    "endDate": "2026-04-17 23:59:59",
    "groupBy": "overall"
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.data[0].orderSources",
      "$.data[0].totalOrderValue"
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
        "dateRange": "2026-03-18 00:00:00 - 2026-04-17 23:59:59",
        "orderSources": {
          "agent": {
            "value": 425693568,
            "percent": 30.950117800094795
          },
          "customer": {
            "value": 760777940,
            "percent": 55.31247975706659
          },
          "sales": {
            "value": 188946740,
            "percent": 13.737402442838608
          },
          "campaign": {
            "value": 0,
            "percent": 0
          }
        },
        "totalOrderValue": 1375418248
      }
    ],
    "updatedAt": "2026-04-16T19:51:52.819710"
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
