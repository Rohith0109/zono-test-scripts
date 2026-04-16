/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "c250a252-2bed-4a13-b2a4-6263fe31b202",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/salesmen-checkins-report",
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
    "filters": {},
    "orderBy": [
      {
        "column": "visitedDate",
        "order": "DESC"
      }
    ]
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [],
    "ignoreResponsePaths": [],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": "{\"data\":[{\"updatedAt\":\"2026-04-16T19:52:31.299073\",\"checkInDate\":\"2026-04-16T17:54:20\",\"customerId\":\"29a19a53-a264-4a13-a2cf-7aabfe11fedf\",\"orderIds\":null,\"checkinStatus\":\"unavailable\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Vaishnavi\",\"customerName\":\"Vaishnavi\",\"checkinIds\":\"c2086c75-47cf-4130-9bcf-d3fdd612a599\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-16T19:52:31.299073\",\"checkInDate\":\"2026-04-16T16:22:16\",\"customerId\":\"4b4df458-ca06-4e9f-8db0-537bf641415f\",\"orderIds\":\"54370\",\"checkinStatus\":\"unavailable\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"optimus\",\"customerName\":\"bumbleBee\",\"checkinIds\":\"9f6d96a8-f337-4986-9b8e-f1956a3ae7e7\",\"checkins\":\"1\",\"noOfOrders\":\"1\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-15T23:51:07.283549\",\"checkInDate\":\"2026-04-15T12:11:35\",\"customerId\":\"29a19a53-a264-4a13-a2cf-7aabfe11fedf\",\"orderIds\":null,\"checkinStatus\":\"unavailable\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Vaishnavi\",\"customerName\":\"Vaishnavi\",\"checkinIds\":\"227e764d-6f07-459c-8363-6d85f25938ab\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-15T23:51:07.283549\",\"checkInDate\":\"2026-04-15T12:02:21\",\"customerId\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"orderIds\":null,\"checkinStatus\":\"incorrect\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Gowtham Menni\",\"customerName\":\"Gowtham\",\"checkinIds\":\"5ebee2bf-c514-4d37-a392-a09e0429a8de\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-15T23:51:07.283549\",\"checkInDate\":\"2026-04-15T12:00:30\",\"customerId\":\"8123e09a-eae6-4f8b-85ef-6a717ea09f68\",\"orderIds\":null,\"checkinStatus\":\"unavailable\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"gowtham\",\"customerName\":\"gowtham\",\"checkinIds\":\"4e54ede8-5089-4664-bb6b-d2d9d431310e\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-14T23:55:06.785310\",\"checkInDate\":\"2026-04-14T18:15:50\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"orderIds\":\"54310\",\"checkinStatus\":\"correct\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Zotokqa8\",\"customerName\":\"Zotokqa8\",\"checkinIds\":\"071b3fc5-619e-495e-8ee2-166263153c08\",\"checkins\":\"1\",\"noOfOrders\":\"1\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-14T23:55:06.785310\",\"checkInDate\":\"2026-04-14T18:09:44\",\"customerId\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"orderIds\":null,\"checkinStatus\":\"incorrect\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Gowtham Menni\",\"customerName\":\"Gowtham\",\"checkinIds\":\"9590a21f-4f12-4f57-8d04-4ea82b79e2b1\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-14T23:55:06.785310\",\"checkInDate\":\"2026-04-14T17:27:34\",\"customerId\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"orderIds\":null,\"checkinStatus\":\"incorrect\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Gowtham Menni\",\"customerName\":\"Gowtham\",\"checkinIds\":\"556b688c-5fff-4bf4-8111-97f461291ce6\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-13T23:58:31.701934\",\"checkInDate\":\"2026-04-13T17:54:52\",\"customerId\":\"f13dee04-26e0-4a65-bc01-32f08ec7c7c8\",\"orderIds\":null,\"checkinStatus\":\"unavailable\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Sai\",\"customerName\":\"Sai\",\"checkinIds\":\"60e189ca-855f-4c13-b738-9bb07302aa1b\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-13T23:58:31.701934\",\"checkInDate\":\"2026-04-13T17:53:36\",\"customerId\":\"29a19a53-a264-4a13-a2cf-7aabfe11fedf\",\"orderIds\":null,\"checkinStatus\":\"unavailable\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Vaishnavi\",\"customerName\":\"Vaishnavi\",\"checkinIds\":\"d6492627-41eb-48be-9eb6-708995fbb41d\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-13T23:58:31.701934\",\"checkInDate\":\"2026-04-13T17:52:46\",\"customerId\":\"29a19a53-a264-4a13-a2cf-7aabfe11fedf\",\"orderIds\":null,\"checkinStatus\":\"unavailable\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Vaishnavi\",\"customerName\":\"Vaishnavi\",\"checkinIds\":\"983c9975-b576-4564-acda-cfe4aed50c5e\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-13T23:58:31.701934\",\"checkInDate\":\"2026-04-13T17:51:43\",\"customerId\":\"8123e09a-eae6-4f8b-85ef-6a717ea09f68\",\"orderIds\":null,\"checkinStatus\":\"unavailable\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"gowtham\",\"customerName\":\"gowtham\",\"checkinIds\":\"8deb9631-da14-4c4c-9cb6-313c7b534d77\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-13T23:58:31.701934\",\"checkInDate\":\"2026-04-13T17:40:37\",\"customerId\":\"92eb6a3e-3a9e-4433-8ded-7379eff70ac0\",\"orderIds\":null,\"checkinStatus\":\"unavailable\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Nitin Padmawar\",\"customerName\":\"Nitin Padmawar\",\"checkinIds\":\"1837f938-4c89-43e1-bc2e-7b5887adf6e1\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-13T23:58:31.701934\",\"checkInDate\":\"2026-04-13T17:26:49\",\"customerId\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"orderIds\":null,\"checkinStatus\":\"incorrect\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Gowtham Menni\",\"customerName\":\"Gowtham\",\"checkinIds\":\"8b19bf60-89fd-4419-8c4e-d25213c7b194\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-13T23:58:31.701934\",\"checkInDate\":\"2026-04-13T15:42:02\",\"customerId\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"orderIds\":null,\"checkinStatus\":\"incorrect\",\"salesTeamMemberId\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"salesPersonsName\":\"sridhar\",\"customerFirmName\":\"Gowtham Menni\",\"customerName\":\"Gowtham\",\"checkinIds\":\"92543d21-4a12-4302-bbc7-6401b7059bac\",\"checkins\":\"1\",\"noOfOrders\":\"0\",\"payments\":\"0\",\"paymentCollected\":\"0\",\"paymentCollectedByUpi\":\"0\",\"paymentCollectedByCash\":\"0\",\"paymentCollectedByCheque\":\"0\"},{\"updatedAt\":\"2026-04-13T23:58:31.701934\",\"checkInDate\":\"2026-04-13T11:06:17\",\"customerId\":\"29a19a53-a264-4a13-a2cf-7aabfe11fedf\",\"orderIds\":null,\"checkinStatus\":\"unavailable\",\"salesTeamMemberId\":\"ce4...[TRUNCATED]",
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
