/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "55c7b172-348b-4c53-8b46-4d5d6f3e4215",
  "method": "GET",
  "endpoint": "GET /hub/communication-v2/api/channel/member",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "communication-v2",
  "query": "?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&id=0abc88d3-88a2-48a9-8a12-c54bfe145b01&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&random=0.7308433145072752",
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
  "responseSample": "{\"id\":\"0abc88d3-88a2-48a9-8a12-c54bfe145b01\",\"createdAt\":\"2026-04-08T09:15:23.076Z\",\"updatedAt\":\"2026-04-08T09:15:23.076Z\",\"channelName\":\"Zotokqa8\",\"linkedWorkspaceId\":null,\"accessType\":null,\"profilePic\":null,\"updatedBy\":null,\"emojiId\":null,\"messageId\":null,\"description\":null,\"ownerId\":null,\"isDefault\":false,\"appId\":\"\",\"channelType\":\"C\",\"entityType\":null,\"entityId\":null,\"channelSubType\":null,\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"folderId\":null,\"isActive\":true,\"enableWhatsappNotification\":true,\"issueStatus\":null,\"waGroupId\":null,\"waRequestId\":null,\"inviteLink\":null,\"channelRole\":null,\"teamMembers\":[{\"id\":\"280d4234-5a0f-4f79-8ead-c5bfae09d27e\",\"inviteId\":\"00f18a0d-8a4e-459b-8ed3-8eb00cd7dc34\",\"employeeCode\":\"56265\",\"employeeName\":\"Check Test Sales 373\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"role\":\"MEMBER\",\"issueRole\":\"watcher\",\"userId\":\"ea20665f-27e3-4bda-a773-0fd98af6a5fa\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911203623236\",\"waMemberId\":null},{\"id\":\"4b1afc25-aa88-4bc6-90ad-697403f8966f\",\"inviteId\":\"04c8af5b-ad4a-46ed-af58-e924796cd696\",\"employeeCode\":\"TM90088\",\"employeeName\":\"team member\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"role\":\"MEMBER\",\"issueRole\":\"watcher\",\"userId\":\"979a176c-9467-4dae-a0cb-1ada6e0fcc72\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911234552221\",\"waMemberId\":null},{\"id\":\"d04c3c4a-9399-4d1f-91c2-4fe545974d59\",\"inviteId\":\"0c8b6d7a-86f1-42c4-80d7-d7bc84d4d5df\",\"employeeCode\":\"199020923\",\"employeeName\":\"CFA\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"role\":\"MEMBER\",\"issueRole\":\"watcher\",\"userId\":\"12661dc1-b38d-4178-b680-f8332a51b3ea\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"912465829745\",\"waMemberId\":null},{\"id\":\"38d89ae7-7fbe-40e7-a207-780959c7857b\",\"inviteId\":\"0cb65171-b380-4276-a847-e0bddb8190d8\",\"employeeCode\":\"hc20q020\",\"employeeName\":\"Yasaswini\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"role\":\"MEMBER\",\"issueRole\":\"watcher\",\"userId\":\"25f67dee-7556-42c4-ba34-62dadb5d2efe\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"918374962003\",\"waMemberId\":null},{\"id\":\"542133e3-853b-48b6-9543-6b8aa4062342\",\"inviteId\":\"13431e94-22eb-47e9-9ed8-1e2273057d20\",\"employeeCode\":\"81891sfs\",\"employeeName\":\"sales3\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"cbf0bd6b-5d91-49b3-a853-8cba62363b28\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912989328948\",\"waMemberId\":null},{\"id\":\"74f4481b-933e-440e-a9f5-26f340d48fad\",\"inviteId\":\"1472788e-a20e-4c00-9861-12fac82b08d4\",\"employeeCode\":\"TS1232\",\"employeeName\":\"Test Sales 1232\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"430585ca-f191-4aae-bc11-25e222754d9a\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"76b4fc2f-e281-4efd-96e6-0f9c2faf5c3a\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"911232134319\",\"waMemberId\":null},{\"id\":\"56fce9fe-4bdf-4f5d-8474-7129e02f53f8\",\"inviteId\":\"1674de4e-0a01-460f-9c30-48d2a24b6cc3\",\"employeeCode\":\"3232\",\"employeeName\":\"tarun-member\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"25f67dee-7556-42c4-ba34-62dadb5d2efe\",\"userType\":\"M\",\"avatar\":null,\"phoneNumber\":\"918792180790\",\"waMemberId\":null},{\"id\":\"b8e6c180-25a5-420f-85c4-55713203bcdc\",\"inviteId\":\"179b6c78-2071-45fc-a81d-d3dd56471bdf\",\"employeeCode\":\"shar72727\",\"employeeName\":\"Sharonnn\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"414414d8-c197-4a82-9081-f602ce8c3476\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"913563636116\",\"waMemberId\":null},{\"id\":\"a095fc04-41df-4db4-a19b-800c301acf70\",\"inviteId\":\"1db4b7e0-5510-42a2-bc24-8f0a6300f705\",\"employeeCode\":\"203233\",\"employeeName\":\"Test US CFA\",\"cityName\":\"Delhi\",\"stateName\":\"DELHI\",\"fulfillmentLocationId\":\"2c31f3a1-d95b-4d8f-b7ca-949990b97ecd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"002964a7-09b1-4512-afde-9226886ef84b\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"911502065968\",\"waMemberId\":null},{\"id\":\"a44bf3de-0110-4027-baab-a9d4f528404b\",\"inviteId\":\"1eea806b-fb5d-487b-b9e7-14cf9d128bad\",\"employeeCode\":\"150062202\",\"employeeName\":\"CFA Testing 112233\",\"cityName\":\"Mumbai\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"a0ce209c-b93f-4290-ba14-343780d86ef9\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"36b91e42-9126-4e97-8245-359f6fb63914\",\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"914120555522\",\"waMemberId\":null},{\"id\":\"235c0cf8-9aa7-4f7c-908e-fd7bc3214186\",\"inviteId\":\"26b321ab-7258-4f2f-818f-28d2e918d606\",\"employeeCode\":\"3223\",\"employeeName\":\"member-sales-cust(NP)\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"3fd86888-f96f-4836-82ff-6be088474d9a\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912291001201\",\"waMemberId\":null},{\"id\":\"9707be35-a934-40ff-8caa-b78479c31392\",\"inviteId\":\"2c36f00a-f8bd-4fa5-b2e0-1e595bcff5fe\",\"employeeCode\":\"14120130\",\"employeeName\":\"Ladha Enterprises\",\"cityName\":\"Hyderabad\",\"stateName\":\"TELANGANA\",\"fulfillmentLocationId\":\"880f1a73-1537-4388-9663-1a66a48cdf8b\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"CFA\",\"avatar\":null,\"phoneNumber\":\"911252601122\",\"waMemberId\":null},{\"id\":\"ae173ff5-272f-42f3-a6af-7bb7149688df\",\"inviteId\":\"2feea6c1-fdf9-49c1-8c96-c61024853ae6\",\"employeeCode\":\"18928912\",\"employeeName\":\"test3\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00083881-5414-4a73-a816-7a4044f714fd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"3d7c4a16-e61c-4e18-88c6-3f16acf43803\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912191298928\",\"waMemberId\":null},{\"id\":\"83e10611-c825-45d0-baf9-5cd8b8d2fc34\",\"inviteId\":\"3252c5c7-81a8-4568-8bd8-c90ae3804392\",\"employeeCode\":\"68\",\"employeeName\":\"testing\",\"cityName\":\"hyderabad\",\"stateName\":\"TELANGANA\",\"fulfillmentLocationId\":\"060a53e1-58ca-4dc3-ad92-1128838ee05d\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":null,\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"917793987768\",\"waMemberId\":null},{\"id\":\"c1a3f995-64d3-4e52-b6ca-6f7ec9690acc\",\"inviteId\":\"329525b6-4a33-4d9b-8619-818aece67285\",\"employeeCode\":\"8128912\",\"employeeName\":\"sales1\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"2e5cec31-d712-4373-b60b-325bc185ef36\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912289893289\",\"waMemberId\":null},{\"id\":\"8f47ad29-e2b9-491e-a555-5889c343a765\",\"inviteId\":\"33ecfac8-dd43-4152-ac56-7228d62213e6\",\"employeeCode\":\"151551225\",\"employeeName\":\"Test Sales Check 552\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"7f5c3dd6-6b57-407d-88cc-13f4ac4933f9\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"914404065626\",\"waMemberId\":null},{\"id\":\"55415a9c-84c2-44c5-9139-055eb3238d8e\",\"inviteId\":\"358beb53-de6c-4939-9280-3a3822be5667\",\"employeeCode\":\"818912\",\"employeeName\":\"sales\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"fulfillmentLocationId\":\"00083881-5414-4a73-a816-7a4044f714fd\",\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"b6f950af-bcda-42e6-b6c8-c4374582d462\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"913893898928\",\"waMemberId\":null},{\"id\":\"691c701e-4756-4535-9815-8d31b43eceec\",\"inviteId\":\"3b9d5bf6-ba28-4993-bcae-76c783c1f0e1\",\"employeeCode\":\"15066026\",\"employeeName\":\"Test Sales 3443\",\"cityName\":null,\"stateName\":null,\"fulfillmentLocationId\":null,\"role\":\"ADMIN\",\"issueRole\":\"watcher\",\"userId\":\"c6b6a27d-9d60-4d62-ae79-84cf2eb08759\",\"userType\":\"Sales\",\"avatar\":null,\"phoneNumber\":\"912401501562\",\"waMemberId\":null},{\"id\":\"1b48326d-1cc2-4c89-9df1-4c968dac5fbd\",\"inviteId\":\"3d1d9ec4-59fb-43da-ac35-eeccc1482eb7\",\"employeeCode\":\"6222362\",\"employeeName\":\"Test Team\",\"cityName\":\"Nanded\",\"stateName\":\"MAHARASHTRA\",\"ful...[TRUNCATED]",
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
