/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "b8a3553b-bd4e-4c1c-b4ba-f43b91a44bfa",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v1/customer-metrics-report",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "customerIds": [
      "6cec6ab9-0cb2-4074-aff8-e2caedc6a56a",
      "6db55fc6-a5ab-4e13-afe0-b9161203ca1b",
      "09d0f956-9ab4-4219-a7e2-1cde42c4654b",
      "78062be5-7e96-4ad7-851f-b918aacb5bf4",
      "92eb6a3e-3a9e-4433-8ded-7379eff70ac0",
      "e204ac88-9ca0-49da-8b06-ba2feff846f1",
      "db903d34-36a3-4b54-884c-a1213b6d78b3",
      "e4e1ce33-9c3f-43bc-a70a-80d2007348c8",
      "bc915d0d-c4bb-4316-ab1d-2c580443cb56",
      "9b6bc5b2-ca63-4be8-a8c2-f0ca95200b1d",
      "92e6e2ff-ad41-41e5-813b-2bb265589cab",
      "18c8bea4-c868-45f2-b87a-22b004eeaabf",
      "689fd7ff-375b-4016-9354-4f1089a220e4",
      "f6de0bc8-cdcc-4b99-932a-efc688787d63",
      "a9eed697-4dea-46a5-b8f4-8230b01ff841",
      "2260d998-5958-465c-ad3d-a89e395438a8",
      "629a1f84-826c-424c-8d8d-d115ee7dd74a",
      "c4c48c8c-6109-467c-8b04-ac1b6c00b6e7",
      "4b7dbe51-481e-44b6-bc80-dd6c4c2537af",
      "4cc2ef66-05ae-4234-b612-42320a1c74dd"
    ],
    "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [],
    "ignoreResponsePaths": [],
    "equals": {}
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
