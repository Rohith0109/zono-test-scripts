/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "357b0b1b-e852-41aa-af53-3a6797f0178e",
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
    "conversationId": "b56a590e-e468-4a8e-83bc-dc08263e0c42"
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
  "responseSample": "{\"customerGroupMembers\":[{\"id\":\"dc66092d-a3e3-485a-9eec-0cddbb06bb6c\",\"customerId\":\"0f5d7314-e57e-4bc1-8917-2c94089e7d95\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"dc66092d-a3e3-485a-9eec-0cddbb06bb6c\",\"_score\":null,\"name\":\"sanju\",\"companyName\":\"sanju samson\",\"phone\":\"911290129091\",\"mobile\":\"911290129091\",\"address\":null,\"distributorCode\":\"77a014c2-decc-4654-8918-fc610ee4dc2c\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[{\"supplierName\":\"Apparels CFA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"fulfillmentLocationCode\":\"62320\"}],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"473c5db3-dad2-4972-8747-da87bb03f9ad\",\"customerId\":\"0f5d7314-e57e-4bc1-8917-2c94089e7d95\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"lastMessage\":\"View catalogue\",\"createdAt\":\"2026-03-04T09:13:15.650Z\",\"updatedAt\":\"2026-03-04T09:13:01.410Z\",\"lastMessageAt\":\"2026-03-04T09:13:15.615Z\"}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":1,\"conversationTotalPages\":1,\"conversationTotalRecords\":1},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":1,\"conversationStartRecord\":1,\"conversationEndRecord\":1,\"conversationTotalPages\":1},{\"id\":\"af0dd97b-fa2f-4d60-a931-196222ffb5b7\",\"customerId\":\"c6349d33-936e-4813-b9ca-a26822378681\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"af0dd97b-fa2f-4d60-a931-196222ffb5b7\",\"_score\":null,\"name\":\"Prajwal Zotok\",\"companyName\":\"Prajwal Zotok\",\"phone\":\"919881217192\",\"mobile\":\"919881217192\",\"address\":null,\"distributorCode\":\"6a73b6ca-c4fe-42c4-a896-0b75e3318df3\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[{\"attributeId\":\"759be410-13a5-4708-80b9-7483572bc23a\",\"attributeName\":\"nantechcustomercode\",\"value\":\"C1893\"}],\"cfas\":[{\"supplierName\":\"Snacks\",\"fulfillmentLocationId\":\"f307179c-65d0-4f70-a724-d6767882d68f\",\"fulfillmentLocationCode\":\"152135\"}],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"9a486b45-bf01-4ee5-8354-9da8afb4899f\",\"customerId\":\"c6349d33-936e-4813-b9ca-a26822378681\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"Hi\",\"createdAt\":\"2026-02-19T09:42:06.585Z\",\"lastMessageAt\":\"2026-02-19T09:42:06.651Z\",\"metadata\":{\"tags\":[]}},{\"id\":\"9dda09c4-a2cd-43b2-bd01-075fa9260383\",\"customerId\":\"c6349d33-936e-4813-b9ca-a26822378681\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"ok np\",\"createdAt\":\"2026-01-23T04:53:53.554Z\",\"lastMessageAt\":\"2026-01-23T04:53:53.717Z\",\"metadata\":{\"tags\":[]}},{\"id\":\"b8f76591-083b-489a-857d-0dbccc630e54\",\"customerId\":\"c6349d33-936e-4813-b9ca-a26822378681\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"Hi\",\"createdAt\":\"2026-01-05T10:20:21.624Z\",\"lastMessageAt\":\"2026-01-05T10:20:21.715Z\",\"metadata\":{\"tags\":[]}}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":4,\"conversationTotalPages\":1,\"conversationTotalRecords\":4},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":4,\"conversationStartRecord\":1,\"conversationEndRecord\":4,\"conversationTotalPages\":1},{\"id\":\"cd4fd0e8-23c5-4a57-82ab-6c95d6c09278\",\"customerId\":\"66cbd7e4-c5f3-4a0f-a162-1cbeb57a04f0\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"cd4fd0e8-23c5-4a57-82ab-6c95d6c09278\",\"_score\":null,\"name\":\"Mahendra Vinjamuru\",\"companyName\":\"Mahendra Vinjamuru\",\"phone\":\"919493390291\",\"mobile\":\"919493390291\",\"address\":null,\"distributorCode\":\"1db5ba5c-5bcc-4ba5-95c6-694e266e279a\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[{\"supplierName\":\"Testing 3636\",\"fulfillmentLocationId\":\"17404347-ccd3-424b-bca6-6cc1d42affb5\",\"fulfillmentLocationCode\":\"332232\"}],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"fe3dc908-8482-491a-ab74-2c0cd4e258eb\",\"customerId\":\"66cbd7e4-c5f3-4a0f-a162-1cbeb57a04f0\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"false\",\"createdAt\":\"2025-12-02T09:08:38.409Z\",\"lastMessageAt\":\"2025-12-02T09:08:38.498Z\",\"metadata\":{\"customerType\":\"new\",\"tags\":[]}}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":1,\"conversationTotalPages\":1,\"conversationTotalRecords\":1},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":1,\"conversationStartRecord\":1,\"conversationEndRecord\":1,\"conversationTotalPages\":1},{\"id\":\"d5a40a90-6273-42bf-a715-1fa394fbf349\",\"customerId\":\"69903fe6-92cb-4c7d-8791-0e5cef3707d2\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"d5a40a90-6273-42bf-a715-1fa394fbf349\",\"_score\":null,\"name\":\"Haritha\",\"companyName\":\"Haritha\",\"phone\":\"913131656868\",\"mobile\":\"913131656868\",\"address\":null,\"distributorCode\":\"Vshe7e8\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[],\"pagination\":{\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0,\"conversationTotalRecords\":0},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":0,\"conversationStartRecord\":0,\"conversationEndRecord\":0,\"conversationTotalPages\":0},{\"id\":\"e23b6d9b-4c80-420c-b2fa-4cb81ba61ea9\",\"customerId\":\"b270c3fa-1f94-4df1-b6c3-bb7dc034668d\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"e23b6d9b-4c80-420c-b2fa-4cb81ba61ea9\",\"_score\":null,\"name\":\"Kapil\",\"companyName\":\"Kapil\",\"phone\":\"912919129238\",\"mobile\":\"912919129238\",\"address\":null,\"distributorCode\":\"11d957a0-2ed1-4f7b-bc25-bd28feb52238\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[{\"attributeId\":\"23b9fc51-5423-4274-ae26-6713e88c1d51\",\"attributeName\":\"city\",\"value\":\"vizag\"}],\"cfas\":[],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"996960cd-5d1c-485f-ba4b-3e2abd5e9852\",\"customerId\":\"b270c3fa-1f94-4df1-b6c3-bb7dc034668d\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"lastMessage\":\"View catalogue\",\"createdAt\":\"2026-01-05T06:32:53.335Z\",\"lastMessageAt\":\"2026-01-05T07:33:01.953Z\",\"metadata\":{\"tags\":[]}}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":1,\"conversationTotalPages\":1,\"conversationTotalRecords\":1},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":1,\"conversationStartRecord\":1,\"conversationEndRecord\":1,\"conversationTotalPages\":1},{\"id\":\"c0e52014-4b4a-4337-ac16-5af850658c46\",\"customerId\":\"7e3a01c9-f66a-4085-b9f2-0e6a89b7c2b9\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"c0e52014-4b4a-4337-ac16-5af850658c46\",\"_score\":null,\"name\":\"Om Sai Enterprises\",\"companyName\":\"Om Sai Enterprises\",\"phone\":\"914567890123\",\"mobile\":\"914567890123\",\"address\":null,\"distributorCode\":\"CUS-004\",\"email\":\"omsaienterprises@rediffmail.com\",\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[{\"attributeId\":\"032791d1-878f-419a-a5eb-d0cefdd0f2b2\",\"attributeName\":\"Location\",\"value\":\"Hyderabad\"},{\"attributeId\":\"97a00b57-d270-4993-bdc9-6f85828f4434\",\"attributeName\":\"servicablePincodes\",\"value\":[\"500081\"]}],\"cfas\":[{\"supplierName\":\"Crocodile CFA\",\"fulfil...[TRUNCATED]",
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
