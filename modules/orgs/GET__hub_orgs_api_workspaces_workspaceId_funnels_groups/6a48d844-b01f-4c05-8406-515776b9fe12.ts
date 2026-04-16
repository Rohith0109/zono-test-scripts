/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "6a48d844-b01f-4c05-8406-515776b9fe12",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/workspaces/{workspaceId}/funnels/groups",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?funnel_id=f9338b29-fa87-4d98-bb12-752114f7f28e&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "pathParams": {
    "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
  },
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$.success",
      "$.data.funnel.name",
      "$.data.funnel.type",
      "$.data.funnel.sequence",
      "$.data.funnel.has_groups",
      "$.data.groups[0]",
      "$.data.total_stats.total_customers",
      "$.data.total_stats.open_conversations",
      "$.data.total_stats.closed_conversations",
      "$.data.total_stats.total_conversations",
      "$.data.available_filters.statuses",
      "$.data.available_filters.tags",
      "$.data.available_filters.team_members"
    ],
    "ignoreResponsePaths": [
      "$.data.funnel.id"
    ],
    "equals": {
      "success": true
    }
  },
  "expectedStatus": 200,
  "responseSample": {
    "success": true,
    "data": {
      "funnel": {
        "id": "f9338b29-fa87-4d98-bb12-752114f7f28e",
        "name": "Marketing",
        "type": "marketing",
        "sequence": 1,
        "has_groups": true
      },
      "groups": [
        {
          "id": "7af09d17-ec3c-40bd-924f-72dbeaf5eba8",
          "name": "Warm",
          "sequence": 1,
          "color": "#4CAF50",
          "icon": "🔥",
          "customer_group_rules": [],
          "group_type": "manual",
          "description": "Warm leads",
          "stats": {
            "total_customers": 9,
            "total_conversations": 2,
            "open_conversations": 2,
            "closed_conversations": 0
          }
        },
        {
          "id": "9497bcf8-2b32-46f9-a429-b2f99239b5e1",
          "name": "Irrelevant",
          "sequence": 2,
          "color": "#FF9800",
          "icon": "🚫",
          "customer_group_rules": [],
          "group_type": "manual",
          "description": "Irrelevant leads",
          "stats": {
            "total_customers": 11,
            "total_conversations": 5,
            "open_conversations": 5,
            "closed_conversations": 0
          }
        },
        {
          "id": "f705aa84-6f75-46d0-aaa4-4161b4933a2f",
          "name": "Cold",
          "sequence": 3,
          "color": "#2196F3",
          "icon": "❄️",
          "customer_group_rules": [],
          "group_type": "manual",
          "description": "Cold leads",
          "stats": {
            "total_customers": 3,
            "total_conversations": 4,
            "open_conversations": 4,
            "closed_conversations": 0
          }
        },
        {
          "id": "40f1c302-da31-4edf-9cc0-82f786878026",
          "name": "Active",
          "sequence": 4,
          "color": "#9E9E9E",
          "icon": "✅",
          "customer_group_rules": [
            {
              "id": "0a9b10df-f4d6-4c27-a80f-758d769fdbad",
              "createdDate": "2025-09-23T11:51:36.000Z",
              "updatedDate": "2025-09-23T11:51:36.000Z",
              "segmentId": "",
              "groupId": "40f1c302-da31-4edf-9cc0-82f786878026",
              "metricPeriod": "30",
              "operator": "GREATER",
              "metricValue": "1",
              "sequence": 2,
              "groupOperator": "OR",
              "metricId": "57f96a04-9435-4e53-94e3-b569212bd51c",
              "customerAttributeId": null,
              "metricType": null,
              "metric": {
                "id": "57f96a04-9435-4e53-94e3-b569212bd51c",
                "createdDate": "2025-09-02T15:37:02.000Z",
                "updatedDate": "2025-09-02T15:37:02.000Z",
                "name": "Total invoices",
                "description": "",
                "requiresTimePeriod": true,
                "availableTimePeriods": "7,15,30,60,90",
                "dataType": "INTEGER",
                "validOperators": "EQUAL,GREATER,LESS,GREATER_EQUAL,LESS_EQUAL,BETWEEN",
                "sourceTable": "customer_metrics_report",
                "sourceColumn": "totalinvoices",
                "isActive": true
              }
            }
          ],
          "group_type": "automatic",
          "description": "Active leads",
          "stats": {
            "total_customers": 38,
            "total_conversations": 188,
            "open_conversations": 166,
            "closed_conversations": 1
          }
        }
      ],
      "total_stats": {
        "total_customers": 146,
        "open_conversations": 278,
        "closed_conversations": 1,
        "total_conversations": 306
      },
      "available_filters": {
        "statuses": [
          {
            "status": "Open",
            "count": 278
          },
          {
            "status": "Assigned",
            "count": 26
          },
          {
            "status": "Close",
            "count": 1
          },
          {
            "status": "InProgress",
            "count": 1
          }
        ],
        "tags": [
          {
            "name": "product_enquiry",
            "count": 20
          },
          {
            "name": "create_order",
            "count": 17
          },
          {
            "name": "query",
            "count": 16
          },
          {
            "name": "order_enquiry",
            "count": 14
          },
          {
            "name": "support_request",
            "count": 12
          },
          {
            "name": "payment",
            "count": 4
          },
          {
            "name": "delivery_enquiry",
            "count": 3
          },
          {
            "name": "invoice",
            "count": 3
          },
          {
            "name": "discount",
            "count": 2
          },
          {
            "name": "Estimate",
            "count": 1
          },
          {
            "name": "create Order",
            "count": 1
          },
          {
            "name": "gowtham",
            "count": 1
          },
          {
            "name": "issue",
            "count": 1
          },
          {
            "name": "jjjjj",
            "count": 1
          },
          {
            "name": "modify_order",
            "count": 1
          },
          {
            "name": "new",
            "count": 1
          }
        ],
        "team_members": [
          {
            "count": 8,
            "id": "be45b221-e715-491c-bf6a-1543a8e272c8",
            "name": "Shiva"
          },
          {
            "count": 7,
            "id": "d4f7491f-a1b5-4b4f-8347-6eec2284e277",
            "name": "sales"
          },
          {
            "count": 6,
            "id": "0c8b6d7a-86f1-42c4-80d7-d7bc84d4d5df",
            "name": "CFA"
          },
          {
            "count": 4,
            "id": "22ffe8f7-920e-4ace-84a2-2dbaf8a81efe",
            "name": "team member"
          },
          {
            "count": 2,
            "id": "42254164-fc82-42db-be1a-58377b148954",
            "name": "Test Mem1"
          },
          {
            "count": 2,
            "id": "64d0d159-665a-4161-8655-6269e9b9b615",
            "name": "sales_team"
          },
          {
            "count": 1,
            "id": "00dd7cb7-3e74-4eed-b0c0-d9abe83c0668",
            "name": "Sri Sai"
          },
          {
            "count": 1,
            "id": "20fde1b5-0737-4acf-8b1d-dd80832f9a70",
            "name": "test11"
          },
          {
            "count": 1,
            "id": "45bcf84b-de80-4abf-a66e-c674fedfd5e4",
            "name": "GDB Tester"
          },
          {
            "count": 1,
            "id": "844a9055-c544-440b-b64c-5cba03d9f021",
            "name": "Team"
          },
          {
            "count": 1,
            "id": "cffad34d-b335-428c-8a61-58d40b5ad5ea",
            "name": "Rohith"
          },
          {
            "count": 1,
            "id": "dae0f1da-90a4-47c7-91a8-bbf8494065e3",
            "name": "kalavathi"
          }
        ]
      }
    }
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
