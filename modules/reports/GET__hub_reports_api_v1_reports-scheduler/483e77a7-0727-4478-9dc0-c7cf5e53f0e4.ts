/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "483e77a7-0727-4478-9dc0-c7cf5e53f0e4",
  "method": "GET",
  "endpoint": "GET /hub/reports/api/v1/reports-scheduler",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
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
      "$[0].scheduleName",
      "$[0].state",
      "$[0].scheduleExpression",
      "$[0].email",
      "$[0].firstName",
      "$[0].reportType",
      "$[0].filters",
      "$[0].frequency",
      "$[0].enabled",
      "$[0].description"
    ],
    "ignoreResponsePaths": [
      "$[0].workspaceId",
      "$[0].scheduleExpressionTimezone",
      "$[0].userId",
      "$[0].inviteId",
      "$[0].startDate",
      "$[0].endDate",
      "$[0].scheduledTime"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": [
    {
      "scheduleName": "reports_order_items_report_1776244315717",
      "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
      "state": "ENABLED",
      "scheduleExpression": "cron(34 13 * * ? *)",
      "scheduleExpressionTimezone": "Asia/Kolkata",
      "userId": "c6897544-32b6-4a95-addf-c2d656ce05ac",
      "inviteId": "31c6c282-b7cf-4081-90a6-f41362dd5f1b",
      "email": "hda@yopmail.com",
      "firstName": "Hda",
      "reportType": "order_items_report",
      "startDate": "2026-04-01",
      "endDate": "2026-04-15",
      "filters": {},
      "frequency": "daily",
      "scheduledTime": "13:34",
      "enabled": true,
      "description": "Daily order report schedule"
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
