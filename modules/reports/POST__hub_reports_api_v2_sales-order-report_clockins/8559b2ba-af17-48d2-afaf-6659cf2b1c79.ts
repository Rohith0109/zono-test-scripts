/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "8559b2ba-af17-48d2-afaf-6659cf2b1c79",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/sales-order-report/clockins",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "startDate": "2026-04-12",
    "endDate": "2026-04-17",
    "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "pageSize": 20,
    "pageNo": 1,
    "orderBy": [
      {
        "column": "date",
        "order": "DESC"
      }
    ]
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.data[0].salesPersonsName",
      "$.data[0].sellerworkspacename",
      "$.data[0].checkins",
      "$.data[0].checkinIds",
      "$.data[0].noOfOrders",
      "$.data[0].totalSku",
      "$.data[0].orderIds",
      "$.data[0].cleanedSkuIds",
      "$.data[0].skuIds",
      "$.data[0].totalValue",
      "$.data[0].paymentCollected",
      "$.data[0].paymentCollectedByUpi",
      "$.data[0].paymentCollectedByCash",
      "$.data[0].paymentCollectedByCheque",
      "$.data[0].cleanedCustomerIds",
      "$.data[0].customerIds",
      "$.data[0].payments",
      "$.data[0].clockInLocationLat",
      "$.data[0].clockInLocationLng",
      "$.data[0].clockOutLocationLat",
      "$.data[0].clockOutLocationLng",
      "$.data[0].customers",
      "$.data[0].position",
      "$.data[0].name",
      "$.teamMember"
    ],
    "ignoreResponsePaths": [
      "$.data[0].updatedAt",
      "$.data[0].date",
      "$.data[0].salesTeamMemberId",
      "$.data[0].clockInTime",
      "$.data[0].clockOutTime"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "data": [
      {
        "updatedAt": "2026-04-13T10:01:06.418568",
        "date": "2026-04-13",
        "salesTeamMemberId": "ce4192c5-370b-4585-919a-f5cc0d04074d",
        "salesPersonsName": "sridhar",
        "sellerworkspacename": null,
        "checkins": "0",
        "checkinIds": null,
        "noOfOrders": "0",
        "totalSku": 0,
        "orderIds": null,
        "cleanedSkuIds": null,
        "skuIds": null,
        "totalValue": null,
        "paymentCollected": null,
        "paymentCollectedByUpi": null,
        "paymentCollectedByCash": null,
        "paymentCollectedByCheque": null,
        "cleanedCustomerIds": null,
        "customerIds": null,
        "payments": "0",
        "clockInTime": "2026-04-13T11:05:57",
        "clockOutTime": null,
        "clockInLocationLat": "17.4211596",
        "clockInLocationLng": "78.3477874",
        "clockOutLocationLat": null,
        "clockOutLocationLng": null,
        "customers": 0,
        "position": 1,
        "name": "sridhar"
      }
    ],
    "teamMember": {},
    "totalSalesPersons": 1,
    "totalCustomers": 3,
    "totalSku": 2,
    "totalOrders": 1,
    "totalPayments": 0,
    "totalOrderValue": 3871980,
    "totalPaymentCollected": 0,
    "totalPaymentCollectedByUpi": 0,
    "totalPaymentCollectedByCash": 0,
    "totalPaymentCollectedByCheque": 0,
    "totalCheckins": 0,
    "updatedAt": "2026-04-15T23:53:59.008546",
    "totalRecords": 1,
    "startRecord": 1,
    "endRecord": 1
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
