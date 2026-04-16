/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "b8110d91-43f3-4dbd-ae84-c2a309c4138d",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/customer-group",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?customerGroupTypes[]=CUSTOMER_LIFE_CYCLE&customerGroupTypes[]=SEGMENT&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&random=0.3855644125677308",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [],
    "ignoreResponsePaths": [],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": "[{\"groupType\":\"CUSTOMER_LIFE_CYCLE\",\"supportsHierrarchy\":true,\"folders\":[{\"id\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"name\":\"Customer Life Cycle\",\"customerGroups\":[{\"id\":\"12bea929-cc48-4f06-a9fa-275f5592bdcb\",\"name\":\"New Lead\",\"description\":\"Newly acquired leads\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerCount\":16,\"emojiId\":\"🆕\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":true,\"customerGroupRules\":[]},{\"id\":\"0509e1e3-3952-4fd8-9938-a31b5cac236b\",\"name\":\"Activated\",\"description\":\"Activated leads\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerCount\":47,\"emojiId\":\"✅\",\"isAutomatic\":true,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[{\"id\":\"39bd51f7-18d1-422f-87af-35754f2fb6f7\",\"createdDate\":\"2025-09-23T11:51:03.000Z\",\"updatedDate\":\"2025-09-23T11:51:03.000Z\",\"segmentId\":\"\",\"groupId\":\"0509e1e3-3952-4fd8-9938-a31b5cac236b\",\"metricPeriod\":null,\"operator\":\"EQUAL\",\"metricValue\":\"1\",\"sequence\":1,\"groupOperator\":\"OR\",\"metricId\":\"677942e0-178c-46f8-8ba7-5b436a015711\",\"customerAttributeId\":null,\"metricType\":null},{\"id\":\"60f6e24a-adad-4274-862e-67c824c37a41\",\"createdDate\":\"2025-09-23T11:51:03.000Z\",\"updatedDate\":\"2025-09-23T11:51:03.000Z\",\"segmentId\":\"\",\"groupId\":\"0509e1e3-3952-4fd8-9938-a31b5cac236b\",\"metricPeriod\":null,\"operator\":\"EQUAL\",\"metricValue\":\"1\",\"sequence\":2,\"groupOperator\":\"OR\",\"metricId\":\"1b7b36ee-ada2-4a59-a16d-201a8d09c962\",\"customerAttributeId\":null,\"metricType\":null}]},{\"id\":\"f705aa84-6f75-46d0-aaa4-4161b4933a2f\",\"name\":\"Cold\",\"description\":\"Cold leads\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerCount\":3,\"emojiId\":\"❄️\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"9497bcf8-2b32-46f9-a429-b2f99239b5e1\",\"name\":\"Irrelevant\",\"description\":\"Irrelevant leads\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerCount\":11,\"emojiId\":\"🚫\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"7af09d17-ec3c-40bd-924f-72dbeaf5eba8\",\"name\":\"Warm\",\"description\":\"Warm leads\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerCount\":9,\"emojiId\":\"🔥\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"40f1c302-da31-4edf-9cc0-82f786878026\",\"name\":\"Active\",\"description\":\"Active leads\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerCount\":24,\"emojiId\":\"✅\",\"isAutomatic\":true,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[{\"id\":\"0a9b10df-f4d6-4c27-a80f-758d769fdbad\",\"createdDate\":\"2025-09-23T11:51:36.000Z\",\"updatedDate\":\"2025-09-23T11:51:36.000Z\",\"segmentId\":\"\",\"groupId\":\"40f1c302-da31-4edf-9cc0-82f786878026\",\"metricPeriod\":\"30\",\"operator\":\"GREATER\",\"metricValue\":\"1\",\"sequence\":2,\"groupOperator\":\"OR\",\"metricId\":\"57f96a04-9435-4e53-94e3-b569212bd51c\",\"customerAttributeId\":null,\"metricType\":null},{\"id\":\"571b14e3-0836-4961-b34b-8fbb345667f9\",\"createdDate\":\"2025-09-23T11:51:36.000Z\",\"updatedDate\":\"2025-09-23T11:51:36.000Z\",\"segmentId\":\"\",\"groupId\":\"40f1c302-da31-4edf-9cc0-82f786878026\",\"metricPeriod\":\"30\",\"operator\":\"GREATER\",\"metricValue\":\"1\",\"sequence\":1,\"groupOperator\":\"OR\",\"metricId\":\"ea0bcee6-2dc1-4cae-955f-0dd5addb7fff\",\"customerAttributeId\":null,\"metricType\":null}]},{\"id\":\"c8b6349c-7f0b-4dd6-a92f-c0f9ab833d42\",\"name\":\"Dormant\",\"description\":\"Dormant leads\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerCount\":57,\"emojiId\":\"😴\",\"isAutomatic\":true,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[{\"id\":\"55dbef46-dc57-4c1a-a34c-5d2ce86fb6ec\",\"createdDate\":\"2025-09-23T12:05:03.000Z\",\"updatedDate\":\"2025-09-23T12:05:03.000Z\",\"segmentId\":\"\",\"groupId\":\"c8b6349c-7f0b-4dd6-a92f-c0f9ab833d42\",\"metricPeriod\":null,\"operator\":\"GREATER\",\"metricValue\":\"60\",\"sequence\":2,\"groupOperator\":\"OR\",\"metricId\":\"38b1cea9-4a13-46da-beac-96fd6c880f2f\",\"customerAttributeId\":null,\"metricType\":null},{\"id\":\"ff9c68b0-6aff-4929-8ca8-789b99392b9b\",\"createdDate\":\"2025-09-23T12:05:03.000Z\",\"updatedDate\":\"2025-09-23T12:05:03.000Z\",\"segmentId\":\"\",\"groupId\":\"c8b6349c-7f0b-4dd6-a92f-c0f9ab833d42\",\"metricPeriod\":null,\"operator\":\"GREATER\",\"metricValue\":\"60\",\"sequence\":1,\"groupOperator\":\"OR\",\"metricId\":\"5adea54f-1762-44a0-9d26-0e443960d43b\",\"customerAttributeId\":null,\"metricType\":null}]},{\"id\":\"b56a590e-e468-4a8e-83bc-dc08263e0c42\",\"name\":\"To Be Inactive\",\"description\":\"To be inactive leads\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerCount\":7,\"emojiId\":\"🌙\",\"isAutomatic\":true,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[{\"id\":\"0794720b-d286-4617-8b17-055b4c855a05\",\"createdDate\":\"2025-09-23T11:52:04.000Z\",\"updatedDate\":\"2025-09-23T11:52:04.000Z\",\"segmentId\":\"\",\"groupId\":\"b56a590e-e468-4a8e-83bc-dc08263e0c42\",\"metricPeriod\":null,\"operator\":\"BETWEEN\",\"metricValue\":\"30,60\",\"sequence\":1,\"groupOperator\":\"OR\",\"metricId\":\"5adea54f-1762-44a0-9d26-0e443960d43b\",\"customerAttributeId\":null,\"metricType\":null},{\"id\":\"502dc35b-01e2-4784-8fc1-b4fa286aa074\",\"createdDate\":\"2025-09-23T11:52:04.000Z\",\"updatedDate\":\"2025-09-23T11:52:04.000Z\",\"segmentId\":\"\",\"groupId\":\"b56a590e-e468-4a8e-83bc-dc08263e0c42\",\"metricPeriod\":null,\"operator\":\"BETWEEN\",\"metricValue\":\"30,60\",\"sequence\":2,\"groupOperator\":\"OR\",\"metricId\":\"38b1cea9-4a13-46da-beac-96fd6c880f2f\",\"customerAttributeId\":null,\"metricType\":null}]}],\"subFolders\":[{\"id\":\"1d58489f-fc3a-4219-aa9d-517932934521\",\"name\":\"sasas\",\"customerGroups\":[],\"subFolders\":[]}]}],\"rootCustomerGroups\":[]},{\"groupType\":\"SEGMENT\",\"supportsHierrarchy\":true,\"folders\":[{\"id\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"name\":\"Segments\",\"customerGroups\":[{\"id\":\"96c21f3e-c4eb-4f19-8bf7-291af436bdb4\",\"name\":\"Secondary\",\"description\":\"\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":1,\"emojiId\":\"\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"420d241c-81f7-44c8-89b6-708378ae13df\",\"name\":\"primary\",\"description\":\"default primary segment\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":6,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"79ace2d7-bff0-4b22-9194-89cdf804afa2\",\"name\":\"Test19\",\"description\":\"Default\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":1,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"d77303c6-c183-4132-9505-f1775da1560a\",\"name\":\"New_leads\",\"description\":\"To assign new leads\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":2,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"1e7bc268-35b3-4526-81a8-5578f6a1d8c7\",\"name\":\"Retailer\",\"description\":\"To assign retailer\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":0,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"8bb5230f-2446-48f8-bc25-a3958080886e\",\"name\":\"Distributor\",\"description\":\"To assign...[TRUNCATED]",
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
