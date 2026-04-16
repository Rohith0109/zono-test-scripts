/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "9dd96dc8-5500-4154-b4a5-c2771d50048e",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/recent-invoices",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "searchKey": "",
    "pageNo": 1,
    "pageSize": 20,
    "startDate": "2026-04-12",
    "endDate": "2026-04-17",
    "filters": {},
    "orderBy": [
      {
        "column": "invoiceDate",
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
  "responseSample": "{\"data\":[{\"sNo\":1,\"qty\":\"0\",\"customerName\":\"Zotokqa8\",\"invoiceDate\":\"2026-04-16\",\"invoiceUpdatedAt\":\"2026-04-16T16:48:49\",\"dueDate\":\"2026-04-26\",\"invoiceId\":\"f7768bc8-d365-47f4-9a3e-87402bf6cd13\",\"invoiceNumber\":\"Inv1642601\",\"docNumber\":\"Inv1642601\",\"invoiceValue\":\"1000.000000000\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":\"HDAX58379-3541\",\"orderValue\":\"107200\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":null,\"dispatchDate\":null,\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Zotokqa8\",\"cfaId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\"},{\"sNo\":2,\"qty\":\"0\",\"customerName\":\"Vaishnavi\",\"invoiceDate\":\"2026-04-14\",\"invoiceUpdatedAt\":\"2026-04-07T14:31:30\",\"dueDate\":\"2026-04-30\",\"invoiceId\":\"47ce31b7-4e2e-4d51-a8f1-72c75fe6d4b9\",\"invoiceNumber\":\"Invimage773\",\"docNumber\":\"Invimage773\",\"invoiceValue\":\"6351.000000000\",\"customerId\":\"29a19a53-a264-4a13-a2cf-7aabfe11fedf\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":null,\"orderValue\":\"0\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":null,\"dispatchDate\":null,\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Vaishnavi\",\"cfaId\":\"bc26874c-d938-4f76-8b9d-56956b2d8f53\"},{\"sNo\":3,\"qty\":\"0\",\"customerName\":\"Vaishnavi\",\"invoiceDate\":\"2026-04-14\",\"invoiceUpdatedAt\":\"2026-04-14T11:57:58\",\"dueDate\":\"2026-04-23\",\"invoiceId\":\"1b84d13c-5b7a-40d7-9d28-abc867867940\",\"invoiceNumber\":\"Invtets9181\",\"docNumber\":\"Invtets9181\",\"invoiceValue\":\"666.000000000\",\"customerId\":\"29a19a53-a264-4a13-a2cf-7aabfe11fedf\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":null,\"orderValue\":\"0\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":\"DL/25-26/9273\",\"dispatchDate\":\"2025-09-23\",\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Vaishnavi\",\"cfaId\":\"bc26874c-d938-4f76-8b9d-56956b2d8f53\"},{\"sNo\":4,\"qty\":\"0\",\"customerName\":\"Pragya\",\"invoiceDate\":\"2026-04-14\",\"invoiceUpdatedAt\":\"2026-04-14T11:56:16\",\"dueDate\":\"2026-04-16\",\"invoiceId\":\"da984b57-533a-4525-9552-4a53c2351835\",\"invoiceNumber\":\"Invimgdisa\",\"docNumber\":\"Invimgdisa\",\"invoiceValue\":\"535.000000000\",\"customerId\":\"2df9f5d2-0b70-471a-a4cb-fc8b39a32b8f\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":null,\"orderValue\":\"0\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":null,\"dispatchDate\":null,\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Pragya\",\"cfaId\":\"59cdb393-2af6-42d9-b3c6-eced0869e6e6\"},{\"sNo\":5,\"qty\":\"0\",\"customerName\":\"Zotokqa8\",\"invoiceDate\":\"2026-04-14\",\"invoiceUpdatedAt\":\"2026-04-14T16:31:35\",\"dueDate\":\"2026-04-24\",\"invoiceId\":\"7c94f95d-ec51-4940-bf6e-ffc05a57015d\",\"invoiceNumber\":\"Inv1442608\",\"docNumber\":\"Inv1442608\",\"invoiceValue\":\"1999.000000000\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":\"HDAX58379-3512\",\"orderValue\":\"63200\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":null,\"dispatchDate\":null,\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Zotokqa8\",\"cfaId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\"},{\"sNo\":6,\"qty\":\"0\",\"customerName\":\"Zotokqa8\",\"invoiceDate\":\"2026-04-14\",\"invoiceUpdatedAt\":\"2026-04-14T17:35:22\",\"dueDate\":\"2026-04-24\",\"invoiceId\":\"e3848dc8-61a0-42f9-9579-c495de2f219a\",\"invoiceNumber\":\"Inv1442610\",\"docNumber\":\"Inv1442610\",\"invoiceValue\":\"2000.000000000\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":\"HDAX58379-3516\",\"orderValue\":\"57500\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":null,\"dispatchDate\":null,\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Zotokqa8\",\"cfaId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\"},{\"sNo\":7,\"qty\":\"0\",\"customerName\":\"Zotokqa8\",\"invoiceDate\":\"2026-04-13\",\"invoiceUpdatedAt\":\"2026-04-13T10:12:27\",\"dueDate\":\"2026-04-23\",\"invoiceId\":\"226231b9-09f3-4b2c-8f78-9dd2156f6a8b\",\"invoiceNumber\":\"Inv1342601\",\"docNumber\":\"Inv1342601\",\"invoiceValue\":\"953.000000000\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":\"HDAX58379-3463\",\"orderValue\":\"36300\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":null,\"dispatchDate\":null,\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Zotokqa8\",\"cfaId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\"},{\"sNo\":8,\"qty\":\"0\",\"customerName\":\"Zotokqa8\",\"invoiceDate\":\"2026-04-13\",\"invoiceUpdatedAt\":\"2026-04-13T18:02:13\",\"dueDate\":\"2026-04-23\",\"invoiceId\":\"3aa71bae-45df-49c1-b047-b40ae43a8b06\",\"invoiceNumber\":\"Inv1342611\",\"docNumber\":\"Inv1342611\",\"invoiceValue\":\"2844.000000000\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":\"HDAX58379-3484\",\"orderValue\":\"6110700\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":null,\"dispatchDate\":null,\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Zotokqa8\",\"cfaId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\"},{\"sNo\":9,\"qty\":\"0\",\"customerName\":\"Zotokqa8\",\"invoiceDate\":\"2026-04-13\",\"invoiceUpdatedAt\":\"2026-04-13T18:31:11\",\"dueDate\":\"2026-04-23\",\"invoiceId\":\"6f0d63cc-453c-4f2b-9b31-cecfc1060174\",\"invoiceNumber\":\"Inv1342615\",\"docNumber\":\"Inv1342615\",\"invoiceValue\":\"1998.000000000\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":\"HDAX58379-3488\",\"orderValue\":\"107500\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":null,\"dispatchDate\":null,\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Zotokqa8\",\"cfaId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\"},{\"sNo\":10,\"qty\":\"0\",\"customerName\":\"Zotokqa8\",\"invoiceDate\":\"2026-04-13\",\"invoiceUpdatedAt\":\"2026-04-13T12:21:43\",\"dueDate\":\"2026-04-23\",\"invoiceId\":\"e0cc4c44-e015-4fd9-938a-c7d9ee7b1b1c\",\"invoiceNumber\":\"Inv1342605\",\"docNumber\":\"Inv1342605\",\"invoiceValue\":\"2754.000000000\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":\"HDAX58379-3470\",\"orderValue\":\"240000\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":null,\"dispatchDate\":null,\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Zotokqa8\",\"cfaId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\"},{\"sNo\":11,\"qty\":\"0\",\"customerName\":\"Umesh Singh\",\"invoiceDate\":\"2026-04-13\",\"invoiceUpdatedAt\":\"2026-04-14T11:59:16\",\"dueDate\":\"2026-04-24\",\"invoiceId\":\"55598e30-a6c0-42a6-b5cb-1d2d5ff4e10f\",\"invoiceNumber\":\"INvtest51019\",\"docNumber\":\"INvtest51019\",\"invoiceValue\":\"3310.000000000\",\"customerId\":\"342ae851-7512-45bc-b129-34a610104957\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":null,\"orderValue\":\"0\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":\"211793116506\",\"dispatchDate\":\"2026-01-14\",\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Umesh Singh\",\"cfaId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\"},{\"sNo\":12,\"qty\":\"0\",\"customerName\":\"Zotokqa8\",\"invoiceDate\":\"2026-04-13\",\"invoiceUpdatedAt\":\"2026-04-14T11:36:36\",\"dueDate\":\"2026-04-24\",\"invoiceId\":\"017ddf90-b30f-4526-b4e3-de4440b458fe\",\"invoiceNumber\":\"Inv1442602\",\"docNumber\":\"Inv1442602\",\"invoiceValue\":\"986.000000000\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":\"HDAX58379-3497\",\"orderValue\":\"63200\",\"numberOfSKUs\":\"0\",\"dispatchDocNumber\":null,\"dispatchDate\":null,\"paymentId\":null,\"amountPaid\":\"0.000000000\",\"customerFirmName\":\"Zotokqa8\",\"cfaId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\"},{\"sNo\":13,\"qty\":\"0\",\"customerName\":\"Zotokqa8\",\"invoiceDate\":\"2026-04-12\",\"invoiceUpdatedAt\":\"2026-04-12T09:33:25\",\"dueDate\":\"2026-04-22\",\"invoiceId\":\"57933ab2-968a-4ec8-b11a-898a7ada6a3c\",\"invoiceNumber\":\"Inv1242601\",\"docNumber\":\"Inv1242601\",\"invoiceValue\":\"1000.000000000\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"sellerWorkspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"invoiceStatus\":\"P\",\"orderNumber\":\"HDAX58379-3457\",\"orderValue\":\"240000\",\"numberOfSKUs\":\"0\",\"dispatchDo...[TRUNCATED]",
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
