/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "22eaa032-7af1-4048-88f0-46020f7defbf",
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
    "conversationId": "12bea929-cc48-4f06-a9fa-275f5592bdcb"
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
  "responseSample": "{\"customerGroupMembers\":[{\"id\":\"743c21d9-54b8-4b10-b56c-ce9024d3095e\",\"customerId\":\"c8e02e58-ab8e-4988-b413-375e2ffc3b93\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[{\"groupName\":\"New Lead\",\"movedOnDate\":null,\"groupId\":\"12bea929-cc48-4f06-a9fa-275f5592bdcb\",\"movedByTeamMemberId\":null}],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"743c21d9-54b8-4b10-b56c-ce9024d3095e\",\"_score\":null,\"name\":\"pradeep\",\"companyName\":\"pradeep\",\"phone\":\"912239092309\",\"mobile\":\"912239092309\",\"address\":null,\"distributorCode\":\"c8900\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[],\"pagination\":{\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0,\"conversationTotalRecords\":0},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":0,\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0},{\"id\":\"e77843a8-fe26-40f8-a51f-a1e13b0463da\",\"customerId\":\"e841b1fe-f719-4a2d-ad98-ab086c40d1fd\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[{\"groupName\":\"New Lead\",\"movedByName\":\"HDA\",\"movedOnDate\":\"2026-04-16T04:37:35.000Z\",\"groupId\":\"12bea929-cc48-4f06-a9fa-275f5592bdcb\",\"movedByTeamMemberId\":\"31c6c282-b7cf-4081-90a6-f41362dd5f1b\"}],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"e77843a8-fe26-40f8-a51f-a1e13b0463da\",\"_score\":null,\"name\":\"unicorn\",\"companyName\":\"unicorn\",\"phone\":\"912308999999\",\"mobile\":\"912308999999\",\"address\":null,\"distributorCode\":\"c89w3\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[],\"pagination\":{\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0,\"conversationTotalRecords\":0},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":0,\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0},{\"id\":\"b9465de4-4a4b-447c-9ac0-a49b775979b5\",\"customerId\":\"27a20c5a-4c14-4c14-8c31-9a0036a2416f\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[{\"groupName\":\"New Lead\",\"movedOnDate\":null,\"groupId\":\"12bea929-cc48-4f06-a9fa-275f5592bdcb\",\"movedByTeamMemberId\":null}],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"b9465de4-4a4b-447c-9ac0-a49b775979b5\",\"_score\":null,\"name\":\"ajay\",\"companyName\":\"ajay sanyal\",\"phone\":\"919862452469\",\"mobile\":\"919862452469\",\"address\":null,\"distributorCode\":\"ch29ch2ov\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[],\"pagination\":{\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0,\"conversationTotalRecords\":0},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":0,\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0},{\"id\":\"85ad40f4-0a5b-451c-bb30-9b4736ddd8e8\",\"customerId\":\"4c50a0af-1363-4836-85db-926c820b0bae\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[{\"groupName\":\"New Lead\",\"movedByName\":\"HDA\",\"movedOnDate\":\"2026-04-13T11:26:02.000Z\",\"groupId\":\"12bea929-cc48-4f06-a9fa-275f5592bdcb\",\"movedByTeamMemberId\":\"31c6c282-b7cf-4081-90a6-f41362dd5f1b\"}],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"85ad40f4-0a5b-451c-bb30-9b4736ddd8e8\",\"_score\":null,\"name\":\"Karthik Toy Mall\",\"companyName\":\"Karthik Toy Mall\",\"phone\":\"918882220001\",\"mobile\":\"918882220001\",\"address\":null,\"distributorCode\":\"0a852934-3fd0-471b-987b-3a77046e5ee4-000000d7\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[{\"supplierName\":\"Steel \",\"fulfillmentLocationId\":\"59cdb393-2af6-42d9-b3c6-eced0869e6e6\",\"fulfillmentLocationCode\":\"1420231\"}],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[],\"pagination\":{\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0,\"conversationTotalRecords\":0},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":0,\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0},{\"id\":\"b5f2444e-2f6f-49d4-9552-9b54c8a9f9e5\",\"customerId\":\"6cec6ab9-0cb2-4074-aff8-e2caedc6a56a\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[{\"groupName\":\"New Lead\",\"movedByName\":\"HDA\",\"movedOnDate\":\"2026-04-16T11:16:15.000Z\",\"groupId\":\"12bea929-cc48-4f06-a9fa-275f5592bdcb\",\"movedByTeamMemberId\":\"31c6c282-b7cf-4081-90a6-f41362dd5f1b\"}],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"b5f2444e-2f6f-49d4-9552-9b54c8a9f9e5\",\"_score\":null,\"name\":\"Only Sons\",\"companyName\":\"Mehta & Sons\",\"phone\":\"912345678901\",\"mobile\":\"912345678901\",\"address\":null,\"distributorCode\":\"CUS-003\",\"email\":\"mehtaandsons@gmail.com\",\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[{\"attributeId\":\"032791d1-878f-419a-a5eb-d0cefdd0f2b2\",\"attributeName\":\"Location\",\"value\":\"Hyderabad\"},{\"attributeId\":\"40876623-cf6a-4e5f-8c7c-bde68d6e4a80\",\"attributeName\":\"T3\",\"value\":[\"3\"]},{\"attributeId\":\"23b9fc51-5423-4274-ae26-6713e88c1d51\",\"attributeName\":\"city\",\"value\":\"Hyderabad\"},{\"attributeId\":\"6f7a0aa7-7687-4bf4-8a63-a490d0701342\",\"attributeName\":\"testingDropdown1\",\"value\":\"select1\"},{\"attributeId\":\"8669b55b-8b00-4489-b587-9372891b13af\",\"attributeName\":\"T1\",\"value\":[\"1\",\"2\"]}],\"cfas\":[{\"supplierName\":\"Apparels CFA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"fulfillmentLocationCode\":\"62320\"}],\"assignedMembers\":[{\"isArchive\":0,\"phone\":\"918747474747\",\"senderUserId\":\"96e28b69-145c-4b0a-a5b0-9647ce36068c\",\"invitedUserId\":\"96e28b69-145c-4b0a-a5b0-9647ce36068c\",\"memberName\":\"team member\",\"inviteType\":\"team\",\"id\":\"22ffe8f7-920e-4ace-84a2-2dbaf8a81efe\",\"isActive\":1,\"employeeCode\":\"custome_code\"},{\"isArchive\":0,\"phone\":\"911292190129\",\"senderUserId\":\"013a17e3-e511-4895-98aa-6c3017ec1474\",\"invitedUserId\":\"013a17e3-e511-4895-98aa-6c3017ec1474\",\"memberName\":\"Test Mem1\",\"inviteType\":\"team\",\"id\":\"42254164-fc82-42db-be1a-58377b148954\",\"isActive\":1,\"employeeCode\":\"TKM1243\"},{\"isArchive\":0,\"phone\":\"911234472982\",\"senderUserId\":\"d3913023-53cf-45af-90c1-53d15ec797f1\",\"invitedUserId\":\"d3913023-53cf-45af-90c1-53d15ec797f1\",\"memberName\":\"Team\",\"inviteType\":\"team\",\"id\":\"844a9055-c544-440b-b64c-5cba03d9f021\",\"isActive\":1,\"employeeCode\":\"251260\"},{\"isArchive\":0,\"phone\":\"911105056664\",\"senderUserId\":\"bed5763d-a2dc-420d-8300-3f4dc139f8ef\",\"invitedUserId\":\"bed5763d-a2dc-420d-8300-3f4dc139f8ef\",\"memberName\":\"Test Team\",\"inviteType\":\"team\",\"id\":\"da56896e-6543-4649-a009-31885df35869\",\"isActive\":1,\"employeeCode\":\"151262\"}],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"f03d8faa-3a7b-476f-93dd-2d8ebb484fa5\",\"customerId\":\"6cec6ab9-0cb2-4074-aff8-e2caedc6a56a\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"View Catalogue 📖\",\"createdAt\":\"2026-04-13T09:43:06.484Z\",\"lastMessageAt\":\"2026-04-13T10:06:20.306Z\",\"metadata\":{\"tags\":[]}},{\"id\":\"68b8f4a3-6345-4982-a301-810523f5896a\",\"customerId\":\"6cec6ab9-0cb2-4074-aff8-e2caedc6a56a\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"bico\",\"createdAt\":\"2026-04-01T06:12:09.794Z\",\"lastMessageAt\":\"2026-04-01T06:16:03.669Z\",\"metadata\":{\"tags\":[]}}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":2,\"conversationTotalPages\":1,\"conversationTotalRecords\":2},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":2,\"conversationStartRecord\":1,\"conversationEndRecord\":2,\"conversationTotalPages\":1},{\"id\":\"41f9c511-ae1e-4aa4-9b23-e88e0d832390\",\"customerId\":\"e204ac88-9ca0-49da-8b06-ba2feff846f1\",\"w...[TRUNCATED]",
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
