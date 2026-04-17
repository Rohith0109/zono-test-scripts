/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "b38209ea-8d9e-4ba1-971d-83ea058cecb5",
  "method": "GET",
  "endpoint": "GET /hub/communication-v2/api/channel/member",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "communication-v2",
  "query": "?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&id=0a6a51dc-5091-4b65-9c15-38fd0e970dba&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&random=0.9869318942214107",
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
  "responseSample": "{\"id\":\"0a6a51dc-5091-4b65-9c15-38fd0e970dba\",\"createdAt\":\"2025-12-17T11:10:38.828Z\",\"updatedAt\":\"2025-12-17T11:10:38.828Z\",\"channelName\":\"Vaishnavi\",\"linkedWorkspaceId\":null,\"accessType\":null,\"profilePic\":null,\"updatedBy\":null,\"emojiId\":null,\"messageId\":null,\"description\":null,\"ownerId\":null,\"isDefault\":false,\"appId\":\"\",\"channelType\":\"C\",\"entityType\":null,\"entityId\":null,\"channelSubType\":null,\"customerId\":\"29a19a53-a264-4a13-a2cf-7aabfe11fedf\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"folderId\":null,\"isActive\":true,\"enableWhatsappNotification\":true,\"issueStatus\":null,\"waGroupId\":null,\"waRequestId\":null,\"inviteLink\":null,\"channelRole\":null,\"teamMembers\":[{\"id\":\"7f9d52c1-1233-467e-b7d3-b5d5452f56d7\",\"inviteId\":\"00dd7cb7-3e74-4eed-b0c0-d9abe83c0668\",\"employeeCode\":\"CFA162626\",\"employeeName\":\"Sri Sai\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"912033882828\",\"waMemberId\":null},{\"id\":\"d5614a8c-9267-4ee9-82ff-d6c7c9e97f13\",\"inviteId\":\"13431e94-22eb-47e9-9ed8-1e2273057d20\",\"employeeCode\":\"81891sfs\",\"employeeName\":\"sales3\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"cbf0bd6b-5d91-49b3-a853-8cba62363b28\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912989328948\",\"waMemberId\":null},{\"id\":\"520c1184-4f31-4338-9e86-18dc8cacdeea\",\"inviteId\":\"142c41a1-d4db-4050-a8c3-b4685abc5411\",\"employeeCode\":\"23789987\",\"employeeName\":\"sales3\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"b91fdd9e-51a6-4c58-93c0-31d0cc536383\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912987237823\",\"waMemberId\":null},{\"id\":\"492cfc76-5cbe-492e-b27b-cb89b6c718b9\",\"inviteId\":\"1472788e-a20e-4c00-9861-12fac82b08d4\",\"employeeCode\":\"TS1232\",\"employeeName\":\"Test Sales 1232\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"430585ca-f191-4aae-bc11-25e222754d9a\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911232134319\",\"waMemberId\":null},{\"id\":\"b31d4a83-4c51-45cb-9ad2-17e73a0e0d10\",\"inviteId\":\"1674de4e-0a01-460f-9c30-48d2a24b6cc3\",\"employeeCode\":\"3232\",\"employeeName\":\"tarun-member\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"25f67dee-7556-42c4-ba34-62dadb5d2efe\",\"userType\":\"M\",\"avatar\":null,\"phoneNumber\":\"918792180790\",\"waMemberId\":null},{\"id\":\"cb321595-8880-4df1-9b06-4cb05f1a9f32\",\"inviteId\":\"179b6c78-2071-45fc-a81d-d3dd56471bdf\",\"employeeCode\":\"shar72727\",\"employeeName\":\"Sharonnn\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"913563636116\",\"waMemberId\":null},{\"id\":\"ef8c6f0f-f90c-489a-96eb-951c14d3639b\",\"inviteId\":\"1924c5a6-a736-4853-a8fe-8b4e27bac8f6\",\"employeeCode\":\"9828932\",\"employeeName\":\"sales3\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"8c8ef355-e630-4855-97c4-3e6512d107f9\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911789128928\",\"waMemberId\":null},{\"id\":\"e0e4cdcd-56f7-4d60-89f7-578eeb57a020\",\"inviteId\":\"1db4b7e0-5510-42a2-bc24-8f0a6300f705\",\"employeeCode\":\"203233\",\"employeeName\":\"Test US CFA\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"2c31f3a1-d95b-4d8f-b7ca-949990b97ecd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"911502065968\",\"waMemberId\":null},{\"id\":\"eab5fc31-6e7f-47cd-a33c-815b2880f68b\",\"inviteId\":\"1eea806b-fb5d-487b-b9e7-14cf9d128bad\",\"employeeCode\":\"150062202\",\"employeeName\":\"CFA Testing 112233\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"a0ce209c-b93f-4290-ba14-343780d86ef9\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"36b91e42-9126-4e97-8245-359f6fb63914\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"914120555522\",\"waMemberId\":null},{\"id\":\"bc243a98-d3af-4b35-a1bb-7b7dc133e2e7\",\"inviteId\":\"2515b6c8-fb50-47ab-83df-f7af1b7635c5\",\"employeeCode\":\"266626\",\"employeeName\":\"Test Sales Check 344443\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"7c0dae8b-42c0-44f6-b4af-9bff1f47c9fa\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911540502622\",\"waMemberId\":null},{\"id\":\"f94f1d67-142b-4722-b6d0-d94ff66ff616\",\"inviteId\":\"26b321ab-7258-4f2f-818f-28d2e918d606\",\"employeeCode\":\"3223\",\"employeeName\":\"member-sales-cust(NP)\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"3fd86888-f96f-4836-82ff-6be088474d9a\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912291001201\",\"waMemberId\":null},{\"id\":\"dab526d5-7703-4074-baaf-0618b74c8bcc\",\"inviteId\":\"2c36f00a-f8bd-4fa5-b2e0-1e595bcff5fe\",\"employeeCode\":\"14120130\",\"employeeName\":\"Ladha Enterprises\",\"cityName\":\"Hyderabad\",\"stateName\":\"TELANGANA\",\"fulfillmentLocationId\":\"880f1a73-1537-4388-9663-1a66a48cdf8b\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"911252601122\",\"waMemberId\":null},{\"id\":\"ea119139-f5ec-4418-9a8e-3524e0aa8685\",\"inviteId\":\"2f5ab109-f5b4-4da5-8355-41e7ad54ee9f\",\"employeeCode\":\"451155\",\"employeeName\":\"Sales Test\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912666626641\",\"waMemberId\":null},{\"id\":\"5b1f0de6-a67d-4f90-92a1-3c377d2ba725\",\"inviteId\":\"2feea6c1-fdf9-49c1-8c96-c61024853ae6\",\"employeeCode\":\"18928912\",\"employeeName\":\"test3\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00083881-5414-4a73-a816-7a4044f714fd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"3d7c4a16-e61c-4e18-88c6-3f16acf43803\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912191298928\",\"waMemberId\":null},{\"id\":\"11380df3-a4e9-42d6-9bcb-eac9c40f17b1\",\"inviteId\":\"3252c5c7-81a8-4568-8bd8-c90ae3804392\",\"employeeCode\":\"68\",\"employeeName\":\"testing\",\"cityName\":\"hyderabad\",\"stateName\":\"TELANGANA\",\"fulfillmentLocationId\":\"060a53e1-58ca-4dc3-ad92-1128838ee05d\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"917793987768\",\"waMemberId\":null},{\"id\":\"09cdb31e-6258-4ac6-9694-a1d5dbc85faf\",\"inviteId\":\"329525b6-4a33-4d9b-8619-818aece67285\",\"employeeCode\":\"8128912\",\"employeeName\":\"sales1\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"2e5cec31-d712-4373-b60b-325bc185ef36\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912289893289\",\"waMemberId\":null},{\"id\":\"439a2296-68f0-4ffe-befd-20f310427f6c\",\"inviteId\":\"33ecfac8-dd43-4152-ac56-7228d62213e6\",\"employeeCode\":\"151551225\",\"employeeName\":\"Test Sales Check 552\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"7f5c3dd6-6b57-407d-88cc-13f4ac4933f9\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"914404065626\",\"waMemberId\":null},{\"id\":\"c81a7b86-0d77-4c5c-977c-5ee1b172a73d\",\"inviteId\":\"34dacf25-222a-47dd-81bf-544a3d77873c\",\"employeeCode\":\"2626066\",\"employeeName\":\"Sales Agent 1122\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"4d7e30c3-0fbe-4a6d-9bb5-7bf40b4fd8a7\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911405620432\",\"waMemberId\":null},{\"id\":\"3b7f0df7-9854-4dc1-9228-8f489fb1e752\",\"inviteId\":\"358beb53-de6c-4939-9280-3a3822be5667\",\"employeeCode\":\"818912\",\"employeeName\":\"sales\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00083881-5414-4a73-a816-7a4044f714fd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"b6f950af-bcda-42e6-b6c8-c4374582d462\",\"userType\":\"Sales\",\"av...[TRUNCATED]",
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
