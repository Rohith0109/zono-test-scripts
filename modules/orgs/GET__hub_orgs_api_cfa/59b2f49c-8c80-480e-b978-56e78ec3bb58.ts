/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "59b2f49c-8c80-480e-b978-56e78ec3bb58",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/cfa",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&",
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
  "responseSample": "{\"cfas\":[{\"id\":\"00083881-5414-4a73-a816-7a4044f714fd\",\"supplierName\":\"CFA DIST338\",\"fulfillmentLocationCode\":\"CF338\",\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"IN\",\"physicalAddress\":{\"address1\":\"\"},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"postalCode\":\"400338\",\"numberOfCustomers\":\"14\",\"numberOfDivisions\":\"14\",\"phone\":\"93234234343\",\"email\":\"cfatest338@yopmail.com\",\"cityName\":\"Nanded\",\"stateDetails\":{\"id\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"createdDate\":\"2022-03-28T06:17:16.000Z\",\"updatedDate\":\"2022-03-28T06:17:16.000Z\",\"name\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"isoCode\":null,\"gstStateCode\":\"27\"},\"isActive\":true,\"type\":[\"Godown\"]},{\"id\":\"00419f39-8845-4103-b96f-03786e99d423\",\"supplierName\":\"CFA-141052\",\"fulfillmentLocationCode\":\"CFA-141052\",\"isDefault\":true,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"632dc4d2-ac77-46ae-8dd5-c304fe672dc1\",\"country\":\"IN\",\"physicalAddress\":{\"address1\":\"Delhi\"},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"DELHI\",\"stateCode\":\"07\",\"postalCode\":\"214102\",\"numberOfCustomers\":\"86\",\"numberOfDivisions\":\"12\",\"phone\":\"914102148521\",\"email\":\"cfa141052@yopmail.com\",\"cityName\":\"Delhi\",\"stateDetails\":{\"id\":\"632dc4d2-ac77-46ae-8dd5-c304fe672dc1\",\"createdDate\":null,\"updatedDate\":\"2022-05-02T10:54:46.000Z\",\"name\":\"DELHI\",\"stateCode\":\"07\",\"isoCode\":null,\"gstStateCode\":\"07\"},\"isActive\":true,\"type\":[\"CFA\",\"GDWN\"]},{\"id\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"supplierName\":\"CFA DIST171\",\"fulfillmentLocationCode\":\"CF171\",\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"IN\",\"physicalAddress\":{},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"postalCode\":\"400171\",\"numberOfCustomers\":0,\"numberOfDivisions\":0,\"phone\":\"912324252771\",\"email\":\"cfatest171@yopmail.com\",\"cityName\":\"Nanded\",\"stateDetails\":{\"id\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"createdDate\":\"2022-03-28T06:17:16.000Z\",\"updatedDate\":\"2022-03-28T06:17:16.000Z\",\"name\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"isoCode\":null,\"gstStateCode\":\"27\"},\"isActive\":true,\"type\":[\"CFA\"]},{\"id\":\"01fc404f-8688-45be-9037-db36f0001677\",\"supplierName\":\"CFA DIST445\",\"fulfillmentLocationCode\":\"CF445\",\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"India\",\"physicalAddress\":{},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"postalCode\":\"400445\",\"numberOfCustomers\":0,\"numberOfDivisions\":0,\"phone\":\"912324253045\",\"email\":\"cfatest445@yopmail.com\",\"cityName\":\"Nanded\",\"stateDetails\":{\"id\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"createdDate\":\"2022-03-28T06:17:16.000Z\",\"updatedDate\":\"2022-03-28T06:17:16.000Z\",\"name\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"isoCode\":null,\"gstStateCode\":\"27\"},\"isActive\":true,\"type\":[\"CFA\"]},{\"id\":\"02c762a3-5659-40f9-b7d8-2f8a52f62bce\",\"supplierName\":\"CFA DIST464\",\"fulfillmentLocationCode\":\"CF464\",\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"India\",\"physicalAddress\":{},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"postalCode\":\"400464\",\"numberOfCustomers\":0,\"numberOfDivisions\":0,\"phone\":\"912324253064\",\"email\":\"cfatest464@yopmail.com\",\"cityName\":\"Nanded\",\"stateDetails\":{\"id\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"createdDate\":\"2022-03-28T06:17:16.000Z\",\"updatedDate\":\"2022-03-28T06:17:16.000Z\",\"name\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"isoCode\":null,\"gstStateCode\":\"27\"},\"isActive\":true,\"type\":[\"CFA\"]},{\"id\":\"03d153e0-8e5a-4f83-abf0-6b3dc1c170db\",\"supplierName\":\"CFA DIST447\",\"fulfillmentLocationCode\":\"CF447\",\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"India\",\"physicalAddress\":{},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"postalCode\":\"400447\",\"numberOfCustomers\":0,\"numberOfDivisions\":0,\"phone\":\"912324253047\",\"email\":\"cfatest447@yopmail.com\",\"cityName\":\"Nanded\",\"stateDetails\":{\"id\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"createdDate\":\"2022-03-28T06:17:16.000Z\",\"updatedDate\":\"2022-03-28T06:17:16.000Z\",\"name\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"isoCode\":null,\"gstStateCode\":\"27\"},\"isActive\":true,\"type\":[\"CFA\"]},{\"id\":\"03ed5816-aae9-4d1a-91a5-6a4e53034b15\",\"supplierName\":\"CFA DIST81\",\"fulfillmentLocationCode\":\"CF081\",\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"India\",\"physicalAddress\":{},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"postalCode\":\"400081\",\"numberOfCustomers\":0,\"numberOfDivisions\":0,\"phone\":\"912324252681\",\"email\":\"cfatest081@yopmail.com\",\"cityName\":\"Nanded\",\"stateDetails\":{\"id\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"createdDate\":\"2022-03-28T06:17:16.000Z\",\"updatedDate\":\"2022-03-28T06:17:16.000Z\",\"name\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"isoCode\":null,\"gstStateCode\":\"27\"},\"isActive\":true,\"type\":[\"CFA\"]},{\"id\":\"04195c63-6dee-43bf-9f5a-a39c1d488892\",\"supplierName\":\"CFA DIST419\",\"fulfillmentLocationCode\":\"CF419\",\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"India\",\"physicalAddress\":{},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"postalCode\":\"400419\",\"numberOfCustomers\":0,\"numberOfDivisions\":0,\"phone\":\"912324253019\",\"email\":\"cfatest419@yopmail.com\",\"cityName\":\"Nanded\",\"stateDetails\":{\"id\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"createdDate\":\"2022-03-28T06:17:16.000Z\",\"updatedDate\":\"2022-03-28T06:17:16.000Z\",\"name\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"isoCode\":null,\"gstStateCode\":\"27\"},\"isActive\":true,\"type\":[\"CFA\"]},{\"id\":\"04427bcb-b582-4df9-b399-28ffe4fb5542\",\"supplierName\":\"CFA DIST133\",\"fulfillmentLocationCode\":\"CF133\",\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"India\",\"physicalAddress\":{},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"postalCode\":\"400133\",\"numberOfCustomers\":\"1\",\"numberOfDivisions\":\"1\",\"phone\":\"912324252733\",\"email\":\"cfatest133@yopmail.com\",\"cityName\":\"Nanded\",\"stateDetails\":{\"id\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"createdDate\":\"2022-03-28T06:17:16.000Z\",\"updatedDate\":\"2022-03-28T06:17:16.000Z\",\"name\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"isoCode\":null,\"gstStateCode\":\"27\"},\"isActive\":true,\"type\":[\"CFA\"]},{\"id\":\"0491bb47-9402-4f57-bd56-bd304d909591\",\"supplierName\":\"CFA DIST303\",\"fulfillmentLocationCode\":\"CF303\",\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"IN\",\"physicalAddress\":{\"address1\":\"\"},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"postalCode\":\"400303\",\"numberOfCustomers\":\"1\",\"numberOfDivisions\":\"1\",\"phone\":\"912324252903\",\"email\":\"cfatest303@yopmail.com\",\"cityName\":\"Nanded\",\"stateDetails\":{\"id\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"createdDate\":\"2022-03-28T06:17:16.000Z\",\"updatedDate\":\"2022-03-28T06:17:16.000Z\",\"name\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"isoCode\":null,\"gstStateCode\":\"27\"},\"isActive\":true,\"type\":[\"CFA\"]},{\"id\":\"04a1b724-d2d2-4314-8e7d-439009e0e545\",\"supplierName\":\"CFA DIST73\",\"fulfillmentLocationCode\":\"CF073\",\"isDefault\":false,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"stateId\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"country\":\"India\",\"physicalAddress\":{},\"cfaAddress\":\"\",\"GSTNumber\":\"\",\"PAN\":\"\",\"stateName\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"postalCode\":\"400073\",\"numberOfCustomers\":0,\"numberOfDivisions\":0,\"phone\":\"912324252673\",\"email\":\"cfatest073@yopmail.com\",\"cityName\":\"Nanded\",\"stateDetails\":{\"id\":\"9f184aaf-2d2b-4968-9aef-47f84bbb8cef\",\"createdDate\":\"2022-03-28T06:17:16.000Z\",\"updatedDate\":\"2022-03-28T06:17:16.000Z\",\"name\":\"MAHARASHTRA\",\"stateCode\":\"27\",\"isoCode\":null,\"gstStateCode\":\"27\"},\"isActive\":true,\"type\":[\"CFA\"]},{\"id\":\"04bcccf3-a...[TRUNCATED]",
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
