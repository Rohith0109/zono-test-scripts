/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "ea3afac1-04bb-4823-8edf-0392a7fb0755",
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
    "startDate": "2026-03-17 00:00:00",
    "endDate": "2026-04-16 23:59:59",
    "groupBy": "overall"
  },
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
        "dateRange": "2026-03-17 00:00:00 - 2026-04-16 23:59:59",
        "orderSources": {
          "agent": {
            "value": 419122958,
            "percent": 30.64484650448222
          },
          "customer": {
            "value": 759735440,
            "percent": 55.54927378331601
          },
          "sales": {
            "value": 188820040,
            "percent": 13.805879712201765
          },
          "campaign": {
            "value": 0,
            "percent": 0
          }
        },
        "totalOrderValue": 1367678438
      }
    ],
    "updatedAt": "2026-04-15T23:50:27.696209"
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
