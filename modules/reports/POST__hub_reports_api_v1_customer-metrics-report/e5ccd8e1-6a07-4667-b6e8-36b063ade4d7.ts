/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "e5ccd8e1-6a07-4667-b6e8-36b063ade4d7",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v1/customer-metrics-report",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "customerIds": [
      "6cec6ab9-0cb2-4074-aff8-e2caedc6a56a",
      "6db55fc6-a5ab-4e13-afe0-b9161203ca1b",
      "09d0f956-9ab4-4219-a7e2-1cde42c4654b",
      "78062be5-7e96-4ad7-851f-b918aacb5bf4",
      "92eb6a3e-3a9e-4433-8ded-7379eff70ac0",
      "e204ac88-9ca0-49da-8b06-ba2feff846f1",
      "db903d34-36a3-4b54-884c-a1213b6d78b3",
      "e4e1ce33-9c3f-43bc-a70a-80d2007348c8",
      "bc915d0d-c4bb-4316-ab1d-2c580443cb56",
      "9b6bc5b2-ca63-4be8-a8c2-f0ca95200b1d",
      "92e6e2ff-ad41-41e5-813b-2bb265589cab",
      "18c8bea4-c868-45f2-b87a-22b004eeaabf",
      "689fd7ff-375b-4016-9354-4f1089a220e4",
      "f6de0bc8-cdcc-4b99-932a-efc688787d63",
      "a9eed697-4dea-46a5-b8f4-8230b01ff841",
      "2260d998-5958-465c-ad3d-a89e395438a8",
      "629a1f84-826c-424c-8d8d-d115ee7dd74a",
      "c4c48c8c-6109-467c-8b04-ac1b6c00b6e7",
      "4b7dbe51-481e-44b6-bc80-dd6c4c2537af",
      "4cc2ef66-05ae-4234-b612-42320a1c74dd"
    ],
    "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
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
  "responseSample": "[{\"inviteid\":\"6cec6ab9-0cb2-4074-aff8-e2caedc6a56a\",\"avgorders\":\"0.330000000\",\"avgordervalue\":\"1148779.400000000\",\"avginvoicevalue\":0,\"avgpaymentvalue\":\"800.000000000\",\"customername\":\"Only Sons\",\"customerfirmname\":\"Mehta & Sons\",\"sellerworkspacename\":\"\",\"lastorderdate\":\"2026-04-08T11:40:25.548\",\"lastinvoicedate\":null,\"totalorders\":\"10\",\"totalordervalue\":\"11487794.000000000\",\"totalpayments\":\"2\",\"totalinvoicevalue\":0,\"totalpaymentsvalue\":\"1600.000000000\",\"outstandingamount\":\"-1600.000000000\",\"avgitemsperorder\":\"2.000000000\",\"lastpaymentdate\":\"2026-04-10T11:54:00.000000\",\"firstinvoicedate\":null,\"firstpaymentdate\":\"2026-04-10T11:54:00.000000\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"firstorderdate\":\"2026-03-31T11:48:42.879\",\"distributorcode\":\"CUS-003\",\"routes\":\"Financial District\",\"segments\":\"New_leads\",\"period\":\"30\",\"mobilenumber\":\"912345678901\",\"dayssincelastorder\":\"7\",\"dynamicsegments\":[\"Check Dropdown\",\"Dormant / Inactive\",\"Dropdown Test segment\",\"customers with location Hyderabad\",\"dfsgrfg\"],\"customerlifecylcesegments\":[\"Active\"]},{\"inviteid\":\"6db55fc6-a5ab-4e13-afe0-b9161203ca1b\",\"avgorders\":\"0.730000000\",\"avgordervalue\":\"755915.680000000\",\"avginvoicevalue\":0,\"avgpaymentvalue\":0,\"customername\":\"A-One Sales\",\"customerfirmname\":\"A-One Sales Corporation\",\"sellerworkspacename\":\"Hd Agencies\",\"lastorderdate\":\"2026-03-26T15:08:13.087\",\"lastinvoicedate\":null,\"totalorders\":\"22\",\"totalordervalue\":\"16630145.000000000\",\"totalpayments\":\"0\",\"totalinvoicevalue\":0,\"totalpaymentsvalue\":0,\"outstandingamount\":0,\"avgitemsperorder\":\"4.450000000\",\"lastpaymentdate\":null,\"firstinvoicedate\":null,\"firstpaymentdate\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"firstorderdate\":\"2026-03-16T15:27:43.899\",\"distributorcode\":\"CUS-016\",\"routes\":null,\"segments\":\"\",\"period\":\"30\",\"mobilenumber\":\"913456123789\",\"dayssincelastorder\":\"20\",\"dynamicsegments\":[\"Check Dropdown\",\"Dormant / Inactive\",\"Dropdown Test segment\",\"Type of Customers\",\"dfsgrfg\"],\"customerlifecylcesegments\":[\"Active\"]},{\"inviteid\":\"09d0f956-9ab4-4219-a7e2-1cde42c4654b\",\"avgorders\":\"0.000000000\",\"avgordervalue\":0,\"avginvoicevalue\":0,\"avgpaymentvalue\":0,\"customername\":\"Krishna Wholesalers\",\"customerfirmname\":\"Krishna Wholesalers\",\"sellerworkspacename\":\"Hd Agencies\",\"lastorderdate\":null,\"lastinvoicedate\":null,\"totalorders\":\"0\",\"totalordervalue\":0,\"totalpayments\":\"0\",\"totalinvoicevalue\":0,\"totalpaymentsvalue\":0,\"outstandingamount\":0,\"avgitemsperorder\":0,\"lastpaymentdate\":null,\"firstinvoicedate\":null,\"firstpaymentdate\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"firstorderdate\":null,\"distributorcode\":\"CUS-017\",\"routes\":null,\"segments\":\"\",\"period\":\"30\",\"mobilenumber\":\"914321987650\",\"dayssincelastorder\":\"0\",\"dynamicsegments\":[\"Dormant / Inactive\",\"dfsgrfg\"],\"customerlifecylcesegments\":[]},{\"inviteid\":\"78062be5-7e96-4ad7-851f-b918aacb5bf4\",\"avgorders\":\"0.000000000\",\"avgordervalue\":0,\"avginvoicevalue\":0,\"avgpaymentvalue\":0,\"customername\":\"Balaji Supply Co.\",\"customerfirmname\":\"Balaji Supply Co.\",\"sellerworkspacename\":\"\",\"lastorderdate\":null,\"lastinvoicedate\":null,\"totalorders\":\"0\",\"totalordervalue\":0,\"totalpayments\":\"0\",\"totalinvoicevalue\":0,\"totalpaymentsvalue\":0,\"outstandingamount\":0,\"avgitemsperorder\":0,\"lastpaymentdate\":null,\"firstinvoicedate\":null,\"firstpaymentdate\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"firstorderdate\":null,\"distributorcode\":\"CUS-007\",\"routes\":\"Hyderabad\",\"segments\":\"\",\"period\":\"30\",\"mobilenumber\":\"912413625789\",\"dayssincelastorder\":\"0\",\"dynamicsegments\":[\"Check Dropdown\",\"Customers from city Mumbai\",\"Customers with only 2 wheelers\",\"Dormant / Inactive\",\"customers with more loyalty points\",\"dfsgrfg\",\"test1\"],\"customerlifecylcesegments\":[]},{\"inviteid\":\"92eb6a3e-3a9e-4433-8ded-7379eff70ac0\",\"avgorders\":\"0.200000000\",\"avgordervalue\":\"1589958.000000000\",\"avginvoicevalue\":0,\"avgpaymentvalue\":\"900.000000000\",\"customername\":\"Nitin Padmawar\",\"customerfirmname\":\"Nitin Padmawar\",\"sellerworkspacename\":\"\",\"lastorderdate\":\"2026-04-13T17:41:53.708\",\"lastinvoicedate\":null,\"totalorders\":\"6\",\"totalordervalue\":\"11129706.000000000\",\"totalpayments\":\"1\",\"totalinvoicevalue\":0,\"totalpaymentsvalue\":\"900.000000000\",\"outstandingamount\":\"-900.000000000\",\"avgitemsperorder\":\"2.570000000\",\"lastpaymentdate\":\"2026-04-13T06:16:00.000000\",\"firstinvoicedate\":null,\"firstpaymentdate\":\"2026-04-13T06:16:00.000000\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"firstorderdate\":\"2026-03-23T17:35:28.790\",\"distributorcode\":\"bdeb7269-2594-4fb2-ab45-997f53728935\",\"routes\":\"Nankramguda\",\"segments\":\"rsvirla_dealer\",\"period\":\"30\",\"mobilenumber\":\"919393270202\",\"dayssincelastorder\":\"2\",\"dynamicsegments\":[\"Dormant / Inactive\",\"dfsgrfg\"],\"customerlifecylcesegments\":[\"Active\"]},{\"inviteid\":\"e204ac88-9ca0-49da-8b06-ba2feff846f1\",\"avgorders\":\"0.030000000\",\"avgordervalue\":\"30000.000000000\",\"avginvoicevalue\":0,\"avgpaymentvalue\":\"3900.000000000\",\"customername\":\"Arun\",\"customerfirmname\":\"Arun\",\"sellerworkspacename\":\"\",\"lastorderdate\":\"2026-03-27T15:54:28.884\",\"lastinvoicedate\":null,\"totalorders\":\"1\",\"totalordervalue\":\"30000.000000000\",\"totalpayments\":\"2\",\"totalinvoicevalue\":0,\"totalpaymentsvalue\":\"7800.000000000\",\"outstandingamount\":\"-8000.000000000\",\"avgitemsperorder\":\"1.000000000\",\"lastpaymentdate\":\"2026-04-10T07:00:00.000000\",\"firstinvoicedate\":null,\"firstpaymentdate\":\"2026-04-10T06:00:00.000000\",\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"firstorderdate\":\"2026-03-27T15:54:28.884\",\"distributorcode\":\"80884469-ced4-486e-9c62-815dfd76c0ed\",\"routes\":\"Hyderabad\",\"segments\":\"\",\"period\":\"30\",\"mobilenumber\":\"917661987561\",\"dayssincelastorder\":\"19\",\"dynamicsegments\":[\"Dormant / Inactive\",\"customers with more loyalty points\",\"dfsgrfg\"],\"customerlifecylcesegments\":[]},{\"inviteid\":\"db903d34-36a3-4b54-884c-a1213b6d78b3\",\"avgorders\":\"0.160000000\",\"avgordervalue\":\"111920.000000000\",\"avginvoicevalue\":\"1000.000000000\",\"avgpaymentvalue\":0,\"customername\":\"Sai Kiran\",\"customerfirmname\":\"Sai Kiran\",\"sellerworkspacename\":\"\",\"lastorderdate\":\"2026-04-07T14:23:21.814\",\"lastinvoicedate\":\"2026-03-23T19:01:48\",\"totalorders\":\"5\",\"totalordervalue\":\"559600.000000000\",\"totalpayments\":\"0\",\"totalinvoicevalue\":\"1000.000000000\",\"totalpaymentsvalue\":0,\"outstandingamount\":\"8093372.000000000\",\"avgitemsperorder\":\"1.200000000\",\"lastpaymentdate\":null,\"firstinvoicedate\":\"2026-03-23T19:01:48\",\"firstpaymentdate\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"firstorderdate\":\"2026-03-23T18:57:53.376\",\"distributorcode\":\"4c768447-a161-4975-bc6a-f116c263cfef\",\"routes\":null,\"segments\":\"\",\"period\":\"30\",\"mobilenumber\":\"919550112934\",\"dayssincelastorder\":\"8\",\"dynamicsegments\":[\"Customers with High usage\",\"Dormant / Inactive\",\"customers with more loyalty points\",\"dfsgrfg\"],\"customerlifecylcesegments\":[\"Active\"]},{\"inviteid\":\"e4e1ce33-9c3f-43bc-a70a-80d2007348c8\",\"avgorders\":\"0.000000000\",\"avgordervalue\":0,\"avginvoicevalue\":0,\"avgpaymentvalue\":0,\"customername\":\"sha Singh Traders User pvt Ltd\",\"customerfirmname\":\"sha Singh Traders User pvt Ltd\",\"sellerworkspacename\":\"Hd Agencies\",\"lastorderdate\":null,\"lastinvoicedate\":null,\"totalorders\":\"0\",\"totalordervalue\":0,\"totalpayments\":\"0\",\"totalinvoicevalue\":0,\"totalpaymentsvalue\":0,\"outstandingamount\":0,\"avgitemsperorder\":0,\"lastpaymentdate\":null,\"firstinvoicedate\":null,\"firstpaymentdate\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e0bc4e375\",\"firstorderdate\":null,\"distributorcode\":\"748f856a-558e-4356-87f4-d5a4a82f23a5\",\"routes\":null,\"segments\":\"\",\"period\":\"30\",\"mobilenumber\":\"917051016552\",\"dayssincelastorder\":\"0\",\"dynamicsegments\":[\"Dormant / Inactive\",\"dfsgrfg\"],\"customerlifecylcesegments\":[]},{\"inviteid\":\"bc915d0d-c4bb-4316-ab1d-2c580443cb56\",\"avgorders\":\"0.000000000\",\"avgordervalue\":0,\"avginvoicevalue\":0,\"avgpaymentvalue\":0,\"customername\":\"Girish\",\"customerfirmname\":\"Girish\",\"sellerworkspacename\":\"Hd Agencies\",\"lastorderdate\":null,\"lastinvoicedate\":null,\"totalorders\":\"0\",\"totalordervalue\":0,\"totalpayments\":\"0\",\"totalinvoicevalue\":0,\"totalpaymentsvalue\":0,\"outstandingamount\":0,\"avgitemsperorder\":0,\"lastpaymentdate\":null,\"firstinvoicedate\":null,\"firstpaymentdate\":null,\"sellerworkspaceid\":\"be436b63-64ba-4f94-bfcf-3e3e...[TRUNCATED]",
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
