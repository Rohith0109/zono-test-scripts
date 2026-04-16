/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "63fecc4f-c809-45e7-a884-8fe32462e146",
  "method": "POST",
  "endpoint": "POST /hub/orgs/api/customer-group/conversations/{conversationId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?pageNo=1&pageSize=20&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "pageNo": 1,
    "pageSize": 20,
    "status": [],
    "tag": [],
    "teamMemberIds": [],
    "conversationPageNo": 1,
    "conversationPageSize": 4
  },
  "pathParams": {
    "conversationId": "40f1c302-da31-4edf-9cc0-82f786878026"
  },
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [],
    "ignoreResponsePaths": [],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": "{\"customerGroupMembers\":[{\"id\":\"a0da988c-b196-4c15-b406-be981e6c29f1\",\"customerId\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"a0da988c-b196-4c15-b406-be981e6c29f1\",\"_score\":null,\"name\":\"Gowtham\",\"companyName\":\"Gowtham Menni\",\"phone\":\"918971344841\",\"mobile\":\"918971344841\",\"address\":null,\"distributorCode\":\"5eaac1c8-8dce-47cb-b4ea-f290f72fd161\",\"email\":null,\"customerCode\":null,\"gstin\":\"37AAACB2100P1ZW\",\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[{\"attributeId\":\"40876623-cf6a-4e5f-8c7c-bde68d6e4a80\",\"attributeName\":\"T3\",\"value\":[\"3\"]},{\"attributeId\":\"6f7a0aa7-7687-4bf4-8a63-a490d0701342\",\"attributeName\":\"testingDropdown1\",\"value\":\"select1\"},{\"attributeId\":\"419712d4-a511-4721-9b8e-0ce4d3df944f\",\"attributeName\":\"Vehicle Type\",\"value\":[\"4 Wheeler\"]},{\"attributeId\":\"97a00b57-d270-4993-bdc9-6f85828f4434\",\"attributeName\":\"servicablePincodes\",\"value\":[\"510201\"]},{\"attributeId\":\"032791d1-878f-419a-a5eb-d0cefdd0f2b2\",\"attributeName\":\"Location\",\"value\":\"Hyderabad\"},{\"attributeId\":\"8669b55b-8b00-4489-b587-9372891b13af\",\"attributeName\":\"T1\",\"value\":[\"2\"]},{\"attributeId\":\"f0b3cc85-942f-11f0-83df-02b2e930e7e7\",\"attributeName\":\"Pincodes\",\"value\":[\"152015\"]},{\"attributeId\":\"02197cb2-0c43-4c43-8196-c6ef6e70154a\",\"attributeName\":\"Loyalty Points\",\"value\":1500},{\"attributeId\":\"23b9fc51-5423-4274-ae26-6713e88c1d51\",\"attributeName\":\"city\",\"value\":\"Hyderabad\"}],\"cfas\":[{\"supplierName\":\"Testing CFA 200\",\"fulfillmentLocationId\":\"e281af2b-26c8-405d-82c4-a29071a341ee\",\"fulfillmentLocationCode\":\"1405226\"},{\"supplierName\":\"Apparels CFA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"fulfillmentLocationCode\":\"62320\"},{\"supplierName\":\"Test FL-111\",\"fulfillmentLocationId\":\"2c31f3a1-d95b-4d8f-b7ca-949990b97ecd\",\"fulfillmentLocationCode\":\"1510026\"}],\"assignedMembers\":[{\"isArchive\":0,\"phone\":\"911234472982\",\"senderUserId\":\"d3913023-53cf-45af-90c1-53d15ec797f1\",\"invitedUserId\":\"d3913023-53cf-45af-90c1-53d15ec797f1\",\"memberName\":\"Team\",\"inviteType\":\"team\",\"id\":\"844a9055-c544-440b-b64c-5cba03d9f021\",\"isActive\":1,\"employeeCode\":\"251260\"},{\"isArchive\":0,\"phone\":\"912320211141\",\"senderUserId\":\"83be5f4f-37da-4178-a9d6-a640c20aa7ee\",\"invitedUserId\":\"83be5f4f-37da-4178-a9d6-a640c20aa7ee\",\"memberName\":\"Test Team 33300\",\"inviteType\":\"team\",\"id\":\"888de6d1-ffbd-4cd7-8bc8-f5cab5cf6634\",\"isActive\":1,\"employeeCode\":\"41000\"}],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"2b15e332-7450-4fb7-9f65-0c9d2da28029\",\"customerId\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"false\",\"summary\":\"No conversation provided\",\"createdAt\":\"2026-04-16T11:05:53.661Z\",\"lastMessageAt\":\"2026-04-16T14:22:11.373Z\",\"metadata\":{\"tags\":[\"query\"]}},{\"id\":\"cf2efa8c-b30b-4c0b-948f-efe4c06bca96\",\"customerId\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Assigned\",\"isAssigned\":true,\"lastMessage\":\"false\",\"summary\":\"Customer requests payment advice\",\"createdAt\":\"2026-04-16T08:58:44.280Z\",\"lastMessageAt\":\"2026-04-16T10:52:41.883Z\",\"metadata\":{\"assignedTo\":[{\"teamMemberName\":\"Rohith\",\"teamMemberId\":\"cffad34d-b335-428c-8a61-58d40b5ad5ea\",\"role\":\"viewer\"}],\"tags\":[\"payment\",\"query\",\"gowtham\"],\"status\":\"Assigned\"}},{\"id\":\"505d0523-3440-4605-b176-ed44c52d66de\",\"customerId\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Assigned\",\"isAssigned\":true,\"lastMessage\":\"false\",\"createdAt\":\"2026-04-15T10:48:18.531Z\",\"lastMessageAt\":\"2026-04-16T07:17:28.793Z\",\"metadata\":{\"assignedTo\":[{\"teamMemberName\":\"Shiva kumar 120111\",\"teamMemberId\":\"be45b221-e715-491c-bf6a-1543a8e272c8\",\"role\":\"viewer\"}],\"tags\":[\"jjjjj\",\"create Order\"],\"status\":\"Assigned\"}},{\"id\":\"96d101db-291d-408f-897a-f9da9d131eaf\",\"customerId\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"false\",\"createdAt\":\"2026-04-14T10:28:16.242Z\",\"lastMessageAt\":\"2026-04-15T10:18:44.056Z\",\"metadata\":{\"tags\":[]}}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":4,\"conversationTotalPages\":1,\"conversationTotalRecords\":4},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":4,\"conversationStartRecord\":1,\"conversationEndRecord\":4,\"conversationTotalPages\":1},{\"id\":\"0abc88d3-88a2-48a9-8a12-c54bfe145b01\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"0abc88d3-88a2-48a9-8a12-c54bfe145b01\",\"_score\":null,\"name\":\"Zotokqa8\",\"companyName\":\"Zotokqa8\",\"phone\":\"917075852507\",\"mobile\":\"917075852507\",\"address\":null,\"distributorCode\":\"88a523ad-2639-4fd0-9176-41cb4196db89\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[{\"attributeId\":\"02197cb2-0c43-4c43-8196-c6ef6e70154a\",\"attributeName\":\"Loyalty Points\",\"value\":1000},{\"attributeId\":\"97a00b57-d270-4993-bdc9-6f85828f4434\",\"attributeName\":\"servicablePincodes\",\"value\":[\"500060\"]}],\"cfas\":[{\"supplierName\":\"Apparels CFA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"fulfillmentLocationCode\":\"62320\"},{\"supplierName\":\"Test444\",\"fulfillmentLocationId\":\"48a3fbe2-00c0-459a-a244-a34a01db17a8\",\"fulfillmentLocationCode\":\"263266\"},{\"supplierName\":\"Default-CFA\",\"fulfillmentLocationId\":\"40a914c1-4dcf-429f-a019-58cf1f2a7f49\",\"fulfillmentLocationCode\":\"default-cfa\"}],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"ede38d6c-21c0-4b69-89e5-077daef6c443\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"110014\",\"summary\":\"Nearest dealer/PIN search & catalogue\",\"createdAt\":\"2026-04-16T06:04:41.963Z\",\"lastMessageAt\":\"2026-04-16T13:05:38.952Z\",\"metadata\":{\"tags\":[\"order_enquiry\",\"product_enquiry\"]}},{\"id\":\"1b4c067f-b6d4-4452-b2d8-7c55c13a55f1\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"View catalogue\",\"createdAt\":\"2026-04-15T05:51:58.145Z\",\"lastMessageAt\":\"2026-04-15T09:42:17.119Z\",\"metadata\":{\"tags\":[]}},{\"id\":\"f3d2b1e6-ddfc-45ad-8439-847c2bf47f4f\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"Get latest invoice\",\"createdAt\":\"2026-04-14T05:28:12.812Z\",\"lastMessageAt\":\"2026-04-14T12:11:05.389Z\",\"metadata\":{\"campaignName\":\"Statstest\",\"tags\":[]}},{\"id\":\"658defd0-9fb3-4130-8515-754b730e72d0\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"Generate payment advice\",\"createdAt\":\"2026-04-13T04:21:18.129Z\",\"lastMessageAt\":\"2026-04-13T13:01:57.228Z\",\"metadata\":{\"campaignName\":\"Jourcust2\",\"tags\":[]}}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":4,\"conversationTotalPages\":1,\"conversationTotalRecords\":4},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":4,\"conversationStartRecord\":1,\"conversationEndRecord\":4,\"conversationTotalPages\":1},{\"id\":\"0a6a51dc-5091-4b65-9c15-38fd0e970dba\",\"customerId\":\"29a19a53-a264-4a13-a2cf-7aabfe11fedf\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"0a6a51dc-5091-4b65-9c15-38fd0e970dba\",\"_score\":null,\"name\":\"Vaishnavi\",\"companyName\":\"Vaishnavi\",\"phone\":\"919910305573\",\"mobile\":\"919910305573\",\"address\":null,\"distributorCode\":\"1e857b4e-ee9c-4911-b35d-7f740bab1b63\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[{\"attributeId\":\"419712d4-a511-4721-9b8e-0ce4d3df944f\",\"attributeName\":\"Vehicle ...[TRUNCATED]",
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
