/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "33a43bc2-1a8f-4f8c-9136-70d0626262a9",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/customer-performance-report",
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
    "sortDirection": "DESC",
    "orderBy": [
      {
        "column": "totalOrders",
        "order": "DESC"
      }
    ],
    "searchKey": "",
    "pageNo": 1,
    "pageSize": 20,
    "startDate": "2026-04-12",
    "endDate": "2026-04-17",
    "filters": {
      "district": [],
      "pinCode": [],
      "state": [],
      "customerId": []
    }
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.data[0].sNo",
      "$.data[0].customerName",
      "$.data[0].customercode",
      "$.data[0].sellerworkspacename",
      "$.data[0].totalOrders",
      "$.data[0].totalValue",
      "$.data[0].totalInvoices",
      "$.data[0].totalInvoicesValue",
      "$.data[0].totalPendingInvoices",
      "$.data[0].totalPendingInvoicesValue",
      "$.data[0].outstandingAmount",
      "$.data[0].creditLimit",
      "$.data[0].state",
      "$.data[0].district",
      "$.data[0].pincode",
      "$.data[0].companyName",
      "$.totalNumberOfOrders",
      "$.totalOrderValue",
      "$.totalNumberOfInvoices",
      "$.totalInvoiceValue",
      "$.totalOutStanding",
      "$.totalPendingInvoices",
      "$.totalPendingInvoicesValue",
      "$.totalRecords",
      "$.startRecord",
      "$.endRecord"
    ],
    "ignoreResponsePaths": [
      "$.data[0].customerId",
      "$.data[0].salesTeamMemberId",
      "$.data[0].cfaId",
      "$.updatedAt"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "data": [
      {
        "sNo": 1,
        "customerName": "Gowtham",
        "customerId": "b97c39de-9994-4fdb-a9c3-36f43c6c2f86",
        "customercode": "5eaac1c8-8dce-47cb-b4ea-f290f72fd161",
        "salesTeamMemberId": null,
        "sellerworkspacename": null,
        "cfaId": "2c31f3a1-d95b-4d8f-b7ca-949990b97ecd",
        "totalOrders": "14",
        "totalValue": "7207972.000000000",
        "totalInvoices": "0",
        "totalInvoicesValue": "0.000000000",
        "totalPendingInvoices": "0",
        "totalPendingInvoicesValue": "0.000000000",
        "outstandingAmount": "0.000000000",
        "creditLimit": "13131",
        "state": "TELANGANA",
        "district": null,
        "pincode": "500084",
        "companyName": "Gowtham Menni"
      },
      {
        "sNo": 2,
        "customerName": "Zotokqa8",
        "customerId": "44618c77-3def-4108-88e1-2100c4519214",
        "customercode": "88a523ad-2639-4fd0-9176-41cb4196db89",
        "salesTeamMemberId": null,
        "sellerworkspacename": null,
        "cfaId": "40a914c1-4dcf-429f-a019-58cf1f2a7f49",
        "totalOrders": "14",
        "totalValue": "14064508.000000000",
        "totalInvoices": "4",
        "totalInvoicesValue": "4237.000000000",
        "totalPendingInvoices": "4",
        "totalPendingInvoicesValue": "4237.000000000",
        "outstandingAmount": "4237.000000000",
        "creditLimit": null,
        "state": "TELANGANA",
        "district": null,
        "pincode": "500060",
        "companyName": "Zotokqa8"
      },
      {
        "sNo": 3,
        "customerName": "tarun",
        "customerId": "7e16869b-e8fb-4d9c-b350-5cc36148e04f",
        "customercode": "fae76657-0285-4d1c-875a-fb4ba4234ff8",
        "salesTeamMemberId": null,
        "sellerworkspacename": null,
        "cfaId": "00419f39-8845-4103-b96f-03786e99d423",
        "totalOrders": "6",
        "totalValue": "345222.000000000",
        "totalInvoices": "0",
        "totalInvoicesValue": "0.000000000",
        "totalPendingInvoices": "0",
        "totalPendingInvoicesValue": "0.000000000",
        "outstandingAmount": "0.000000000",
        "creditLimit": null,
        "state": null,
        "district": null,
        "pincode": null,
        "companyName": "tarun"
      },
      {
        "sNo": 4,
        "customerName": "bumbleBee",
        "customerId": "4b4df458-ca06-4e9f-8db0-537bf641415f",
        "customercode": "sshsh",
        "salesTeamMemberId": null,
        "sellerworkspacename": null,
        "cfaId": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "totalOrders": "4",
        "totalValue": "77238826.000000000",
        "totalInvoices": "0",
        "totalInvoicesValue": "0.000000000",
        "totalPendingInvoices": "0",
        "totalPendingInvoicesValue": "0.000000000",
        "outstandingAmount": "0.000000000",
        "creditLimit": null,
        "state": null,
        "district": null,
        "pincode": null,
        "companyName": "optimus"
      },
      {
        "sNo": 5,
        "customerName": "Yasaswini",
        "customerId": "2693bec8-75a9-4f2d-9a0e-44ca2004fddd",
        "customercode": "e6708fd8-da56-4104-8526-ef738ec0d750",
        "salesTeamMemberId": null,
        "sellerworkspacename": null,
        "cfaId": "00419f39-8845-4103-b96f-03786e99d423",
        "totalOrders": "3",
        "totalValue": "325248.000000000",
        "totalInvoices": "0",
        "totalInvoicesValue": "0.000000000",
        "totalPendingInvoices": "0",
        "totalPendingInvoicesValue": "0.000000000",
        "outstandingAmount": "0.000000000",
        "creditLimit": null,
        "state": null,
        "district": null,
        "pincode": null,
        "companyName": "Yasaswini"
      },
      {
        "sNo": 6,
        "customerName": "Pragya",
        "customerId": "2df9f5d2-0b70-471a-a4cb-fc8b39a32b8f",
        "customercode": "c7ad1eb9-32df-414d-8ea9-c0bea3e3bc45",
        "salesTeamMemberId": null,
        "sellerworkspacename": null,
        "cfaId": "59cdb393-2af6-42d9-b3c6-eced0869e6e6",
        "totalOrders": "3",
        "totalValue": "645750.000000000",
        "totalInvoices": "3",
        "totalInvoicesValue": "1605.000000000",
        "totalPendingInvoices": "3",
        "totalPendingInvoicesValue": "1605.000000000",
        "outstandingAmount": "1605.000000000",
        "creditLimit": null,
        "state": null,
        "district": null,
        "pincode": null,
        "companyName": "Pragya"
      },
      {
        "sNo": 7,
        "customerName": "Vaishnavi",
        "customerId": "29a19a53-a264-4a13-a2cf-7aabfe11fedf",
        "customercode": "1e857b4e-ee9c-4911-b35d-7f740bab1b63",
        "salesTeamMemberId": null,
        "sellerworkspacename": null,
        "cfaId": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "totalOrders": "2",
        "totalValue": "195900.000000000",
        "totalInvoices": "1",
        "totalInvoicesValue": "666.000000000",
        "totalPendingInvoices": "1",
        "totalPendingInvoicesValue": "666.000000000",
        "outstandingAmount": "666.000000000",
        "creditLimit": null,
        "state": null,
        "district": null,
        "pincode": null,
        "companyName": "Vaishnavi"
      },
      {
        "sNo": 8,
        "customerName": "Owaiz Mustafa Khan",
        "customerId": "72e2332d-1385-4f7b-900b-c51222f7fb4d",
        "customercode": "36b9eff5-42bb-4892-ab43-011058fd9674",
        "salesTeamMemberId": null,
        "sellerworkspacename": null,
        "cfaId": "00419f39-8845-4103-b96f-03786e99d423",
        "totalOrders": "1",
        "totalValue": "25000.000000000",
        "totalInvoices": "0",
        "totalInvoicesValue": "0.000000000",
        "totalPendingInvoices": "0",
        "totalPendingInvoicesValue": "0.000000000",
        "outstandingAmount": "0.000000000",
        "creditLimit": null,
        "state": null,
        "district": null,
        "pincode": null,
        "companyName": "Owaiz Mustafa Khan"
      },
      {
        "sNo": 9,
        "customerName": "Sai Kiran",
        "customerId": "db903d34-36a3-4b54-884c-a1213b6d78b3",
        "customercode": "4c768447-a161-4975-bc6a-f116c263cfef",
        "salesTeamMemberId": null,
        "sellerworkspacename": null,
        "cfaId": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "totalOrders": "1",
        "totalValue": "36300.000000000",
        "totalInvoices": "0",
        "totalInvoicesValue": "0.000000000",
        "totalPendingInvoices": "0",
        "totalPendingInvoicesValue": "0.000000000",
        "outstandingAmount": "0.000000000",
        "creditLimit": "1000",
        "state": null,
        "district": null,
        "pincode": "500082",
        "companyName": "Sai Kiran"
      },
      {
        "sNo": 10,
        "customerName": "Umesh Singh",
        "customerId": "342ae851-7512-45bc-b129-34a610104957",
        "customercode": "75dfe1b2-925c-4b55-90ac-1f9f3daba0c3",
        "salesTeamMemberId": null,
        "sellerworkspacename": "Hd Agencies",
        "cfaId": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "totalOrders": "0",
        "totalValue": "0.000000000",
        "totalInvoices": "1",
        "totalInvoicesValue": "3310.000000000",
        "totalPendingInvoices": "1",
        "totalPendingInvoicesValue": "3310.000000000",
        "outstandingAmount": "3310.000000000",
        "creditLimit": null,
        "state": null,
        "district": null,
        "pincode": null,
        "companyName": "Umesh Singh"
      }
    ],
    "totalNumberOfOrders": 48,
    "totalOrderValue": 100084726,
    "totalNumberOfInvoices": 9,
    "totalInvoiceValue": 9818,
    "totalOutStanding": 9818,
    "totalPendingInvoices": 9,
    "totalPendingInvoicesValue": 9818,
    "totalRecords": 10,
    "startRecord": 1,
    "endRecord": 10,
    "updatedAt": "2026-04-16T19:50:22.711297"
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
