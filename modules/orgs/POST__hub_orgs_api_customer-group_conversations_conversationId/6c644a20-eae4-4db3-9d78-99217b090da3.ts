/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "6c644a20-eae4-4db3-9d78-99217b090da3",
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
    "conversationId": "c8b6349c-7f0b-4dd6-a92f-c0f9ab833d42"
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
  "responseSample": "{\"customerGroupMembers\":[{\"id\":\"531c0d53-406c-4fda-a4ce-c05a9573cdab\",\"customerId\":\"342ae851-7512-45bc-b129-34a610104957\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"531c0d53-406c-4fda-a4ce-c05a9573cdab\",\"_score\":null,\"name\":\"Umesh Singh\",\"companyName\":\"Umesh Singh\",\"phone\":\"917428119121\",\"mobile\":\"917428119121\",\"address\":null,\"distributorCode\":\"75dfe1b2-925c-4b55-90ac-1f9f3daba0c3\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[{\"supplierName\":\"Apparels CFA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"fulfillmentLocationCode\":\"62320\"},{\"supplierName\":\"Vijayawada\",\"fulfillmentLocationId\":\"1229236f-b697-44b6-ae5f-7c04b3ec1d2e\",\"fulfillmentLocationCode\":\"166322\"}],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"97627046-a8ac-47d1-8f5e-7fa011daf94a\",\"customerId\":\"342ae851-7512-45bc-b129-34a610104957\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"WhatsApp\",\"createdAt\":\"2026-04-10T05:06:53.441Z\",\"lastMessageAt\":\"2026-04-10T05:06:53.549Z\",\"metadata\":{\"tags\":[]}}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":1,\"conversationTotalPages\":1,\"conversationTotalRecords\":1},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":1,\"conversationStartRecord\":1,\"conversationEndRecord\":1,\"conversationTotalPages\":1},{\"id\":\"7157fee7-543a-4a67-aa1e-1ab0364acbbf\",\"customerId\":\"d66e3f07-f2b4-4b2f-be8c-ba1136066104\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"7157fee7-543a-4a67-aa1e-1ab0364acbbf\",\"_score\":null,\"name\":\"chaitu Chowdary\",\"companyName\":\"chaitu Chowdary\",\"phone\":\"919849133824\",\"mobile\":\"919849133824\",\"address\":null,\"distributorCode\":\"82921faf-4b2d-4f09-932b-332a89fce7f4\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[],\"cfas\":[{\"supplierName\":\"Test7337\",\"fulfillmentLocationId\":\"480ff806-6a19-4982-bb51-e088f943203c\",\"fulfillmentLocationCode\":\"6262626\"},{\"supplierName\":\"Shobavat CFA\",\"fulfillmentLocationId\":\"a34610f0-657b-407b-be9e-62c6e23f0fbe\",\"fulfillmentLocationCode\":\"151515\"},{\"supplierName\":\"CFa_qwe\",\"fulfillmentLocationId\":\"f6b993e2-cda8-41e0-a625-f340609b3f59\",\"fulfillmentLocationCode\":\"LOC-14435\"},{\"supplierName\":\"Trail\",\"fulfillmentLocationId\":\"65dedde8-6324-4da4-b9c6-b47a471fa716\",\"fulfillmentLocationCode\":\"65251\"},{\"supplierName\":\"Test444\",\"fulfillmentLocationId\":\"48a3fbe2-00c0-459a-a244-a34a01db17a8\",\"fulfillmentLocationCode\":\"263266\"},{\"supplierName\":\"Hyderabad\",\"fulfillmentLocationId\":\"e8193bc2-716e-4c93-9c26-60326dd47c8d\",\"fulfillmentLocationCode\":\"212154\"},{\"supplierName\":\"CFA-141052\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"fulfillmentLocationCode\":\"CFA-141052\"},{\"supplierName\":\"Crocodile CFA\",\"fulfillmentLocationId\":\"bc26874c-d938-4f76-8b9d-56956b2d8f53\",\"fulfillmentLocationCode\":\"200021\"},{\"supplierName\":\"Plywood CFA\",\"fulfillmentLocationId\":\"c4bf452e-a601-48f4-8c59-d4d50af1851e\",\"fulfillmentLocationCode\":\"12213\"},{\"supplierName\":\"Vijayawada\",\"fulfillmentLocationId\":\"1229236f-b697-44b6-ae5f-7c04b3ec1d2e\",\"fulfillmentLocationCode\":\"166322\"},{\"supplierName\":\"CFA-14124\",\"fulfillmentLocationId\":\"ffb61918-cb38-48bb-84fa-b78abe4923b0\",\"fulfillmentLocationCode\":\"6322452\"},{\"supplierName\":\"Steel \",\"fulfillmentLocationId\":\"59cdb393-2af6-42d9-b3c6-eced0869e6e6\",\"fulfillmentLocationCode\":\"1420231\"},{\"supplierName\":\"Testing 3636\",\"fulfillmentLocationId\":\"17404347-ccd3-424b-bca6-6cc1d42affb5\",\"fulfillmentLocationCode\":\"332232\"},{\"supplierName\":\"Testing 66\",\"fulfillmentLocationId\":\"e35b60fb-24ac-4408-b8f9-c93a61e2dc0f\",\"fulfillmentLocationCode\":\"13136\"},{\"supplierName\":\"Test CFA\",\"fulfillmentLocationId\":\"c8f8feb9-f705-4d62-a938-ff1f692551e8\",\"fulfillmentLocationCode\":\"1212021\"},{\"supplierName\":\"Default-CFA\",\"fulfillmentLocationId\":\"40a914c1-4dcf-429f-a019-58cf1f2a7f49\",\"fulfillmentLocationCode\":\"default-cfa\"},{\"supplierName\":\"uyi distributors\",\"fulfillmentLocationId\":\"37bf7a2e-cc04-41bd-87f4-daa9984f2d51\",\"fulfillmentLocationCode\":\"LOC-54334\"},{\"supplierName\":\"Fertilizers\",\"fulfillmentLocationId\":\"eedd7f1f-870c-4d26-bbd1-e012bfabf815\",\"fulfillmentLocationCode\":\"14200\"},{\"supplierName\":\"CFA-145144\",\"fulfillmentLocationId\":\"b87fc61e-a3ea-406c-b886-41bc49887c71\",\"fulfillmentLocationCode\":\"78452\"},{\"supplierName\":\"Apparels CFA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"fulfillmentLocationCode\":\"62320\"}],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"2be483c5-e346-4b54-a4a9-be3726cacaf1\",\"customerId\":\"d66e3f07-f2b4-4b2f-be8c-ba1136066104\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"Hi\",\"createdAt\":\"2026-04-09T12:24:51.233Z\",\"lastMessageAt\":\"2026-04-09T12:24:51.329Z\",\"metadata\":{\"tags\":[]}}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":1,\"conversationTotalPages\":1,\"conversationTotalRecords\":1},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":1,\"conversationStartRecord\":1,\"conversationEndRecord\":1,\"conversationTotalPages\":1},{\"id\":\"d6e4fdcd-3ddf-4b44-b6d7-fbac60bc4897\",\"customerId\":\"c72223e0-ac9b-43a2-9987-bd6dfb004684\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupAssignmentHistory\":[],\"latestMessageTimeToken\":\"[REDACTED]\",\"_id\":\"d6e4fdcd-3ddf-4b44-b6d7-fbac60bc4897\",\"_score\":null,\"name\":\"Shahbaz Ali\",\"companyName\":\"Ali Distributions\",\"phone\":\"919849514527\",\"mobile\":\"919849514527\",\"address\":null,\"distributorCode\":\"71bf8e08-5b8a-4524-b690-13c14edfc33d\",\"email\":null,\"customerCode\":null,\"gstin\":null,\"languageCode\":\"en\",\"inviteStatus\":\"N\",\"isActive\":1,\"isArchive\":0,\"customerAttributes\":[{\"attributeId\":\"419712d4-a511-4721-9b8e-0ce4d3df944f\",\"attributeName\":\"Vehicle Type\",\"value\":[\"3 Wheeler\"]}],\"cfas\":[{\"supplierName\":\"Hyderabad\",\"fulfillmentLocationId\":\"e8193bc2-716e-4c93-9c26-60326dd47c8d\",\"fulfillmentLocationCode\":\"212154\"},{\"supplierName\":\"Default-CFA\",\"fulfillmentLocationId\":\"40a914c1-4dcf-429f-a019-58cf1f2a7f49\",\"fulfillmentLocationCode\":\"default-cfa\"},{\"supplierName\":\"Test444\",\"fulfillmentLocationId\":\"48a3fbe2-00c0-459a-a244-a34a01db17a8\",\"fulfillmentLocationCode\":\"263266\"}],\"assignedMembers\":[],\"divisionIds\":[],\"cfaIds\":[],\"conversations\":{\"success\":true,\"data\":[{\"id\":\"8ffdb42f-62df-4dd6-a878-9550855a4f62\",\"customerId\":\"c72223e0-ac9b-43a2-9987-bd6dfb004684\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"How is Yasaswini doing today?\",\"createdAt\":\"2026-03-26T12:34:28.928Z\",\"lastMessageAt\":\"2026-03-26T12:36:53.274Z\",\"metadata\":{\"tags\":[]}},{\"id\":\"f4735038-6585-4cfd-98aa-10cf99f56a5a\",\"customerId\":\"c72223e0-ac9b-43a2-9987-bd6dfb004684\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"Guy please don’t send these many invoices\",\"createdAt\":\"2026-03-25T06:56:44.665Z\",\"lastMessageAt\":\"2026-03-25T06:58:20.730Z\",\"metadata\":{\"tags\":[]}},{\"id\":\"7da03b1c-9b66-4a34-b5c1-6a489e46da48\",\"customerId\":\"c72223e0-ac9b-43a2-9987-bd6dfb004684\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"Hello! Can I get a quote?.\",\"createdAt\":\"2026-02-24T10:18:35.973Z\",\"lastMessageAt\":\"2026-02-24T10:18:36.053Z\",\"metadata\":{\"tags\":[]}},{\"id\":\"8b18226e-cf27-4600-aef3-19a63de354e1\",\"customerId\":\"c72223e0-ac9b-43a2-9987-bd6dfb004684\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"status\":\"Open\",\"isAssigned\":false,\"lastMessage\":\"Hello\",\"createdAt\":\"2026-01-30T10:52:02.750Z\",\"lastMessageAt\":\"2026-01-30T11:03:36.030Z\",\"metadata\":{\"tags\":[]}}],\"pagination\":{\"conversationStartRecord\":1,\"conversationEndRecord\":4,\"conversationTotalPages\":1,\"conversationTotalRecords\":4},\"message\":\"Conversations fetched successfully\"},\"totalConversations\":4,\"conversationStartRecord\":1,\"conversatio...[TRUNCATED]",
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
