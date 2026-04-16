/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "91ed176a-fe09-4024-823c-cc8f55c90717",
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
    "conversationId": "9497bcf8-2b32-46f9-a429-b2f99239b5e1"
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
  "responseSample": "{\"customerGroupMembers\":[{\"id\":\"57be40ff-2238-441e-95c7-f62e797b923a\",\"customerId\":\"db903d34-36a3-4b54-884c-a1213b6d78b3\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[{\"groupName\":\"Irrelevant\",\"movedByName\":\"HDA\",\"movedOnDate\":\"2026-04-16T07:46:08.000Z\",\"groupId\":\"9497bcf8-2b32-46f9-a429-b2f99239b5e1\",\"movedByTeamMemberId\":\"31c6c282-b7cf-4081-90a6-f41362dd5f1b\"}],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"57be40ff-2238-441e-95c7-f62e797b923a\",\"_score\":null,\"name\":\"Sai Kiran\",\"companyName\":\"Sai Kiran\",\"phone\":\"919550112934\",\"mobile\":\"919550112934\",\"address\":null,\"distributorCode\":\"4c768447-a161-4975-bc6a-f116c263cfef\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[{\"attributeId\":\"02197cb2-0c43-4c43-8196-c6ef6e70154a\",\"attributeName\":\"Loyalty Points\",\"value\":2000}],\"cfas\":[{\"supplierName\":\"Apparels CFA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"fulfillmentLocationCode\":\"62320\"}],\"assignedMembers\":[{\"isArchive\":0,\"phone\":\"912465829745\",\"senderUserId\":\"12661dc1-b38d-4178-b680-f8332a51b3ea\",\"invitedUserId\":\"12661dc1-b38d-4178-b680-f8332a51b3ea\",\"memberName\":\"CFA\",\"inviteType\":\"team\",\"id\":\"0c8b6d7a-86f1-42c4-80d7-d7bc84d4d5df\",\"isActive\":1,\"employeeCode\":\"199020923\"},{\"isArchive\":0,\"phone\":\"918747474747\",\"senderUserId\":\"96e28b69-145c-4b0a-a5b0-9647ce36068c\",\"invitedUserId\":\"96e28b69-145c-4b0a-a5b0-9647ce36068c\",\"memberName\":\"team member\",\"inviteType\":\"team\",\"id\":\"22ffe8f7-920e-4ace-84a2-2dbaf8a81efe\",\"isActive\":1,\"employeeCode\":\"custome_code\"},{\"isArchive\":0,\"phone\":\"911451520020\",\"senderUserId\":\"2854893f-1b44-4f28-90ef-6d4662323edc\",\"invitedUserId\":\"2854893f-1b44-4f28-90ef-6d4662323edc\",\"memberName\":\"GDB Tester\",\"inviteType\":\"team\",\"id\":\"45bcf84b-de80-4abf-a66e-c674fedfd5e4\",\"isActive\":1,\"employeeCode\":\"5115151\"},{\"isArchive\":0,\"phone\":\"911115854536\",\"senderUserId\":\"e61c0364-6ea1-4b00-a9aa-92fe90e5f4ab\",\"invitedUserId\":\"e61c0364-6ea1-4b00-a9aa-92fe90e5f4ab\",\"memberName\":\"Test CFA\",\"inviteType\":\"team\",\"id\":\"b7dba8ba-5376-43ea-b749-ef0403839ab2\",\"isActive\":1,\"employeeCode\":\"232626\"},{\"isArchive\":0,\"phone\":\"919885296960\",\"senderUserId\":\"b0177e11-7148-4f5c-9c82-01a65fd7b704\",\"invitedUserId\":\"b0177e11-7148-4f5c-9c82-01a65fd7b704\",\"memberName\":\"Shiva kumar 120111\",\"inviteType\":\"team\",\"id\":\"be45b221-e715-491c-bf6a-1543a8e272c8\",\"isActive\":1,\"employeeCode\":\"SH001\"},{\"isArchive\":1,\"phone\":\"913030404040\",\"senderUserId\":null,\"invitedUserId\":null,\"memberName\":\"NewGenAgencies\",\"inviteType\":\"team\",\"id\":\"c3935da9-5621-491c-ab62-9890980d63f2\",\"isActive\":0,\"employeeCode\":\"7491739\"},{\"isArchive\":0,\"phone\":\"919441239592\",\"senderUserId\":\"37bfd0c4-0448-49c7-8ec9-19096956acad\",\"invitedUserId\":\"37bfd0c4-0448-49c7-8ec9-19096956acad\",\"memberName\":\"sales\",\"inviteType\":\"team\",\"id\":\"d4f7491f-a1b5-4b4f-8347-6eec2284e277\",\"isActive\":1,\"employeeCode\":\"12133\"},{\"isArchive\":0,\"phone\":\"93342343243\",\"senderUserId\":null,\"invitedUserId\":null,\"memberName\":\"test2323\",\"inviteType\":\"team\",\"id\":\"f65c0201-2aad-4c8e-841f-9e95dc089f0f\",\"isActive\":1,\"employeeCode\":\"2323\"}],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"066ea186-5992-4a56-a6c7-b1c6c33a7c00\",\"customerId\":\"db903d34-36a3-4b54-884c-a1213b6d78b3\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"View catalogue\",\"createdAt\":\"2026-03-30T11:10:04.127Z\",\"lastMessageAt\":\"2026-03-30T11:10:11.369Z\",\"metadata\":{\"tags\":[]}},{\"id\":\"32146a52-c4e7-4017-bd3d-b6848adb2286\",\"customerId\":\"db903d34-36a3-4b54-884c-a1213b6d78b3\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"false\",\"createdAt\":\"2026-03-23T13:40:38.424Z\",\"lastMessageAt\":\"2026-03-23T13:41:38.618Z\",\"metadata\":{\"tags\":[]}},{\"id\":\"b026e5ea-61cb-470b-a01c-4ed07242a435\",\"customerId\":\"db903d34-36a3-4b54-884c-a1213b6d78b3\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Assigned\",\"isAssigned\":true,\"lastMessage\":\"View catalogue\",\"createdAt\":\"2026-03-23T07:26:58.126Z\",\"lastMessageAt\":\"2026-03-23T07:27:10.603Z\",\"metadata\":{\"assignedTo\":[{\"teamMemberName\":\"team member\",\"teamMemberId\":\"04c8af5b-ad4a-46ed-af58-e924796cd696\",\"role\":\"viewer\"},{\"teamMemberName\":\"CFA\",\"teamMemberId\":\"0c8b6d7a-86f1-42c4-80d7-d7bc84d4d5df\",\"role\":\"viewer\"},{\"teamMemberName\":\"GDB Tester\",\"teamMemberId\":\"45bcf84b-de80-4abf-a66e-c674fedfd5e4\",\"role\":\"viewer\"},{\"teamMemberName\":\"Sales Test\",\"teamMemberId\":\"5cca6fad-76f6-43bc-a1f1-02935a951676\",\"role\":\"viewer\"},{\"teamMemberName\":\"sales_team\",\"teamMemberId\":\"64d0d159-665a-4161-8655-6269e9b9b615\",\"role\":\"viewer\"},{\"teamMemberName\":\"Team\",\"teamMemberId\":\"844a9055-c544-440b-b64c-5cba03d9f021\",\"role\":\"viewer\"},{\"teamMemberName\":\"Test Team 33300\",\"teamMemberId\":\"888de6d1-ffbd-4cd7-8bc8-f5cab5cf6634\",\"role\":\"viewer\"},{\"teamMemberName\":\"Shiva kumar 120111\",\"teamMemberId\":\"be45b221-e715-491c-bf6a-1543a8e272c8\",\"role\":\"viewer\"},{\"teamMemberName\":\"NewGenAgencies\",\"teamMemberId\":\"c3935da9-5621-491c-ab62-9890980d63f2\",\"role\":\"viewer\"}],\"tags\":[],\"status\":\"Assigned\"}}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":3,\"conversationTotalPages\":1,\"conversationTotalRecords\":3},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":3,\"conversationStartRecord\":1,\"conversationEndRecord\":3,\"conversationTotalPages\":1},{\"id\":\"99f40360-cf20-4bd2-a11c-f92ec42fde59\",\"customerId\":\"bf6c3544-7b10-49cc-afb9-364b541f757c\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[{\"groupName\":\"Irrelevant\",\"movedByName\":\"HDA\",\"movedOnDate\":\"2026-04-16T07:45:54.000Z\",\"groupId\":\"9497bcf8-2b32-46f9-a429-b2f99239b5e1\",\"movedByTeamMemberId\":\"31c6c282-b7cf-4081-90a6-f41362dd5f1b\"}],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"99f40360-cf20-4bd2-a11c-f92ec42fde59\",\"_score\":null,\"name\":\"Test7337\",\"companyName\":\"Test7337\",\"phone\":\"912148055626\",\"mobile\":\"912148055626\",\"address\":null,\"distributorCode\":\"40141104\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[],\"pagination\":{\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0,\"conversationTotalRecords\":0},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":0,\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0},{\"id\":\"f988996b-3b80-4c4d-878a-38030c1a3566\",\"customerId\":\"e7dd475d-90de-4efe-892a-989e8c0b528d\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[{\"groupName\":\"Irrelevant\",\"movedByName\":\"HDA\",\"movedOnDate\":\"2026-04-16T07:20:31.000Z\",\"groupId\":\"9497bcf8-2b32-46f9-a429-b2f99239b5e1\",\"movedByTeamMemberId\":\"31c6c282-b7cf-4081-90a6-f41362dd5f1b\"}],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"f988996b-3b80-4c4d-878a-38030c1a3566\",\"_score\":null,\"name\":\"R K General Department\",\"companyName\":\"R K General Store\",\"phone\":\"911324354657\",\"mobile\":\"911324354657\",\"address\":null,\"distributorCode\":\"CUS-006\",\"email\":\"rkstore@example.com\",\"customerCode\":\"CUS-006\",\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[{\"supplierName\":\"CFA-141052\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"fulfillmentLocationCode\":\"CFA-141052\"}],\"assignedMembers\":[{\"isArchive\":1,\"phone\":\"911402023526\",\"senderUserId\":\"1479d5b0-aee4-4144-a994-1582f7dc5f49\",\"invitedUserId\":\"1479d5b0-aee4-4144-a994-1582f7dc5f49\",\"memberName\":\"Test CFA 554\",\"inviteType\":\"team\",\"id\":\"dbb3fc67-2a5f-4c9f-9a98-f0b8fc450f8b\",\"isActive\":0,\"employeeCode\":\"26203\"}],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[],\"pagination\":{\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0,\"conversationTotalRecords\":0},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":0,\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0},{\"id\":\"a780422f-1739-46a9-8dd4-5228c57140df\",\"customerId\":\"983f2b...[TRUNCATED]",
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
