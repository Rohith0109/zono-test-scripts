/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "b4e01b3e-14dc-43c4-8af4-02ddcf1cb71d",
  "method": "GET",
  "endpoint": "GET /hub/bot/api/v1/typebots",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "bot",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&includeAdditionalSettings=true&includeAnalytics=true&take=20&isPlatForm=true&skip=0",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [],
    "ignoreResponsePaths": [],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": "{\"data\":[{\"id\":\"welcome-cfa\",\"version\":\"6\",\"createdAt\":\"2026-03-11T06:14:30.392Z\",\"updatedAt\":\"2026-04-01T09:22:53.477Z\",\"icon\":null,\"name\":\"Welcome-CFA\",\"folderId\":null,\"publicId\":\"welcome-cfa\",\"workspaceId\":\"6f3c81f1-13a3-4e0f-bfde-a2b71f2636bf\",\"isClosed\":false,\"intent\":\"welcome\",\"code\":null,\"isPlatForm\":true,\"settings\":{\"general\":{\"isBrandingEnabled\":true},\"whatsApp\":{\"isEnabled\":true,\"startCondition\":{\"comparisons\":[],\"logicalOperator\":\"AND\"},\"startConditionDescription\":\"Message \"}},\"tags\":null,\"description\":null,\"additionalSettings\":[],\"analytics\":{\"totalSessions\":1,\"completedSessions\":0,\"completionRate\":0,\"droppedSessions\":1,\"dropRate\":100,\"timeFilter\":\"last7Days\"}},{\"id\":\"cmlez1um7000a9tsqpvryb485\",\"version\":\"6\",\"createdAt\":\"2026-02-09T09:30:38.527Z\",\"updatedAt\":\"2026-03-26T13:05:57.583Z\",\"icon\":\"data:image/svg+xml;utf8,<svg fill='%23222222' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d='M320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32V448H208c-53 0-96-43-96-96v-6.1l7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7V352c0 88.4 71.6 160 160 160h80 80c8.2 0 16.3-.6 24.2-1.8c-22.2-16.2-40.4-37.5-53-62.2H320V368 240h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H341.1zM496 512a144 [REDACTED]0 288zm59.3-180.7L518.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L473.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L496 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z'/></svg>\",\"name\":\"Scheme Invoice Customer\",\"folderId\":null,\"publicId\":\"scheme-invoice-customer-vryb485\",\"workspaceId\":\"6f3c81f1-13a3-4e0f-bfde-a2b71f2636bf\",\"isClosed\":false,\"intent\":\"scheme_invoice\",\"code\":null,\"isPlatForm\":true,\"settings\":{\"general\":{\"isBrandingEnabled\":true},\"whatsApp\":{\"isEnabled\":true,\"startCondition\":{\"comparisons\":[],\"logicalOperator\":\"AND\"},\"startConditionDescription\":\"Message \"},\"errorMessageBlock\":{\"id\":\"qlj3tzscbm6r50upop6aq473\",\"type\":\"whatsapp freeform\",\"options\":{\"message\":{\"text\":{\"body\":{\"en\":\"There was an error while processing the bot. Our bot is here to help! Please wait a moment and try again.\",\"hi\":\"\"},\"preview_url\":false},\"type\":\"text\"},\"endSession\":true,\"shouldSkip\":true,\"dynamicTemplate\":false,\"retryMessageContent\":{\"en\":\"\",\"hi\":\"कृपया पुन: प्रयास करें।\"}}}},\"tags\":null,\"description\":null,\"additionalSettings\":[],\"analytics\":{\"totalSessions\":22,\"completedSessions\":19,\"completionRate\":86,\"droppedSessions\":3,\"dropRate\":14,\"timeFilter\":\"last7Days\"}},{\"id\":\"cmfgn83rz0002hfln650devbp\",\"version\":\"6\",\"createdAt\":\"2025-09-12T09:36:53.280Z\",\"updatedAt\":\"2026-04-01T09:51:19.529Z\",\"icon\":null,\"name\":\"signup\",\"folderId\":null,\"publicId\":\"signup-50devbp\",\"workspaceId\":\"6f3c81f1-13a3-4e0f-bfde-a2b71f2636bf\",\"isClosed\":false,\"intent\":\"signup\",\"code\":\"BOT17640002493e200c57\",\"isPlatForm\":true,\"settings\":{\"general\":{\"isBrandingEnabled\":true},\"whatsApp\":{\"isEnabled\":true,\"startCondition\":{\"comparisons\":[{\"id\":\"[REDACTED]\",\"value\":\"signup\",\"comparisonOperator\":\"Contains\"}],\"logicalOperator\":\"OR\"},\"startConditionDescription\":\"Message contains \\\"signup\\\"\"},\"errorMessageBlock\":{\"id\":\"cjzpo7wnpf0y2qrsyttvxdlk\",\"type\":\"whatsapp freeform\",\"options\":{\"message\":{\"text\":{\"body\":{\"en\":\"There was an error while processing the bot. Our bot is here to help! Please wait a moment and try again.\",\"hi\":\"\"},\"preview_url\":false},\"type\":\"text\"},\"endSession\":true,\"shouldSkip\":true,\"dynamicTemplate\":false,\"retryMessageContent\":{\"en\":\"\",\"hi\":\"कृपया पुन: प्रयास करें।\"}}}},\"tags\":null,\"description\":null,\"additionalSettings\":[],\"analytics\":{\"totalSessions\":7,\"completedSessions\":0,\"completionRate\":0,\"droppedSessions\":7,\"dropRate\":100,\"timeFilter\":\"last7Days\"}},{\"id\":\"cmck166m00001smcsfs0aclrl\",\"version\":\"6\",\"createdAt\":\"2025-07-01T04:31:29.783Z\",\"updatedAt\":\"2026-03-27T10:07:04.685Z\",\"icon\":\"[NULL]\",\"name\":\"Order Agent\",\"folderId\":null,\"publicId\":\"order-agent-s0aclrl\",\"workspaceId\":\"6f3c81f1-13a3-4e0f-bfde-a2b71f2636bf\",\"isClosed\":false,\"intent\":\"order\",\"code\":\"BOT17640002490888510a\",\"isPlatForm\":true,\"settings\":{\"general\":{\"isBrandingEnabled\":true},\"whatsApp\":{\"isEnabled\":true,\"startCondition\":{\"comparisons\":[{\"id\":\"[REDACTED]\",\"value\":\"order agent\",\"comparisonOperator\":\"Equal to\"}],\"logicalOperator\":\"AND\"},\"sessionExpiryTimeout\":1,\"startConditionDescription\":\"Message equals \\\"order agent\\\"\"}},\"tags\":[\"custom\",\"tag\",\"template\"],\"description\":null,\"additionalSettings\":[],\"analytics\":{\"totalSessions\":18,\"completedSessions\":10,\"completionRate\":56,\"droppedSessions\":8,\"dropRate\":44,\"timeFilter\":\"last7Days\"}},{\"id\":\"member-welcome-v2\",\"version\":\"6\",\"createdAt\":\"2025-06-19T07:13:20.515Z\",\"updatedAt\":\"2026-04-16T07:01:46.844Z\",\"icon\":\"[NULL]\",\"name\":\"Member welcome\",\"folderId\":null,\"publicId\":\"my-typebot-3cksa\",\"workspaceId\":\"6f3c81f1-13a3-4e0f-bfde-a2b71f2636bf\",\"isClosed\":false,\"intent\":\"member-welcome\",\"code\":\"BOT1764000249f35b23ee\",\"isPlatForm\":true,\"settings\":{\"general\":{\"isBrandingEnabled\":true},\"errorMessageBlock\":{\"id\":\"thufgqzcasmm0xu8lp9knx59\",\"type\":\"whatsapp freeform\",\"options\":{\"message\":{\"text\":{\"body\":{\"en\":\"There was an error while processing the bot. Our bot is here to help! Please wait a moment and try again.\",\"hi\":\"\"},\"preview_url\":false},\"type\":\"text\"},\"endSession\":true,\"shouldSkip\":true,\"dynamicTemplate\":false,\"retryMessageContent\":{\"en\":\"\",\"hi\":\"कृपया पुन: प्रयास करें।\"}}}},\"tags\":[],\"description\":null,\"additionalSettings\":[],\"analytics\":{\"totalSessions\":1,\"completedSessions\":1,\"completionRate\":100,\"droppedSessions\":0,\"dropRate\":0,\"timeFilter\":\"last7Days\"}},{\"id\":\"cmb63ieyz0007x4coxvfzh2ox\",\"version\":\"6\",\"createdAt\":\"2025-05-27T05:48:30.922Z\",\"updatedAt\":\"2026-04-14T09:35:45.468Z\",\"icon\":\"[NULL]\",\"name\":\"Discussion Bot\",\"folderId\":null,\"publicId\":\"discussion-bot-vfzh2ox\",\"workspaceId\":\"6f3c81f1-13a3-4e0f-bfde-a2b71f2636bf\",\"isClosed\":false,\"intent\":\"discussion\",\"code\":\"BOT17640002492beabfa9\",\"isPlatForm\":true,\"settings\":{\"general\":{\"isBrandingEnabled\":true},\"whatsApp\":{\"audience\":{\"channels\":[{\"id\":\"07d70668-a51b-456e-8f22-70b9ac08ea79\",\"name\":\"Test South12\"},{\"id\":\"0bc8b220-5f44-4d97-a993-262212e79ff5\",\"name\":\"south-east-1\"},{\"id\":\"0bd144e8-d91f-4528-ba9e-6871134f629f\",\"name\":\"testchannel\"},{\"id\":\"112b90fb-5cb8-4058-a483-a0ec788c6e7d\",\"name\":\"south-channels\"}],\"operator\":\"AND\",\"segments\":[],\"customers\":[{\"id\":\"3bb15cbf-1ab6-428e-9207-6a8e2730df20\",\"name\":\"Ramesh\",\"phoneNumber\":\"[REDACTED]\",\"distributorCode\":\"4601\"},{\"id\":\"c06b28e9-d735-4fdf-9989-f45fef67bb57\",\"name\":\"Suresh\",\"phoneNumber\":\"[REDACTED]\",\"distributorCode\":\"4602\"},{\"id\":\"b71e4f17-9372-4aaa-9401-e8abeba0483c\",\"name\":\"Naresh\",\"phoneNumber\":\"[REDACTED]\",\"distributorCode\":\"4603\"},{\"id\":\"614edf79-6665-4a4f-99ce-e35c761a092b\",\"name\":\"Harishv\",\"phoneNumber\":\"[REDACTED]\",\"distributorCode\":\"4604\"}]},\"isEnabled\":false,\"startCondition\":{\"comparisons\":[],\"logicalOperator\":\"OR\"},\"sessionExpiryTimeout\":0.16,\"startConditionDescription\":\"Message \"}},\"tags\":[],\"description\":null,\"additionalSettings\":[],\"analytics\":{\"totalSessions\":51,\"completedSessions\":0,\"completionRate\":0,\"droppedSessions\":51,\"dropRate\":100,\"timeFilter\":\"last7Days\"}},{\"id\":\"campaign-agent\",\"version\":\"6\",\"createdAt\":\"2025-05-24T11:48:15.338Z\",\"updatedAt\":\"2025-11-27T05:42:27.248Z\",\"icon\":\"[NULL]\",\"name\":\"Campaign Agent\",\"folderId\":null,\"publicId\":\"campaign-agent\",\"workspaceId\":\"6f3c81f1-13a3-4e0f-bfde-a2b71f2636bf\",\"isClosed\":false,\"intent\":\"campaign-agent\",\"code\":\"BOT1764000249dac76c19\",\"isPlatForm\":true,\"settings\":{\"general\":{\"isBrandingEnabled\":true},\"whatsApp\":{\"isEnabled\":true,\"startCondition\":{\"comparisons\":[],\"logicalOperator\":\"AND\"},\"startConditionDescription\":\"Message \"}},\"tags\":[],\"description\":null,\"additionalSettings\":[],\"analytics\":{\"totalSessions\":0,\"completedSessions\":0,\"completionRate\":0,\"dropped...[TRUNCATED]",
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
