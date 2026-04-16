/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "a8155f49-0b16-4193-9857-62a89a2e15be",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/sales-order-report/leader-board",
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
      "$.data[0].totalSku",
      "$.data[0].skuIds",
      "$.data[0].customerIds",
      "$.data[0].cleanedSkuIds",
      "$.data[0].cleanedCustomerIds",
      "$.data[0].orderIds",
      "$.data[0].checkinIds",
      "$.data[0].checkins",
      "$.data[0].noOfOrders",
      "$.data[0].totalValue",
      "$.data[0].payments",
      "$.data[0].paymentCollected",
      "$.data[0].paymentCollectedByUpi",
      "$.data[0].paymentCollectedByCash",
      "$.data[0].paymentCollectedByCheque",
      "$.data[0].customers",
      "$.data[0].position",
      "$.data[0].name",
      "$.teamMember",
      "$.totalSalesPersons",
      "$.totalCustomers",
      "$.totalSku",
      "$.totalOrders",
      "$.totalPayments",
      "$.totalOrderValue",
      "$.totalPaymentCollected"
    ],
    "ignoreResponsePaths": [
      "$.data[0].updatedAt",
      "$.data[0].salesTeamMemberId"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "data": [
      {
        "updatedAt": "2026-04-13T23:05:50.879470",
        "salesTeamMemberId": "ce4192c5-370b-4585-919a-f5cc0d04074d",
        "salesPersonsName": "sridhar",
        "sellerworkspacename": null,
        "totalSku": 6,
        "skuIds": null,
        "customerIds": "92eb6a3e-3a9e-4433-8ded-7379eff70ac0, f13dee04-26e0-4a65-bc01-32f08ec7c7c8, b97c39de-9994-4fdb-a9c3-36f43c6c2f86, 8123e09a-eae6-4f8b-85ef-6a717ea09f68, 29a19a53-a264-4a13-a2cf-7aabfe11fedf",
        "cleanedSkuIds": "552277-06,225566-05,CROI913,344/DHN-33,BDD-KDN/PEL,CROI344",
        "cleanedCustomerIds": "44618c77-3def-4108-88e1-2100c4519214,4b4df458-ca06-4e9f-8db0-537bf641415f,4b4df458-ca06-4e9f-8db0-537bf641415f,29a19a53-a264-4a13-a2cf-7aabfe11fedf,8123e09a-eae6-4f8b-85ef-6a717ea09f68,b97c39de-9994-4fdb-a9c3-36f43c6c2f86,92eb6a3e-3a9e-4433-8ded-7379eff70ac0,f13dee04-26e0-4a65-bc01-32f08ec7c7c8,b97c39de-9994-4fdb-a9c3-36f43c6c2f86,8123e09a-eae6-4f8b-85ef-6a717ea09f68,29a19a53-a264-4a13-a2cf-7aabfe11fedf",
        "orderIds": "54310,54370",
        "checkinIds": ",1837f938-4c89-43e1-bc2e-7b5887adf6e1,60e189ca-855f-4c13-b738-9bb07302aa1b,8b19bf60-89fd-4419-8c4e-d25213c7b194,8deb9631-da14-4c4c-9cb6-313c7b534d77,92543d21-4a12-4302-bbc7-6401b7059bac,983c9975-b576-4564-acda-cfe4aed50c5e,9f5b3d57-78fe-4e1c-939c-b23fd9304ffb,d6492627-41eb-48be-9eb6-708995fbb41d,4e54ede8-5089-4664-bb6b-d2d9d431310e,5ebee2bf-c514-4d37-a392-a09e0429a8de,9f6d96a8-f337-4986-9b8e-f1956a3ae7e7,c2086c75-47cf-4130-9bcf-d3fdd612a599",
        "checkins": "12",
        "noOfOrders": "2",
        "totalValue": "3998680.000000000",
        "payments": "0",
        "paymentCollected": "0",
        "paymentCollectedByUpi": "0",
        "paymentCollectedByCash": "0",
        "paymentCollectedByCheque": "0",
        "customers": 7,
        "position": 1,
        "name": "sridhar"
      }
    ],
    "teamMember": {},
    "totalSalesPersons": 1,
    "totalCustomers": 7,
    "totalSku": 6,
    "totalOrders": 2,
    "totalPayments": 0,
    "totalOrderValue": 3998680,
    "totalPaymentCollected": 0,
    "totalPaymentCollectedByUpi": 0,
    "totalPaymentCollectedByCash": 0,
    "totalPaymentCollectedByCheque": 0,
    "totalCheckins": 0,
    "updatedAt": "2026-04-16T19:56:00.752145",
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
