/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "2e2485b2-484a-47c2-b3be-eafe7578a5b7",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/team/list",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&includeInactive=true&includePendingInvites=true&includeTeamCustomersMapping=true&includeCfaAndDivisions=true&page=1&pageSize=20&userType=TeamOwner&userType=CFA&userType=M",
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
  "responseSample": "{\"data\":[{\"mobile\":\"919885296960\",\"name\":\"Shiva kumar 120111\",\"employeeCode\":\"SH001\",\"userId\":\"b0177e11-7148-4f5c-9c82-01a65fd7b704\",\"userRole\":\"\",\"id\":\"be45b221-e715-491c-bf6a-1543a8e272c8\",\"inviteStatus\":\"A\",\"cityName\":\"\",\"profilePic\":null,\"address\":\"\",\"email\":\"shiva60@yopmail.com\",\"inviteType\":\"team\",\"isActive\":true,\"isArchive\":false,\"createdDate\":\"2025-07-14T15:07:06.322Z\",\"updatedDate\":\"2026-03-26T08:19:48.940Z\",\"userType\":\"M\",\"senderWorkspace\":{\"id\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"spaceName\":\"Hd Agencies\",\"userName\":\"Hda\",\"profilePic\":null,\"companyName\":\"Hd Agencies\"},\"teamMemberRole\":[{\"id\":\"d19d6cea-3cdf-11ee-9c56-021250580db8\",\"title\":\"Member\",\"slug\":\"member\"}],\"cfas\":[],\"divisions\":[],\"teamCustomers\":8},{\"mobile\":\"919441239592\",\"name\":\"sales\",\"employeeCode\":\"12133\",\"userId\":\"37bfd0c4-0448-49c7-8ec9-19096956acad\",\"userRole\":\"\",\"id\":\"d4f7491f-a1b5-4b4f-8347-6eec2284e277\",\"inviteStatus\":\"A\",\"cityName\":\"\",\"profilePic\":null,\"address\":\"\",\"email\":\"support@zonoapp.com\",\"inviteType\":\"team\",\"isActive\":true,\"isArchive\":false,\"createdDate\":\"2025-07-17T07:47:30.282Z\",\"updatedDate\":\"2025-12-23T11:08:48.866Z\",\"userType\":\"M\",\"senderWorkspace\":{\"id\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"spaceName\":\"Hd Agencies\",\"userName\":\"Hda\",\"profilePic\":null,\"companyName\":\"Hd Agencies\"},\"teamMemberRole\":[{\"id\":\"d19d6cea-3cdf-11ee-9c56-021250580db8\",\"title\":\"Member\",\"slug\":\"member\"}],\"cfas\":[],\"divisions\":[],\"teamCustomers\":4},{\"mobile\":\"918747474747\",\"name\":\"team member\",\"employeeCode\":\"custome_code\",\"userId\":\"96e28b69-145c-4b0a-a5b0-9647ce36068c\",\"userRole\":\"\",\"id\":\"22ffe8f7-920e-4ace-84a2-2dbaf8a81efe\",\"inviteStatus\":\"A\",\"cityName\":\"\",\"profilePic\":null,\"address\":\"\",\"email\":\"team-member@gmail.com\",\"inviteType\":\"team\",\"isActive\":true,\"isArchive\":false,\"createdDate\":\"2025-07-21T13:06:20.210Z\",\"updatedDate\":\"2026-03-31T12:15:32.161Z\",\"userType\":\"M\",\"senderWorkspace\":{\"id\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"spaceName\":\"Hd Agencies\",\"userName\":\"Hda\",\"profilePic\":null,\"companyName\":\"Hd Agencies\"},\"teamMemberRole\":[{\"id\":\"d19d6cea-3cdf-11ee-9c56-021250580db8\",\"title\":\"Member\",\"slug\":\"member\"}],\"cfas\":[],\"divisions\":[],\"teamCustomers\":6},{\"mobile\":\"912465829745\",\"name\":\"CFA\",\"employeeCode\":\"199020923\",\"userId\":\"12661dc1-b38d-4178-b680-f8332a51b3ea\",\"userRole\":\"\",\"id\":\"0c8b6d7a-86f1-42c4-80d7-d7bc84d4d5df\",\"inviteStatus\":\"A\",\"cityName\":\"\",\"profilePic\":null,\"address\":\"\",\"email\":\"cfa@yopmail.cikk\",\"inviteType\":\"team\",\"isActive\":true,\"isArchive\":false,\"createdDate\":\"2025-07-22T07:20:11.556Z\",\"updatedDate\":\"2026-04-06T07:30:59.553Z\",\"userType\":\"CFA\",\"senderWorkspace\":{\"id\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"spaceName\":\"Hd Agencies\",\"userName\":\"Hda\",\"profilePic\":null,\"companyName\":\"Hd Agencies\"},\"teamMemberRole\":[{\"id\":\"29db7ee9-c7e5-11ed-843c-02527fe37582\",\"title\":\"Admin\",\"slug\":\"adm\"}],\"cfas\":[{\"id\":\"8084c3e8-877e-4a1b-84c1-d531196be7de\",\"fulfillmentLocationId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"createdDate\":\"2025-07-22T07:20:12.000Z\",\"updatedDate\":\"2025-07-22T07:20:12.000Z\",\"fulfillmentLocationCode\":\"62320\",\"physicalAddress\":{\"address1\":\"Mumbai\"},\"supplierName\":\"Apparels CFA\",\"fulfillmentAddress\":null,\"GSTNumber\":\"\",\"businessPan\":\"\",\"postalCode\":\"502020\",\"isActive\":true,\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"IN\",\"cityName\":\"Mumbai\",\"phone\":\"915981515251\",\"email\":\"apparelscfa@yopmail.com\"}],\"divisions\":[],\"teamCustomers\":11},{\"mobile\":\"911234472982\",\"name\":\"Team\",\"employeeCode\":\"251260\",\"userId\":\"d3913023-53cf-45af-90c1-53d15ec797f1\",\"userRole\":\"\",\"id\":\"844a9055-c544-440b-b64c-5cba03d9f021\",\"inviteStatus\":\"A\",\"cityName\":\"\",\"profilePic\":null,\"address\":\"\",\"email\":\"team1234@yopmail.com\",\"inviteType\":\"team\",\"isActive\":true,\"isArchive\":false,\"createdDate\":\"2025-08-14T07:09:42.862Z\",\"updatedDate\":\"2026-03-11T06:44:50.949Z\",\"userType\":\"CFA\",\"senderWorkspace\":{\"id\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"spaceName\":\"Hd Agencies\",\"userName\":\"Hda\",\"profilePic\":null,\"companyName\":\"Hd Agencies\"},\"teamMemberRole\":[{\"id\":\"f3610db4-34c7-49f8-921b-b8e942ee100d\",\"title\":\"Order Manager\",\"slug\":\"order_manager\"}],\"cfas\":[{\"id\":\"5fdfe960-a6ce-4ccf-b9d9-670a35f8cd28\",\"fulfillmentLocationId\":\"c8f8feb9-f705-4d62-a938-ff1f692551e8\",\"createdDate\":\"2026-03-11T06:44:52.000Z\",\"updatedDate\":\"2026-03-11T06:44:52.000Z\",\"fulfillmentLocationCode\":\"1212021\",\"physicalAddress\":{\"address1\":\"Hyderabad\"},\"supplierName\":\"Test CFA\",\"fulfillmentAddress\":null,\"GSTNumber\":null,\"businessPan\":null,\"postalCode\":\"250515\",\"isActive\":true,\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"24b724f9-0579-4c40-b84a-5f75639ca1dc\",\"country\":\"IN\",\"cityName\":\"Hyderabad\",\"phone\":\"[REDACTED]\",\"email\":\"testcfa@yopmail.com\"}],\"divisions\":[],\"teamCustomers\":5},{\"mobile\":\"912320211141\",\"name\":\"Test Team 33300\",\"employeeCode\":\"41000\",\"userId\":\"83be5f4f-37da-4178-a9d6-a640c20aa7ee\",\"userRole\":\"\",\"id\":\"888de6d1-ffbd-4cd7-8bc8-f5cab5cf6634\",\"inviteStatus\":\"A\",\"cityName\":\"\",\"profilePic\":null,\"address\":\"\",\"email\":\"testteam2323525@yopmail.com\",\"inviteType\":\"team\",\"isActive\":true,\"isArchive\":false,\"createdDate\":\"2025-08-14T07:55:08.233Z\",\"updatedDate\":\"2025-12-01T09:12:59.353Z\",\"userType\":\"CFA\",\"senderWorkspace\":{\"id\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"spaceName\":\"Hd Agencies\",\"userName\":\"Hda\",\"profilePic\":null,\"companyName\":\"Hd Agencies\"},\"teamMemberRole\":[{\"id\":\"f3610db4-34c7-49f8-921b-b8e942ee100d\",\"title\":\"Order Manager\",\"slug\":\"order_manager\"}],\"cfas\":[{\"id\":\"1b7bde68-091e-4fa5-b16f-1d0faee0f23a\",\"fulfillmentLocationId\":\"65dedde8-6324-4da4-b9c6-b47a471fa716\",\"createdDate\":\"2025-08-14T07:55:08.000Z\",\"updatedDate\":\"2025-08-14T07:55:08.000Z\",\"fulfillmentLocationCode\":\"65251\",\"physicalAddress\":{\"address1\":\"Hyderabad\"},\"supplierName\":\"Trail\",\"fulfillmentAddress\":null,\"GSTNumber\":null,\"businessPan\":null,\"postalCode\":\"512020\",\"isActive\":true,\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"24b724f9-0579-4c40-b84a-5f75639ca1dc\",\"country\":\"IN\",\"cityName\":\"Hyderabad\",\"phone\":\"911451202122\",\"email\":\"trail12@yopmail.com\"}],\"divisions\":[],\"teamCustomers\":6},{\"mobile\":\"911451520020\",\"name\":\"GDB Tester\",\"employeeCode\":\"5115151\",\"userId\":\"2854893f-1b44-4f28-90ef-6d4662323edc\",\"userRole\":\"\",\"id\":\"45bcf84b-de80-4abf-a66e-c674fedfd5e4\",\"inviteStatus\":\"A\",\"cityName\":\"\",\"profilePic\":null,\"address\":\"\",\"email\":\"csgyh@yopmail.com\",\"inviteType\":\"team\",\"isActive\":true,\"isArchive\":false,\"createdDate\":\"2025-08-20T09:07:06.147Z\",\"updatedDate\":\"2026-03-30T11:29:10.199Z\",\"userType\":\"M\",\"senderWorkspace\":{\"id\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"spaceName\":\"Hd Agencies\",\"userName\":\"Hda\",\"profilePic\":null,\"companyName\":\"Hd Agencies\"},\"teamMemberRole\":[{\"id\":\"1c1eaa27-4a8d-479c-ac04-d1764d8bf6cd\",\"title\":\"Order Operator\",\"slug\":\"order_operator\"}],\"cfas\":[],\"divisions\":[],\"teamCustomers\":4},{\"mobile\":\"911292190129\",\"name\":\"Test Mem1\",\"employeeCode\":\"TKM1243\",\"userId\":\"013a17e3-e511-4895-98aa-6c3017ec1474\",\"userRole\":\"\",\"id\":\"42254164-fc82-42db-be1a-58377b148954\",\"inviteStatus\":\"A\",\"cityName\":\"\",\"profilePic\":null,\"address\":\"\",\"email\":\"valid1243@main.in\",\"inviteType\":\"team\",\"isActive\":true,\"isArchive\":false,\"createdDate\":\"2025-10-16T20:43:56.951Z\",\"updatedDate\":\"2026-03-03T10:21:00.466Z\",\"userType\":\"M\",\"senderWorkspace\":{\"id\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"spaceName\":\"Hd Agencies\",\"userName\":\"Hda\",\"profilePic\":null,\"companyName\":\"Hd Agencies\"},\"teamMemberRole\":[{\"id\":\"d19d6cea-3cdf-11ee-9c56-021250580db8\",\"title\":\"Member\",\"slug\":\"member\"}],\"cfas\":[],\"divisions\":[],\"teamCustomers\":6},{\"mobile\":\"911502065968\",\"name\":\"Test US CFA\",\"employeeCode\":\"203233\",\"userId\":\"002964a7-09b1-4512-afde-9226886ef84b\",\"userRole\":\"\",\"id\":\"1db4b7e0-5510-42a2-bc24-8f0a6300f705\",\"inviteStatus\":\"A\",\"cityName\":\"\",\"profilePic\":null,\"address\":\"\",\"email\":\"uscfa27@yopmail.com\",\"inviteType\":\"team\",\"isActive\":true,\"isArchive\":false,\"createdDate\":\"2025-10-22T07:15:35.731Z\",\"updatedDate\":\"2026-03-16T11:40:19.178Z\",\"userType\":\"CFA\",\"senderWorkspace\":{\"id\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"spaceName\":\"Hd Agencies\",\"userName\":\"Hda\",\"profilePic\":null,\"companyName\":\"Hd Agencies\"},\"teamMemberRole\":[{\"id\"...[TRUNCATED]",
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
