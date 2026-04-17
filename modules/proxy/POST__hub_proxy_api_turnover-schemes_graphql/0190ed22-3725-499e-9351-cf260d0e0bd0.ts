/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "0190ed22-3725-499e-9351-cf260d0e0bd0",
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
    "query": "query ($v1:turnoverinvoice_bool_exp,$v2:[turnoverinvoice_order_by!],$v3:Int,$v4:Int,$v5:turnoverinvoice_line_bool_exp){turnoverinvoice(where:$v1,order_by:$v2,limit:$v3,offset:$v4){id,turnoverinvoice_lines_aggregate(where:$v5){aggregate{count,sum{contribution,total_amount,total_amount_with_tax}}}}}",
    "variables": {
      "v1": {
        "workspaceId": {
          "_eq": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
        },
        "status": {
          "_in": [
            "PENDING"
          ]
        }
      },
      "v2": [
        {
          "created_at": "desc"
        }
      ],
      "v3": 10,
      "v4": 0,
      "v5": {
        "scheme_id": {
          "_is_null": false
        },
        "status": {
          "_eq": "MAPPED"
        }
      }
    }
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.errors[0].message",
      "$.errors[0].extensions"
    ],
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
