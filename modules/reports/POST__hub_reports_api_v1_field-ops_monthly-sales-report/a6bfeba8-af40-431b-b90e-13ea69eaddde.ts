/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "a6bfeba8-af40-431b-b90e-13ea69eaddde",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v1/field-ops/monthly-sales-report",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "month": "2026-04",
    "routeId": "5464c80b-6b8c-408b-bfd7-c291d0447450"
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.route.name",
      "$.route.route[0]",
      "$.route.metrics.totalSales",
      "$.route.metrics.totalSalesPercentInc",
      "$.route.metrics.totalSalesValue",
      "$.route.metrics.totalSalesValuePercentInc",
      "$.route.metrics.totalFieldSales",
      "$.route.metrics.totalFieldSalesPercentInc",
      "$.route.metrics.totalFieldSalesValue",
      "$.route.metrics.totalFieldSalesValuePercentInc",
      "$.route.metrics.totalInvoices",
      "$.route.metrics.totalInvoicesPercentInc",
      "$.route.metrics.totalInvoiceValue",
      "$.route.metrics.totalInvoiceValuePercentInc",
      "$.route.metrics.meetingsPlanned",
      "$.route.metrics.meetingsPlannedPercentInc",
      "$.route.metrics.meetingsAchieved",
      "$.route.metrics.meetingsAchievedPercentInc",
      "$.route.metrics.prevTotalSales",
      "$.route.metrics.prevTotalSalesValue",
      "$.route.metrics.prevTotalFieldSales",
      "$.route.metrics.prevTotalFieldSalesValue",
      "$.route.metrics.prevTotalInvoices",
      "$.route.metrics.prevTotalInvoiceValue",
      "$.route.metrics.prevMeetingsPlanned",
      "$.route.metrics.prevMeetingsAchieved"
    ],
    "ignoreResponsePaths": [],
    "equals": {}
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
