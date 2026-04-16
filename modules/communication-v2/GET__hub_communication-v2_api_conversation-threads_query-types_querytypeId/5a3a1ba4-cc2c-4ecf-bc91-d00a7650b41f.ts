/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "5a3a1ba4-cc2c-4ecf-bc91-d00a7650b41f",
  "method": "GET",
  "endpoint": "GET /hub/communication-v2/api/conversation-threads/query-types/{querytypeId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "communication-v2",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&startTime=2026-04-15T20%3A42%3A57.617000Z&endTime=2026-04-16T20%3A42%3A57.617000Z&pageNo=1&pageSize=20",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "pathParams": {
    "querytypeId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
  },
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [],
    "ignoreResponsePaths": [],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": "{\"data\":[{\"icon\":\"message\",\"queryType\":\"Connection / Functionality Test Messages\",\"frequency\":899611501926,\"keywords\":[\"two\",\"huiai\",\"578hhjkj\",\"9910305573\",\"Hello 1 Received\",\"???\",\"check @918374962003\",\"hl3oo\",\"pinn\",\"qusw\",\"owaiz-test-2\",\"inviteId\",\"test\",\"ping\",\"Try Another PIN Code\",\"Asdf\",\"ejhjd\",\"Hello 3 bhi ho gaya\",\"Treact\",\"dfd\",\"??\",\"hi\",\"survey link\",\"@zoai\",\"asdf\",\"hello\",\"@919910305573\",\"Connect to seller\",\"this is a test\",\"English\",\"numeric token\",\"connectivity check\",\"owaiz-test\",\"Sfycgfd\",\"Shubams message\",\"one\",\"mobile.zotok.ai/survey\",\"please check\",\"test internal note\",\"2\",\"Hgf\",\"this is a test note\",\"ate ?\",\"Pinn\",\"ok\",\"Ok\",\"ahdshk\",\"Please check\",\"hjj\",\"dwjk\",\"Lgtest\",\"numeric tokens\",\"Jklmnop\",\"G9uvi\",\"Owaiz-test\"],\"createdAt\":\"2026-02-18T12:25:37.593811Z\",\"description\":\"This query type includes short, nonspecific messages sent to verify connectivity, test account setup, or check message delivery rather than seek a business outcome. Typical intent is technical/operational — users or internal accounts send brief tokens like \\\"hello\\\", numeric sequences, or test identifiers to confirm the channel works. Conversation patterns are minimal: one or a few terse messages with no follow-up questions, attachments, or transactional requests; they often originate from a single participant and conclude without a business resolution. Urgency is low and resolution is simply acknowledgement or no action. This grouping differs from product inquiries or orders because there is no commercial intent or data request. It has business value for onboarding, diagnostics and monitoring (identifying test accounts, ensuring integrations are live, and filtering noise). Recognizing these saves support time, helps automate tagging/archiving, and prevents false-positive escalation of non-actionable messages.\",\"color\":\"#06B6D4\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"updatedAt\":\"2026-04-16T12:50:20.367752Z\",\"conversationThreads\":{\"data\":[{\"title\":\"PIN code connectivity test\",\"channelSubType\":null,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"participantIds\":[\"44618c77-3def-4108-88e1-2100c4519214\"],\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"endMessageTimetoken\":\"[REDACTED]\",\"channelType\":\"C\",\"classificationType\":\"Connection / Functionality Test Messages\",\"startMessageTimetoken\":\"[REDACTED]\",\"endTime\":\"2026-04-16T12:50:00.443Z\",\"startTime\":\"2026-04-16T12:50:00.443Z\",\"description\":\"Try Another PIN Code\",\"metadata\":{\"queryTypeDescription\":\"Short test/connectivity tokens sent to verify messaging works.\",\"assignmentMode\":\"provisional_realtime\",\"assignmentReason\":\"low_llm_confidence\",\"queryTypeColor\":\"#06B6D4\",\"queryTypeIcon\":\"message\",\"title\":\"PIN code connectivity test\",\"extractedCustomers\":[]},\"windowId\":\"event-window\",\"queryType\":\"uncategorized\",\"messages\":[\"Try Another PIN Code\"],\"conversationId\":\"195b01d4-3d97-4899-a344-126914fa5137\",\"createdAt\":\"2026-04-16T12:50:00.443Z\",\"channelName\":\"Zotokqa8\",\"messageCount\":1,\"channelId\":\"0abc88d3-88a2-48a9-8a12-c54bfe145b01\",\"participantNames\":[\"Zotokqa8\"]},{\"channelSubType\":null,\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"participantIds\":[\"44618c77-3def-4108-88e1-2100c4519214\"],\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"endMessageTimetoken\":\"[REDACTED]\",\"messageCount\":2,\"channelType\":\"C\",\"metadata\":{\"queryTypeDescription\":\"Short non-business test tokens to verify connectivity or setup; no commercial outcome expected.\",\"assignmentMode\":\"provisional_realtime\",\"assignmentReason\":\"low_llm_confidence\",\"queryTypeColor\":\"#06B6D4\",\"queryTypeIcon\":\"message\",\"title\":\"Try Another PIN Code\",\"extractedCustomers\":[{\"name\":\"Zotokqa8\",\"customerId\":null}]},\"classificationType\":\"Connection / Functionality Test Messages\",\"conversationId\":\"609ae2e9-fb66-4a32-80e0-f0f3515b8a57\",\"startMessageTimetoken\":\"[REDACTED]\",\"endTime\":\"2026-04-16T12:50:00.443Z\",\"title\":\"Try Another PIN Code\",\"startTime\":\"2026-04-16T12:50:00.443Z\",\"messages\":[\"Try Another PIN Code\",\"Try Another PIN Code\"],\"description\":\"Try Another PIN Code\",\"isGroup\":null,\"windowId\":\"event-window\",\"queryType\":\"uncategorized\",\"createdAt\":\"2026-04-16T12:50:00.443Z\",\"channelName\":\"Zotokqa8\",\"channelId\":\"0abc88d3-88a2-48a9-8a12-c54bfe145b01\",\"participantNames\":[\"Zotokqa8\"]}],\"queryType\":\"Connection / Functionality Test Messages\",\"pagination\":{\"hasMore\":true,\"nextCursor\":\"{\\\"startMessageTimetoken\\\":\\\"[REDACTED]\\\",\\\"conversationId\\\":\\\"609ae2e9-fb66-4a32-80e0-f0f3515b8a57\\\",\\\"classificationType\\\":\\\"Connection / Functionality Test Messages\\\"}\",\"total\":18}}},{\"icon\":\"message\",\"queryType\":\"Conversation Initiation — Simple Greeting\",\"frequency\":[REDACTED],\"keywords\":[\"helloo\",\"greeting\",\"hell\",\"Santosh\",\"H8\",\"Helloo\",\"Reddy\",\"Thank you for contacting\",\"heloo\",\"Aloha\",\"hellooo\",\"Hey\",\"did you tell this to someone\",\"are you there\",\"Hello\",\"hi\",\"hi hi\",\"hello\",\"Hii\",\"Good morning\",\"Hmm\",\"heyy\",\"hiii\",\"Hie\",\"helooo\",\"Hiii\",\"hie\",\"Hi team\",\"Shubham\",\"Hi Hi\",\"He\",\"Hu\",\"heii\",\"hey\",\"Hiiii\",\"Yoyo\",\"It'll\",\"How are you?\",\"Hieya\",\"Nico\",\"Hellooo\",\"good morning\",\"hii\",\"Hi\",\"please let us know how we can help you\",\"Heyaa\"],\"createdAt\":\"2026-02-18T11:57:08.999936Z\",\"description\":\"This type contains single-message salutations (e.g., 'Hi', 'Hello') used by customers to open a chat or check connectivity. The primary intent is to initiate interaction; the sender often expects an agent prompt to define the next step. Typical conversation flow: customer sends a greeting, business replies with a welcome message and a question to capture intent (service request, order query, etc.). Outcomes are varied—either the chat converts into a specific request or it stalls if no response is given. It differs from other types because it lacks actionable data and is fundamentally a trigger for further communication rather than a complete transaction. Recognizing this pattern helps prioritize quick, friendly automated or human responses to drive engagement. Fast acknowledgment converts these low-effort touches into measurable leads or service requests and improves customer experience.\",\"color\":\"#8B5CF6\",\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"updatedAt\":\"2026-04-16T12:50:39.783680Z\",\"conversationThreads\":{\"data\":[{\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"customerId\":\"44618c77-3def-4108-88e1-2100c4519214\",\"queryType\":\"uncategorized\",\"channelSubType\":null,\"channelType\":\"C\",\"startTime\":\"2026-04-16T12:50:29.424Z\",\"windowId\":\"event-window\",\"endTime\":\"2026-04-16T12:50:29.424Z\",\"messages\":[\"Ravi Hardware\"],\"channelName\":\"Zotokqa8\",\"participantNames\":[\"Zotokqa8\"],\"createdAt\":\"2026-04-16T12:50:29.424Z\",\"conversationId\":\"2e41ee24-af04-448a-8dd1-56972f467b0e\",\"participantIds\":[\"44618c77-3def-4108-88e1-2100c4519214\"],\"title\":\"Ravi Hardware (chat start)\",\"startMessageTimetoken\":\"[REDACTED]\",\"channelId\":\"0abc88d3-88a2-48a9-8a12-c54bfe145b01\",\"endMessageTimetoken\":\"[REDACTED]\",\"metadata\":{\"queryTypeDescription\":\"Single-message opener with no business details; starts a chat with an agent.\",\"assignmentMode\":\"provisional_realtime\",\"assignmentReason\":\"low_llm_confidence\",\"queryTypeColor\":\"#8B5CF6\",\"queryTypeIcon\":\"message\",\"title\":\"Ravi Hardware (chat start)\",\"extractedCustomers\":[{\"name\":\"Ravi Hardware\",\"customerId\":null}]},\"classificationType\":\"Conversation Initiation — Simple Greeting\",\"messageCount\":1,\"description\":\"Ravi Hardware\"},{\"workspaceId\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"endMessageTimetoken\":\"[REDACTED]\",\"participantIds\":[\"d9bcf9a0-8904-403d-9da2-cb7500277f28\"],\"createdAt\":\"2026-04-16T12:32:47.529Z\",\"queryType\":\"uncategorized\",\"channelName\":\"Owaiz Mustafa Khan\",\"conversationId\":\"6296cc9d-8e17-4fe2-b072-cc5279ea703c\",\"channelSubType\":null,\"channelType\":\"C\",\"windowId\":\"event-window\",\"participantNames\":[\"Owaiz Mustafa Khan\"],\"startMessageTimetoken\":\"[REDACTED]\",\"messages\":[\"Ravi Hardware\"],\"channelId\":\"40965f10-7cdf-4cbe-9861-dc89c38036c5\",\"customerId\":\"d9bcf9a0-8904-403d-9da2-cb7500277f28\",\"title\":\"Customer says “Ravi Hardware”\",\"startTime\":\"2026-04-16T12:32:47.529Z\",\"classificationType\":\"Conversation Initiation — Simple Greeting\",\"messageCount\":1,\"metadata\":{\"queryTypeDe...[TRUNCATED]",
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
