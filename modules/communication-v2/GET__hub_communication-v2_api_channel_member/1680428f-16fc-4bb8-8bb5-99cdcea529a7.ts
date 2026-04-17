/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "1680428f-16fc-4bb8-8bb5-99cdcea529a7",
  "method": "GET",
  "endpoint": "GET /hub/communication-v2/api/channel/member",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "communication-v2",
  "query": "?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&id=8ac2c742-5734-4426-b523-8f86d246b160&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&random=0.6172267928285083",
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
  "responseSample": "{\"id\":\"8ac2c742-5734-4426-b523-8f86d246b160\",\"createdAt\":\"2025-11-14T08:02:21.026Z\",\"updatedAt\":\"2025-11-14T08:02:21.026Z\",\"channelName\":\"Vinay Jampana\",\"linkedWorkspaceId\":null,\"accessType\":null,\"profilePic\":null,\"updatedBy\":null,\"emojiId\":null,\"messageId\":null,\"description\":null,\"ownerId\":null,\"isDefault\":false,\"appId\":\"\",\"channelType\":\"C\",\"entityType\":null,\"entityId\":null,\"channelSubType\":null,\"customerId\":\"5997c452-e70e-4ae0-a953-410563d437a3\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"folderId\":null,\"isActive\":true,\"enableWhatsappNotification\":true,\"issueStatus\":null,\"waGroupId\":null,\"waRequestId\":null,\"inviteLink\":null,\"channelRole\":null,\"teamMembers\":[{\"id\":\"c62503a5-1ffb-4671-9b4a-663481cf092d\",\"inviteId\":\"00dd7cb7-3e74-4eed-b0c0-d9abe83c0668\",\"employeeCode\":\"CFA162626\",\"employeeName\":\"Sri Sai\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"912033882828\",\"waMemberId\":null},{\"id\":\"5ddd23a3-15a3-4e19-a594-fc17fa807c09\",\"inviteId\":\"0cb65171-b380-4276-a847-e0bddb8190d8\",\"employeeCode\":\"hc20q020\",\"employeeName\":\"Yasaswini\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"25f67dee-7556-42c4-ba34-62dadb5d2efe\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"918374962003\",\"waMemberId\":null},{\"id\":\"ccd5a864-afa2-4427-8cb9-6c19c65884d8\",\"inviteId\":\"13431e94-22eb-47e9-9ed8-1e2273057d20\",\"employeeCode\":\"81891sfs\",\"employeeName\":\"sales3\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"cbf0bd6b-5d91-49b3-a853-8cba62363b28\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912989328948\",\"waMemberId\":null},{\"id\":\"7e9b2b8b-2104-41e3-898e-bcf4a1bdaeaf\",\"inviteId\":\"142c41a1-d4db-4050-a8c3-b4685abc5411\",\"employeeCode\":\"23789987\",\"employeeName\":\"sales3\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"b91fdd9e-51a6-4c58-93c0-31d0cc536383\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912987237823\",\"waMemberId\":null},{\"id\":\"0c9de358-19e2-4155-879a-e0a590bbbbdc\",\"inviteId\":\"1472788e-a20e-4c00-9861-12fac82b08d4\",\"employeeCode\":\"TS1232\",\"employeeName\":\"Test Sales 1232\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"430585ca-f191-4aae-bc11-25e222754d9a\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911232134319\",\"waMemberId\":null},{\"id\":\"706b3090-0841-4c46-bb8b-21822ec6bc19\",\"inviteId\":\"1674de4e-0a01-460f-9c30-48d2a24b6cc3\",\"employeeCode\":\"3232\",\"employeeName\":\"tarun-member\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"25f67dee-7556-42c4-ba34-62dadb5d2efe\",\"userType\":\"M\",\"avatar\":null,\"phoneNumber\":\"918792180790\",\"waMemberId\":null},{\"id\":\"65e39eb9-50bb-48d5-9db3-7b67334f930b\",\"inviteId\":\"179b6c78-2071-45fc-a81d-d3dd56471bdf\",\"employeeCode\":\"shar72727\",\"employeeName\":\"Sharonnn\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"414414d8-c197-4a82-9081-f602ce8c3476\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"913563636116\",\"waMemberId\":null},{\"id\":\"a3a86ce2-03b4-45e0-ad93-085a45f7a3d3\",\"inviteId\":\"1924c5a6-a736-4853-a8fe-8b4e27bac8f6\",\"employeeCode\":\"9828932\",\"employeeName\":\"sales3\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"8c8ef355-e630-4855-97c4-3e6512d107f9\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911789128928\",\"waMemberId\":null},{\"id\":\"894c76e5-32e5-4d8f-a1e5-ea1a8d9fc1bf\",\"inviteId\":\"1db4b7e0-5510-42a2-bc24-8f0a6300f705\",\"employeeCode\":\"203233\",\"employeeName\":\"Test US CFA\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"2c31f3a1-d95b-4d8f-b7ca-949990b97ecd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"911502065968\",\"waMemberId\":null},{\"id\":\"fd223b27-9be0-4de7-a175-7856f04291a3\",\"inviteId\":\"1eea806b-fb5d-487b-b9e7-14cf9d128bad\",\"employeeCode\":\"150062202\",\"employeeName\":\"CFA Testing 112233\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"a0ce209c-b93f-4290-ba14-343780d86ef9\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"36b91e42-9126-4e97-8245-359f6fb63914\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"914120555522\",\"waMemberId\":null},{\"id\":\"cd84a60e-b180-449c-9015-287d0323dcc0\",\"inviteId\":\"2515b6c8-fb50-47ab-83df-f7af1b7635c5\",\"employeeCode\":\"266626\",\"employeeName\":\"Test Sales Check 344443\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"7c0dae8b-42c0-44f6-b4af-9bff1f47c9fa\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911540502622\",\"waMemberId\":null},{\"id\":\"f2e040e5-c071-4de7-80c4-de10c92ce32e\",\"inviteId\":\"26b321ab-7258-4f2f-818f-28d2e918d606\",\"employeeCode\":\"3223\",\"employeeName\":\"member-sales-cust(NP)\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"3fd86888-f96f-4836-82ff-6be088474d9a\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912291001201\",\"waMemberId\":null},{\"id\":\"5a7304f5-0141-4251-8fad-4ea3f2a07633\",\"inviteId\":\"2c36f00a-f8bd-4fa5-b2e0-1e595bcff5fe\",\"employeeCode\":\"14120130\",\"employeeName\":\"Ladha Enterprises\",\"cityName\":\"Hyderabad\",\"stateName\":\"TELANGANA\",\"fulfillmentLocationId\":\"880f1a73-1537-4388-9663-1a66a48cdf8b\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"911252601122\",\"waMemberId\":null},{\"id\":\"42bc5e73-198d-4e8b-b19b-1bc8e3b4a1c9\",\"inviteId\":\"2f5ab109-f5b4-4da5-8355-41e7ad54ee9f\",\"employeeCode\":\"451155\",\"employeeName\":\"Sales Test\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912666626641\",\"waMemberId\":null},{\"id\":\"7cf6cc71-3334-44fc-8b3b-a72f5ed8b667\",\"inviteId\":\"2feea6c1-fdf9-49c1-8c96-c61024853ae6\",\"employeeCode\":\"18928912\",\"employeeName\":\"test3\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00083881-5414-4a73-a816-7a4044f714fd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"3d7c4a16-e61c-4e18-88c6-3f16acf43803\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912191298928\",\"waMemberId\":null},{\"id\":\"d65e9a11-74c4-4702-8a5f-54c4d5253bce\",\"inviteId\":\"3252c5c7-81a8-4568-8bd8-c90ae3804392\",\"employeeCode\":\"68\",\"employeeName\":\"testing\",\"cityName\":\"hyderabad\",\"stateName\":\"TELANGANA\",\"fulfillmentLocationId\":\"060a53e1-58ca-4dc3-ad92-1128838ee05d\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"917793987768\",\"waMemberId\":null},{\"id\":\"b03bfe62-2374-4611-88d0-79d1f604d109\",\"inviteId\":\"329525b6-4a33-4d9b-8619-818aece67285\",\"employeeCode\":\"8128912\",\"employeeName\":\"sales1\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"2e5cec31-d712-4373-b60b-325bc185ef36\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912289893289\",\"waMemberId\":null},{\"id\":\"f545cba2-e7d2-45ea-ae53-0847581443ea\",\"inviteId\":\"33ecfac8-dd43-4152-ac56-7228d62213e6\",\"employeeCode\":\"151551225\",\"employeeName\":\"Test Sales Check 552\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"7f5c3dd6-6b57-407d-88cc-13f4ac4933f9\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"914404065626\",\"waMemberId\":null},{\"id\":\"0a146146-3a17-4baf-a27d-971ce26276f9\",\"inviteId\":\"34dacf25-222a-47dd-81bf-544a3d77873c\",\"employeeCode\":\"2626066\",\"employeeName\":\"Sales Agent 1122\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"4d7e30c3-0fbe-4a6d...[TRUNCATED]",
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
