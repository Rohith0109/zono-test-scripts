/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "b3194501-46bf-46c4-a91b-66cc4e486d0a",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/recent-payments",
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
        "column": "paymentDate",
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
    "requiredResponsePaths": [
      "$.data[0].sNo",
      "$.data[0].referenceNumber",
      "$.data[0].paymentMode",
      "$.data[0].transactionType",
      "$.data[0].transactionValue",
      "$.data[0].status",
      "$.data[0].collectedBy",
      "$.data[0].customerName",
      "$.data[0].invoiceNumber",
      "$.data[0].orderNumber",
      "$.data[0].paymentCode",
      "$.data[0].customerFirmName",
      "$.totalPayments",
      "$.totalTransactionsValue",
      "$.totalStatusPending",
      "$.startRecord",
      "$.endRecord",
      "$.totalRecords",
      "$.totalValue"
    ],
    "ignoreResponsePaths": [
      "$.data[0].paymentDate",
      "$.data[0].bankTransactionId",
      "$.data[0].customerId",
      "$.data[0].paymentId",
      "$.data[0].cfaId",
      "$.cfaid",
      "$.updatedAt"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "data": [
      {
        "sNo": 1,
        "paymentDate": "2026-04-13",
        "referenceNumber": "[REDACTED]",
        "bankTransactionId": "633951179887",
        "paymentMode": "UPI",
        "transactionType": "",
        "transactionValue": "35.000000000",
        "status": "CNF",
        "collectedBy": "Hda",
        "customerName": "Zotokqa8",
        "customerId": "44618c77-3def-4108-88e1-2100c4519214",
        "invoiceNumber": null,
        "orderNumber": null,
        "paymentId": "7f10747e-344a-4637-a3fd-4f32d7d79d7d",
        "paymentCode": "[REDACTED]",
        "customerFirmName": "Zotokqa8",
        "cfaId": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c"
      },
      {
        "sNo": 2,
        "paymentDate": "2026-04-13",
        "referenceNumber": "[REDACTED]",
        "bankTransactionId": null,
        "paymentMode": "BNTR",
        "transactionType": "OFLN",
        "transactionValue": "900.000000000",
        "status": "SNT",
        "collectedBy": null,
        "customerName": "Nitin Padmawar",
        "customerId": "92eb6a3e-3a9e-4433-8ded-7379eff70ac0",
        "invoiceNumber": null,
        "orderNumber": null,
        "paymentId": "89f4abe4-1b3f-4d73-8554-40490be4af53",
        "paymentCode": "[REDACTED]",
        "customerFirmName": "Nitin Padmawar",
        "cfaId": "bc26874c-d938-4f76-8b9d-56956b2d8f53"
      },
      {
        "sNo": 3,
        "paymentDate": "2026-04-13",
        "referenceNumber": "[REDACTED]",
        "bankTransactionId": null,
        "paymentMode": "BNTR",
        "transactionType": "OFLN",
        "transactionValue": "900.000000000",
        "status": "SNT",
        "collectedBy": "Hda",
        "customerName": "Gowtham",
        "customerId": "b97c39de-9994-4fdb-a9c3-36f43c6c2f86",
        "invoiceNumber": null,
        "orderNumber": null,
        "paymentId": "3f8ac42c-8ba5-4267-b538-ff76b9964ea1",
        "paymentCode": "[REDACTED]",
        "customerFirmName": "Gowtham Menni",
        "cfaId": "e281af2b-26c8-405d-82c4-a29071a341ee"
      },
      {
        "sNo": 4,
        "paymentDate": "2026-04-12",
        "referenceNumber": "[REDACTED]",
        "bankTransactionId": "384626352835",
        "paymentMode": "UPI",
        "transactionType": "",
        "transactionValue": "30.000000000",
        "status": "CNF",
        "collectedBy": "Hda",
        "customerName": "Zotokqa8",
        "customerId": "44618c77-3def-4108-88e1-2100c4519214",
        "invoiceNumber": null,
        "orderNumber": null,
        "paymentId": "1cf5e7d8-2112-4239-a73c-dc40398d1209",
        "paymentCode": "[REDACTED]",
        "customerFirmName": "Zotokqa8",
        "cfaId": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c"
      },
      {
        "sNo": 5,
        "paymentDate": "2026-04-12",
        "referenceNumber": "[REDACTED]",
        "bankTransactionId": "148750975658",
        "paymentMode": "UPI",
        "transactionType": "",
        "transactionValue": "90.000000000",
        "status": "CNF",
        "collectedBy": "Hda",
        "customerName": "Zotokqa8",
        "customerId": "44618c77-3def-4108-88e1-2100c4519214",
        "invoiceNumber": null,
        "orderNumber": null,
        "paymentId": "5d1db700-e45c-4c6e-b796-d0c4659739c3",
        "paymentCode": "[REDACTED]",
        "customerFirmName": "Zotokqa8",
        "cfaId": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c"
      },
      {
        "sNo": 6,
        "paymentDate": "2026-04-12",
        "referenceNumber": "[REDACTED]",
        "bankTransactionId": "086382720233",
        "paymentMode": "UPI",
        "transactionType": "",
        "transactionValue": "32.000000000",
        "status": "CNF",
        "collectedBy": "Hda",
        "customerName": "Zotokqa8",
        "customerId": "44618c77-3def-4108-88e1-2100c4519214",
        "invoiceNumber": null,
        "orderNumber": null,
        "paymentId": "73d65d11-a51b-49a8-8124-af34d50d8507",
        "paymentCode": "[REDACTED]",
        "customerFirmName": "Zotokqa8",
        "cfaId": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c"
      }
    ],
    "cfaid": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
    "totalPayments": "6",
    "totalTransactionsValue": "1987.000000000",
    "totalStatusPending": "0",
    "updatedAt": "2026-04-16T19:58:39.789056",
    "startRecord": 1,
    "endRecord": 6,
    "totalRecords": 6,
    "totalValue": "1987.000000000"
  },
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
