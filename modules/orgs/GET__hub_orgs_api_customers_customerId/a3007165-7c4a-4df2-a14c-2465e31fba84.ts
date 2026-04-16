/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "a3007165-7c4a-4df2-a14c-2465e31fba84",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/customers/{customerId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?includeCustomerGroupAssignments=1&includeWorkspaceMembers=1&includeTeamCustomersMapping=true&pageNo=1&pageSize=20&includeTeamCustomerCount=true&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "cache-control": "no-cache"
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
  "responseSample": "{\"customers\":[{\"id\":\"6cec6ab9-0cb2-4074-aff8-e2caedc6a56a\",\"name\":\"Only Sons\",\"mobile\":\"912345678901\",\"phone\":\"912345678901\",\"senderUserId\":\"c6897544-32b6-4a95-addf-c2d656ce05ac\",\"senderWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invitedWorkspaceId\":null,\"status\":\"N\",\"isActive\":0,\"createdDate\":\"2025-06-20T13:23:36.740Z\",\"updatedDate\":\"2026-04-07T11:58:05.000Z\",\"gstin\":\" \",\"wgstin\":\" \",\"businessPAN\":null,\"distributorCode\":\"CUS-003\",\"postalCode\":\"500080\",\"physicalAddress\":\"{\\\"address1\\\":\\\"Gachibowli\\\"}\",\"companyName\":\"Mehta & Sons\",\"stateId\":\"24b724f9-0579-4c40-b84a-5f75639ca1dc\",\"countryId\":null,\"cityName\":\"Hyderabad\",\"email\":\"mehtaandsons@gmail.com\",\"grossCreditLimit\":0,\"creditLimitPeriod\":0,\"telephone\":\"912345678901\",\"CSTNumber\":null,\"distributorChannel\":null,\"stateName\":\"TELANGANA\",\"stateCode\":\"36\",\"cityCode\":\"\",\"shippingAddress\":\"{\\\"state\\\":\\\"36\\\",\\\"pincode\\\":\\\"500080\\\",\\\"countryCode\\\":\\\"IN\\\",\\\"shippingAddress1\\\":\\\"Gachibowli\\\"}\",\"cfaCount\":0,\"divisionCount\":0,\"teamMemberCount\":\"4\",\"routes\":[{\"id\":\"1337eb01-b47e-4367-866e-6484f07c45dc\",\"name\":\"Financial District\",\"parentId\":\"67ec1d3a-be4e-4489-84b5-f06e6e12a925\",\"customerGroupType\":\"ROUTE\",\"emojiId\":\"😊\"}],\"customer_segment\":[{\"id\":\"d77303c6-c183-4132-9505-f1775da1560a\",\"name\":\"New_leads\",\"parentId\":\"7f3c734f-6e2a-4392-84e2-2eb998b4396b\",\"customerGroupType\":\"SEGMENT\",\"emojiId\":\"😊\"}],\"customerLifeCycleGroups\":[{\"id\":\"7af09d17-ec3c-40bd-924f-72dbeaf5eba8\",\"name\":\"Warm\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"emojiId\":\"🔥\"},{\"isAutomatic\":true,\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"name\":\"Active\",\"id\":\"40f1c302-da31-4edf-9cc0-82f786878026\",\"emojiId\":\"✅\"}],\"dynamicSegments\":[{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"dfsgrfg\",\"id\":\"a9407eb5-150e-408b-932b-bb631d19e9ad\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Check Dropdown\",\"id\":\"84950ed8-b8a5-4187-8303-e5e38354b01e\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Dormant / Inactive\",\"id\":\"54482c2d-08dd-4496-9318-bbf52f7cb6a1\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Customers with High usage\",\"id\":\"2fa49f9e-02c4-4b24-b0ce-723ad2862610\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Dropdown Test segment\",\"id\":\"25205298-64d5-4bf1-9380-f1484856703a\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"customers with location Hyderabad\",\"id\":\"e0faec72-8658-4ebe-ba0b-cf4de6d79c38\",\"emojiId\":\"\"}],\"attributeValues\":null,\"excludedAndBlockedBotAudience\":{\"inviteId\":\"6cec6ab9-0cb2-4074-aff8-e2caedc6a56a\",\"isArchived\":false},\"cfas\":null},{\"id\":\"6db55fc6-a5ab-4e13-afe0-b9161203ca1b\",\"name\":\"A-One Sales\",\"mobile\":\"913456123789\",\"phone\":\"913456123789\",\"senderUserId\":\"c6897544-32b6-4a95-addf-c2d656ce05ac\",\"senderWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invitedWorkspaceId\":null,\"status\":\"N\",\"isActive\":1,\"createdDate\":\"2025-06-20T13:23:37.934Z\",\"updatedDate\":\"2026-03-17T09:41:57.000Z\",\"gstin\":\" \",\"wgstin\":\" \",\"businessPAN\":null,\"distributorCode\":\"CUS-016\",\"postalCode\":null,\"physicalAddress\":\"{\\\"address1\\\":\\\"\\\",\\\"address2\\\":\\\"\\\"}\",\"companyName\":\"A-One Sales Corporation\",\"stateId\":null,\"countryId\":null,\"cityName\":null,\"email\":\"aone.salesco@gmail.com\",\"grossCreditLimit\":0,\"creditLimitPeriod\":0,\"telephone\":\"913456123789\",\"CSTNumber\":null,\"distributorChannel\":null,\"stateName\":\"\",\"stateCode\":\"\",\"cityCode\":\"\",\"shippingAddress\":\"{\\\"countryCode\\\":\\\"IN\\\"}\",\"cfaCount\":0,\"divisionCount\":0,\"teamMemberCount\":\"4\",\"routes\":[],\"customer_segment\":[],\"customerLifeCycleGroups\":[{\"id\":\"f705aa84-6f75-46d0-aaa4-4161b4933a2f\",\"name\":\"Cold\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"emojiId\":\"❄️\"},{\"isAutomatic\":true,\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"name\":\"Active\",\"id\":\"40f1c302-da31-4edf-9cc0-82f786878026\",\"emojiId\":\"✅\"}],\"dynamicSegments\":[{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Type of Customers\",\"id\":\"587082a6-1418-4eb8-a2fb-d42802deb0df\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Check Dropdown\",\"id\":\"84950ed8-b8a5-4187-8303-e5e38354b01e\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Dropdown Test segment\",\"id\":\"25205298-64d5-4bf1-9380-f1484856703a\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Dormant / Inactive\",\"id\":\"54482c2d-08dd-4496-9318-bbf52f7cb6a1\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"dfsgrfg\",\"id\":\"a9407eb5-150e-408b-932b-bb631d19e9ad\",\"emojiId\":\"\"}],\"attributeValues\":null,\"excludedAndBlockedBotAudience\":null,\"cfas\":null},{\"id\":\"09d0f956-9ab4-4219-a7e2-1cde42c4654b\",\"name\":\"Krishna Wholesalers\",\"mobile\":\"914321987650\",\"phone\":\"914321987650\",\"senderUserId\":\"c6897544-32b6-4a95-addf-c2d656ce05ac\",\"senderWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invitedWorkspaceId\":null,\"status\":\"N\",\"isActive\":0,\"createdDate\":\"2025-06-20T13:23:38.034Z\",\"updatedDate\":\"2025-10-09T08:09:43.198Z\",\"gstin\":\" \",\"wgstin\":\" \",\"businessPAN\":null,\"distributorCode\":\"CUS-017\",\"postalCode\":null,\"physicalAddress\":\"{\\\"address1\\\":\\\"\\\",\\\"address2\\\":\\\"\\\"}\",\"companyName\":\"Krishna Wholesalers\",\"stateId\":null,\"countryId\":null,\"cityName\":null,\"email\":\"krishnawholesalers@mail.com\",\"grossCreditLimit\":0,\"creditLimitPeriod\":0,\"telephone\":\"914321987650\",\"CSTNumber\":null,\"distributorChannel\":null,\"stateName\":\"\",\"stateCode\":\"\",\"cityCode\":\"\",\"shippingAddress\":\"{\\\"shippingAddress1\\\":\\\"\\\",\\\"shippingAddress2\\\":\\\"\\\"}\",\"cfaCount\":0,\"divisionCount\":0,\"teamMemberCount\":0,\"routes\":[],\"customer_segment\":[],\"customerLifeCycleGroups\":[],\"dynamicSegments\":[{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Dormant / Inactive\",\"id\":\"54482c2d-08dd-4496-9318-bbf52f7cb6a1\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"dfsgrfg\",\"id\":\"a9407eb5-150e-408b-932b-bb631d19e9ad\",\"emojiId\":\"\"}],\"attributeValues\":null,\"excludedAndBlockedBotAudience\":null,\"cfas\":null},{\"id\":\"78062be5-7e96-4ad7-851f-b918aacb5bf4\",\"name\":\"Balaji Supply Co.\",\"mobile\":\"912413625789\",\"phone\":\"912413625789\",\"senderUserId\":\"c6897544-32b6-4a95-addf-c2d656ce05ac\",\"senderWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invitedWorkspaceId\":null,\"status\":\"N\",\"isActive\":1,\"createdDate\":\"2025-06-20T13:23:38.165Z\",\"updatedDate\":\"2026-03-31T06:42:08.000Z\",\"gstin\":\" \",\"wgstin\":\" \",\"businessPAN\":null,\"distributorCode\":\"CUS-007\",\"postalCode\":null,\"physicalAddress\":\"{\\\"address1\\\":\\\"\\\",\\\"address2\\\":\\\"\\\"}\",\"companyName\":\"Balaji Supply Co.\",\"stateId\":null,\"countryId\":null,\"cityName\":null,\"email\":\"balajisupplyco@mail.com\",\"grossCreditLimit\":0,\"creditLimitPeriod\":0,\"telephone\":\"912413625789\",\"CSTNumber\":null,\"distributorChannel\":null,\"stateName\":\"\",\"stateCode\":\"\",\"cityCode\":\"\",\"shippingAddress\":\"{\\\"countryCode\\\":\\\"IN\\\"}\",\"cfaCount\":0,\"divisionCount\":0,\"teamMemberCount\":\"6\",\"routes\":[{\"id\":\"459d679a-2657-4616-be3a-128205a7e5ac\",\"name\":\"Hyderabad\",\"parentId\":\"662f1d8c-6a35-4e16-909c-3720d1034579\",\"customerGroupType\":\"ROUTE\",\"emojiId\":\"😊\"}],\"customer_segment\":[],\"customerLifeCycleGroups\":[{\"id\":\"9497bcf8-2b32-46f9-a429-b2f99239b5e1\",\"name\":\"Irrelevant\",\"parentId\":\"35e136d6-5c94-42d7-bb46-a5da6ca360e2\",\"customerGroupType\":\"CUSTOMER_LIFE_CYCLE\",\"emojiId\":\"🚫\"}],\"dynamicSegments\":[{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Check Dropdown\",\"id\":\"84950ed8-b8a5-4187-8303-e5e38354b01e\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"Customers from city Mumbai\",\"id\":\"45f435cc-d6ee-4da5-a5bc-b36c2c89cbc8\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"customers with more loyalty points\",\"id\":\"0a2b7cc7-7a26-4a8a-89fb-058a6a5807a4\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"dfsgrfg\",\"id\":\"a9407eb5-150e-408b-932b-bb631d19e9ad\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYNAMIC_SEGMENT\",\"name\":\"test1\",\"id\":\"d9decc5b-50f3-487b-a035-0fd7a1e5ad03\",\"emojiId\":\"\"},{\"isAutomatic\":true,\"customerGroupType\":\"DYN...[TRUNCATED]",
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
