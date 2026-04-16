/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "221f8993-ab7f-4b33-8136-9c26165408cb",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v1/ledger",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "filters": {
      "inviteIds": []
    },
    "pageNo": 1,
    "pageSize": 20,
    "sortBy": "updatedDate",
    "sortOrder": "DESC"
  },
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.startRecord",
      "$.endRecord",
      "$.totalRecord",
      "$.data[0].sNo",
      "$.data[0].customerName",
      "$.data[0].customerFirmName",
      "$.data[0].customerPhone",
      "$.data[0].customerCode",
      "$.data[0].creditLimit",
      "$.data[0].outstandingAmount"
    ],
    "ignoreResponsePaths": [
      "$.data[0].inviteId",
      "$.data[0].lastUpdatedDate"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "startRecord": 1,
    "endRecord": 20,
    "totalRecord": 526,
    "data": [
      {
        "sNo": 1,
        "inviteId": "44618c77-3def-4108-88e1-2100c4519214",
        "customerName": "Zotokqa8",
        "customerFirmName": "Zotokqa8",
        "customerPhone": "917075852507",
        "customerCode": "88a523ad-2639-4fd0-9176-41cb4196db89",
        "creditLimit": 0,
        "outstandingAmount": -64941,
        "lastUpdatedDate": "2026-04-14"
      },
      {
        "sNo": 2,
        "inviteId": "342ae851-7512-45bc-b129-34a610104957",
        "customerName": "Umesh Singh",
        "customerFirmName": "Umesh Singh",
        "customerPhone": "917428119121",
        "customerCode": "75dfe1b2-925c-4b55-90ac-1f9f3daba0c3",
        "creditLimit": 0,
        "outstandingAmount": 7008,
        "lastUpdatedDate": "2026-04-14"
      },
      {
        "sNo": 3,
        "inviteId": "29a19a53-a264-4a13-a2cf-7aabfe11fedf",
        "customerName": "Vaishnavi",
        "customerFirmName": "Vaishnavi",
        "customerPhone": "919910305573",
        "customerCode": "1e857b4e-ee9c-4911-b35d-7f740bab1b63",
        "creditLimit": 0,
        "outstandingAmount": 3161933.19,
        "lastUpdatedDate": "2026-04-14"
      },
      {
        "sNo": 4,
        "inviteId": "2df9f5d2-0b70-471a-a4cb-fc8b39a32b8f",
        "customerName": "Pragya",
        "customerFirmName": "Pragya",
        "customerPhone": "917742867500",
        "customerCode": "c7ad1eb9-32df-414d-8ea9-c0bea3e3bc45",
        "creditLimit": 0,
        "outstandingAmount": -1456,
        "lastUpdatedDate": "2026-04-14"
      },
      {
        "sNo": 5,
        "inviteId": "92eb6a3e-3a9e-4433-8ded-7379eff70ac0",
        "customerName": "Nitin Padmawar",
        "customerFirmName": "Nitin Padmawar",
        "customerPhone": "919393270202",
        "customerCode": "bdeb7269-2594-4fb2-ab45-997f53728935",
        "creditLimit": 0,
        "outstandingAmount": -900,
        "lastUpdatedDate": "2026-04-13"
      },
      {
        "sNo": 6,
        "inviteId": "b97c39de-9994-4fdb-a9c3-36f43c6c2f86",
        "customerName": "Gowtham",
        "customerFirmName": "Gowtham Menni",
        "customerPhone": "918971344841",
        "customerCode": "5eaac1c8-8dce-47cb-b4ea-f290f72fd161",
        "creditLimit": 13131,
        "outstandingAmount": -31090247.74,
        "lastUpdatedDate": "2026-04-13"
      },
      {
        "sNo": 7,
        "inviteId": "6cec6ab9-0cb2-4074-aff8-e2caedc6a56a",
        "customerName": "Only Sons",
        "customerFirmName": "Mehta & Sons",
        "customerPhone": "912345678901",
        "customerCode": "CUS-003",
        "creditLimit": 0,
        "outstandingAmount": -1600,
        "lastUpdatedDate": "2026-04-10"
      },
      {
        "sNo": 8,
        "inviteId": "ec69fa56-8c12-408e-aceb-2f7927a66fb2",
        "customerName": "Shivani",
        "customerFirmName": "Shivani",
        "customerPhone": "911238386865",
        "customerCode": "Co697",
        "creditLimit": 0,
        "outstandingAmount": -1000,
        "lastUpdatedDate": "2026-04-10"
      },
      {
        "sNo": 9,
        "inviteId": "d10b1fac-58b4-4f33-8917-3b1018030755",
        "customerName": "Greeshma",
        "customerFirmName": "Greeshma",
        "customerPhone": "911394976768",
        "customerCode": "Ce838",
        "creditLimit": 0,
        "outstandingAmount": -900,
        "lastUpdatedDate": "2026-04-10"
      },
      {
        "sNo": 10,
        "inviteId": "2b3e71ae-0877-4577-b5bb-df1e331cf580",
        "customerName": "Darvin",
        "customerFirmName": "Dravin",
        "customerPhone": "911364959899",
        "customerCode": "Cwiowoe",
        "creditLimit": 0,
        "outstandingAmount": -1688,
        "lastUpdatedDate": "2026-04-10"
      },
      {
        "sNo": 11,
        "inviteId": "e204ac88-9ca0-49da-8b06-ba2feff846f1",
        "customerName": "Arun",
        "customerFirmName": "Arun",
        "customerPhone": "917661987561",
        "customerCode": "80884469-ced4-486e-9c62-815dfd76c0ed",
        "creditLimit": 0,
        "outstandingAmount": -8000,
        "lastUpdatedDate": "2026-04-10"
      },
      {
        "sNo": 12,
        "inviteId": "4b4df458-ca06-4e9f-8db0-537bf641415f",
        "customerName": "bumbleBee",
        "customerFirmName": "optimus",
        "customerPhone": "918077544051",
        "customerCode": "sshsh",
        "creditLimit": 0,
        "outstandingAmount": -1028869,
        "lastUpdatedDate": "2026-04-10"
      },
      {
        "sNo": 13,
        "inviteId": "8d75d533-9669-4fd1-94d7-fabb3283c05a",
        "customerName": "Zotokqa8",
        "customerFirmName": "Zotokqa8",
        "customerPhone": "917075852507",
        "customerCode": "f36c038d-8d3b-4ae0-8832-c398247bb044",
        "creditLimit": 0,
        "outstandingAmount": -48638,
        "lastUpdatedDate": "2026-04-08"
      },
      {
        "sNo": 14,
        "inviteId": "72e2332d-1385-4f7b-900b-c51222f7fb4d",
        "customerName": "Owaiz Mustafa Khan",
        "customerFirmName": "Owaiz Mustafa Khan",
        "customerPhone": "917326977069",
        "customerCode": "36b9eff5-42bb-4892-ab43-011058fd9674",
        "creditLimit": 0,
        "outstandingAmount": -10400,
        "lastUpdatedDate": "2026-04-03"
      },
      {
        "sNo": 15,
        "inviteId": "7d824fa6-2bbd-4c4e-8c83-0e8ad5f5b30f",
        "customerName": "chaitanya",
        "customerFirmName": "mariyano",
        "customerPhone": "919182824661",
        "customerCode": "customer123",
        "creditLimit": 0,
        "outstandingAmount": -55610.08,
        "lastUpdatedDate": "2026-04-01"
      },
      {
        "sNo": 16,
        "inviteId": "00a6d980-fc0f-4dd3-ae59-c11abf9419d1",
        "customerName": "Kristyy",
        "customerFirmName": "Kristyy",
        "customerPhone": "917708965061",
        "customerCode": "6c72bcf3-05c4-4b81-95a8-982806a483fa",
        "creditLimit": 0,
        "outstandingAmount": 5935,
        "lastUpdatedDate": "2026-03-31"
      },
      {
        "sNo": 17,
        "inviteId": "b3061c15-21a3-4f6e-853d-efd3d6d8aaf5",
        "customerName": "sh",
        "customerFirmName": "sh",
        "customerPhone": "919441239494",
        "customerCode": "701a4f2d-9882-4240-8e43-bb2092b82101",
        "creditLimit": 0,
        "outstandingAmount": -150459,
        "lastUpdatedDate": "2026-03-26"
      },
      {
        "sNo": 18,
        "inviteId": "7a70a307-161f-4305-97ab-af22c4b18651",
        "customerName": "Kunjal Gift Gallery",
        "customerFirmName": "Kunjal Gift Gallery",
        "customerPhone": "918275196421",
        "customerCode": "0a852934-3fd0-471b-987b-3a77046e5ee4-000000d6",
        "creditLimit": 0,
        "outstandingAmount": -288927,
        "lastUpdatedDate": "2026-03-25"
      },
      {
        "sNo": 19,
        "inviteId": "e5b0f07e-6406-40a0-aeac-fd1d45b2d7d5",
        "customerName": "Chandru",
        "customerFirmName": "Chandru Cements",
        "customerPhone": "915465465465",
        "customerCode": "CC250326",
        "creditLimit": 0,
        "outstandingAmount": -8999,
        "lastUpdatedDate": "2026-03-25"
      },
      {
        "sNo": 20,
        "inviteId": "9a9a8577-ebe8-4392-b534-700a063d0f05",
        "customerName": "Barani Kumar Naidu",
        "customerFirmName": "Barani Kumar Naidu",
        "customerPhone": "919100167445",
        "customerCode": "08e85270-2dbd-4747-9ea0-5665a1ef2820",
        "creditLimit": 0,
        "outstandingAmount": 76891,
        "lastUpdatedDate": "2026-03-25"
      }
    ]
  },
  "label": "",
  "suite": "Unassigned",
  "disabled": false
} as const;

export async function run(context: {
  baseUrl: string;
  authToken?: string;
  fetchImpl?: typeof fetch;
}) {
  const fetcher = context.fetchImpl || fetch;
  const normalizedBase = context.baseUrl.endsWith('/')
    ? context.baseUrl.slice(0, -1)
    : context.baseUrl;
  const [method, ...pathParts] = metadata.endpoint.split(' ');
  const path = pathParts.join(' ').trim() || '/';
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
