/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "aa5e9f03-74cc-4ee6-ad43-ab49e7145fed",
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
        "THT"
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
  "responseSample": "[{\"id\":\"004bd4cf-6cbf-41ce-b185-74b69fd2ea5a\",\"channelName\":\"issue with the...\"},{\"id\":\"011487f2-b1ab-4cd5-976a-c49718ca8e89\",\"channelName\":\"other #51191\"},{\"id\":\"01aa8d9f-e6f3-4387-a75d-f1d194aa607d\",\"channelName\":\"Query Complaint /...\"},{\"id\":\"021d3101-cfe4-4a06-9e49-e00b96e70896\",\"channelName\":\"Order #HDAX58379-1991\"},{\"id\":\"04eb7dbd-dd97-4c99-94be-aabdbc2617ef\",\"channelName\":\"Query Connect to...\"},{\"id\":\"07e171da-875a-4545-806a-b8d28ad8e3ae\",\"channelName\":\"Query Checkout Cart\"},{\"id\":\"0cb7503f-69b9-4b5e-951f-53014cf43e46\",\"channelName\":\"Query order ...\"},{\"id\":\"0d5c4d21-fea0-4b99-98d0-874e8bf3e8de\",\"channelName\":\"Query 📞 Talk...\"},{\"id\":\"0fa1f802-b412-40ae-80f1-2a5181385d3f\",\"channelName\":\"Query Send signature...\"},{\"id\":\"13b53ed2-40ab-485c-a492-ffee00fdb782\",\"channelName\":\"Invoice #Query\"},{\"id\":\"16b0ca5a-cacd-4dfb-90e2-a162dd7dc5d2\",\"channelName\":\"Query Raise a...\"},{\"id\":\"16fb2713-d329-4bea-9367-c9479d53ae88\",\"channelName\":\"Query How to...\"},{\"id\":\"175af367-574b-441b-b38b-43bc7a481be5\",\"channelName\":\"Query Order Classic...\"},{\"id\":\"18032aa1-69ab-46bb-8aba-26280db9e71b\",\"channelName\":\"Query Order Classic...\"},{\"id\":\"1a5bee32-463c-481f-a2d7-4514c5590e88\",\"channelName\":\"Query Request a...\"},{\"id\":\"1a730627-d545-4802-9c40-c362dc8f1a6e\",\"channelName\":\"Query order 2805sa,1063sf,1230hg\"},{\"id\":\"1c37bd0a-3a5d-4509-a624-efd0cdc76369\",\"channelName\":\"other #51199\"},{\"id\":\"1c69bb7e-245c-4500-82fd-1d74bbf770e1\",\"channelName\":\"other #Query\"},{\"id\":\"2343e94e-3b92-4490-833e-cda03e50952e\",\"channelName\":\"Order #HDAX58379-1656\"},{\"id\":\"2d61422c-82e3-4b89-b975-868473783a27\",\"channelName\":\"Query 📞 Talk...\"},{\"id\":\"2e742bfe-b8af-4648-b1e2-1f1b578a65ec\",\"channelName\":\"Query Connect to...\"},{\"id\":\"2e7d45bd-e40a-459c-92b5-25639fb54399\",\"channelName\":\"Query Notify seller\"},{\"id\":\"2eb2e48a-8384-4a03-8a50-ed5f0352cb47\",\"channelName\":\"Order #HDAX58379-3487\"},{\"id\":\"2ebdba6d-0b5e-4df2-90df-7ba094ee275e\",\"channelName\":\"other #Query\"},{\"id\":\"300b2c48-6f31-4da9-b950-1dacd6c16d6d\",\"channelName\":\"Query Connect to...\"},{\"id\":\"31483857-e46f-4a34-befc-bc9e117eb028\",\"channelName\":\"Saiteja Badini\"},{\"id\":\"343c1f99-9bd2-4ff1-a25e-f52e217962b1\",\"channelName\":\"Query Request a...\"},{\"id\":\"3440a57b-1749-4a09-9e57-b840f88baad1\",\"channelName\":\"Gowtham\"},{\"id\":\"3642fc8d-10dd-424b-800f-8dd33fc90fcb\",\"channelName\":\"other #51203\"},{\"id\":\"366e55a4-63a8-4128-953b-3ce715c4640f\",\"channelName\":\"Query Jj\"},{\"id\":\"36a9c31c-82a8-48dc-b5fd-044aa23e971b\",\"channelName\":\"other #Query\"},{\"id\":\"3714acb5-48d8-4780-baa4-2ec7b08120a5\",\"channelName\":\"Query I want...\"},{\"id\":\"382effd4-50fd-475e-bb3f-cd1ad134c112\",\"channelName\":\"Query Order striped-green,...\"},{\"id\":\"38d21022-19c1-47d9-909f-4b86cc70a2b5\",\"channelName\":\"other #Query\"},{\"id\":\"398efaa6-4bfe-40e4-94fd-01862b499452\",\"channelName\":\"Query I need...\"},{\"id\":\"3abce4df-01bb-44ec-afbc-ceb244f4127f\",\"channelName\":\"Order #HDAX58379-1406\"},{\"id\":\"3b51629b-56b4-4eaf-8b62-aae76ceb281e\",\"channelName\":\"Query Connect to...\"},{\"id\":\"3da69963-7348-4c75-909f-07a5c2b48895\",\"channelName\":\"Query test-teja\"},{\"id\":\"3dc5f1ca-0fff-4ddc-aafa-ef6add5b9648\",\"channelName\":\"Query Complaint /...\"},{\"id\":\"3e19be7d-7f40-4f27-a3ed-437270dbbca7\",\"channelName\":\"Query @zoai order\\n2805sa\\n1063sf\\n1230hg\"},{\"id\":\"4028e6a5-3be3-403f-9ccc-a96c25d92716\",\"channelName\":\"Query Handover to...\"},{\"id\":\"41019da1-2b23-446f-a6c6-2410c5b91584\",\"channelName\":\"Order #HDAX58379-1657\"},{\"id\":\"429044de-a9a4-454e-863a-5ab29a86d6bc\",\"channelName\":\"Order #HDAX58379-1661\"},{\"id\":\"42dd86f5-7678-4832-b8b0-662938ab8011\",\"channelName\":\"other #Query\"},{\"id\":\"42f5974e-3c78-485d-bea0-e28482113e6a\",\"channelName\":\"Query Connect to...\"},{\"id\":\"44099054-df5b-4d41-aec0-174dd048de4c\",\"channelName\":\"Query order milk\"},{\"id\":\"4437242e-a0d9-48bf-ab41-de4e2140da61\",\"channelName\":\"fieldops-test-issue\"},{\"id\":\"4624a220-cf1e-4eaa-8b36-f30de7aa44b2\",\"channelName\":\"Query Complaint /...\"},{\"id\":\"46575c51-f99a-4459-aeb3-1e6e5d9b0a74\",\"channelName\":\"Query `\\nStater Motor...\"},{\"id\":\"46e245ba-3070-4b56-990c-ec320a11597c\",\"channelName\":\"Query Connect to...\"},{\"id\":\"48c83cc3-092b-4c30-96d0-4d7473608a79\",\"channelName\":\"Query Raise a...\"},{\"id\":\"4adbb492-c2a7-4207-a98f-dcda786bd17f\",\"channelName\":\"Order #VSRINC-5604\"},{\"id\":\"4c1d3b6c-14e8-46f4-a6da-7d26a77730ff\",\"channelName\":\"Query Notify seller\"},{\"id\":\"4d91b4e2-fd76-4958-92b3-6097c6948729\",\"channelName\":\"Query sdf lkj...\"},{\"id\":\"4f502858-e975-4a02-913b-4c388defad08\",\"channelName\":\"Query Share ice...\"},{\"id\":\"50ebe0cb-0af6-4284-b086-a73a048075cf\",\"channelName\":\"Query Handover to...\"},{\"id\":\"511ad364-8c54-4cac-b474-d859f536ccc2\",\"channelName\":\"Query Complaint /...\"},{\"id\":\"512f9b3b-eee8-4488-92a2-c720feb4d9f0\",\"channelName\":\"Query Connect to...\"},{\"id\":\"5391051d-2509-4eb7-b500-87fe0017859f\",\"channelName\":\"Query hi i...\"},{\"id\":\"53da480a-254d-43cf-abe7-3651ae6b5768\",\"channelName\":\"other #Query\"},{\"id\":\"5502b163-50ce-4d9b-94a5-c398564dc57b\",\"channelName\":\"Invoice #invtest76378\"},{\"id\":\"55a9340f-a1fd-4c26-a748-2e30578b3297\",\"channelName\":\"Query @zoai \\norder...\"},{\"id\":\"591b880d-4554-4fd2-8820-e6e3d1bf4df8\",\"channelName\":\"other #Query\"},{\"id\":\"5dfa9c09-2ade-41e3-b2a0-7160ce90ba66\",\"channelName\":\"Query Notify seller\"},{\"id\":\"5f659eda-be57-4fd4-aa59-2c0d4bd708da\",\"channelName\":\"Query Order\\n112233- 02...\"},{\"id\":\"61905604-5b0d-4e71-af98-eee0fb766fb6\",\"channelName\":\"Query 1\"},{\"id\":\"61c02b2b-f2f5-45ad-8ea9-4d32db722db0\",\"channelName\":\"Query Hey price...\"},{\"id\":\"631de137-ce2d-40a2-aad0-57d75c71dcfc\",\"channelName\":\"Order #HDAX58379-1931\"},{\"id\":\"6353d502-1438-4e8c-baa4-8f526d6e1357\",\"channelName\":\"Order #HDAX58379-1693\"},{\"id\":\"63eb0742-3f0e-4d6d-9954-4414627f5185\",\"channelName\":\"Invoice #Inv211101\"},{\"id\":\"64245b92-e2e0-4e51-8079-e08231ac3523\",\"channelName\":\"previous salesman did...\"},{\"id\":\"64690d55-9101-4d60-bb25-4a35beea725f\",\"channelName\":\"Query I need...\"},{\"id\":\"66f68953-d8ee-45d9-99d7-294d535fe54b\",\"channelName\":\"Query Order\\nVanilla Ice...\"},{\"id\":\"6a075e68-6abc-4e2d-9441-cf88b5bb8f95\",\"channelName\":\"other #Query\"},{\"id\":\"6b324c85-72c6-4eb2-8205-ecb7727dacfe\",\"channelName\":\"Query Nike\"},{\"id\":\"6b46674d-3b93-46be-a80d-ec0cfa49d600\",\"channelName\":\"Invoice #Query\"},{\"id\":\"6c3e6ce4-6499-4727-a684-de81581aafa7\",\"channelName\":\"issue with the...\"},{\"id\":\"6cefe169-d16a-47c7-a4a9-4204e0270833\",\"channelName\":\"Query Request a...\"},{\"id\":\"6ec2dc32-6167-40db-9862-f51a119aa917\",\"channelName\":\"Order #HDAX58379-2742\"},{\"id\":\"71462fac-fb4c-49e5-8062-8c982626b1be\",\"channelName\":\"Query Order\\nJindal stainless...\"},{\"id\":\"730351b0-3abe-4aae-9b18-93b6680e983d\",\"channelName\":\"Query Connect to...\"},{\"id\":\"732b7925-5d50-4e7a-a92e-66fe7a8f4947\",\"channelName\":\"There is a...\"},{\"id\":\"749cf0e0-d4bb-404e-b1f8-5f89f89719ff\",\"channelName\":\"previous salesman did...\"},{\"id\":\"7553ed79-ac65-41ee-a294-780c5a277826\",\"channelName\":\"Order #HDAX58379-3455\"},{\"id\":\"765a23b0-c821-4d6d-aecc-0df75dcb7a21\",\"channelName\":\"Query Handover to...\"},{\"id\":\"765afafd-918f-4d63-9f65-3edcbaa38fde\",\"channelName\":\"other #Query\"},{\"id\":\"7741d233-c437-4161-a12c-ccb92bb4fb4b\",\"channelName\":\"Query Request a...\"},{\"id\":\"77f2e212-8a3f-46f5-a44b-23e54ccef09a\",\"channelName\":\"Query sdf lkj...\"},{\"id\":\"78df743e-c3e9-4ffe-8321-b9ef972c4006\",\"channelName\":\"other #Query\"},{\"id\":\"79a2860a-9f49-4cd6-acfa-a1a50f05e1c4\",\"channelName\":\"other #Query\"},{\"id\":\"7a2d3161-f7ae-41da-a6bb-33fb5a1b8c29\",\"channelName\":\"Query Handover to...\"},{\"id\":\"7c5ff3f0-bbf6-45b7-ba21-e3a0ec6c39b7\",\"channelName\":\"Query Handover to...\"},{\"id\":\"7c816847-5c66-4cc8-9848-909f847a9189\",\"channelName\":\"Order #HDAX58379-1334\"},{\"id\":\"7d6b3b6f-2ad7-4c89-9e3d-4cbe9ad27aa3\",\"channelName\":\"other #Query\"},{\"id\":\"7db52f88-99e0-4640-b623-c864d586a46a\",\"channelName\":\"other #Query\"},{\"id\":\"7e676569-c46e-420f-bc8e-f5e8d6fc46bb\",\"channelName\":\"Query Notify seller\"},{\"id\":\"7f11d34b-d8b7-4227-806f-2730143ae115\",\"channelName\":\"Query Request a...\"},{\"id\":\"7f902144-1467-44bd-a69e-380be04ade50\",\"channelName\":\"Query Connect to...\"},{\"id\":\"826d8341-c5d4-4627-94ce-d5a3693e031a\",\"channelName\":\"Query Connect to...\"},{\"id\":\"86031503-aacb-409b-a3eb-d9345a06cfad\",\"channelName\":\"Query order 2805sa,1063sf,1230hg\"},{\"id\":\"863adfad-49a9-478c-9a84-c8abef883fd2\",\"channelName\":\"other #Query\"},{\"id\":\"8db...[TRUNCATED]",
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
