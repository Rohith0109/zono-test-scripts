/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "f587c246-ae30-4cde-b092-f4852d15ec88",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/division",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&includeHeadDivision=true",
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
  "responseSample": "{\"divisions\":[{\"id\":\"1ab5ba0a-fb5f-4daf-ad26-d8bf4ffb417c\",\"createdDate\":\"2025-11-25T11:13:19.847Z\",\"updatedDate\":\"2025-11-25T11:13:19.847Z\",\"name\":\"Plywood\",\"code\":\"4526260\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"67418504-307a-4ee4-ae2b-3ecb1e7e4d69\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"67418504-307a-4ee4-ae2b-3ecb1e7e4d69\",\"createdDate\":\"2025-06-20T13:23:35.302Z\",\"updatedDate\":\"2025-06-20T13:23:35.302Z\",\"name\":\"Default-head-division\",\"code\":\"default-head-division\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":true,\"isActive\":null},\"numberOfCustomer\":38},{\"id\":\"24b51931-6d49-4a68-b192-4cdefe8ca22e\",\"createdDate\":\"2025-12-05T06:09:07.049Z\",\"updatedDate\":\"2026-02-05T06:27:58.000Z\",\"name\":\"Snacks\",\"code\":\"232781\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"67418504-307a-4ee4-ae2b-3ecb1e7e4d69\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"67418504-307a-4ee4-ae2b-3ecb1e7e4d69\",\"createdDate\":\"2025-06-20T13:23:35.302Z\",\"updatedDate\":\"2025-06-20T13:23:35.302Z\",\"name\":\"Default-head-division\",\"code\":\"default-head-division\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":true,\"isActive\":null},\"numberOfCustomer\":34},{\"id\":\"350d9e19-1990-437f-8ece-38c80a49b2e4\",\"createdDate\":\"2025-12-11T08:50:52.175Z\",\"updatedDate\":\"2025-12-11T08:50:52.175Z\",\"name\":\"Any Division\",\"code\":\"ANY\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"139dd648-0a62-436c-babc-392c04404080\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"139dd648-0a62-436c-babc-392c04404080\",\"createdDate\":\"2025-12-09T05:02:58.125Z\",\"updatedDate\":\"2025-12-09T05:02:58.125Z\",\"name\":\"manish-div\",\"code\":\"div001\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":null,\"isActive\":null},\"numberOfCustomer\":33},{\"id\":\"519b95a2-b825-45ec-a9d5-51d0a074cc29\",\"createdDate\":\"2025-12-01T04:45:58.148Z\",\"updatedDate\":\"2025-12-01T04:45:58.148Z\",\"name\":\"Crocodile_KB\",\"code\":\"CCKB\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"b98331e3-079d-438e-a037-46a631bfeb62\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"b98331e3-079d-438e-a037-46a631bfeb62\",\"createdDate\":\"2025-12-01T04:45:33.551Z\",\"updatedDate\":\"2025-12-01T04:45:33.551Z\",\"name\":\"Croc_KB\",\"code\":\"CCKB\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":null,\"isActive\":null},\"numberOfCustomer\":29},{\"id\":\"636c981d-5a3b-407c-9b1e-86d7dc923313\",\"createdDate\":\"2025-11-11T06:58:59.380Z\",\"updatedDate\":\"2026-02-05T06:27:42.000Z\",\"name\":\"Crocodile\",\"code\":\"3336511\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"45d687c2-8a2a-4244-93f7-8ccf4c59ace5\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"45d687c2-8a2a-4244-93f7-8ccf4c59ace5\",\"createdDate\":\"2025-11-11T06:58:34.912Z\",\"updatedDate\":\"2025-11-11T06:58:34.912Z\",\"name\":\"Crocodile\",\"code\":\"200122\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":null,\"isActive\":null},\"numberOfCustomer\":224},{\"id\":\"7a27ce2e-b4db-40b8-88ac-b72f93bba5f7\",\"createdDate\":\"2026-03-06T10:03:47.162Z\",\"updatedDate\":\"2026-03-06T10:03:48.000Z\",\"name\":\"Watch Store\",\"code\":\"Watch1254\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"139dd648-0a62-436c-babc-392c04404080\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"139dd648-0a62-436c-babc-392c04404080\",\"createdDate\":\"2025-12-09T05:02:58.125Z\",\"updatedDate\":\"2025-12-09T05:02:58.125Z\",\"name\":\"manish-div\",\"code\":\"div001\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":null,\"isActive\":null},\"numberOfCustomer\":22},{\"id\":\"962fc54e-5620-4429-9ed0-3d75101eea2a\",\"createdDate\":\"2026-02-10T06:17:06.306Z\",\"updatedDate\":\"2026-02-10T06:17:06.306Z\",\"name\":\"BirlaNu Div\",\"code\":\"15063\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"7418dcbb-758e-4e1f-ae44-77fff70634a1\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"7418dcbb-758e-4e1f-ae44-77fff70634a1\",\"createdDate\":\"2025-07-08T10:03:18.489Z\",\"updatedDate\":\"2025-07-08T10:03:18.489Z\",\"name\":\"Steel\",\"code\":\"1205255\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":null,\"isActive\":null},\"numberOfCustomer\":21},{\"id\":\"cf8b92fe-394c-443a-9a16-0df89e4fb7d4\",\"createdDate\":\"2025-06-20T13:23:35.489Z\",\"updatedDate\":\"2026-03-04T09:26:03.000Z\",\"name\":\"Default-division\",\"code\":\"default-division\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"67418504-307a-4ee4-ae2b-3ecb1e7e4d69\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"67418504-307a-4ee4-ae2b-3ecb1e7e4d69\",\"createdDate\":\"2025-06-20T13:23:35.302Z\",\"updatedDate\":\"2025-06-20T13:23:35.302Z\",\"name\":\"Default-head-division\",\"code\":\"default-head-division\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":true,\"isActive\":null},\"numberOfCustomer\":144},{\"id\":\"d6abaf08-5588-41f3-8f73-c8a4a5ae7004\",\"createdDate\":\"2025-07-02T07:18:37.501Z\",\"updatedDate\":\"2026-03-04T09:26:03.000Z\",\"name\":\"Apparels Division\",\"code\":\"4782522\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":true,\"isActive\":true,\"headDivisionId\":\"b66388c5-17f1-41e7-a19c-b88ceb4c13e7\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"b66388c5-17f1-41e7-a19c-b88ceb4c13e7\",\"createdDate\":\"2025-07-02T07:18:16.400Z\",\"updatedDate\":\"2025-07-02T07:18:16.400Z\",\"name\":\"Apparels\",\"code\":\"489663\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":null,\"isActive\":null},\"numberOfCustomer\":135},{\"id\":\"d9f0194c-7c6b-4370-867e-2870b957123f\",\"createdDate\":\"2025-06-30T12:54:08.738Z\",\"updatedDate\":\"2025-12-09T09:56:03.000Z\",\"name\":\"Check Div-20\",\"code\":\"1451200\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"b66388c5-17f1-41e7-a19c-b88ceb4c13e7\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"b66388c5-17f1-41e7-a19c-b88ceb4c13e7\",\"createdDate\":\"2025-07-02T07:18:16.400Z\",\"updatedDate\":\"2025-07-02T07:18:16.400Z\",\"name\":\"Apparels\",\"code\":\"489663\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":null,\"isActive\":null},\"numberOfCustomer\":108},{\"id\":\"e58bed17-ab14-4ee7-bea6-dc7a225d3b37\",\"createdDate\":\"2025-07-08T10:03:35.525Z\",\"updatedDate\":\"2025-11-27T09:59:51.000Z\",\"name\":\"Steel\",\"code\":\"14202563\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"7418dcbb-758e-4e1f-ae44-77fff70634a1\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"7418dcbb-758e-4e1f-ae44-77fff70634a1\",\"createdDate\":\"2025-07-08T10:03:18.489Z\",\"updatedDate\":\"2025-07-08T10:03:18.489Z\",\"name\":\"Steel\",\"code\":\"1205255\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":null,\"isActive\":null},\"numberOfCustomer\":317},{\"id\":\"e9a26c50-d284-4309-86a8-e974f433020b\",\"createdDate\":\"2025-10-28T11:54:10.838Z\",\"updatedDate\":\"2025-10-28T11:54:10.838Z\",\"name\":\"Fertilizers\",\"code\":\"230230\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"67418504-307a-4ee4-ae2b-3ecb1e7e4d69\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"67418504-307a-4ee4-ae2b-3ecb1e7e4d69\",\"createdDate\":\"2025-06-20T13:23:35.302Z\",\"updatedDate\":\"2025-06-20T13:23:35.302Z\",\"name\":\"Default-head-division\",\"code\":\"default-head-division\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":true,\"isActive\":null},\"numberOfCustomer\":39},{\"id\":\"ead3d469-2d92-4c8d-8048-a99685695beb\",\"createdDate\":\"2025-12-09T05:03:25.673Z\",\"updatedDate\":\"2025-12-09T05:03:25.673Z\",\"name\":\"manish-div001\",\"code\":\"div021\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":false,\"isActive\":true,\"headDivisionId\":\"139dd648-0a62-436c-babc-392c04404080\",\"stateId\":null,\"state\":null,\"headDivision\":{\"id\":\"139dd648-0a62-436c-babc-392c04404080\",\"createdDate\":\"2025-12-09T05:02:58.125Z\",\"updatedDate\":\"2025-12-09T05:02:58.125Z\",\"name\":\"manish-div\",\"code\":\"div001\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"isDefault\":null,\"isActive\":null},...[TRUNCATED]",
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
