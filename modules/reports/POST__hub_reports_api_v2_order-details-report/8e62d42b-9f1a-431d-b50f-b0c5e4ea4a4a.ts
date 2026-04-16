/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "8e62d42b-9f1a-431d-b50f-b0c5e4ea4a4a",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/order-details-report",
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
    "pageSize": 20,
    "pageNo": 1,
    "orderBy": [
      {
        "column": "orderdate",
        "order": "DESC"
      }
    ]
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
  "responseSample": "{\"data\":[{\"tags\":null,\"cfaid\":\"00419f39-8845-4103-b96f-03786e99d423\",\"skuids\":null,\"status\":\"Approved\",\"cfaname\":\"CFA-141052\",\"orderid\":\"54257\",\"inviteid\":\"2693bec8-75a9-4f2d-9a0e-44ca2004fddd\",\"skucount\":\"4\",\"checkinid\":null,\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:50:29.386203\",\"customerid\":\"178574\",\"updated_at\":\"2026-04-16T19:50:29.386203\",\"ordersaving\":\"0.000000000\",\"customername\":\"Yasaswini\",\"invoiceamount\":null,\"invoicenumber\":null,\"netordervalue\":\"213848.000000000\",\"refordernumber\":\"HDAX58379-3545\",\"customerfirmname\":\"Yasaswini\",\"invoicedquantity\":null,\"productvariantids\":\"136975, 137263, 137262, 106333\",\"salesteammemberid\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"salesteammembername\":null,\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"c549a230-a6d7-4d70-9dae-ee3ce3e22aec\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"tags\":null,\"cfaid\":\"2c31f3a1-d95b-4d8f-b7ca-949990b97ecd\",\"skuids\":null,\"status\":\"SubmittedByCustomer\",\"cfaname\":\"Test FL-111\",\"orderid\":\"54368\",\"inviteid\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"skucount\":\"1\",\"checkinid\":null,\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:50:29.386203\",\"customerid\":\"115005\",\"updated_at\":\"2026-04-16T19:50:29.386203\",\"ordersaving\":\"87500.000000000\",\"customername\":\"Gowtham\",\"invoiceamount\":null,\"invoicenumber\":null,\"netordervalue\":\"787500.000000000\",\"refordernumber\":\"HDAX58379-3534\",\"customerfirmname\":\"Gowtham Menni\",\"invoicedquantity\":null,\"productvariantids\":\"136185\",\"salesteammemberid\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"salesteammembername\":null,\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"187befab-8517-48dd-8aad-c9a5958c117e\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"tags\":null,\"cfaid\":\"bc26874c-d938-4f76-8b9d-56956b2d8f53\",\"skuids\":null,\"status\":\"SubmittedByCustomer\",\"cfaname\":\"Crocodile CFA\",\"orderid\":\"54370\",\"inviteid\":\"4b4df458-ca06-4e9f-8db0-537bf641415f\",\"skucount\":\"4\",\"checkinid\":\"9f6d96a8-f337-4986-9b8e-f1956a3ae7e7\",\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:50:29.386203\",\"customerid\":\"138002\",\"updated_at\":\"2026-04-16T19:50:29.386203\",\"ordersaving\":\"0.000000000\",\"customername\":\"bumbleBee\",\"invoiceamount\":null,\"invoicenumber\":null,\"netordervalue\":\"126700.000000000\",\"refordernumber\":\"HDAX58379-3543\",\"customerfirmname\":\"optimus\",\"invoicedquantity\":null,\"productvariantids\":\"116011, 116013, 116012, 116014\",\"salesteammemberid\":\"ce4192c5-370b-4585-919a-f5cc0d04074d\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"salesteammembername\":\"sridhar\",\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"0e88d082-4cb2-405e-856c-52b76239af8e\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"tags\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"skuids\":null,\"status\":\"SubmittedByCustomer\",\"cfaname\":\"Apparels CFA\",\"orderid\":\"54369\",\"inviteid\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"skucount\":\"3\",\"checkinid\":null,\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:50:29.386203\",\"customerid\":\"115005\",\"updated_at\":\"2026-04-16T19:50:29.386203\",\"ordersaving\":\"0.000000000\",\"customername\":\"Gowtham\",\"invoiceamount\":null,\"invoicenumber\":null,\"netordervalue\":\"2554400.000000000\",\"refordernumber\":\"HDAX58379-3540\",\"customerfirmname\":\"Gowtham Menni\",\"invoicedquantity\":null,\"productvariantids\":\"106359, 111197, 106335\",\"salesteammemberid\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"salesteammembername\":null,\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"a734ab12-b907-4d8e-80d2-08a11ad0f3e1\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"tags\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"skuids\":null,\"status\":\"SubmittedByCustomer\",\"cfaname\":\"Apparels CFA\",\"orderid\":\"54371\",\"inviteid\":\"44618c77-3def-4108-88e1-2100c4519214\",\"skucount\":\"2\",\"checkinid\":null,\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:50:29.386203\",\"customerid\":\"178692\",\"updated_at\":\"2026-04-16T19:50:29.386203\",\"ordersaving\":\"77280.000000000\",\"customername\":\"Zotokqa8\",\"invoiceamount\":null,\"invoicenumber\":null,\"netordervalue\":\"826776.000000000\",\"refordernumber\":\"HDAX58379-3538\",\"customerfirmname\":\"Zotokqa8\",\"invoicedquantity\":null,\"productvariantids\":\"106335, 106339\",\"salesteammemberid\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"salesteammembername\":null,\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"f335a411-7f6e-44fd-b118-472ae18c7321\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"tags\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"skuids\":null,\"status\":\"SubmittedByCustomer\",\"cfaname\":\"Apparels CFA\",\"orderid\":\"54372\",\"inviteid\":\"44618c77-3def-4108-88e1-2100c4519214\",\"skucount\":\"1\",\"checkinid\":null,\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:50:29.386203\",\"customerid\":\"178692\",\"updated_at\":\"2026-04-16T19:50:29.386203\",\"ordersaving\":\"0.000000000\",\"customername\":\"Zotokqa8\",\"invoiceamount\":null,\"invoicenumber\":null,\"netordervalue\":\"216700.000000000\",\"refordernumber\":\"HDAX58379-3539\",\"customerfirmname\":\"Zotokqa8\",\"invoicedquantity\":null,\"productvariantids\":\"106336\",\"salesteammemberid\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"salesteammembername\":null,\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"73ffbd32-214f-4a98-b935-ef728048301f\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"tags\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"skuids\":null,\"status\":\"Billed\",\"cfaname\":\"Apparels CFA\",\"orderid\":\"54373\",\"inviteid\":\"44618c77-3def-4108-88e1-2100c4519214\",\"skucount\":\"1\",\"checkinid\":null,\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:50:29.386203\",\"customerid\":\"178692\",\"updated_at\":\"2026-04-16T19:50:29.386203\",\"ordersaving\":\"0.000000000\",\"customername\":\"Zotokqa8\",\"invoiceamount\":\"0.000000000\",\"invoicenumber\":\"Inv1642601\",\"netordervalue\":\"107200.000000000\",\"refordernumber\":\"HDAX58379-3541\",\"customerfirmname\":\"Zotokqa8\",\"invoicedquantity\":\"0\",\"productvariantids\":\"106335\",\"salesteammemberid\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"salesteammembername\":null,\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"233a8c0b-d4d5-40ad-b379-e3146f4a8c78\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"tags\":null,\"cfaid\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"skuids\":null,\"status\":\"SubmittedByCustomer\",\"cfaname\":\"Apparels CFA\",\"orderid\":\"54366\",\"inviteid\":\"44618c77-3def-4108-88e1-2100c4519214\",\"skucount\":\"1\",\"checkinid\":null,\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:50:29.386203\",\"customerid\":\"178692\",\"updated_at\":\"2026-04-16T19:50:29.386203\",\"ordersaving\":\"750.000000000\",\"customername\":\"Zotokqa8\",\"invoiceamount\":null,\"invoicenumber\":null,\"netordervalue\":\"6750.000000000\",\"refordernumber\":\"HDAX58379-3537\",\"customerfirmname\":\"Zotokqa8\",\"invoicedquantity\":null,\"productvariantids\":\"127975\",\"salesteammemberid\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"salesteammembername\":null,\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"ba9f309b-a73f-4af5-8dae-ac8c5dccb4d2\",\"_airbyte_extracted_at\":\"2026-04-16T20:04:07.200Z\",\"_airbyte_meta\":{\"changes\":[]}},{\"tags\":null,\"cfaid\":\"e281af2b-26c8-405d-82c4-a29071a341ee\",\"skuids\":null,\"status\":\"SubmittedByCustomer\",\"cfaname\":\"Testing CFA 200\",\"orderid\":\"54367\",\"inviteid\":\"b97c39de-9994-4fdb-a9c3-36f43c6c2f86\",\"skucount\":\"1\",\"checkinid\":null,\"orderdate\":\"2026-04-16\",\"created_at\":\"2026-04-16T19:50:29.386203\",\"customerid\":\"115005\",\"updated_at\":\"2026-04-16T19:50:29.386203\",\"ordersaving\":\"0.000000000\",\"customername\":\"Gowtham\",\"invoiceamount\":null,\"invoicenumber\":null,\"netordervalue\":\"210000.000000000\",\"refordernumber\":\"HDAX58379-3535\",\"customerfirmname\":\"Gowtham Menni\",\"invoicedquantity\":null,\"productvariantids\":\"136184\",\"salesteammemberid\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"salesteammembername\":null,\"sellerworkspacename\":\"Hd Agencies\",\"_airbyte_raw_id\":\"94d5a375-9572-4aa0-9754-64e8acf8f3b2\",\"_airbyte_extracted_at\":\"2026-04-16T20:04...[TRUNCATED]",
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
