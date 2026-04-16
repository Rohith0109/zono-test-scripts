/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "d31e4290-c119-425e-a151-09effbbf43ba",
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
    "startDate": "2026-04-09 00:00:00",
    "endDate": "2026-04-16 23:59:59",
    "groupBy": "dateRange"
  },
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
        "dateRange": "2026-04-09 - 2026-04-10",
        "orderSources": {
          "agent": {
            "value": 0,
            "percent": 0
          },
          "customer": {
            "value": 220920,
            "percent": 100
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
        "totalOrderValue": 220920
      },
      {
        "dateRange": "2026-04-11 - 2026-04-12",
        "orderSources": {
          "agent": {
            "value": 154300,
            "percent": 18.040453641996958
          },
          "customer": {
            "value": 701000,
            "percent": 81.95954635800304
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
        "totalOrderValue": 855300
      },
      {
        "dateRange": "2026-04-13 - 2026-04-14",
        "orderSources": {
          "agent": {
            "value": 3761626,
            "percent": 16.716816176020956
          },
          "customer": {
            "value": 18740422,
            "percent": 83.28318382397904
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
        "totalOrderValue": 22502048
      },
      {
        "dateRange": "2026-04-15 - 2026-04-16",
        "orderSources": {
          "agent": {
            "value": 77112126,
            "percent": 99.75788906483419
          },
          "customer": {
            "value": 187150,
            "percent": 0.2421109351658093
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
        "totalOrderValue": 77299276
      }
    ],
    "updatedAt": "2026-04-15T23:50:27.696209"
  },
  "label": "",
  "suite": "Unassigned",
  "disabled": false
} as const;

export async function run(context: {
  baseUrl: string;
  authToken?: string;
  fetchImpl?: typeof fetch;
}) {
  const fetcher = context.fetchImpl || fetch;
  const normalizedBase = context.baseUrl.endsWith('/')
    ? context.baseUrl.slice(0, -1)
    : context.baseUrl;
  const [method, ...pathParts] = metadata.endpoint.split(' ');
  const path = pathParts.join(' ').trim() || '/';
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
