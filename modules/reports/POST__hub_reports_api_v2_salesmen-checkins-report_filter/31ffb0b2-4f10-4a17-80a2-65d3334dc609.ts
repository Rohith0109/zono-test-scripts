/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "31ffb0b2-4f10-4a17-80a2-65d3334dc609",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/salesmen-checkins-report/filter",
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
    "filters": []
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.customers[0].customerName",
      "$.salesTeamMembers[0].salesTeamMemberName"
    ],
    "ignoreResponsePaths": [
      "$.customers[0].customerId",
      "$.salesTeamMembers[0].salesTeamMemberId"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "customers": [
      {
        "customerId": "b97c39de-9994-4fdb-a9c3-36f43c6c2f86",
        "customerName": "Gowtham"
      },
      {
        "customerId": "29a19a53-a264-4a13-a2cf-7aabfe11fedf",
        "customerName": "Vaishnavi"
      },
      {
        "customerId": "8123e09a-eae6-4f8b-85ef-6a717ea09f68",
        "customerName": "gowtham"
      },
      {
        "customerId": "92eb6a3e-3a9e-4433-8ded-7379eff70ac0",
        "customerName": "Nitin Padmawar"
      },
      {
        "customerId": "f13dee04-26e0-4a65-bc01-32f08ec7c7c8",
        "customerName": "Sai"
      },
      {
        "customerId": "44618c77-3def-4108-88e1-2100c4519214",
        "customerName": "Zotokqa8"
      },
      {
        "customerId": "4b4df458-ca06-4e9f-8db0-537bf641415f",
        "customerName": "bumbleBee"
      }
    ],
    "salesTeamMembers": [
      {
        "salesTeamMemberId": "ce4192c5-370b-4585-919a-f5cc0d04074d",
        "salesTeamMemberName": "zotokqatest2"
      },
      {
        "salesTeamMemberId": "7522cb47-3997-4999-8cd2-52c514260be6",
        "salesTeamMemberName": "Barani Kumar Naidu Bandaru"
      },
      {
        "salesTeamMemberId": "097da1d3-4d02-4098-870e-131a5bac57f9",
        "salesTeamMemberName": "sadvik changed"
      },
      {
        "salesTeamMemberId": "f8aed494-836e-4df3-84d0-b303f772cb27",
        "salesTeamMemberName": "Vaishnavi"
      },
      {
        "salesTeamMemberId": "58d9cc8c-9e32-45b0-8b04-ce65c873c773",
        "salesTeamMemberName": "Mayur"
      },
      {
        "salesTeamMemberId": "e447d510-28b0-40ef-b00f-e2c827fb771f",
        "salesTeamMemberName": "Member-sales-cust(p)"
      },
      {
        "salesTeamMemberId": "22e1ae77-02b8-4c52-ac5a-c532a402724f",
        "salesTeamMemberName": "kalavathi"
      },
      {
        "salesTeamMemberId": "179b6c78-2071-45fc-a81d-d3dd56471bdf",
        "salesTeamMemberName": "Sharonnn"
      },
      {
        "salesTeamMemberId": "ce4192c5-370b-4585-919a-f5cc0d04074d",
        "salesTeamMemberName": "sridhar science and technology priva"
      },
      {
        "salesTeamMemberId": "d6ee6fd4-185b-40d7-ba6c-7d72d052891a",
        "salesTeamMemberName": "Kalavathi"
      },
      {
        "salesTeamMemberId": "fd75ffb4-83af-457a-ab59-739ef7b8ac2c",
        "salesTeamMemberName": "Tarun-member"
      },
      {
        "salesTeamMemberId": "455bb4cb-e36a-4182-95c7-fdf436ef41d1",
        "salesTeamMemberName": "Test Sales"
      },
      {
        "salesTeamMemberId": "ce4192c5-370b-4585-919a-f5cc0d04074d",
        "salesTeamMemberName": "sridhar"
      },
      {
        "salesTeamMemberId": "615f6008-e025-44df-b2f7-013b2bd89fb0",
        "salesTeamMemberName": "asdcadc"
      },
      {
        "salesTeamMemberId": "788be1b8-7db3-48d4-acbc-d7094c915826",
        "salesTeamMemberName": "Surya Karthik"
      },
      {
        "salesTeamMemberId": "bdd6e466-41f4-4ac4-9880-f9fa5ef62315",
        "salesTeamMemberName": "Vicky"
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
