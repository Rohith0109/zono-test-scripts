/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "9011fbdf-2a55-4bc1-a2bb-1e54bc82f1c1",
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
    "query": "query ($v1:customer_scheme_contribution_bool_exp,$v2:customer_scheme_contribution_bool_exp,$v3:[customer_scheme_contribution_select_column!],$v4:turnoverinvoice_bool_exp){customer_scheme_contribution_aggregate(where:$v1){aggregate{count,sum{contribution,contribution_sku}}},customer_scheme_contribution(where:$v2,distinct_on:$v3){customer_id},turnoverinvoice_aggregate(where:$v4){aggregate{count,sum{invoice_amount}}}}",
    "variables": {
      "v1": {
        "scheme_id": {
          "_eq": "7101b37a-2fcb-43b2-a4d9-345745b9bc88"
        },
        "workspaceId": {
          "_eq": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
        }
      },
      "v2": {
        "scheme_id": {
          "_eq": "7101b37a-2fcb-43b2-a4d9-345745b9bc88"
        },
        "workspaceId": {
          "_eq": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
        }
      },
      "v3": [
        "customer_id"
      ],
      "v4": {
        "turnoverinvoice_lines": {
          "turnover_invoice_line_schemes": {
            "scheme_id": {
              "_eq": "7101b37a-2fcb-43b2-a4d9-345745b9bc88"
            }
          }
        },
        "workspaceId": {
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
    "requiredResponsePaths": [
      "$.data.customer_scheme_contribution_aggregate.aggregate",
      "$.data.customer_scheme_contribution[0]",
      "$.data.turnoverinvoice_aggregate.aggregate"
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
