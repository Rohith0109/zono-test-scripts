/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "dbc4fa29-7a6b-419d-bdee-d8c62935c88d",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/order-details-report/filter",
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
    "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.fulfillments[0].cfaName",
      "$.customers[0].customerName",
      "$.salesmen[0].salesTeamMemberName",
      "$.statuses[0]"
    ],
    "ignoreResponsePaths": [
      "$.fulfillments[0].cfaId",
      "$.customers[0].inviteId",
      "$.salesmen[0].salesmenId"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "fulfillments": [
      {
        "cfaId": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "cfaName": "Apparels CFA"
      },
      {
        "cfaId": "59cdb393-2af6-42d9-b3c6-eced0869e6e6",
        "cfaName": "Steel "
      },
      {
        "cfaId": "00419f39-8845-4103-b96f-03786e99d423",
        "cfaName": "CFA-141052"
      },
      {
        "cfaId": "2c31f3a1-d95b-4d8f-b7ca-949990b97ecd",
        "cfaName": "Test FL-111"
      },
      {
        "cfaId": "c4bf452e-a601-48f4-8c59-d4d50af1851e",
        "cfaName": "Plywood CFA"
      },
      {
        "cfaId": "f307179c-65d0-4f70-a724-d6767882d68f",
        "cfaName": "Snacks"
      },
      {
        "cfaId": "e281af2b-26c8-405d-82c4-a29071a341ee",
        "cfaName": "Testing CFA 200"
      },
      {
        "cfaId": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "cfaName": "Crocodile CFA"
      }
    ],
    "customers": [
      {
        "inviteId": "44618c77-3def-4108-88e1-2100c4519214",
        "customerName": "Zotokqa8"
      },
      {
        "inviteId": "b97c39de-9994-4fdb-a9c3-36f43c6c2f86",
        "customerName": "Gowtham"
      },
      {
        "inviteId": "2df9f5d2-0b70-471a-a4cb-fc8b39a32b8f",
        "customerName": "Pragya"
      },
      {
        "inviteId": "2693bec8-75a9-4f2d-9a0e-44ca2004fddd",
        "customerName": "Yasaswini"
      },
      {
        "inviteId": "29a19a53-a264-4a13-a2cf-7aabfe11fedf",
        "customerName": "Vaishnavi"
      },
      {
        "inviteId": "7e16869b-e8fb-4d9c-b350-5cc36148e04f",
        "customerName": "tarun"
      },
      {
        "inviteId": "72e2332d-1385-4f7b-900b-c51222f7fb4d",
        "customerName": "Owaiz Mustafa Khan"
      },
      {
        "inviteId": "db903d34-36a3-4b54-884c-a1213b6d78b3",
        "customerName": "Sai Kiran"
      },
      {
        "inviteId": "4b4df458-ca06-4e9f-8db0-537bf641415f",
        "customerName": "bumbleBee"
      }
    ],
    "salesmen": [
      {
        "salesmenId": null,
        "salesTeamMemberName": null
      },
      {
        "salesmenId": "ce4192c5-370b-4585-919a-f5cc0d04074d",
        "salesTeamMemberName": "sridhar"
      },
      {
        "salesmenId": "fd75ffb4-83af-457a-ab59-739ef7b8ac2c",
        "salesTeamMemberName": "Tarun-member"
      },
      {
        "salesmenId": "df8b041f-1c25-4b3c-ac23-b4b21179213f",
        "salesTeamMemberName": "Tarun_teammember"
      }
    ],
    "statuses": [
      "SubmittedByCustomer",
      "Approved",
      "Confirmed",
      "WaitingForCNF",
      "Billed",
      "Cancelled",
      "Dispatched",
      "Delivered",
      "SubmittedBySales"
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
