/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "21ac42a3-17c8-431b-a6c0-2c9d7a371e6b",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/customer-group/filters/{filterId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "pathParams": {
    "filterId": "12bea929-cc48-4f06-a9fa-275f5592bdcb"
  },
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$.cfas[0].name",
      "$.divisions[0].name",
      "$.divisions[0].code"
    ],
    "ignoreResponsePaths": [
      "$.cfas[0].id",
      "$.cfas[0].cfaId",
      "$.divisions[0].id"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": {
    "cfas": [
      {
        "name": "CFA-141052",
        "id": "00419f39-8845-4103-b96f-03786e99d423",
        "cfaId": "CFA-141052"
      },
      {
        "name": "CFA DIST338",
        "id": "00083881-5414-4a73-a816-7a4044f714fd",
        "cfaId": "CF338"
      },
      {
        "name": "Steel ",
        "id": "59cdb393-2af6-42d9-b3c6-eced0869e6e6",
        "cfaId": "1420231"
      },
      {
        "name": "Apparels CFA",
        "id": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "cfaId": "62320"
      },
      {
        "name": "Testing CFA 200",
        "id": "e281af2b-26c8-405d-82c4-a29071a341ee",
        "cfaId": "1405226"
      }
    ],
    "divisions": [
      {
        "name": "Apparels Division",
        "id": "d6abaf08-5588-41f3-8f73-c8a4a5ae7004",
        "code": "4782522"
      },
      {
        "name": "Steel",
        "id": "e58bed17-ab14-4ee7-bea6-dc7a225d3b37",
        "code": "14202563"
      },
      {
        "name": "manish-div001",
        "id": "ead3d469-2d92-4c8d-8048-a99685695beb",
        "code": "div021"
      },
      {
        "name": "Default-division",
        "id": "cf8b92fe-394c-443a-9a16-0df89e4fb7d4",
        "code": "default-division"
      },
      {
        "name": "Check Div-20",
        "id": "d9f0194c-7c6b-4370-867e-2870b957123f",
        "code": "1451200"
      },
      {
        "name": "Shobavat",
        "id": "ec204325-29c6-4860-8e41-6bbc2ddc566a",
        "code": "SH54155"
      },
      {
        "name": "Snacks",
        "id": "24b51931-6d49-4a68-b192-4cdefe8ca22e",
        "code": "232781"
      },
      {
        "name": "BirlaNu Div",
        "id": "962fc54e-5620-4429-9ed0-3d75101eea2a",
        "code": "15063"
      },
      {
        "name": "Any Division",
        "id": "350d9e19-1990-437f-8ece-38c80a49b2e4",
        "code": "ANY"
      },
      {
        "name": "Watch Store",
        "id": "7a27ce2e-b4db-40b8-88ac-b72f93bba5f7",
        "code": "Watch1254"
      },
      {
        "name": "Crocodile",
        "id": "636c981d-5a3b-407c-9b1e-86d7dc923313",
        "code": "3336511"
      },
      {
        "name": "Crocodile_KB",
        "id": "519b95a2-b825-45ec-a9d5-51d0a074cc29",
        "code": "CCKB"
      },
      {
        "name": "Plywood",
        "id": "1ab5ba0a-fb5f-4daf-ad26-d8bf4ffb417c",
        "code": "4526260"
      },
      {
        "name": "Fertilizers",
        "id": "e9a26c50-d284-4309-86a8-e974f433020b",
        "code": "230230"
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
