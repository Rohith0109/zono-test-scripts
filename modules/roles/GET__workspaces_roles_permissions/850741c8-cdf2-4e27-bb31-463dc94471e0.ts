/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "850741c8-cdf2-4e27-bb31-463dc94471e0",
  "method": "GET",
  "endpoint": "GET /workspaces/roles/permissions",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "roles",
  "query": "?isSeller=true",
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
      "$.roles[0].title",
      "$.roles[0].slug",
      "$.roles[0].description",
      "$.roles[0].permissions"
    ],
    "ignoreResponsePaths": [
      "$.roles[0].id"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": {
    "roles": [
      {
        "id": "027d968f-9e39-4bd3-8edb-b18eb7661dd4",
        "title": "Finance Manager",
        "slug": "finance_manager",
        "description": "Upload QR and approve payments",
        "permissions": []
      },
      {
        "id": "05c3462d-31cc-11ee-9c56-021250580db8",
        "title": "CFA",
        "slug": "cfa",
        "description": "CFA",
        "permissions": []
      },
      {
        "id": "1c1eaa27-4a8d-479c-ac04-d1764d8bf6cd",
        "title": "Order Operator",
        "slug": "order_operator",
        "description": "Access to change the quantity and remap",
        "permissions": []
      },
      {
        "id": "29db7ee9-c7e5-11ed-843c-02527fe37582",
        "title": "Admin",
        "slug": "adm",
        "description": "Full Access",
        "permissions": []
      },
      {
        "id": "3e7d3bc1-9c42-47e8-b3c5-4b5e94bcb2ef",
        "title": "Catalogue Manager",
        "slug": "catalogue_manager",
        "description": "Catalogue management",
        "permissions": []
      },
      {
        "id": "b7a89a59-3cdf-11ee-9c56-021250580db8",
        "title": "Sales",
        "slug": "sales",
        "description": "Sales",
        "permissions": []
      },
      {
        "id": "d19d6cea-3cdf-11ee-9c56-021250580db8",
        "title": "Member",
        "slug": "member",
        "description": "Member",
        "permissions": []
      },
      {
        "id": "d69f3511-7d7f-4d0d-a6ca-af88faff6d76",
        "title": "New Role 265",
        "slug": "new_role_1",
        "description": "new role",
        "permissions": []
      },
      {
        "id": "dbc9ba2d-2679-4b97-91f2-8b90601863f7",
        "title": "CRM User",
        "slug": "crm_user",
        "description": "Customer Relation Manager",
        "permissions": []
      },
      {
        "id": "eb9e748d-b422-439c-8670-68cf8885a428",
        "title": "Customer",
        "slug": "customer",
        "description": "Limited Access- order operations",
        "permissions": []
      },
      {
        "id": "f3610db4-34c7-49f8-921b-b8e942ee100d",
        "title": "Order Manager",
        "slug": "order_manager",
        "description": "All access related to order",
        "permissions": []
      }
    ]
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
