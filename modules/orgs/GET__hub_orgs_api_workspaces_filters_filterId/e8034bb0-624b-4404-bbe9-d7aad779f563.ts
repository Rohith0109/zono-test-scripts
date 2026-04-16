/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "e8034bb0-624b-4404-bbe9-d7aad779f563",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/workspaces/filters/{filterId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "pathParams": {
    "filterId": "1d7a972c-322d-41d7-8dca-55409bb133de"
  },
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$.cfas[0].fulfillmentLocationCode",
      "$.cfas[0].supplierName",
      "$.members[0].memberName",
      "$.members[0].employeeCode"
    ],
    "ignoreResponsePaths": [
      "$.cfas[0].fulfillmentLocationId",
      "$.members[0].id"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": {
    "cfas": [
      {
        "fulfillmentLocationId": "59cdb393-2af6-42d9-b3c6-eced0869e6e6",
        "fulfillmentLocationCode": "1420231",
        "supplierName": "Steel "
      },
      {
        "fulfillmentLocationId": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "fulfillmentLocationCode": "200021",
        "supplierName": "Crocodile CFA"
      },
      {
        "fulfillmentLocationId": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "fulfillmentLocationCode": "62320",
        "supplierName": "Apparels CFA"
      },
      {
        "fulfillmentLocationId": "00419f39-8845-4103-b96f-03786e99d423",
        "fulfillmentLocationCode": "CFA-141052",
        "supplierName": "CFA-141052"
      },
      {
        "fulfillmentLocationId": "1229236f-b697-44b6-ae5f-7c04b3ec1d2e",
        "fulfillmentLocationCode": "166322",
        "supplierName": "Vijayawada"
      },
      {
        "fulfillmentLocationId": "17404347-ccd3-424b-bca6-6cc1d42affb5",
        "fulfillmentLocationCode": "332232",
        "supplierName": "Testing 3636"
      },
      {
        "fulfillmentLocationId": "40a914c1-4dcf-429f-a019-58cf1f2a7f49",
        "fulfillmentLocationCode": "default-cfa",
        "supplierName": "Default-CFA"
      },
      {
        "fulfillmentLocationId": "c4bf452e-a601-48f4-8c59-d4d50af1851e",
        "fulfillmentLocationCode": "12213",
        "supplierName": "Plywood CFA"
      },
      {
        "fulfillmentLocationId": "f307179c-65d0-4f70-a724-d6767882d68f",
        "fulfillmentLocationCode": "152135",
        "supplierName": "Snacks"
      },
      {
        "fulfillmentLocationId": "37bf7a2e-cc04-41bd-87f4-daa9984f2d51",
        "fulfillmentLocationCode": "LOC-54334",
        "supplierName": "uyi distributors"
      },
      {
        "fulfillmentLocationId": "48a3fbe2-00c0-459a-a244-a34a01db17a8",
        "fulfillmentLocationCode": "263266",
        "supplierName": "Test444"
      },
      {
        "fulfillmentLocationId": "e8193bc2-716e-4c93-9c26-60326dd47c8d",
        "fulfillmentLocationCode": "212154",
        "supplierName": "Hyderabad"
      },
      {
        "fulfillmentLocationId": "a34610f0-657b-407b-be9e-62c6e23f0fbe",
        "fulfillmentLocationCode": "151515",
        "supplierName": "Shobavat CFA"
      },
      {
        "fulfillmentLocationId": "e281af2b-26c8-405d-82c4-a29071a341ee",
        "fulfillmentLocationCode": "1405226",
        "supplierName": "Testing CFA 200"
      },
      {
        "fulfillmentLocationId": "00083881-5414-4a73-a816-7a4044f714fd",
        "fulfillmentLocationCode": "CF338",
        "supplierName": "CFA DIST338"
      },
      {
        "fulfillmentLocationId": "060a53e1-58ca-4dc3-ad92-1128838ee05d",
        "fulfillmentLocationCode": "CFA",
        "supplierName": "Testing_cfaa"
      },
      {
        "fulfillmentLocationId": "09a11cad-eca2-4161-aab2-09d17b5b941a",
        "fulfillmentLocationCode": "CF289",
        "supplierName": "CFA DIST289"
      },
      {
        "fulfillmentLocationId": "2c31f3a1-d95b-4d8f-b7ca-949990b97ecd",
        "fulfillmentLocationCode": "1510026",
        "supplierName": "Test FL-111"
      },
      {
        "fulfillmentLocationId": "480ff806-6a19-4982-bb51-e088f943203c",
        "fulfillmentLocationCode": "6262626",
        "supplierName": "Test7337"
      },
      {
        "fulfillmentLocationId": "65dedde8-6324-4da4-b9c6-b47a471fa716",
        "fulfillmentLocationCode": "65251",
        "supplierName": "Trail"
      },
      {
        "fulfillmentLocationId": "8c7ce6dd-35ae-4b90-8d66-8526972bc7a8",
        "fulfillmentLocationCode": "Manish plywood CFA",
        "supplierName": "Manish plywood CFA"
      },
      {
        "fulfillmentLocationId": "a5dd64db-0121-4355-8ba5-6222d7a1d266",
        "fulfillmentLocationCode": "CKB",
        "supplierName": "Crocodile_KB"
      },
      {
        "fulfillmentLocationId": "b87fc61e-a3ea-406c-b886-41bc49887c71",
        "fulfillmentLocationCode": "78452",
        "supplierName": "CFA-145144"
      },
      {
        "fulfillmentLocationId": "c8f8feb9-f705-4d62-a938-ff1f692551e8",
        "fulfillmentLocationCode": "1212021",
        "supplierName": "Test CFA"
      },
      {
        "fulfillmentLocationId": "df04b03c-d7b3-494e-abcf-1809cd3fa829",
        "fulfillmentLocationCode": "testCodeCfa",
        "supplierName": "testCFA"
      },
      {
        "fulfillmentLocationId": "e35b60fb-24ac-4408-b8f9-c93a61e2dc0f",
        "fulfillmentLocationCode": "13136",
        "supplierName": "Testing 66"
      },
      {
        "fulfillmentLocationId": "eedd7f1f-870c-4d26-bbd1-e012bfabf815",
        "fulfillmentLocationCode": "14200",
        "supplierName": "Fertilizers"
      },
      {
        "fulfillmentLocationId": "f6b993e2-cda8-41e0-a625-f340609b3f59",
        "fulfillmentLocationCode": "LOC-14435",
        "supplierName": "CFa_qwe"
      },
      {
        "fulfillmentLocationId": "fdd94b97-e2e2-439c-b7b3-01805f3f9e70",
        "fulfillmentLocationCode": "CFAHyd",
        "supplierName": "CFA Hyd"
      },
      {
        "fulfillmentLocationId": "ffb61918-cb38-48bb-84fa-b78abe4923b0",
        "fulfillmentLocationCode": "6322452",
        "supplierName": "CFA-14124"
      }
    ],
    "members": [
      {
        "id": "844a9055-c544-440b-b64c-5cba03d9f021",
        "memberName": "Team",
        "employeeCode": "251260"
      },
      {
        "id": "be45b221-e715-491c-bf6a-1543a8e272c8",
        "memberName": "Shiva kumar 120111",
        "employeeCode": "SH001"
      },
      {
        "id": "0c8b6d7a-86f1-42c4-80d7-d7bc84d4d5df",
        "memberName": "CFA",
        "employeeCode": "199020923"
      },
      {
        "id": "22ffe8f7-920e-4ace-84a2-2dbaf8a81efe",
        "memberName": "team member",
        "employeeCode": "custome_code"
      },
      {
        "id": "42254164-fc82-42db-be1a-58377b148954",
        "memberName": "Test Mem1",
        "employeeCode": "TKM1243"
      },
      {
        "id": "888de6d1-ffbd-4cd7-8bc8-f5cab5cf6634",
        "memberName": "Test Team 33300",
        "employeeCode": "41000"
      },
      {
        "id": "1db4b7e0-5510-42a2-bc24-8f0a6300f705",
        "memberName": "Test US CFA",
        "employeeCode": "203233"
      },
      {
        "id": "45bcf84b-de80-4abf-a66e-c674fedfd5e4",
        "memberName": "GDB Tester",
        "employeeCode": "5115151"
      },
      {
        "id": "5213c89f-0875-4120-a212-05f64d72d2f6",
        "memberName": "Nitin",
        "employeeCode": "NMP717"
      },
      {
        "id": "7cd48311-4b88-485b-9d01-a5fc9bd09114",
        "memberName": "kwd test",
        "employeeCode": "15156"
      },
      {
        "id": "b7dba8ba-5376-43ea-b749-ef0403839ab2",
        "memberName": "Test CFA",
        "employeeCode": "232626"
      },
      {
        "id": "b8657582-ebda-4984-b754-74c15185e094",
        "memberName": "Test 337",
        "employeeCode": "203263"
      },
      {
        "id": "c3935da9-5621-491c-ab62-9890980d63f2",
        "memberName": "NewGenAgencies",
        "employeeCode": "7491739"
      },
      {
        "id": "d4f7491f-a1b5-4b4f-8347-6eec2284e277",
        "memberName": "sales",
        "employeeCode": "12133"
      },
      {
        "id": "da56896e-6543-4649-a009-31885df35869",
        "memberName": "Test Team",
        "employeeCode": "151262"
      },
      {
        "id": "dbb3fc67-2a5f-4c9f-9a98-f0b8fc450f8b",
        "memberName": "Test CFA 554",
        "employeeCode": "26203"
      },
      {
        "id": "f65c0201-2aad-4c8e-841f-9e95dc089f0f",
        "memberName": "test2323",
        "employeeCode": "2323"
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
