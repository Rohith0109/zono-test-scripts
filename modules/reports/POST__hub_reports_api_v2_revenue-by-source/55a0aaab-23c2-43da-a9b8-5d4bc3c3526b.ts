/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "55a0aaab-23c2-43da-a9b8-5d4bc3c3526b",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/revenue-by-source",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "startDate": "2026-04-10 00:00:00",
    "endDate": "2026-04-17 23:59:59",
    "groupBy": "dateRange"
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.data[0].orderSources",
      "$.data[0].totalOrderValue"
    ],
    "ignoreResponsePaths": [
      "$.data[0].dateRange",
      "$.updatedAt"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "data": [
      {
        "dateRange": "2026-04-10 - 2026-04-11",
        "orderSources": {
          "agent": {
            "value": 0,
            "percent": 0
          },
          "customer": {
            "value": 0,
            "percent": 0
          },
          "sales": {
            "value": 0,
            "percent": 0
          },
          "campaign": {
            "value": 0,
            "percent": 0
          }
        },
        "totalOrderValue": 0
      },
      {
        "dateRange": "2026-04-12 - 2026-04-13",
        "orderSources": {
          "agent": {
            "value": 3409566,
            "percent": 27.752164578097936
          },
          "customer": {
            "value": 8876200,
            "percent": 72.24783542190207
          },
          "sales": {
            "value": 0,
            "percent": 0
          },
          "campaign": {
            "value": 0,
            "percent": 0
          }
        },
        "totalOrderValue": 12285766
      },
      {
        "dateRange": "2026-04-14 - 2026-04-15",
        "orderSources": {
          "agent": {
            "value": 77618486,
            "percent": 87.83267216891795
          },
          "customer": {
            "value": 10752372,
            "percent": 12.167327831082051
          },
          "sales": {
            "value": 0,
            "percent": 0
          },
          "campaign": {
            "value": 0,
            "percent": 0
          }
        },
        "totalOrderValue": 88370858
      },
      {
        "dateRange": "2026-04-16 - 2026-04-17",
        "orderSources": {
          "agent": {
            "value": 7150402,
            "percent": 85.94644311110075
          },
          "customer": {
            "value": 1042500,
            "percent": 12.530647499724147
          },
          "sales": {
            "value": 126700,
            "percent": 1.522909389175107
          },
          "campaign": {
            "value": 0,
            "percent": 0
          }
        },
        "totalOrderValue": 8319602
      }
    ],
    "updatedAt": "2026-04-16T19:51:52.819710"
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
