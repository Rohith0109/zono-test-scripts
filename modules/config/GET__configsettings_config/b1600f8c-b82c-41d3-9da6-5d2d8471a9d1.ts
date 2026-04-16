/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "b1600f8c-b82c-41d3-9da6-5d2d8471a9d1",
  "method": "GET",
  "endpoint": "GET /configsettings/config",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "config",
  "query": "?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&module=Catalogue&rollback=false",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$.config.catalogueView",
      "$.config.displayOutOfStock",
      "$.config.productDetailsPage",
      "$.config.productDetailsView",
      "$.config.displayCataloguePrices",
      "$.config.displayPricesInCatalogue",
      "$.config.displayOutOfStockTagIfStockIsNotAvailable",
      "$.module"
    ],
    "ignoreResponsePaths": [
      "$.id",
      "$.createdDate",
      "$.updatedDate",
      "$.workspaceId",
      "$.divisionId",
      "$.customerGroupId",
      "$.customerId",
      "$.teamMemberId"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": {
    "id": "afe6db75-9651-4267-ab04-cc7206ee2b8d",
    "createdDate": "2025-07-02T05:22:11.762Z",
    "updatedDate": "2026-04-09T10:31:56.000Z",
    "config": {
      "catalogueView": "ListWithImagesView",
      "displayOutOfStock": "false",
      "productDetailsPage": "VariantView",
      "productDetailsView": "FacetView",
      "displayCataloguePrices": "true",
      "displayPricesInCatalogue": "true",
      "displayOutOfStockTagIfStockIsNotAvailable": "true"
    },
    "module": "Catalogue",
    "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "divisionId": null,
    "customerGroupId": null,
    "customerId": null,
    "teamMemberId": null
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
