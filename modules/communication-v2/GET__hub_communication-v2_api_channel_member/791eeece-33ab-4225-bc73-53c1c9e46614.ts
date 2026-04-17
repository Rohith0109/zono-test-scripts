/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "791eeece-33ab-4225-bc73-53c1c9e46614",
  "method": "GET",
  "endpoint": "GET /hub/communication-v2/api/channel/member",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "communication-v2",
  "query": "?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&id=28fb39cc-82c4-4f97-82ec-897dff33bfa1&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&random=0.39470500576100787",
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
  "responseSample": "{\"id\":\"28fb39cc-82c4-4f97-82ec-897dff33bfa1\",\"createdAt\":\"2026-03-05T06:59:36.208Z\",\"updatedAt\":\"2026-03-05T06:59:36.208Z\",\"channelName\":\"Matara Hardwares\",\"linkedWorkspaceId\":null,\"accessType\":null,\"profilePic\":null,\"updatedBy\":null,\"emojiId\":null,\"messageId\":null,\"description\":null,\"ownerId\":null,\"isDefault\":false,\"appId\":\"\",\"channelType\":\"C\",\"entityType\":null,\"entityId\":null,\"channelSubType\":null,\"customerId\":\"da91bd6e-e488-4ff6-a89a-1f744a72f186\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"folderId\":null,\"isActive\":true,\"enableWhatsappNotification\":true,\"issueStatus\":null,\"waGroupId\":null,\"waRequestId\":null,\"inviteLink\":null,\"channelRole\":null,\"teamMembers\":[{\"id\":\"749f6c9b-c36d-4d7f-812d-111ec73e30df\",\"inviteId\":\"00dd7cb7-3e74-4eed-b0c0-d9abe83c0668\",\"employeeCode\":\"CFA162626\",\"employeeName\":\"Sri Sai\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"912033882828\",\"waMemberId\":null},{\"id\":\"f06d850e-fe72-4b44-ae98-4846aeec833f\",\"inviteId\":\"051c0640-cb59-48d1-ac9a-1c5692f9affe\",\"employeeCode\":\"34243\",\"employeeName\":\"test2123\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00083881-5414-4a73-a816-7a4044f714fd\",\"role\":\"MEMBER\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"913243243423\",\"waMemberId\":null},{\"id\":\"81b1ed21-cfd0-40f8-88ae-36428ea17bc5\",\"inviteId\":\"0cb65171-b380-4276-a847-e0bddb8190d8\",\"employeeCode\":\"hc20q020\",\"employeeName\":\"Yasaswini\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"25f67dee-7556-42c4-ba34-62dadb5d2efe\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"918374962003\",\"waMemberId\":null},{\"id\":\"8c94cdd5-9686-418c-8a75-d753329e6eb2\",\"inviteId\":\"13431e94-22eb-47e9-9ed8-1e2273057d20\",\"employeeCode\":\"81891sfs\",\"employeeName\":\"sales3\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"cbf0bd6b-5d91-49b3-a853-8cba62363b28\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912989328948\",\"waMemberId\":null},{\"id\":\"c80e9a50-204c-493c-8f69-63f3eaf05fd6\",\"inviteId\":\"142c41a1-d4db-4050-a8c3-b4685abc5411\",\"employeeCode\":\"23789987\",\"employeeName\":\"sales3\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"b91fdd9e-51a6-4c58-93c0-31d0cc536383\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912987237823\",\"waMemberId\":null},{\"id\":\"8a3009da-b6e7-473c-8344-45d837672ba2\",\"inviteId\":\"1472788e-a20e-4c00-9861-12fac82b08d4\",\"employeeCode\":\"TS1232\",\"employeeName\":\"Test Sales 1232\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"430585ca-f191-4aae-bc11-25e222754d9a\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911232134319\",\"waMemberId\":null},{\"id\":\"c498fe90-f666-46ec-bc8e-b9cf0dba4789\",\"inviteId\":\"1674de4e-0a01-460f-9c30-48d2a24b6cc3\",\"employeeCode\":\"3232\",\"employeeName\":\"tarun-member\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"25f67dee-7556-42c4-ba34-62dadb5d2efe\",\"userType\":\"M\",\"avatar\":null,\"phoneNumber\":\"918792180790\",\"waMemberId\":null},{\"id\":\"0a9574cd-d6a5-47e0-804c-0fe058ad8254\",\"inviteId\":\"179b6c78-2071-45fc-a81d-d3dd56471bdf\",\"employeeCode\":\"shar72727\",\"employeeName\":\"Sharonnn\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"414414d8-c197-4a82-9081-f602ce8c3476\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"913563636116\",\"waMemberId\":null},{\"id\":\"6c9706dc-1935-4ed7-b91a-5a480fc1906a\",\"inviteId\":\"1924c5a6-a736-4853-a8fe-8b4e27bac8f6\",\"employeeCode\":\"9828932\",\"employeeName\":\"sales3\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"8c8ef355-e630-4855-97c4-3e6512d107f9\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911789128928\",\"waMemberId\":null},{\"id\":\"34d78702-e961-47e1-8953-705f6a69657b\",\"inviteId\":\"1db4b7e0-5510-42a2-bc24-8f0a6300f705\",\"employeeCode\":\"203233\",\"employeeName\":\"Test US CFA\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"2c31f3a1-d95b-4d8f-b7ca-949990b97ecd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"002964a7-09b1-4512-afde-9226886ef84b\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"911502065968\",\"waMemberId\":null},{\"id\":\"3fdb7376-e107-44fe-988f-b574213a62b3\",\"inviteId\":\"1eea806b-fb5d-487b-b9e7-14cf9d128bad\",\"employeeCode\":\"150062202\",\"employeeName\":\"CFA Testing 112233\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"a0ce209c-b93f-4290-ba14-343780d86ef9\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"36b91e42-9126-4e97-8245-359f6fb63914\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"914120555522\",\"waMemberId\":null},{\"id\":\"32ce99a5-380e-42b3-80b5-9fd5161f9f9c\",\"inviteId\":\"2515b6c8-fb50-47ab-83df-f7af1b7635c5\",\"employeeCode\":\"266626\",\"employeeName\":\"Test Sales Check 344443\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"7c0dae8b-42c0-44f6-b4af-9bff1f47c9fa\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911540502622\",\"waMemberId\":null},{\"id\":\"586561e4-21c1-43f1-bc93-f30b63fe3cab\",\"inviteId\":\"26b321ab-7258-4f2f-818f-28d2e918d606\",\"employeeCode\":\"3223\",\"employeeName\":\"member-sales-cust(NP)\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"3fd86888-f96f-4836-82ff-6be088474d9a\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912291001201\",\"waMemberId\":null},{\"id\":\"6298efbd-0be2-484f-be14-c29347584b09\",\"inviteId\":\"2c36f00a-f8bd-4fa5-b2e0-1e595bcff5fe\",\"employeeCode\":\"14120130\",\"employeeName\":\"Ladha Enterprises\",\"cityName\":\"Hyderabad\",\"stateName\":\"TELANGANA\",\"fulfillmentLocationId\":\"880f1a73-1537-4388-9663-1a66a48cdf8b\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"911252601122\",\"waMemberId\":null},{\"id\":\"4b28f851-a086-4ec3-ae1b-1eeb4e5a1787\",\"inviteId\":\"2f5ab109-f5b4-4da5-8355-41e7ad54ee9f\",\"employeeCode\":\"451155\",\"employeeName\":\"Sales Test\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"1664b1cf-4c9b-4e9d-a21c-55780a48850e\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912666626641\",\"waMemberId\":null},{\"id\":\"12ab35c1-8e5c-49d9-9b22-52922254c576\",\"inviteId\":\"2feea6c1-fdf9-49c1-8c96-c61024853ae6\",\"employeeCode\":\"18928912\",\"employeeName\":\"test3\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00083881-5414-4a73-a816-7a4044f714fd\",\"role\":null,\"issueRole\":\"watcher\",\"userId\":\"3d7c4a16-e61c-4e18-88c6-3f16acf43803\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912191298928\",\"waMemberId\":null},{\"id\":\"076317e7-fcb4-41c5-b31e-408095bfadce\",\"inviteId\":\"3252c5c7-81a8-4568-8bd8-c90ae3804392\",\"employeeCode\":\"68\",\"employeeName\":\"testing\",\"cityName\":\"hyderabad\",\"stateName\":\"TELANGANA\",\"fulfillmentLocationId\":\"060a53e1-58ca-4dc3-ad92-1128838ee05d\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"917793987768\",\"waMemberId\":null},{\"id\":\"7b7059a6-f1b7-4ad8-9624-fec1d27811db\",\"inviteId\":\"329525b6-4a33-4d9b-8619-818aece67285\",\"employeeCode\":\"8128912\",\"employeeName\":\"sales1\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"2e5cec31-d712-4373-b60b-325bc185ef36\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912289893289\",\"waMemberId\":null},{\"id\":\"fe95a66c-f743-4954-af62-6435ee1aefc3\",\"inviteId\":\"33ecfac8-dd43-4152-ac56-7228d62213e6\",\"employeeCode\":\"151551225\",\"employeeName\":\"Test Sales Check 552\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher...[TRUNCATED]",
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
