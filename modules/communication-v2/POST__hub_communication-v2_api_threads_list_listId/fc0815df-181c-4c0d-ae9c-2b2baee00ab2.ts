/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "fc0815df-181c-4c0d-ae9c-2b2baee00ab2",
  "method": "POST",
  "endpoint": "POST /hub/communication-v2/api/threads/list/{listId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "communication-v2",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "filter": {
      "channelType": [
        "C",
        "CUST"
      ]
    },
    "searchAfterTimestamp": null,
    "pageSize": 100
  },
  "pathParams": {
    "listId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
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
  "responseSample": "{\"channels\":[{\"conversationTags\":[\"query\"],\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Gowtham Menni\",\"channelType\":\"C\",\"latestMessage\":\"✅ Invoice Received...\",\"id\":\"a0da988c-b196-4c15-b406-be981e6c29f1\",\"channelSubType\":null,\"tags\":[{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"invoice\",\"value\":\"Sent\"},{\"type\":\"order\",\"value\":\"Billed\"},{\"type\":\"campaign\",\"value\":\"Impression\"}],\"customer\":{\"customerAttributes\":[{\"attributeId\":\"40876623-cf6a-4e5f-8c7c-bde68d6e4a80\",\"attributeName\":\"T3\",\"value\":[\"3\"]},{\"attributeId\":\"6f7a0aa7-7687-4bf4-8a63-a490d0701342\",\"attributeName\":\"testingDropdown1\",\"value\":\"select1\"},{\"attributeId\":\"419712d4-a511-4721-9b8e-0ce4d3df944f\",\"attributeName\":\"Vehicle Type\",\"value\":[\"4 Wheeler\"]},{\"attributeId\":\"97a00b57-d270-4993-bdc9-6f85828f4434\",\"attributeName\":\"servicablePincodes\",\"value\":[\"510201\"]},{\"attributeId\":\"032791d1-878f-419a-a5eb-d0cefdd0f2b2\",\"attributeName\":\"Location\",\"value\":\"Hyderabad\"},{\"attributeId\":\"8669b55b-8b00-4489-b587-9372891b13af\",\"attributeName\":\"T1\",\"value\":[\"2\"]},{\"attributeId\":\"f0b3cc85-942f-11f0-83df-02b2e930e7e7\",\"attributeName\":\"Pincodes\",\"value\":[\"152015\"]},{\"attributeId\":\"02197cb2-0c43-4c43-8196-c6ef6e70154a\",\"attributeName\":\"Loyalty Points\",\"value\":1500},{\"attributeId\":\"23b9fc51-5423-4274-ae26-6713e88c1d51\",\"attributeName\":\"city\",\"value\":\"Hyderabad\"}],\"name\":\"Gowtham\",\"distributorCode\":\"5eaac1c8-8dce-47cb-b4ea-f290f72fd161\",\"id\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"isActive\":1},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":18},{\"conversationTags\":[\"query\",\"product_enquiry\"],\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Owaiz Mustafa Khan\",\"channelType\":\"C\",\"latestMessage\":\"📄 Document\",\"id\":\"40965f10-7cdf-4cbe-9861-dc89c38036c5\",\"channelSubType\":null,\"tags\":[{\"type\":\"campaign\",\"value\":\"Sent\"}],\"customer\":{\"name\":\"Owaiz Mustafa Khan\",\"distributorCode\":\"ebd0bab0-7a9a-4be1-89d0-552974d7843c\",\"id\":\"d9bcf9a0-8904-403d-9da2-cb7500277f28\",\"isActive\":1},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":53},{\"conversationTags\":[\"order_enquiry\",\"product_enquiry\"],\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Zotokqa8\",\"channelType\":\"C\",\"latestMessage\":\"📄 Document\",\"id\":\"0abc88d3-88a2-48a9-8a12-c54bfe145b01\",\"channelSubType\":null,\"tags\":[{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"campaign\",\"value\":\"Impression\"},{\"type\":\"invoice\",\"value\":\"Sent\"},{\"type\":\"order\",\"value\":\"Billed\"}],\"customer\":{\"customerAttributes\":[{\"attributeId\":\"02197cb2-0c43-4c43-8196-c6ef6e70154a\",\"attributeName\":\"Loyalty Points\",\"value\":1000},{\"attributeId\":\"97a00b57-d270-4993-bdc9-6f85828f4434\",\"attributeName\":\"servicablePincodes\",\"value\":[\"500060\"]}],\"name\":\"Zotokqa8\",\"distributorCode\":\"88a523ad-2639-4fd0-9176-41cb4196db89\",\"id\":\"44618c77-3def-4108-88e1-2100c4519214\",\"isActive\":1},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":42},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"M/S CHARUTRADING\",\"channelType\":\"C\",\"latestMessage\":\"✅ Invoice Received...\",\"id\":\"44ab7264-8873-4e7e-99ba-70112af8bb6b\",\"channelSubType\":null,\"tags\":[],\"customer\":{\"name\":\"M/S CHARUTRADING\",\"distributorCode\":\"54656532\",\"id\":\"7c7b1882-63a4-4ff2-96a8-bf428ab790a1\",\"isActive\":1},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":4},{\"conversationTags\":[\"product_enquiry\",\"query\"],\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Vaishnavi\",\"channelType\":\"C\",\"latestMessage\":\"Hello! Vaishnavi!\",\"id\":\"0a6a51dc-5091-4b65-9c15-38fd0e970dba\",\"channelSubType\":null,\"tags\":[{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"campaign\",\"value\":\"Impression\"}],\"customer\":{\"customerAttributes\":[{\"attributeId\":\"419712d4-a511-4721-9b8e-0ce4d3df944f\",\"attributeName\":\"Vehicle Type\",\"value\":[\"2 Wheeler\"]},{\"attributeId\":\"23b9fc51-5423-4274-ae26-6713e88c1d51\",\"attributeName\":\"city\",\"value\":\"Jaipur\"},{\"attributeId\":\"02197cb2-0c43-4c43-8196-c6ef6e70154a\",\"attributeName\":\"Loyalty Points\",\"value\":1500}],\"name\":\"Vaishnavi\",\"distributorCode\":\"1e857b4e-ee9c-4911-b35d-7f740bab1b63\",\"id\":\"29a19a53-a264-4a13-a2cf-7aabfe11fedf\",\"isActive\":1,\"status\":\"N\"},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Umesh Singh\",\"channelType\":\"C\",\"latestMessage\":\"Hi {{1}},\",\"id\":\"531c0d53-406c-4fda-a4ce-c05a9573cdab\",\"channelSubType\":null,\"tags\":[{\"type\":\"payment\",\"value\":\"Confirmed\"}],\"customer\":{\"customerAttributes\":[],\"name\":\"Umesh Singh\",\"distributorCode\":\"75dfe1b2-925c-4b55-90ac-1f9f3daba0c3\",\"id\":\"342ae851-7512-45bc-b129-34a610104957\",\"isActive\":1,\"status\":\"N\"},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":5},{\"conversationTags\":[\"invoice\",\"query\"],\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"optimus\",\"channelType\":\"C\",\"latestMessage\":\"Hi {{1}},\",\"id\":\"a73a6160-a0c7-42d5-91d4-5d189c027407\",\"channelSubType\":null,\"tags\":[{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"campaign\",\"value\":\"Impression\"},{\"type\":\"order\",\"value\":\"Received\"}],\"customer\":{\"customerAttributes\":[{\"attributeId\":\"02197cb2-0c43-4c43-8196-c6ef6e70154a\",\"attributeName\":\"Loyalty Points\",\"value\":1000},{\"attributeId\":\"032791d1-878f-419a-a5eb-d0cefdd0f2b2\",\"attributeName\":\"Location\",\"value\":\"agra\"}],\"name\":\"bumbleBee\",\"distributorCode\":\"sshsh\",\"id\":\"4b4df458-ca06-4e9f-8db0-537bf641415f\",\"isActive\":1},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":1},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"mariyano\",\"channelType\":\"C\",\"latestMessage\":\"Hi {{1}},\",\"id\":\"227bead3-2a8f-4add-88c3-09279c612690\",\"channelSubType\":null,\"tags\":[{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"campaign\",\"value\":\"Impression\"}],\"customer\":{\"customerAttributes\":[{\"attributeId\":\"419712d4-a511-4721-9b8e-0ce4d3df944f\",\"attributeName\":\"Vehicle Type\",\"value\":[\"2 Wheeler\"]}],\"name\":\"chaitanya\",\"distributorCode\":\"customer123\",\"id\":\"7d824fa6-2bbd-4c4e-8c83-0e8ad5f5b30f\",\"isActive\":1,\"status\":\"N\"},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":7},{\"conversationTags\":[\"create_order\",\"support_request\"],\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Barani Kumar Naidu\",\"channelType\":\"C\",\"latestMessage\":\"Hi {{1}},\",\"id\":\"1d8ca2e2-0bd7-464f-adf3-9f1bfd110b4b\",\"channelSubType\":null,\"tags\":[{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"campaign\",\"value\":\"Impression\"}],\"customer\":{\"customerAttributes\":[],\"name\":\"Barani Kumar Naidu\",\"distributorCode\":\"08e85270-2dbd-4747-9ea0-5665a1ef2820\",\"id\":\"9a9a8577-ebe8-4392-b534-700a063d0f05\",\"isActive\":1},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":6},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Kristyy\",\"channelType\":\"C\",\"latestMessage\":\"Hi {{1}},\",\"id\":\"d2d86b84-bc2a-4c53-9af2-abff2122fdac\",\"channelSubType\":null,\"tags\":[{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"campaign\",\"value\":\"Sent\"}],\"customer\":{\"customerAttributes\":[],\"name\":\"Kristyy\",\"distributorCode\":\"6c72bcf3-05c4-4b81-95a8-982806a483fa\",\"id\":\"00a6d980-fc0f-4dd3-ae59-c11abf9419d1\",\"isActive\":1},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":1},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Rohith\",\"channelType\":\"C\",\"latestMessage\":\"Hi {{1}},\",\"id\":\"c4c64234-f098-418f-9dc0-fadc2ac43c41\",\"channelSubType\":null,\"tags\":[{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"order\",\"value\":\"Received\"},{\"type\":\"campaign\",\"value\":\"Impression\"}],\"customer\":{\"customerAttributes\":[{\"attributeId\":\"419712d4-a511-4721-9b8e-0ce4d3df944f\",\"attributeName\":\"Vehicle Type\",\"value\":[\"2 Wheeler\"]}],\"name\":\"Rohith\",\"distributorCode\":\"892c88b3-7689-4503-a407-a91d0a99330e\",\"id\":\"38f8dc27-06ef-4d0e-9760-d76a27917e32\",\"isActive\":1},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":2},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Sai Kiran\",\"channelType\":\"C\",\"latestMessage\":\"Hi {{1}},\",\"id\":\"57be40ff-2238-441e-95c7-f62e797b923a\",\"channelSubType\":null,\"tags\":[{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"campaign\",\"value\":\"Impression\"}],\"customer\":{\"customerAttributes\":[{\"attributeId\":\"02197cb2-0c43-4c43-8196-c6ef6e70154a\",\"attributeName\":\"Loyalty Points\",\"value\":2000}],\"name\":\"Sai Kiran\",\"distributorCode\":\"4c768447-a161-4975-bc6a-f116c263cfef\",\"id\":\"db903d34-36a3-4b54-884c-a1213b6d78b3\",\"isActive\":1,\"status\":\"N\"},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":16},{\"latestM...[TRUNCATED]",
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
