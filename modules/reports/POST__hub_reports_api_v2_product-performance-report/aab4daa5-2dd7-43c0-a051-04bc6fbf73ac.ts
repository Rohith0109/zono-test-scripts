/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "aab4daa5-2dd7-43c0-a051-04bc6fbf73ac",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/product-performance-report",
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
    "sortDirection": "DESC",
    "pageNo": 1,
    "pageSize": 20,
    "filters": {},
    "startDate": "2026-04-12",
    "endDate": "2026-04-17"
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.data[0].sNo",
      "$.data[0].sku",
      "$.data[0].facetDetails",
      "$.data[0].productname",
      "$.data[0].Category",
      "$.data[0].Division",
      "$.data[0].quantity",
      "$.data[0].maximumprice",
      "$.data[0].minimumprice",
      "$.data[0].asp",
      "$.data[0].totalOrders",
      "$.data[0].totalValue",
      "$.totalOrders",
      "$.totalSkus",
      "$.totalCategories",
      "$.totalDivisions",
      "$.totalQuantitySold",
      "$.totalSalesValue",
      "$.averageSellingPrice",
      "$.totalRecords",
      "$.startRecord",
      "$.endRecord"
    ],
    "ignoreResponsePaths": [
      "$.data[0].productvariantid",
      "$.data[0].cfaid",
      "$.data[0].sellerworkspaceid",
      "$.updatedAt"
    ],
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
