/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "d9dbebd6-0956-40c6-9878-b3ece3046bff",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/cfa-product-wise-order-grouping-report",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "startDate": "2026-04-12",
    "endDate": "2026-04-17",
    "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "isSeller": true,
    "pageSize": 20,
    "pageNumber": 1,
    "orderBy": [
      {
        "column": "orderdate",
        "order": "DESC"
      }
    ],
    "filters": {}
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [],
    "ignoreResponsePaths": [],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": "{\"data\":[{\"sku\":\"225566-04\",\"slot\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"cfaname\":\"Apparels CFA\",\"cfaphone\":\"915981515251\",\"inviteid\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"orderids\":\"54264, 54359\",\"totalqty\":\"2\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:48:38.217391\",\"customerid\":\"115005\",\"totalvalue\":\"197100.000000000\",\"updated_at\":\"2026-04-16T19:48:38.217391\",\"productname\":\"Reyon Shirt - Pack Of 4\",\"sellergstin\":null,\"sellerphone\":\"913203220232\",\"totalorders\":\"2\",\"cfagstnumber\":\"\",\"distributorcode\":\"5eaac1c8-8dce-47cb-b4ea-f290f72fd161\",\"customerfirmname\":\"Gowtham Menni\",\"productvariantid\":\"106336\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"73efaf7e-31c5-4e7a-b15a-9e2494995654\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"sku\":\"441133-05\",\"slot\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"cfaname\":\"Apparels CFA\",\"cfaphone\":\"915981515251\",\"inviteid\":\"44618c77-3def-4108-88e1-2100c4519214\",\"orderids\":\"54355, 54360, 54371\",\"totalqty\":\"3\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:48:38.217391\",\"customerid\":\"178692\",\"totalvalue\":\"2190888.000000000\",\"updated_at\":\"2026-04-16T19:48:38.217391\",\"productname\":\"Floral Tops\",\"sellergstin\":null,\"sellerphone\":\"913203220232\",\"totalorders\":\"3\",\"cfagstnumber\":\"\",\"distributorcode\":\"88a523ad-2639-4fd0-9176-41cb4196db89\",\"customerfirmname\":\"Zotokqa8\",\"productvariantid\":\"106339\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"d364ad82-c545-41ac-bf10-bcc9130d01ef\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"sku\":\"441133-03\",\"slot\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"cfaname\":\"Apparels CFA\",\"cfaphone\":\"915981515251\",\"inviteid\":\"44618c77-3def-4108-88e1-2100c4519214\",\"orderids\":\"54360\",\"totalqty\":\"1\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:48:38.217391\",\"customerid\":\"178692\",\"totalvalue\":\"362250.000000000\",\"updated_at\":\"2026-04-16T19:48:38.217391\",\"productname\":\"Floral Top - Pack Of 4\",\"sellergstin\":null,\"sellerphone\":\"913203220232\",\"totalorders\":\"1\",\"cfagstnumber\":\"\",\"distributorcode\":\"88a523ad-2639-4fd0-9176-41cb4196db89\",\"customerfirmname\":\"Zotokqa8\",\"productvariantid\":\"106342\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"28d3192c-6a51-43e2-91bc-7d21ed997c75\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"sku\":\"344/DHN-33\",\"slot\":null,\"cfaid\":\"bc26874c-d938-4f76-8b9d-56956b2d8f53\",\"cfaname\":\"Crocodile CFA\",\"cfaphone\":\"912514812006\",\"inviteid\":\"4b4df458-ca06-4e9f-8db0-537bf641415f\",\"orderids\":\"54370\",\"totalqty\":\"1\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:48:38.217391\",\"customerid\":\"138002\",\"totalvalue\":\"20900.000000000\",\"updated_at\":\"2026-04-16T19:48:38.217391\",\"productname\":\"CLASSIC|BRIEF-CRCB1-01|Assorted\",\"sellergstin\":null,\"sellerphone\":\"913203220232\",\"totalorders\":\"1\",\"cfagstnumber\":\"\",\"distributorcode\":\"sshsh\",\"customerfirmname\":\"optimus\",\"productvariantid\":\"116012\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"18fe79f1-0330-48dd-8f7d-524239c71e6b\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"sku\":\"BDD-KDN/PEL\",\"slot\":null,\"cfaid\":\"bc26874c-d938-4f76-8b9d-56956b2d8f53\",\"cfaname\":\"Crocodile CFA\",\"cfaphone\":\"912514812006\",\"inviteid\":\"4b4df458-ca06-4e9f-8db0-537bf641415f\",\"orderids\":\"54370\",\"totalqty\":\"1\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:48:38.217391\",\"customerid\":\"138002\",\"totalvalue\":\"34900.000000000\",\"updated_at\":\"2026-04-16T19:48:38.217391\",\"productname\":\"SOCKS-ROBIN NEW|Assorted\",\"sellergstin\":null,\"sellerphone\":\"913203220232\",\"totalorders\":\"1\",\"cfagstnumber\":\"\",\"distributorcode\":\"sshsh\",\"customerfirmname\":\"optimus\",\"productvariantid\":\"116014\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"cc2bb763-062f-430f-b660-45a075bbfa61\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"sku\":\"CROI344\",\"slot\":null,\"cfaid\":\"bc26874c-d938-4f76-8b9d-56956b2d8f53\",\"cfaname\":\"Crocodile CFA\",\"cfaphone\":\"912514812006\",\"inviteid\":\"4b4df458-ca06-4e9f-8db0-537bf641415f\",\"orderids\":\"54370\",\"totalqty\":\"1\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:48:38.217391\",\"customerid\":\"138002\",\"totalvalue\":\"50000.000000000\",\"updated_at\":\"2026-04-16T19:48:38.217391\",\"productname\":\"Brief@Small#Pack of 2\",\"sellergstin\":null,\"sellerphone\":\"913203220232\",\"totalorders\":\"1\",\"cfagstnumber\":\"\",\"distributorcode\":\"sshsh\",\"customerfirmname\":\"optimus\",\"productvariantid\":\"116011\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"14185566-a099-4cca-8804-92e3cabbdea7\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"sku\":\"CROI913\",\"slot\":null,\"cfaid\":\"bc26874c-d938-4f76-8b9d-56956b2d8f53\",\"cfaname\":\"Crocodile CFA\",\"cfaphone\":\"912514812006\",\"inviteid\":\"4b4df458-ca06-4e9f-8db0-537bf641415f\",\"orderids\":\"54370\",\"totalqty\":\"1\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:48:38.217391\",\"customerid\":\"138002\",\"totalvalue\":\"20900.000000000\",\"updated_at\":\"2026-04-16T19:48:38.217391\",\"productname\":\"CLASSIC|BRIEF-CRCB1-01|Assorted\",\"sellergstin\":null,\"sellerphone\":\"913203220232\",\"totalorders\":\"1\",\"cfagstnumber\":\"\",\"distributorcode\":\"sshsh\",\"customerfirmname\":\"optimus\",\"productvariantid\":\"116013\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"2a403d1a-c766-4235-96e8-53f067db5d8a\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"sku\":\"441133-05\",\"slot\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"cfaname\":\"Apparels CFA\",\"cfaphone\":\"915981515251\",\"inviteid\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"orderids\":\"54359\",\"totalqty\":\"1\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:48:38.217391\",\"customerid\":\"115005\",\"totalvalue\":\"730296.000000000\",\"updated_at\":\"2026-04-16T19:48:38.217391\",\"productname\":\"Floral Tops\",\"sellergstin\":null,\"sellerphone\":\"913203220232\",\"totalorders\":\"1\",\"cfagstnumber\":\"\",\"distributorcode\":\"5eaac1c8-8dce-47cb-b4ea-f290f72fd161\",\"customerfirmname\":\"Gowtham Menni\",\"productvariantid\":\"106339\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"293b45c3-964a-4ae4-8ae9-749ac962996d\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"sku\":\"02012601\",\"slot\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"cfaname\":\"Apparels CFA\",\"cfaphone\":\"915981515251\",\"inviteid\":\"44618c77-3def-4108-88e1-2100c4519214\",\"orderids\":\"54362, 54366\",\"totalqty\":\"7\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:48:38.217391\",\"customerid\":\"178692\",\"totalvalue\":\"51750.000000000\",\"updated_at\":\"2026-04-16T19:48:38.217391\",\"productname\":\"Duracel Battery Aa Pack Of 10\",\"sellergstin\":null,\"sellerphone\":\"913203220232\",\"totalorders\":\"2\",\"cfagstnumber\":\"\",\"distributorcode\":\"88a523ad-2639-4fd0-9176-41cb4196db89\",\"customerfirmname\":\"Zotokqa8\",\"productvariantid\":\"127975\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"095c47ad-1dfb-417c-b06d-4ee584b826db\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"sku\":\"335588-05\",\"slot\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"cfaname\":\"Apparels CFA\",\"cfaphone\":\"915981515251\",\"inviteid\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"orderids\":\"54369\",\"totalqty\":\"20\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:48:38.217391\",\"customerid\":\"115005\",\"totalvalue\":\"1860000.000000000\",\"updated_at\":\"2026-04-16T19:48:38.217391\",\"productname\":\"Reyon Floral Tops\",\"sellergstin\":null,\"sellerphone\":\"913203220232\",\"totalorders\":\"1\",\"cfagstnumber\":\"\",\"distributorcode\":\"5eaac1c8-8dce-47cb-b4ea-f290f72fd161\",\"customerfirmname\":\"Gowtham Menni\",\"productvariantid\":\"106359\",\"sellerworksp...[TRUNCATED]",
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
