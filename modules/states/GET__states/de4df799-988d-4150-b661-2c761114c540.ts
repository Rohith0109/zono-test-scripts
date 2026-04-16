/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "de4df799-988d-4150-b661-2c761114c540",
  "method": "GET",
  "endpoint": "GET /states",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "states",
  "query": "",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$[0].name",
      "$[0].stateCode",
      "$[0].isoCode",
      "$[0].gstStateCode"
    ],
    "ignoreResponsePaths": [
      "$[0].id",
      "$[0].createdDate",
      "$[0].updatedDate"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": [
    {
      "id": "b7c45384-972d-4bfa-a0a5-170cb2f259b3",
      "createdDate": null,
      "updatedDate": "2022-04-14T11:41:07.000Z",
      "name": "ANDAMAN & NICOBAR",
      "stateCode": "35",
      "isoCode": null,
      "gstStateCode": "35"
    },
    {
      "id": "03b8c526-af6e-45c2-a5a3-e9f26ad85306",
      "createdDate": "2021-07-01T04:50:15.000Z",
      "updatedDate": "2022-05-02T11:22:30.000Z",
      "name": "ANDHRA PRADESH",
      "stateCode": "37",
      "isoCode": "42",
      "gstStateCode": "37"
    },
    {
      "id": "1cbd9d52-ec74-490d-941c-c3a9da857f09",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:24:19.000Z",
      "name": "ANDHRA PRADESH (OLD)",
      "stateCode": "28",
      "isoCode": null,
      "gstStateCode": "28"
    },
    {
      "id": "e8734832-5c7f-4387-9609-16ec0f2dece3",
      "createdDate": "2022-05-02T10:43:01.000Z",
      "updatedDate": "2022-05-02T10:43:01.000Z",
      "name": "ARUNACHAL PRADESH",
      "stateCode": "12",
      "isoCode": null,
      "gstStateCode": "12"
    },
    {
      "id": "6d2c9a55-99ad-44fb-99b3-a1f4da3663ef",
      "createdDate": null,
      "updatedDate": "2022-05-02T10:45:22.000Z",
      "name": "ASSAM",
      "stateCode": "18",
      "isoCode": null,
      "gstStateCode": "18"
    },
    {
      "id": "933ff769-972f-4902-[REDACTED]",
      "createdDate": null,
      "updatedDate": "2022-05-02T10:45:35.000Z",
      "name": "BIHAR",
      "stateCode": "10",
      "isoCode": null,
      "gstStateCode": "10"
    },
    {
      "id": "7c3dec5a-731e-44b1-9ffc-a4c3d11bf03b",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:24:22.000Z",
      "name": "CHANDIGARH",
      "stateCode": "04",
      "isoCode": null,
      "gstStateCode": "04"
    },
    {
      "id": "e4a22756-207f-4932-a95e-6d6f0af3c5f0",
      "createdDate": null,
      "updatedDate": "2022-05-02T10:48:23.000Z",
      "name": "CHHATISGARH",
      "stateCode": "22",
      "isoCode": null,
      "gstStateCode": "22"
    },
    {
      "id": "af7cc196-d58f-4c08-8d92-7f0c1e428037",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:24:24.000Z",
      "name": "DADRA & NAGAR HAVELI",
      "stateCode": "26",
      "isoCode": null,
      "gstStateCode": "26"
    },
    {
      "id": "e0028be6-d734-4915-b3b2-691075c0e55a",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:24:25.000Z",
      "name": "DAMAN & DIU",
      "stateCode": "25",
      "isoCode": null,
      "gstStateCode": "25"
    },
    {
      "id": "632dc4d2-ac77-46ae-8dd5-c304fe672dc1",
      "createdDate": null,
      "updatedDate": "2022-05-02T10:54:46.000Z",
      "name": "DELHI",
      "stateCode": "07",
      "isoCode": null,
      "gstStateCode": "07"
    },
    {
      "id": "0d19509a-78ff-4588-a937-58f8ba33a47d",
      "createdDate": null,
      "updatedDate": "2022-05-02T10:55:45.000Z",
      "name": "GOA",
      "stateCode": "30",
      "isoCode": null,
      "gstStateCode": "30"
    },
    {
      "id": "47207303-d7ed-4d38-bd5b-e3076c7c1db6",
      "createdDate": null,
      "updatedDate": "2022-03-28T06:18:10.000Z",
      "name": "GUJARAT",
      "stateCode": "24",
      "isoCode": null,
      "gstStateCode": "24"
    },
    {
      "id": "7390e0db-c67b-478f-a571-9b74da2a298e",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:01:12.000Z",
      "name": "HARYANA",
      "stateCode": "06",
      "isoCode": null,
      "gstStateCode": "06"
    },
    {
      "id": "93f3a242-4775-4e8e-a697-69a9332ed9bf",
      "createdDate": null,
      "updatedDate": "2022-03-28T04:41:31.000Z",
      "name": "HIMACHAL PRADESH",
      "stateCode": null,
      "isoCode": null,
      "gstStateCode": "02"
    },
    {
      "id": "19c2f416-917b-461c-a48a-aac2b5d44254",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:03:16.000Z",
      "name": "JAMMU & KASHMIR",
      "stateCode": "01",
      "isoCode": null,
      "gstStateCode": "01"
    },
    {
      "id": "09eec26e-2458-4a6b-9694-48121b8b094c",
      "createdDate": null,
      "updatedDate": "2023-07-17T10:52:26.000Z",
      "name": "JHARKHAND",
      "stateCode": "20",
      "isoCode": "43",
      "gstStateCode": "20"
    },
    {
      "id": "124eccb4-aabd-4336-bba8-9d90628e2136",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:07:01.000Z",
      "name": "KARNATAKA",
      "stateCode": "29",
      "isoCode": null,
      "gstStateCode": "29"
    },
    {
      "id": "38134115-8315-424e-84dd-3f294c42250e",
      "createdDate": null,
      "updatedDate": "2022-03-28T06:20:31.000Z",
      "name": "KERALA",
      "stateCode": "32",
      "isoCode": null,
      "gstStateCode": "32"
    },
    {
      "id": "0f11f876-98ed-4f5a-bc06-d5d18da4c054",
      "createdDate": null,
      "updatedDate": "2022-03-28T04:41:31.000Z",
      "name": "LAKSHADWEEP",
      "stateCode": null,
      "isoCode": null,
      "gstStateCode": "31"
    },
    {
      "id": "232012a3-647c-4700-bbba-524d21096ee8",
      "createdDate": null,
      "updatedDate": "2022-03-28T06:16:10.000Z",
      "name": "MADHYA PRADESH",
      "stateCode": "23",
      "isoCode": null,
      "gstStateCode": "23"
    },
    {
      "id": "9f184aaf-2d2b-4968-9aef-47f84bbb8cef",
      "createdDate": "2022-03-28T06:17:16.000Z",
      "updatedDate": "2022-03-28T06:17:16.000Z",
      "name": "MAHARASHTRA",
      "stateCode": "27",
      "isoCode": null,
      "gstStateCode": "27"
    },
    {
      "id": "9ebbf69a-cbcd-491d-b599-99bacc6df1b5",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:12:21.000Z",
      "name": "MANIPUR",
      "stateCode": "14",
      "isoCode": null,
      "gstStateCode": "14"
    },
    {
      "id": "d3781590-5a1b-46bf-8056-29e090a74631",
      "createdDate": null,
      "updatedDate": "2022-03-28T04:41:31.000Z",
      "name": "MEGHALAYA",
      "stateCode": null,
      "isoCode": null,
      "gstStateCode": "17"
    },
    {
      "id": "3a4abfcc-5ed2-4f2d-801c-ebbb602e033b",
      "createdDate": null,
      "updatedDate": "2022-03-28T04:41:31.000Z",
      "name": "MIZORAM",
      "stateCode": null,
      "isoCode": null,
      "gstStateCode": "15"
    },
    {
      "id": "a9f66abb-537e-487e-aad6-8928715c6ff7",
      "createdDate": null,
      "updatedDate": "2022-03-28T04:41:31.000Z",
      "name": "NAGALAND",
      "stateCode": null,
      "isoCode": null,
      "gstStateCode": "13"
    },
    {
      "id": "b222156a-d9f9-4c0e-90b4-c6467bb99d95",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:26:41.000Z",
      "name": "NCT OF DELHI",
      "stateCode": "07",
      "isoCode": null,
      "gstStateCode": "07"
    },
    {
      "id": "6019094e-ae60-11ec-939e-0238a515d4d4",
      "createdDate": "2022-03-28T06:29:09.000Z",
      "updatedDate": "2022-05-02T11:14:51.000Z",
      "name": "ODISHA",
      "stateCode": "21",
      "isoCode": null,
      "gstStateCode": "21"
    },
    {
      "id": "0a21b7e1-1ece-4b04-91c8-e1bd6239853d",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:14:57.000Z",
      "name": "PONDICHERRY",
      "stateCode": "34",
      "isoCode": null,
      "gstStateCode": "34"
    },
    {
      "id": "ab887a09-4732-49e2-ab81-d43820a55c5c",
      "createdDate": null,
      "updatedDate": "2022-04-04T14:16:34.000Z",
      "name": "PUNJAB",
      "stateCode": "03",
      "isoCode": "",
      "gstStateCode": "03"
    },
    {
      "id": "9839fc76-6059-4fff-ab95-71a12cf4de49",
      "createdDate": null,
      "updatedDate": "2023-09-15T12:05:21.000Z",
      "name": "RAJASTHAN",
      "stateCode": "08",
      "isoCode": null,
      "gstStateCode": "08"
    },
    {
      "id": "390b104e-99cd-4300-8e3b-a94f233b11c9",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:27:52.000Z",
      "name": "SIKKIM",
      "stateCode": "11",
      "isoCode": null,
      "gstStateCode": "11"
    },
    {
      "id": "2c758769-ca00-4ef6-be61-97a2b3230838",
      "createdDate": null,
      "updatedDate": "2022-03-28T06:17:42.000Z",
      "name": "TAMIL NADU",
      "stateCode": "33",
      "isoCode": null,
      "gstStateCode": "33"
    },
    {
      "id": "24b724f9-0579-4c40-b84a-5f75639ca1dc",
      "createdDate": null,
      "updatedDate": "2022-03-28T06:30:42.000Z",
      "name": "TELANGANA",
      "stateCode": "36",
      "isoCode": null,
      "gstStateCode": "36"
    },
    {
      "id": "82e02eaa-8d92-4bfa-a2e2-1878f1a6c55a",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:17:54.000Z",
      "name": "TRIPURA",
      "stateCode": "16",
      "isoCode": null,
      "gstStateCode": "16"
    },
    {
      "id": "2a02d4e6-c3b9-4b8f-ace6-291fc0dfec37",
      "createdDate": null,
      "updatedDate": "2022-03-28T06:20:10.000Z",
      "name": "UTTAR PRADESH",
      "stateCode": "09",
      "isoCode": null,
      "gstStateCode": "09"
    },
    {
      "id": "d5e0a5b6-029d-4f27-beff-f9c616dfd997",
      "createdDate": null,
      "updatedDate": "2022-05-02T11:19:11.000Z",
      "name": "UTTARAKHAND",
      "stateCode": "05",
      "isoCode": null,
      "gstStateCode": "05"
    },
    {
      "id": "6303851f-19ba-48a0-ac6f-d66054656827",
      "createdDate": null,
      "updatedDate": "2022-03-28T06:18:38.000Z",
      "name": "WEST BENGAL",
      "stateCode": "19",
      "isoCode": null,
      "gstStateCode": "19"
    }
  ],
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
