/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "765865fc-a9b1-4b1c-b00d-310fb947bf99",
  "method": "POST",
  "endpoint": "POST /hub/commerce-v2/campaigns/list/{listId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "commerce-v2",
  "query": "?pageNo=1&pageSize=10&startDate=2026-03-17+00%3A00%3A00&endDate=2026-04-16+23%3A59%3A59&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&random=0.552178175070695",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "imagePreview": [
      "LIST",
      "GALLERY",
      "CUSTOM"
    ]
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
  "responseSample": "{\"statusCode\":200,\"message\":\"Campaigns retrieved successfully\",\"data\":[{\"id\":\"30641f85-c915-4ed4-ba18-cfdf0e495dfa\",\"createdDate\":\"2026-04-14T08:36:50.000Z\",\"updatedDate\":\"2026-04-14T11:33:00.000Z\",\"code\":\"HDAX58379-1037\",\"name\":\"Statstest\",\"description\":\"stats\",\"type\":\"ORDER\",\"template\":null,\"publishedDate\":\"2026-04-14T11:33:00.000Z\",\"imagePreview\":\"CUSTOM\",\"status\":\"Published\",\"startDate\":null,\"endDate\":null,\"adId\":null,\"postId\":null,\"isCTWAEnabled\":false,\"audienceType\":\"static\",\"isArchived\":false,\"adSource\":null,\"eventTriggers\":null,\"botId\":\"cmnydb8s40007hwfze4nfz70y\",\"scheduleScope\":\"CAMPAIGN\",\"assets\":[],\"dynamicSegments\":[],\"customerGroups\":[],\"customersCount\":1,\"productVariantsCount\":0,\"metric\":{\"target\":2,\"id\":\"30641f85-c915-4ed4-ba18-cfdf0e495dfa\",\"impressions\":2,\"sent\":2,\"delivered\":2,\"roi\":\"-\"}},{\"id\":\"8fbb010a-d9c0-48c7-8cb6-0f73e3d504da\",\"createdDate\":\"2026-04-14T08:43:34.000Z\",\"updatedDate\":\"2026-04-14T08:44:55.000Z\",\"code\":\"HDAX58379-1038\",\"name\":\"test2\",\"description\":null,\"type\":\"\",\"template\":{\"id\":\"[REDACTED]\",\"name\":\"quickbuttontest\",\"status\":\"APPROVED\",\"category\":\"MARKETING\",\"language\":\"en\",\"components\":[{\"text\":\"🙏Thank you for showing interest in AVRO Recycling ♻️\\n \\n📅 Sunday | 1 January\\n⏰ Time: 10:00 AM\\n \\nIs webinar mein hum AVRO Recycling ka complete business model aur opportunities share karenge.\\n \\n📲 Webinar se related saari updates aur joining details ke liye\\n👇 is WhatsApp group ko join karein:\\n🔗 https://chat.whatsapp.com/LvtZN6exNM27J7ZLM9idtH\\n \\nMilte hain webinar mein! 🚀\\nPlease type stop to Optout.\",\"type\":\"BODY\"},{\"text\":\"Please type stop to Optout.\",\"type\":\"FOOTER\"},{\"type\":\"BUTTONS\",\"buttons\":[{\"url\":\"https://mobile-qa.zotok.ai/{{1}}\",\"text\":\"View Catalogue\",\"type\":\"URL\",\"example\":[\"{{catalogue_url}}\"]},{\"text\":\"Quick Reply\",\"type\":\"QUICK_REPLY\"}]}],\"isCustomized\":true,\"quality_score\":{\"date\":1769782432,\"score\":\"UNKNOWN\"},\"rejected_reason\":\"NONE\"},\"publishedDate\":null,\"imagePreview\":\"CUSTOM\",\"status\":\"Not Published\",\"startDate\":null,\"endDate\":null,\"adId\":null,\"postId\":null,\"isCTWAEnabled\":false,\"audienceType\":\"dynamic_rule\",\"isArchived\":false,\"adSource\":null,\"eventTriggers\":null,\"botId\":null,\"scheduleScope\":\"CAMPAIGN\",\"assets\":[],\"dynamicSegments\":[{\"createdAt\":\"2026-04-14T08:44:00.230Z\",\"updatedAt\":\"2026-04-14T08:44:00.230Z\",\"campaignId\":\"8fbb010a-d9c0-48c7-8cb6-0f73e3d504da\",\"segmentId\":\"1262f89e-5fa5-43f9-8868-fe1fc5f44019\",\"id\":272},{\"createdAt\":\"2026-04-14T08:44:00.221Z\",\"updatedAt\":\"2026-04-14T08:44:00.221Z\",\"campaignId\":\"8fbb010a-d9c0-48c7-8cb6-0f73e3d504da\",\"segmentId\":\"c01468c1-4361-4aa2-b0bc-de2cee59fd25\",\"id\":271}],\"customerGroups\":[],\"customersCount\":0,\"productVariantsCount\":18,\"metric\":{}},{\"id\":\"83573be3-5da6-4ccd-8861-83067fe6bbe5\",\"createdDate\":\"2026-04-14T08:36:07.000Z\",\"updatedDate\":\"2026-04-14T08:36:07.000Z\",\"code\":\"HDAX58379-1036\",\"name\":\"jkhkjh\",\"description\":\"jkjlkj\",\"type\":\"ORDER\",\"template\":null,\"publishedDate\":null,\"imagePreview\":\"CUSTOM\",\"status\":\"Not Published\",\"startDate\":null,\"endDate\":null,\"adId\":null,\"postId\":null,\"isCTWAEnabled\":false,\"audienceType\":null,\"isArchived\":false,\"adSource\":null,\"eventTriggers\":null,\"botId\":null,\"scheduleScope\":\"CAMPAIGN\",\"assets\":[],\"dynamicSegments\":[],\"customerGroups\":[],\"customersCount\":0,\"productVariantsCount\":0,\"metric\":{}},{\"id\":\"f423b21f-ed55-40f4-af72-341c596e9002\",\"createdDate\":\"2026-04-14T08:32:20.000Z\",\"updatedDate\":\"2026-04-14T08:32:20.000Z\",\"code\":\"HDAX58379-1035\",\"name\":\"journey-campaign\",\"description\":\"ddd\",\"type\":\"ORDER\",\"template\":null,\"publishedDate\":null,\"imagePreview\":\"CUSTOM\",\"status\":\"Not Published\",\"startDate\":null,\"endDate\":null,\"adId\":null,\"postId\":null,\"isCTWAEnabled\":false,\"audienceType\":null,\"isArchived\":false,\"adSource\":null,\"eventTriggers\":null,\"botId\":null,\"scheduleScope\":\"CAMPAIGN\",\"assets\":[],\"dynamicSegments\":[],\"customerGroups\":[],\"customersCount\":0,\"productVariantsCount\":0,\"metric\":{}},{\"id\":\"2a193e18-de15-405d-b93b-74561fc5b70b\",\"createdDate\":\"2026-04-14T08:31:50.000Z\",\"updatedDate\":\"2026-04-14T08:31:59.000Z\",\"code\":\"HDAX58379-1034\",\"name\":\"fregre\",\"description\":null,\"type\":\"\",\"template\":{\"id\":\"[REDACTED]\",\"name\":\"endinteg\",\"status\":\"APPROVED\",\"category\":\"MARKETING\",\"language\":\"en\",\"components\":[{\"text\":\"🙏 Thanks for your feedback! Please fill the details below:\\n\\n🛍️ Customer Name: {{1}}\\n📦 Phone: *{{2}}*\\n💰 Address: *{{3}}*\\n\\nPlease review and confirm your details to proceed.\\n\\nTeam,\",\"type\":\"BODY\",\"example\":{\"body_text\":[[\"{{customer_firm_name}}\",\"{{seller_firm_name}}\",\"{{seller_waba_number}}\"]]}}],\"isCustomized\":true,\"quality_score\":{\"date\":1776155499,\"score\":\"UNKNOWN\"},\"rejected_reason\":\"NONE\"},\"publishedDate\":null,\"imagePreview\":\"CUSTOM\",\"status\":\"Not Published\",\"startDate\":null,\"endDate\":null,\"adId\":null,\"postId\":null,\"isCTWAEnabled\":false,\"audienceType\":\"dynamic_rule\",\"isArchived\":false,\"adSource\":null,\"eventTriggers\":null,\"botId\":null,\"scheduleScope\":\"CAMPAIGN\",\"assets\":[],\"dynamicSegments\":[{\"createdAt\":\"2026-04-14T08:31:59.916Z\",\"updatedAt\":\"2026-04-14T08:31:59.916Z\",\"campaignId\":\"2a193e18-de15-405d-b93b-74561fc5b70b\",\"segmentId\":\"bb34ab5f-6481-4f19-85a3-4546e9c0e36a\",\"id\":270}],\"customerGroups\":[],\"customersCount\":0,\"productVariantsCount\":1,\"metric\":{}},{\"id\":\"4ba8459c-973d-4871-9b7b-0099ad77bd51\",\"createdDate\":\"2026-04-14T08:28:46.000Z\",\"updatedDate\":\"2026-04-14T08:28:46.000Z\",\"code\":\"HDAX58379-1033\",\"name\":\"hjfgf\",\"description\":\"nb\",\"type\":\"ORDER\",\"template\":null,\"publishedDate\":null,\"imagePreview\":\"CUSTOM\",\"status\":\"Not Published\",\"startDate\":null,\"endDate\":null,\"adId\":null,\"postId\":null,\"isCTWAEnabled\":false,\"audienceType\":null,\"isArchived\":false,\"adSource\":null,\"eventTriggers\":null,\"botId\":null,\"scheduleScope\":\"CAMPAIGN\",\"assets\":[],\"dynamicSegments\":[],\"customerGroups\":[],\"customersCount\":0,\"productVariantsCount\":0,\"metric\":{}},{\"id\":\"65b981df-adf5-4205-bc6f-d9d91b33e87d\",\"createdDate\":\"2026-04-14T08:25:56.000Z\",\"updatedDate\":\"2026-04-14T08:25:56.000Z\",\"code\":\"HDAX58379-1032\",\"name\":\"neww\",\"description\":\"neww\",\"type\":\"ORDER\",\"template\":null,\"publishedDate\":null,\"imagePreview\":\"CUSTOM\",\"status\":\"Not Published\",\"startDate\":null,\"endDate\":null,\"adId\":null,\"postId\":null,\"isCTWAEnabled\":false,\"audienceType\":null,\"isArchived\":false,\"adSource\":null,\"eventTriggers\":null,\"botId\":null,\"scheduleScope\":\"CAMPAIGN\",\"assets\":[],\"dynamicSegments\":[],\"customerGroups\":[],\"customersCount\":0,\"productVariantsCount\":0,\"metric\":{}},{\"id\":\"3b33b84a-a5e1-46cd-b2a6-de5563e086e5\",\"createdDate\":\"2026-04-14T08:02:05.000Z\",\"updatedDate\":\"2026-04-14T08:02:05.000Z\",\"code\":\"HDAX58379-1031\",\"name\":\"statsflow\",\"description\":\"stats\",\"type\":\"ORDER\",\"template\":null,\"publishedDate\":null,\"imagePreview\":\"CUSTOM\",\"status\":\"Not Published\",\"startDate\":null,\"endDate\":null,\"adId\":null,\"postId\":null,\"isCTWAEnabled\":false,\"audienceType\":null,\"isArchived\":false,\"adSource\":null,\"eventTriggers\":null,\"botId\":null,\"scheduleScope\":\"CAMPAIGN\",\"assets\":[],\"dynamicSegments\":[],\"customerGroups\":[],\"customersCount\":0,\"productVariantsCount\":0,\"metric\":{}},{\"id\":\"d4c389e5-84a2-4398-bf8c-827e61bb68fe\",\"createdDate\":\"2026-04-13T09:45:42.000Z\",\"updatedDate\":\"2026-04-13T10:45:33.000Z\",\"code\":\"HDAX58379-1030\",\"name\":\"Jourcust2\",\"description\":\"Jourcust\",\"type\":\"ORDER\",\"template\":null,\"publishedDate\":\"2026-04-13T10:45:33.000Z\",\"imagePreview\":\"CUSTOM\",\"status\":\"Published\",\"startDate\":\"2026-04-13T10:20:00.000Z\",\"endDate\":null,\"adId\":null,\"postId\":null,\"isCTWAEnabled\":false,\"audienceType\":\"static\",\"isArchived\":false,\"adSource\":null,\"eventTriggers\":null,\"botId\":\"cmnx0c7fk0005pl0qe6u0rxaw\",\"scheduleScope\":\"CUSTOMER\",\"assets\":[],\"dynamicSegments\":[],\"customerGroups\":[],\"customersCount\":1,\"productVariantsCount\":0,\"metric\":{\"target\":4,\"id\":\"d4c389e5-84a2-4398-bf8c-827e61bb68fe\",\"impressions\":5,\"sent\":4,\"delivered\":4,\"roi\":\"-\"}},{\"id\":\"9668c340-fed3-4f2c-9c94-ddce5510f624\",\"createdDate\":\"2026-04-13T09:34:39.000Z\",\"updatedDate\":\"2026-04-13T09:41:07.000Z\",\"code\":\"HDAX58379-1028\",\"name\":\"Campthread\",\"description\":null,\"type\":\"\",\"template\":{\"id\":\"[REDACTED]\",\"name\":\"send_campaign_template\",\"status\":\"APPROVED\",\"category\":\"MARKETING\",\"language\":\"en\",\"components\":[{\"type\":\"HEADER\",\"format\":\"IMAGE\",\"example\":{\"header_handle\":[\"https://scon...[TRUNCATED]",
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
