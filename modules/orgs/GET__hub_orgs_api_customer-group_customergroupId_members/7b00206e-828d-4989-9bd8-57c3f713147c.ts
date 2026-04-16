/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "7b00206e-828d-4989-9bd8-57c3f713147c",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/customer-group/{customergroupId}/members",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&pageNo=1&pageSize=20",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "pathParams": {
    "customergroupId": "12bea929-cc48-4f06-a9fa-275f5592bdcb"
  },
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$.customerGroupMembers[0].name",
      "$.customerGroupMembers[0].companyName",
      "$.customerGroupMembers[0].phone",
      "$.customerGroupMembers[0].address",
      "$.customerGroupMembers[0].divisionIds",
      "$.customerGroupMembers[0].cfaIds",
      "$.customerGroupMembers[0].visits",
      "$.totalCount",
      "$.startRecord",
      "$.endRecord",
      "$.totalPages"
    ],
    "ignoreResponsePaths": [
      "$.customerGroupMembers[0].id",
      "$.customerGroupMembers[0].customerId"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": {
    "customerGroupMembers": [
      {
        "id": "63c4d0b2-d35a-462d-8a71-cee7de0ee065",
        "name": "DHB Traders",
        "companyName": "DHB Traders",
        "phone": "912141201420",
        "address": "{\"address1\":\"Delhi\"}",
        "customerId": "a412b17d-3ebc-484c-82de-f92696f6e6f1",
        "divisionIds": [
          "cf8b92fe-394c-443a-9a16-0df89e4fb7d4",
          "d9f0194c-7c6b-4370-867e-2870b957123f",
          "ec204325-29c6-4860-8e41-6bbc2ddc566a",
          "24b51931-6d49-4a68-b192-4cdefe8ca22e",
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004",
          "962fc54e-5620-4429-9ed0-3d75101eea2a",
          "350d9e19-1990-437f-8ece-38c80a49b2e4",
          "7a27ce2e-b4db-40b8-88ac-b72f93bba5f7",
          "ead3d469-2d92-4c8d-8048-a99685695beb",
          "636c981d-5a3b-407c-9b1e-86d7dc923313",
          "519b95a2-b825-45ec-a9d5-51d0a074cc29",
          "1ab5ba0a-fb5f-4daf-ad26-d8bf4ffb417c",
          "e58bed17-ab14-4ee7-bea6-dc7a225d3b37",
          "e9a26c50-d284-4309-86a8-e974f433020b"
        ],
        "cfaIds": [
          "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c"
        ],
        "visits": []
      },
      {
        "id": "8f7c1bc6-e633-45e9-a075-54cd4cc8cec3",
        "name": "A-One Sales",
        "companyName": "A-One Sales Corporation",
        "phone": "913456123789",
        "address": "{\"address1\":\"\",\"address2\":\"\"}",
        "customerId": "6db55fc6-a5ab-4e13-afe0-b9161203ca1b",
        "divisionIds": [],
        "cfaIds": [],
        "visits": []
      },
      {
        "id": "87d8fb0b-f0ee-4807-9411-3c5d856bbf78",
        "name": "savii",
        "companyName": "savii",
        "phone": "915367702149",
        "address": "{\"address1\":\"\",\"address2\":\"\"}",
        "customerId": "ce84d3cf-e8d9-48ef-844d-548c764e8dae",
        "divisionIds": [
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
        ],
        "cfaIds": [
          "00419f39-8845-4103-b96f-03786e99d423"
        ],
        "visits": []
      },
      {
        "id": "99cbc5b8-f7f5-4db3-8337-bc716f82e16f",
        "name": "Duplicate",
        "companyName": "Duplicate",
        "phone": "91000000000",
        "address": "{\"address1\":\"\",\"address2\":\"\"}",
        "customerId": "d2a0ef3f-48ae-4682-a80e-ac7d0c912c4e",
        "divisionIds": [
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
        ],
        "cfaIds": [
          "00419f39-8845-4103-b96f-03786e99d423"
        ],
        "visits": []
      },
      {
        "id": "95e0769a-16cd-409c-89a8-740b6666c994",
        "name": "Arun",
        "companyName": "Arun",
        "phone": "917661987561",
        "address": "{\"address1\":\"Hyderabad\"}",
        "customerId": "e204ac88-9ca0-49da-8b06-ba2feff846f1",
        "divisionIds": [
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
        ],
        "cfaIds": [
          "e281af2b-26c8-405d-82c4-a29071a341ee"
        ],
        "visits": []
      },
      {
        "id": "a0b50ca6-5869-48f1-9062-fb2bb7e5cb5c",
        "name": "unicorn",
        "companyName": "unicorn",
        "phone": "912308999999",
        "address": "{\"address1\":\"C8CX+J8H, Nanakramguda Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032, India\"}",
        "customerId": "e841b1fe-f719-4a2d-ad98-ab086c40d1fd",
        "divisionIds": [
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
        ],
        "cfaIds": [
          "00419f39-8845-4103-b96f-03786e99d423"
        ],
        "visits": []
      },
      {
        "id": "d7b3972c-4718-4569-8e56-f51a189f9695",
        "name": "pradeep",
        "companyName": "pradeep",
        "phone": "912239092309",
        "address": "{\"address1\":\"Financial District, Nanakramguda, 500032, Telangana\"}",
        "customerId": "c8e02e58-ab8e-4988-b413-375e2ffc3b93",
        "divisionIds": [
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
        ],
        "cfaIds": [
          "00419f39-8845-4103-b96f-03786e99d423"
        ],
        "visits": []
      },
      {
        "id": "6979aa00-b558-43d6-a756-9a6bde84e386",
        "name": "ajay",
        "companyName": "ajay sanyal",
        "phone": "919862452469",
        "address": "{\"address1\":\"60, Anjaiah Nagar, Hyderabad, 500032, Telangana\"}",
        "customerId": "27a20c5a-4c14-4c14-8c31-9a0036a2416f",
        "divisionIds": [
          "e58bed17-ab14-4ee7-bea6-dc7a225d3b37",
          "ead3d469-2d92-4c8d-8048-a99685695beb"
        ],
        "cfaIds": [
          "00083881-5414-4a73-a816-7a4044f714fd"
        ],
        "visits": []
      },
      {
        "id": "518746ee-395c-410f-87c9-2fc612f5fd34",
        "name": "Dharmendra Super Mart",
        "companyName": "Dharmendra Super Mart",
        "phone": "917788177994",
        "address": "{\"address1\":\"Dhobi Galli Gadipura Nanded\"}",
        "customerId": "eeb52585-8cb3-4be7-a2ba-925536c6bba5",
        "divisionIds": [
          "e58bed17-ab14-4ee7-bea6-dc7a225d3b37"
        ],
        "cfaIds": [
          "59cdb393-2af6-42d9-b3c6-eced0869e6e6"
        ],
        "visits": []
      },
      {
        "id": "4c858748-432d-49fd-8f12-495b1cc23963",
        "name": null,
        "companyName": "gourav",
        "phone": "911212909021",
        "address": "{\"address1\":\"\",\"address2\":\"\"}",
        "customerId": "c1edbd69-c288-4a7a-959a-854dcdba8e1e",
        "divisionIds": [
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
        ],
        "cfaIds": [
          "00419f39-8845-4103-b96f-03786e99d423"
        ],
        "visits": []
      },
      {
        "id": "4cb7b49c-047a-479b-9e4c-4e3bcdd3a20d",
        "name": null,
        "companyName": "adhi one",
        "phone": "911387023787",
        "address": "{\"address1\":\"\",\"address2\":\"\"}",
        "customerId": "663b76b1-9806-4035-8220-ba1d79084e02",
        "divisionIds": [
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
        ],
        "cfaIds": [
          "00419f39-8845-4103-b96f-03786e99d423"
        ],
        "visits": []
      },
      {
        "id": "b1631074-76a7-435b-9409-730078e6d002",
        "name": null,
        "companyName": "test",
        "phone": "911919012012",
        "address": "{\"address1\":\"\",\"address2\":\"\"}",
        "customerId": "092b10b7-4e4c-4ee4-a55d-a2eb38acc5dd",
        "divisionIds": [
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
        ],
        "cfaIds": [
          "00419f39-8845-4103-b96f-03786e99d423"
        ],
        "visits": []
      },
      {
        "id": "4c7257c1-ed60-42a8-8ddf-0fa4f4493cc9",
        "name": null,
        "companyName": "upendra",
        "phone": "911091290209",
        "address": "{\"address1\":\"\",\"address2\":\"\"}",
        "customerId": "7c3b4ee8-3081-4738-99ec-fecd9587e6e7",
        "divisionIds": [
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
        ],
        "cfaIds": [
          "00419f39-8845-4103-b96f-03786e99d423"
        ],
        "visits": []
      },
      {
        "id": "86914656-0966-4e01-8188-02a6e8c2b5b2",
        "name": null,
        "companyName": "Zotok TEst",
        "phone": "918352756399",
        "address": "{\"address1\":\"\",\"address2\":\"\"}",
        "customerId": "32d56f12-9b25-4474-970d-44821707ce82",
        "divisionIds": [
          "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
        ],
        "cfaIds": [
          "00419f39-8845-4103-b96f-03786e99d423"
        ],
        "visits": []
      }
    ],
    "totalCount": 14,
    "startRecord": 1,
    "endRecord": 14,
    "totalPages": 1
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
