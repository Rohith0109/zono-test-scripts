/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "d981ab62-0d8c-4cf8-8e28-920841090e2f",
  "method": "POST",
  "endpoint": "POST /hub/proxy/api/turnover-schemes/graphql",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "proxy",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "query": "query ($v1:uuid!){turnover_scheme_by_pk(id:$v1){id,code,name,description,apply_level,reward_type,start_date,end_date,workspace_id,scheme_rule,sort_order,created_at,updated_at,fileName,is_disabled,type}}",
    "variables": {
      "v1": "7101b37a-2fcb-43b2-a4d9-345745b9bc88"
    }
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.data.turnover_scheme_by_pk.code",
      "$.data.turnover_scheme_by_pk.name",
      "$.data.turnover_scheme_by_pk.description",
      "$.data.turnover_scheme_by_pk.apply_level",
      "$.data.turnover_scheme_by_pk.reward_type",
      "$.data.turnover_scheme_by_pk.scheme_rule",
      "$.data.turnover_scheme_by_pk.sort_order",
      "$.data.turnover_scheme_by_pk.created_at",
      "$.data.turnover_scheme_by_pk.fileName",
      "$.data.turnover_scheme_by_pk.is_disabled",
      "$.data.turnover_scheme_by_pk.type"
    ],
    "ignoreResponsePaths": [
      "$.data.turnover_scheme_by_pk.id",
      "$.data.turnover_scheme_by_pk.start_date",
      "$.data.turnover_scheme_by_pk.end_date",
      "$.data.turnover_scheme_by_pk.workspace_id",
      "$.data.turnover_scheme_by_pk.updated_at"
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
