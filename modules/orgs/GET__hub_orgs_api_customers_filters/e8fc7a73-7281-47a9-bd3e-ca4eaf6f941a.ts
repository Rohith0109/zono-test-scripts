/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "e8fc7a73-7281-47a9-bd3e-ca4eaf6f941a",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/customers/filters",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [],
    "ignoreResponsePaths": [],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": "{\"routes\":[{\"id\":\"5464c80b-6b8c-408b-bfd7-c291d0447450\",\"name\":\"Routes\",\"customerGroups\":[],\"subFolders\":[{\"id\":\"662f1d8c-6a35-4e16-909c-3720d1034579\",\"name\":\"Telangana\",\"customerGroups\":[{\"id\":\"6fffb4b2-06f9-455b-8fac-997e054456b0\",\"name\":\"Nankramguda\",\"description\":\"test cfa\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"ROUTE\",\"parentId\":\"662f1d8c-6a35-4e16-909c-3720d1034579\",\"customerCount\":13,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"d3810ae1-062f-4906-b83b-28d353462a1d\",\"name\":\"JNTU\",\"description\":\"JNTU\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"ROUTE\",\"parentId\":\"662f1d8c-6a35-4e16-909c-3720d1034579\",\"customerCount\":1,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"f1dddc92-500e-42d3-b3b8-d1e7c51aa76d\",\"name\":\"Vijayawada\",\"description\":\"rt2\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"ROUTE\",\"parentId\":\"662f1d8c-6a35-4e16-909c-3720d1034579\",\"customerCount\":13,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"459d679a-2657-4616-be3a-128205a7e5ac\",\"name\":\"Hyderabad\",\"description\":\"Hyderabad\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"ROUTE\",\"parentId\":\"662f1d8c-6a35-4e16-909c-3720d1034579\",\"customerCount\":20,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]}],\"subFolders\":[{\"id\":\"67ec1d3a-be4e-4489-84b5-f06e6e12a925\",\"name\":\"Waranagal\",\"customerGroups\":[{\"id\":\"1337eb01-b47e-4367-866e-6484f07c45dc\",\"name\":\"Financial District\",\"description\":\"Customers near this area\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"ROUTE\",\"parentId\":\"67ec1d3a-be4e-4489-84b5-f06e6e12a925\",\"customerCount\":5,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"38b0c7e3-5cc9-473a-b657-14b9d377dbb0\",\"name\":\"Nanakramguda \",\"description\":\"Nanakramguda, Hyderabad\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"ROUTE\",\"parentId\":\"67ec1d3a-be4e-4489-84b5-f06e6e12a925\",\"customerCount\":0,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]}],\"subFolders\":[]}]},{\"id\":\"08cf3634-647e-49d4-ac11-9b93574cdf55\",\"name\":\"xyz\",\"customerGroups\":[{\"id\":\"6baeee43-1234-437d-8dd3-376a2a72c314\",\"name\":\"jaipur\",\"description\":\"\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"ROUTE\",\"parentId\":\"08cf3634-647e-49d4-ac11-9b93574cdf55\",\"customerCount\":0,\"emojiId\":\"🌟\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]}],\"subFolders\":[{\"id\":\"4b732621-2000-42e9-af3c-3ae5de5542ea\",\"name\":\"abc\",\"customerGroups\":[{\"id\":\"0b560f8a-c343-49bf-a862-fc9d0f5b6c56\",\"name\":\"udaipur\",\"description\":\"\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"ROUTE\",\"parentId\":\"4b732621-2000-42e9-af3c-3ae5de5542ea\",\"customerCount\":0,\"emojiId\":\"🌟\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]}],\"subFolders\":[]}]}]}],\"customerSegment\":[{\"id\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"name\":\"Segments\",\"customerGroups\":[{\"id\":\"96c21f3e-c4eb-4f19-8bf7-291af436bdb4\",\"name\":\"Secondary\",\"description\":\"\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":1,\"emojiId\":\"\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"420d241c-81f7-44c8-89b6-708378ae13df\",\"name\":\"primary\",\"description\":\"default primary segment\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":6,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"79ace2d7-bff0-4b22-9194-89cdf804afa2\",\"name\":\"Test19\",\"description\":\"Default\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":1,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"d77303c6-c183-4132-9505-f1775da1560a\",\"name\":\"New_leads\",\"description\":\"To assign new leads\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":2,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"1e7bc268-35b3-4526-81a8-5578f6a1d8c7\",\"name\":\"Retailer\",\"description\":\"To assign retailer\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":0,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"8bb5230f-2446-48f8-bc25-a3958080886e\",\"name\":\"Distributor\",\"description\":\"To assign distributor\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":2,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"14d8a9b6-5062-4884-8658-83f23e9e3cf4\",\"name\":\"BirlaNu\",\"description\":\"Test\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":2,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"b4c0e092-90d0-4648-9d8e-cf5ce8875c76\",\"name\":\"Agra\",\"description\":\"Agra\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":3,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"3339aa7d-010e-4705-b2be-683255cf8647\",\"name\":\"Metaa\",\"description\":\"Metaa\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":22,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"8cf37e2c-9080-47ca-b5f9-57fb4c59bac2\",\"name\":\"rsvirla_dealer\",\"description\":\"Customer type dealer\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":7,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]},{\"id\":\"3feb8d57-19ea-4d44-ad23-636d0fb46e14\",\"name\":\"usersegment\",\"description\":\"usersegment\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerCount\":8,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]}],\"subFolders\":[{\"id\":\"c6d3beeb-727b-4555-b5aa-3afca8cc8672\",\"name\":\"Hyderabad\",\"customerGroups\":[],\"subFolders\":[]},{\"id\":\"a33c15d8-8c9d-4e9d-813b-6f24a568432b\",\"name\":\"testfolder3\",\"customerGroups\":[{\"id\":\"147f9b7e-d1b7-4639-b183-033b0d253eea\",\"name\":\"loyalsegment3\",\"description\":\"loyalsegment2\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"SEGMENT\",\"parentId\":\"a33c15d8-8c9d-4e9d-813b-6f24a568432b\",\"customerCount\":2,\"emojiId\":\"😊\",\"isAutomatic\":false,\"isActive\":true,\"isDefaultLifeCycle\":false,\"customerGroupRules\":[]}],\"subFolders\":[{\"id\":\"9f5c6cbb-4a62-486c-8afe-3850d5b1599c\",\"name\":\"AP\",\"customerGroups\":[],\"subFolders\":[]}]}]}],\"dynamicSegment\":[{\"id\":\"dynamic-segments-root\",\"name\":\"Dynamic Segments\",\"customerGroups\":[{\"id\":\"d9decc5b-50f3-487b-a035-0fd7a1e5ad03\",\"name\":\"test1\",\"description\":\"test11\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"parentId\":\"\",\"customerCount\":0,\"emojiId\":\"\",\"isAutomatic\":true,\"isActive\":true,\"isDefaultLifeCycle\":false,\"custo...[TRUNCATED]",
  "label": "",
  "suite": "Unassigned",
  "disabled": false
} as const;

export async function run(context: {
  baseUrl: string;
  authToken?: string;
  fetchImpl?: typeof fetch;
}) {
  const fetcher = context.fetchImpl || fetch;
  const normalizedBase = context.baseUrl.endsWith('/')
    ? context.baseUrl.slice(0, -1)
    : context.baseUrl;
  const [method, ...pathParts] = metadata.endpoint.split(' ');
  const path = pathParts.join(' ').trim() || '/';
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
