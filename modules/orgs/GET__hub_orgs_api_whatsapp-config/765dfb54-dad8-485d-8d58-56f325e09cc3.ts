/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "765dfb54-dad8-485d-8d58-56f325e09cc3",
  "method": "GET",
  "endpoint": "GET /hub/orgs/api/whatsapp-config",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$[0].whatsappPhoneNo",
      "$[0].provider",
      "$[0].qualityRating",
      "$[0].messageLimit",
      "$[0].isDefault",
      "$[0].isShared",
      "$[0].isDeleted",
      "$[0].deletedAt",
      "$[0].status",
      "$[0].displayName",
      "$[0].authCode",
      "$[0].profilePic",
      "$[0].isCoexistence",
      "$[0].branch",
      "$[0].tag",
      "$[0].info",
      "$[0].isCatalogueSyncEnable",
      "$[0].languages[0]"
    ],
    "ignoreResponsePaths": [
      "$[0].id",
      "$[0].createdDate",
      "$[0].updatedDate",
      "$[0].workspaceId",
      "$[0].wabaId",
      "$[0].whatsappPhoneNoId",
      "$[0].namespaceId",
      "$[0].metaBusinessToken",
      "$[0].sid",
      "$[0].projectId",
      "$[0].esLinkID",
      "$[0].fbmId"
    ],
    "equals": {}
  },
  "expectedStatus": 200,
  "responseSample": [
    {
      "id": "7baad362-71ec-48f7-8c6f-6617b821bc6f",
      "createdDate": "2026-04-01T10:24:29.000Z",
      "updatedDate": "2026-04-09T08:51:42.000Z",
      "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
      "wabaId": "[REDACTED]",
      "whatsappPhoneNoId": null,
      "whatsappPhoneNo": "917893034036",
      "namespaceId": null,
      "metaBusinessToken": null,
      "provider": "redington",
      "sid": null,
      "qualityRating": "GREEN",
      "messageLimit": 10000,
      "isDefault": true,
      "isShared": false,
      "isDeleted": false,
      "deletedAt": null,
      "status": "WORKING",
      "displayName": "ZoTok AI",
      "authCode": null,
      "profilePic": null,
      "projectId": "682ae22df6cc630bf2ac6ee7",
      "isCoexistence": false,
      "branch": "main",
      "tag": "27",
      "esLinkID": null,
      "info": null,
      "isCatalogueSyncEnable": true,
      "fbmId": "[REDACTED]",
      "languages": [
        "en"
      ],
      "isMmliteEnabled": false
    },
    {
      "id": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375_917670833819",
      "createdDate": "2026-04-13T04:34:43.000Z",
      "updatedDate": "2026-04-16T07:25:32.000Z",
      "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
      "wabaId": null,
      "whatsappPhoneNoId": null,
      "whatsappPhoneNo": "917670833819",
      "namespaceId": null,
      "metaBusinessToken": null,
      "provider": "WAHA",
      "sid": null,
      "qualityRating": null,
      "messageLimit": null,
      "isDefault": false,
      "isShared": false,
      "isDeleted": false,
      "deletedAt": null,
      "status": "WORKING",
      "displayName": "zotok ai testing",
      "authCode": null,
      "profilePic": null,
      "projectId": null,
      "isCoexistence": false,
      "branch": "",
      "tag": "",
      "esLinkID": null,
      "info": null,
      "isCatalogueSyncEnable": false,
      "fbmId": null,
      "languages": [
        "en"
      ],
      "isMmliteEnabled": false
    },
    {
      "id": "edcbb015-4fc2-4fdc-82f1-41f1ef8b0172",
      "createdDate": "2025-10-20T09:43:34.000Z",
      "updatedDate": "2026-04-01T11:53:34.000Z",
      "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
      "wabaId": null,
      "whatsappPhoneNoId": null,
      "whatsappPhoneNo": null,
      "namespaceId": null,
      "metaBusinessToken": null,
      "provider": null,
      "sid": null,
      "qualityRating": null,
      "messageLimit": null,
      "isDefault": false,
      "isShared": false,
      "isDeleted": false,
      "deletedAt": null,
      "status": "FAILED",
      "displayName": null,
      "authCode": null,
      "profilePic": null,
      "projectId": null,
      "isCoexistence": false,
      "branch": "",
      "tag": "",
      "esLinkID": "10e72fbe-b55e-453f-9425-84510e966fd6",
      "info": {
        "step": "BUSINESS_ACCOUNT_SELECTION",
        "message": "Abandoned on Business portfolio screen"
      },
      "isCatalogueSyncEnable": false,
      "fbmId": null,
      "languages": [
        "en"
      ],
      "isMmliteEnabled": false
    }
  ],
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
