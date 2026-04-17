/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "ae8fdcf6-3c9f-42a9-b95e-469c8ee1a8af",
  "method": "GET",
  "endpoint": "GET /hub/communication-v2/api/channel/member",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "communication-v2",
  "query": "?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&id=44ab7264-8873-4e7e-99ba-70112af8bb6b&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&random=0.0038432197600716256",
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
  "responseSample": "{\"id\":\"44ab7264-8873-4e7e-99ba-70112af8bb6b\",\"createdAt\":\"2026-04-15T08:58:57.924Z\",\"updatedAt\":\"2026-04-15T08:58:57.924Z\",\"channelName\":\"M/S CHARUTRADING\",\"linkedWorkspaceId\":null,\"accessType\":null,\"profilePic\":null,\"updatedBy\":null,\"emojiId\":null,\"messageId\":null,\"description\":null,\"ownerId\":null,\"isDefault\":false,\"appId\":\"\",\"channelType\":\"C\",\"entityType\":null,\"entityId\":null,\"channelSubType\":null,\"customerId\":\"7c7b1882-63a4-4ff2-96a8-bf428ab790a1\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"folderId\":null,\"isActive\":true,\"enableWhatsappNotification\":true,\"issueStatus\":null,\"waGroupId\":null,\"waRequestId\":null,\"inviteLink\":null,\"channelRole\":null,\"teamMembers\":[{\"id\":\"ef7e2dd1-9658-4c30-9990-00f3a55e95b9\",\"inviteId\":\"00dd7cb7-3e74-4eed-b0c0-d9abe83c0668\",\"employeeCode\":\"CFA162626\",\"employeeName\":\"Sri Sai\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"472080c4-03e6-4b8a-85f6-2c53d5810f3e\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"912033882828\",\"waMemberId\":null},{\"id\":\"3164ad0e-78d6-4978-9a4c-d25516a0c0fe\",\"inviteId\":\"0c8b6d7a-86f1-42c4-80d7-d7bc84d4d5df\",\"employeeCode\":\"199020923\",\"employeeName\":\"CFA\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"12661dc1-b38d-4178-b680-f8332a51b3ea\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"912465829745\",\"waMemberId\":null},{\"id\":\"a591def5-b1a5-4da9-8820-16ac254f47c3\",\"inviteId\":\"0cb65171-b380-4276-a847-e0bddb8190d8\",\"employeeCode\":\"hc20q020\",\"employeeName\":\"Yasaswini\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"25f67dee-7556-42c4-ba34-62dadb5d2efe\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"918374962003\",\"waMemberId\":null},{\"id\":\"34162d47-8a21-4fc3-9d29-096a6f1bb22b\",\"inviteId\":\"13431e94-22eb-47e9-9ed8-1e2273057d20\",\"employeeCode\":\"81891sfs\",\"employeeName\":\"sales3\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"cbf0bd6b-5d91-49b3-a853-8cba62363b28\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912989328948\",\"waMemberId\":null},{\"id\":\"c2e3f65b-2301-4cf2-bad8-3004686ad26f\",\"inviteId\":\"142c41a1-d4db-4050-a8c3-b4685abc5411\",\"employeeCode\":\"23789987\",\"employeeName\":\"sales3\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"b91fdd9e-51a6-4c58-93c0-31d0cc536383\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912987237823\",\"waMemberId\":null},{\"id\":\"cf3864c8-b3f4-4512-a57a-0981eb4297d0\",\"inviteId\":\"1472788e-a20e-4c00-9861-12fac82b08d4\",\"employeeCode\":\"TS1232\",\"employeeName\":\"Test Sales 1232\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"430585ca-f191-4aae-bc11-25e222754d9a\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"76b4fc2f-e281-4efd-96e6-0f9c2faf5c3a\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911232134319\",\"waMemberId\":null},{\"id\":\"f920722b-404a-43a5-a70e-1168b67c24f3\",\"inviteId\":\"1674de4e-0a01-460f-9c30-48d2a24b6cc3\",\"employeeCode\":\"3232\",\"employeeName\":\"tarun-member\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"25f67dee-7556-42c4-ba34-62dadb5d2efe\",\"userType\":\"M\",\"avatar\":null,\"phoneNumber\":\"918792180790\",\"waMemberId\":null},{\"id\":\"6269766e-7439-47d7-8b56-9af33595ed83\",\"inviteId\":\"179b6c78-2071-45fc-a81d-d3dd56471bdf\",\"employeeCode\":\"shar72727\",\"employeeName\":\"Sharonnn\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"414414d8-c197-4a82-9081-f602ce8c3476\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"913563636116\",\"waMemberId\":null},{\"id\":\"9352d28c-c833-44bc-99b4-5b1c63ca3709\",\"inviteId\":\"1924c5a6-a736-4853-a8fe-8b4e27bac8f6\",\"employeeCode\":\"9828932\",\"employeeName\":\"sales3\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"8c8ef355-e630-4855-97c4-3e6512d107f9\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911789128928\",\"waMemberId\":null},{\"id\":\"e80b834e-308c-44c5-80a7-56324993c3fd\",\"inviteId\":\"1db4b7e0-5510-42a2-bc24-8f0a6300f705\",\"employeeCode\":\"203233\",\"employeeName\":\"Test US CFA\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"2c31f3a1-d95b-4d8f-b7ca-949990b97ecd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"002964a7-09b1-4512-afde-9226886ef84b\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"911502065968\",\"waMemberId\":null},{\"id\":\"07da7c3f-b0d0-49b0-a559-8383f41fffd4\",\"inviteId\":\"1eea806b-fb5d-487b-b9e7-14cf9d128bad\",\"employeeCode\":\"150062202\",\"employeeName\":\"CFA Testing 112233\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"a0ce209c-b93f-4290-ba14-343780d86ef9\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"36b91e42-9126-4e97-8245-359f6fb63914\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"914120555522\",\"waMemberId\":null},{\"id\":\"5618306d-cd50-49d8-82c8-ffb61ce834e0\",\"inviteId\":\"2515b6c8-fb50-47ab-83df-f7af1b7635c5\",\"employeeCode\":\"266626\",\"employeeName\":\"Test Sales Check 344443\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"7c0dae8b-42c0-44f6-b4af-9bff1f47c9fa\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911540502622\",\"waMemberId\":null},{\"id\":\"f1a9700b-7f14-4733-8d38-c722823fce8d\",\"inviteId\":\"26b321ab-7258-4f2f-818f-28d2e918d606\",\"employeeCode\":\"3223\",\"employeeName\":\"member-sales-cust(NP)\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"3fd86888-f96f-4836-82ff-6be088474d9a\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912291001201\",\"waMemberId\":null},{\"id\":\"e0df2e60-fb3f-41d9-a4ac-0ab8c5149d94\",\"inviteId\":\"2c36f00a-f8bd-4fa5-b2e0-1e595bcff5fe\",\"employeeCode\":\"14120130\",\"employeeName\":\"Ladha Enterprises\",\"cityName\":\"Hyderabad\",\"stateName\":\"TELANGANA\",\"fulfillmentLocationId\":\"880f1a73-1537-4388-9663-1a66a48cdf8b\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"911252601122\",\"waMemberId\":null},{\"id\":\"351ad03b-d517-46d3-b6a6-8d7e27fd4925\",\"inviteId\":\"2f5ab109-f5b4-4da5-8355-41e7ad54ee9f\",\"employeeCode\":\"451155\",\"employeeName\":\"Sales Test\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"1664b1cf-4c9b-4e9d-a21c-55780a48850e\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912666626641\",\"waMemberId\":null},{\"id\":\"9e0651d7-086a-4a40-8f80-23d6b07b3ae4\",\"inviteId\":\"2feea6c1-fdf9-49c1-8c96-c61024853ae6\",\"employeeCode\":\"18928912\",\"employeeName\":\"test3\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00083881-5414-4a73-a816-7a4044f714fd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"3d7c4a16-e61c-4e18-88c6-3f16acf43803\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912191298928\",\"waMemberId\":null},{\"id\":\"ee5cee79-59d7-45c6-99bd-95dae22dc68d\",\"inviteId\":\"3252c5c7-81a8-4568-8bd8-c90ae3804392\",\"employeeCode\":\"68\",\"employeeName\":\"testing\",\"cityName\":\"hyderabad\",\"stateName\":\"TELANGANA\",\"fulfillmentLocationId\":\"060a53e1-58ca-4dc3-ad92-1128838ee05d\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"917793987768\",\"waMemberId\":null},{\"id\":\"265a2284-7f1d-4e33-ac23-fa5ac7bfb3b0\",\"inviteId\":\"329525b6-4a33-4d9b-8619-818aece67285\",\"employeeCode\":\"8128912\",\"employeeName\":\"sales1\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"2e5cec31-d712-4373-b60b-325bc185ef36\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912289893289\",\"waMemberId\":null},{\"id\":\"f5328191-ac80-4db4-a32d-fcc1ececc46d\",\"inviteId\":\"33ecfac8-dd43-4152-ac56-7228d62213e6\",\"employeeCode\":\"151551225\",\"employeeName\":\"Test Sales Check...[TRUNCATED]",
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
