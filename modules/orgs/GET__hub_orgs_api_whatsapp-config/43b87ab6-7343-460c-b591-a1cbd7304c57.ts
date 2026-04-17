/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "43b87ab6-7343-460c-b591-a1cbd7304c57",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/whatsapp-config",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
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
      "$[0].whatsappPhoneNo",
      "$[0].provider",
      "$[0].qualityRating",
      "$[0].messageLimit",
      "$[0].isDefault",
      "$[0].isShared",
      "$[0].isDeleted",
      "$[0].deletedAt",
      "$[0].status",
      "$[0].displayName",
      "$[0].authCode",
      "$[0].profilePic",
      "$[0].isCoexistence",
      "$[0].branch",
      "$[0].tag",
      "$[0].info",
      "$[0].isCatalogueSyncEnable",
      "$[0].languages[0]"
    ],
    "ignoreResponsePaths": [
      "$[0].id",
      "$[0].createdDate",
      "$[0].updatedDate",
      "$[0].workspaceId",
      "$[0].wabaId",
      "$[0].whatsappPhoneNoId",
      "$[0].namespaceId",
      "$[0].metaBusinessToken",
      "$[0].sid",
      "$[0].projectId",
      "$[0].esLinkID",
      "$[0].fbmId"
    ],
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
