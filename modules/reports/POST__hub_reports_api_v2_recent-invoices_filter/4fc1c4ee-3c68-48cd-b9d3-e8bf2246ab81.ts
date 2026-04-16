/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "4fc1c4ee-3c68-48cd-b9d3-e8bf2246ab81",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/recent-invoices/filter",
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
      "$.customerName[0].customerName",
      "$.invoiceStatus[0]",
      "$.orderNumber[0]"
    ],
    "ignoreResponsePaths": [
      "$.customerName[0].customerId",
      "$.dueDate[0]",
      "$.dispatchDate[0]"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "customerName": [
      {
        "customerName": "Vaishnavi",
        "customerId": "29a19a53-a264-4a13-a2cf-7aabfe11fedf"
      },
      {
        "customerName": "Zotokqa8",
        "customerId": "44618c77-3def-4108-88e1-2100c4519214"
      },
      {
        "customerName": "Pragya",
        "customerId": "2df9f5d2-0b70-471a-a4cb-fc8b39a32b8f"
      },
      {
        "customerName": "Umesh Singh",
        "customerId": "342ae851-7512-45bc-b129-34a610104957"
      }
    ],
    "invoiceStatus": [
      "P"
    ],
    "orderNumber": [
      null,
      "HDAX58379-3457",
      "HDAX58379-3471",
      "HDAX58379-3469",
      "HDAX58379-3463",
      "HDAX58379-3484",
      "HDAX58379-3488",
      "HDAX58379-3470",
      "HDAX58379-3497",
      "HDAX58379-3512",
      "HDAX58379-3516",
      "HDAX58379-3541"
    ],
    "dueDate": [
      "2026-04-30",
      "2026-04-22",
      "2026-04-23",
      "2026-04-16",
      "2026-04-24",
      "2026-04-26"
    ],
    "dispatchDate": [
      null,
      "2025-09-23",
      "2026-01-14"
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
