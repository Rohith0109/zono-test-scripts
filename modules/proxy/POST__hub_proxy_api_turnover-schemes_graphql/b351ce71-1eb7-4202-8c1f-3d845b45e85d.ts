/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "b351ce71-1eb7-4202-8c1f-3d845b45e85d",
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
    "query": "query ($v1:turnover_scheme_bool_exp,$v2:[turnover_scheme_order_by!],$v3:Int,$v4:Int,$v5:[customer_scheme_contribution_select_column!],$v6:turnover_scheme_bool_exp){turnover_scheme(where:$v1,order_by:$v2,limit:$v3,offset:$v4){id,code,name,description,start_date,end_date,workspace_id,scheme_rule,sort_order,created_at,updated_at,is_disabled,customer_scheme_contributions_aggregate{aggregate{count,sum{contribution,contribution_sku}}},customer_scheme_contributions(distinct_on:$v5){customer_id}},turnover_scheme_aggregate(where:$v6){aggregate{count}}}",
    "variables": {
      "v1": {
        "workspace_id": {
          "_eq": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
        }
      },
      "v2": [
        {
          "created_at": "desc"
        }
      ],
      "v3": 20,
      "v4": 0,
      "v5": [
        "customer_id"
      ],
      "v6": {
        "workspace_id": {
          "_eq": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
        }
      }
    }
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
