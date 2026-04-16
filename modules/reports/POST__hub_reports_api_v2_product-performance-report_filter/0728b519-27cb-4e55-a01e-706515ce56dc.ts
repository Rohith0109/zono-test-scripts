/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "0728b519-27cb-4e55-a01e-706515ce56dc",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/product-performance-report/filter",
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
      "$.division[0].division",
      "$.category[0].category"
    ],
    "ignoreResponsePaths": [
      "$.division[0].divisionId",
      "$.category[0].categoryId"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "division": [
      {
        "division": "Apparels Division",
        "divisionId": "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
      },
      {
        "division": "Steel",
        "divisionId": "e58bed17-ab14-4ee7-bea6-dc7a225d3b37"
      },
      {
        "division": "Plywood",
        "divisionId": "1ab5ba0a-fb5f-4daf-ad26-d8bf4ffb417c"
      },
      {
        "division": "Snacks",
        "divisionId": "24b51931-6d49-4a68-b192-4cdefe8ca22e"
      },
      {
        "division": null,
        "divisionId": null
      },
      {
        "division": "Crocodile",
        "divisionId": "636c981d-5a3b-407c-9b1e-86d7dc923313"
      },
      {
        "division": "Check Div-20",
        "divisionId": "d9f0194c-7c6b-4370-867e-2870b957123f"
      },
      {
        "division": null,
        "divisionId": "d6abaf08-5588-41f3-8f73-c8a4a5ae7004"
      }
    ],
    "category": [
      {
        "category": null,
        "categoryId": null
      },
      {
        "category": "Test Birla",
        "categoryId": "3788"
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
