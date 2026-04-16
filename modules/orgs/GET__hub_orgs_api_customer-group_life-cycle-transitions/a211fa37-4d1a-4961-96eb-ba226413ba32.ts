/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "a211fa37-4d1a-4961-96eb-ba226413ba32",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/customer-group/life-cycle-transitions",
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
      "$[0].customerGroup",
      "$[0].toGroups[0]",
      "$[0].ruleType",
      "$[0].transitionName"
    ],
    "ignoreResponsePaths": [
      "$[0].id",
      "$[0].emojiId"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": [
    {
      "id": "0509e1e3-3952-4fd8-9938-a31b5cac236b",
      "customerGroup": "Activated",
      "emojiId": "✅",
      "toGroups": [
        {
          "id": "f705aa84-6f75-46d0-aaa4-4161b4933a2f",
          "customerGroup": "Cold",
          "emojiId": "❄️"
        },
        {
          "id": "9497bcf8-2b32-46f9-a429-b2f99239b5e1",
          "customerGroup": "Irrelevant",
          "emojiId": "🚫"
        }
      ],
      "ruleType": "SPECIFIC",
      "transitionName": ""
    },
    {
      "id": "40f1c302-da31-4edf-9cc0-82f786878026",
      "customerGroup": "Active",
      "emojiId": "✅",
      "toGroups": [],
      "ruleType": null
    },
    {
      "id": "f705aa84-6f75-46d0-aaa4-4161b4933a2f",
      "customerGroup": "Cold",
      "emojiId": "❄️",
      "toGroups": [],
      "ruleType": "ALLOW_ALL_FROM",
      "transitionName": "Any"
    },
    {
      "id": "c8b6349c-7f0b-4dd6-a92f-c0f9ab833d42",
      "customerGroup": "Dormant",
      "emojiId": "😴",
      "toGroups": [
        {
          "id": "40f1c302-da31-4edf-9cc0-82f786878026",
          "customerGroup": "Active",
          "emojiId": "✅"
        }
      ],
      "ruleType": "SPECIFIC",
      "transitionName": ""
    },
    {
      "id": "9497bcf8-2b32-46f9-a429-b2f99239b5e1",
      "customerGroup": "Irrelevant",
      "emojiId": "🚫",
      "toGroups": [
        {
          "id": "f705aa84-6f75-46d0-aaa4-4161b4933a2f",
          "customerGroup": "Cold",
          "emojiId": "❄️"
        }
      ],
      "ruleType": "SPECIFIC",
      "transitionName": ""
    },
    {
      "id": "12bea929-cc48-4f06-a9fa-275f5592bdcb",
      "customerGroup": "New Lead",
      "emojiId": "🆕",
      "toGroups": [
        {
          "id": "9497bcf8-2b32-46f9-a429-b2f99239b5e1",
          "customerGroup": "Irrelevant",
          "emojiId": "🚫"
        },
        {
          "id": "7af09d17-ec3c-40bd-924f-72dbeaf5eba8",
          "customerGroup": "Warm",
          "emojiId": "🔥"
        }
      ],
      "ruleType": "SPECIFIC",
      "transitionName": ""
    },
    {
      "id": "b56a590e-e468-4a8e-83bc-dc08263e0c42",
      "customerGroup": "To Be Inactive",
      "emojiId": "🌙",
      "toGroups": [],
      "ruleType": null
    },
    {
      "id": "7af09d17-ec3c-40bd-924f-72dbeaf5eba8",
      "customerGroup": "Warm",
      "emojiId": "🔥",
      "toGroups": [
        {
          "id": "9497bcf8-2b32-46f9-a429-b2f99239b5e1",
          "customerGroup": "Irrelevant",
          "emojiId": "🚫"
        },
        {
          "id": "12bea929-cc48-4f06-a9fa-275f5592bdcb",
          "customerGroup": "New Lead",
          "emojiId": "🆕"
        }
      ],
      "ruleType": "SPECIFIC",
      "transitionName": ""
    }
  ],
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
