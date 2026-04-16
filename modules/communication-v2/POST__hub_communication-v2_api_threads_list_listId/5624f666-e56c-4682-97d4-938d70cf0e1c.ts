/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "5624f666-e56c-4682-97d4-938d70cf0e1c",
  "method": "POST",
  "endpoint": "POST /hub/communication-v2/api/threads/list/{listId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "communication-v2",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "filter": {
      "channelType": [
        "INT",
        "WAHA",
        "WAGR"
      ]
    },
    "searchAfterTimestamp": null,
    "pageSize": 100
  },
  "pathParams": {
    "listId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
  },
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [],
    "ignoreResponsePaths": [],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": "{\"channels\":[{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Int orders-hyderabad\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"bumbleBee\\\",\\\"text\\\":\\\"Aloha\\\"}\",\"id\":\"4b993e24-277c-42fe-a5db-8ebf08662abe\",\"channelSubType\":\"INT\",\"tags\":[{\"type\":\"order\",\"value\":\"Received\"},{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"invoice\",\"value\":\"Sent\"}],\"customer\":{\"name\":\"A-One Sales\",\"distributorCode\":\"CUS-016\",\"id\":\"6db55fc6-a5ab-4e13-afe0-b9161203ca1b\",\"isActive\":1},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":4},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Conversation threader 1\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"tarun\\\",\\\"text\\\":\\\"📄 Document\\\"}\",\"id\":\"8f8149ce-aef7-4b6a-bc4e-80e3ce96aa81\",\"channelSubType\":\"INT\",\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Hd agencies-Nitin\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Nitin Padmawar\\\",\\\"text\\\":\\\"Hi\\\"}\",\"id\":\"29d7a247-70cb-4c2a-9a38-0dd63832e31c\",\"channelSubType\":null,\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"QA test Vaishnavi\",\"channelType\":\"WAHA\",\"latestMessage\":\"Sūrya pūrvmā̃ uge chhe\",\"id\":\"1073cf9f-7574-4753-9309-3adb3c3085c6\",\"channelSubType\":\"INT\",\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Internalgrp-fieldops-kala\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Vaishnavi\\\",\\\"text\\\":\\\"Hiiii\\\"}\",\"id\":\"c6a3688d-2adb-4952-bebf-4f0cfe1ad6db\",\"channelSubType\":\"INT\",\"tags\":[{\"type\":\"order\",\"value\":\"Accepted\"}],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Automation testing pdf\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Yasaswini\\\",\\\"text\\\":\\\"📄 Document\\\"}\",\"id\":\"334b09e1-dec2-4300-8891-23752978cc43\",\"channelSubType\":\"INT\",\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Conversation testing 2\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Test Buyer 84151\\\",\\\"text\\\":\\\"Hi\\\"}\",\"id\":\"162e2856-9ed7-40f0-8fff-eff0fd3c8d96\",\"channelSubType\":null,\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Thread testing 1\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Test Buyer 84151\\\",\\\"text\\\":\\\"Hi\\\"}\",\"id\":\"88171801-e228-4a41-892b-215c635665cc\",\"channelSubType\":null,\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Int marketing\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"bumbleBee\\\",\\\"text\\\":\\\"I need info on available products\\\"}\",\"id\":\"5f0e466f-ed8f-4ff3-b19f-f39e3ccb1a13\",\"channelSubType\":\"MKTG\",\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Broadcasting template\",\"channelType\":\"WAGR\",\"id\":\"f87c8195-b258-414c-9ba2-f8227fae4254\",\"channelSubType\":\"BROD\",\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Internal-orders-Hitech city\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"kalavathii\\\",\\\"text\\\":\\\"Internal group message\\\"}\",\"id\":\"f170e5fe-09ca-4b4b-b816-adffd07f4dbd\",\"channelSubType\":\"INT\",\"tags\":[{\"type\":\"order\",\"value\":\"Received\"},{\"type\":\"payment\",\"value\":\"Confirmed\"},{\"type\":\"invoice\",\"value\":\"Sent\"}],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"conversationTags\":[\"support_request\",\"query\"],\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Sales man tagging\",\"channelType\":\"WAHA\",\"latestMessage\":\"Draft order created - Total: 34900\",\"id\":\"edf0c90e-b860-4e96-98e2-b0149ebf737d\",\"channelSubType\":\"MKTG\",\"tags\":[{\"type\":\"order\",\"value\":\"Received\"}],\"customer\":{\"name\":\"Owaiz Mustafa Khan\",\"distributorCode\":\"fd8fd582-7a90-464d-86b8-44de96d09b69\",\"id\":\"9ca12e44-8d62-45b7-aab5-a4620fee86ba\",\"isActive\":1},\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Testing tags\",\"channelType\":\"WAHA\",\"id\":\"edfac347-6b23-46fd-8ba7-627e90e42891\",\"channelSubType\":null,\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"M4\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Shubham\\\",\\\"text\\\":\\\"Yo\\\"}\",\"id\":\"06005be6-f665-4ab9-8fab-a822201332dc\",\"channelSubType\":\"MKTG\",\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"M3\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Shubham\\\",\\\"text\\\":\\\"Now iam sending with porter auto...\\\"}\",\"id\":\"21ab2296-6835-4555-bc80-0276508ccc35\",\"channelSubType\":\"MKTG\",\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"M2\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Shubham\\\",\\\"text\\\":\\\"Piyush Perfumery Work, Naranoul Haryana\\\\n5 cs rkt Pineapple 140 pure\\\\n2 cs k rose 140g pure\\\\n1 cs kaserfull 140g pure\\\\n1 cs. dark mogra 140g pure\\\\n1 cs intimate 140g pure\\\\n2 cs classic 75g mix\\\\n5 cs rkt swarnim jar 100g mix\\\\n3 cs jumao400\\\"}\",\"id\":\"80f36d3f-1c08-4195-8b90-e94131545b19\",\"channelSubType\":\"MKTG\",\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"M1\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Shubham\\\",\\\"text\\\":\\\"Smm. 39\\\\nGuntur. 04\\\\nRamchandra Puram. 15\\\\nHarda. 10\\\\nDombivali. 08\\\\nBadlapur. 07\\\\nBanswara. 10\\\\n\\\\nTotal 93 cart despatched sss 17.12.25\\\"}\",\"id\":\"463480f8-d974-416c-b26e-ddaed767e705\",\"channelSubType\":null,\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Test K\",\"channelType\":\"WAHA\",\"latestMessage\":\"Hi\",\"id\":\"51e08668-8240-4b32-bbca-2d033477da21\",\"channelSubType\":null,\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Member internal qa group\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Sridhar\\\",\\\"text\\\":\\\"ZT\\\"}\",\"id\":\"297d4fa6-c415-432d-b128-743e5b88d7d4\",\"channelSubType\":\"INT\",\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Test grOup new one\",\"channelType\":\"WAHA\",\"id\":\"5763aadd-ea17-485f-a12f-d88da5b273df\",\"channelSubType\":null,\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Testing dddd\",\"channelType\":\"WAHA\",\"id\":\"6855be04-a78f-443f-966e-be644145e677\",\"channelSubType\":null,\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Team member addition tes\",\"channelType\":\"WAHA\",\"id\":\"68023575-c715-4de4-b69e-6fc1d08c23dc\",\"channelSubType\":null,\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"LocCustg\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Zotokqa8\\\",\\\"text\\\":\\\"Want to place order\\\"}\",\"id\":\"778d4937-9c5b-4200-8353-957e446459e5\",\"channelSubType\":null,\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Driveprodcust\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Zotokqa8\\\",\\\"text\\\":\\\"Want to place order\\\"}\",\"id\":\"fc46f618-6349-47ec-9135-45552ed13318\",\"channelSubType\":null,\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Smctest\",\"channelType\":\"WAHA\",\"latestMessage\":\"{\\\"username\\\":\\\"Sridhar\\\",\\\"text\\\":\\\"@zoAI\\\\nGowtham\\\\nReyon shirt-5\\\\nFloral top-6\\\\nSignature -8\\\"}\",\"id\":\"642552b7-0a46-4ce1-b3e2-11f3b383a12e\",\"channelSubType\":\"INT\",\"tags\":[],\"visitedAt\":\"[REDACTED]\",\"messageCountAfterVisited\":0},{\"latestMessageTimeToken\":\"[REDACTED]\",\"name\":\"Broadcastgrp99100\",\"channelType\":\"WAGR\",\"id\":\"2b2db823-972a-43ee-81a6-dde661ee3323\",\"channelSubType\":\"BROD\",\"tags\":[],\"visited...[TRUNCATED]",
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
