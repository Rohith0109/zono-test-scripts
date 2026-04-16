/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "a56fce11-0b5d-4379-8559-753e491bc73b",
  "method": "POST",
  "endpoint": "POST /hub/orgs/api/customer-group/conversations/{conversationId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?pageNo=1&pageSize=20&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "pageNo": 1,
    "pageSize": 20,
    "status": [],
    "tag": [],
    "teamMemberIds": [],
    "conversationPageNo": 1,
    "conversationPageSize": 4
  },
  "pathParams": {
    "conversationId": "7af09d17-ec3c-40bd-924f-72dbeaf5eba8"
  },
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.customerGroupMembers[0].customerGroupAssignmentHistory",
      "$.customerGroupMembers[0]._score",
      "$.customerGroupMembers[0].name",
      "$.customerGroupMembers[0].companyName",
      "$.customerGroupMembers[0].phone",
      "$.customerGroupMembers[0].mobile",
      "$.customerGroupMembers[0].address",
      "$.customerGroupMembers[0].distributorCode",
      "$.customerGroupMembers[0].email",
      "$.customerGroupMembers[0].customerCode",
      "$.customerGroupMembers[0].gstin",
      "$.customerGroupMembers[0].languageCode",
      "$.customerGroupMembers[0].inviteStatus",
      "$.customerGroupMembers[0].isActive",
      "$.customerGroupMembers[0].isArchive",
      "$.customerGroupMembers[0].customerAttributes",
      "$.customerGroupMembers[0].cfas",
      "$.customerGroupMembers[0].assignedMembers",
      "$.customerGroupMembers[0].divisionIds",
      "$.customerGroupMembers[0].cfaIds",
      "$.customerGroupMembers[0].conversations",
      "$.customerGroupMembers[0].totalConversations",
      "$.customerGroupMembers[0].conversationStartRecord",
      "$.customerGroupMembers[0].conversationEndRecord",
      "$.customerGroupMembers[0].conversationTotalPages"
    ],
    "ignoreResponsePaths": [
      "$.customerGroupMembers[0].id",
      "$.customerGroupMembers[0].customerId",
      "$.customerGroupMembers[0].workspaceId",
      "$.customerGroupMembers[0].latestMessageTimeToken",
      "$.customerGroupMembers[0]._id"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "customerGroupMembers": [
      {
        "id": "40965f10-7cdf-4cbe-9861-dc89c38036c5",
        "customerId": "d9bcf9a0-8904-403d-9da2-cb7500277f28",
        "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "customerGroupAssignmentHistory": [
          {
            "groupName": "Warm",
            "movedByName": "HDA",
            "movedOnDate": "2026-04-16T10:50:24.000Z",
            "groupId": "7af09d17-ec3c-40bd-924f-72dbeaf5eba8",
            "movedByTeamMemberId": "31c6c282-b7cf-4081-90a6-f41362dd5f1b"
          }
        ],
        "latestMessageTimeToken": "[REDACTED]",
        "_id": "40965f10-7cdf-4cbe-9861-dc89c38036c5",
        "_score": null,
        "name": "Owaiz Mustafa Khan",
        "companyName": "Owaiz Mustafa Khan",
        "phone": "917326977069",
        "mobile": "917326977069",
        "address": null,
        "distributorCode": "ebd0bab0-7a9a-4be1-89d0-552974d7843c",
        "email": null,
        "customerCode": null,
        "gstin": null,
        "languageCode": "en",
        "inviteStatus": "N",
        "isActive": 1,
        "isArchive": 0,
        "customerAttributes": [],
        "cfas": [],
        "assignedMembers": [],
        "divisionIds": [],
        "cfaIds": [],
        "conversations": {
          "success": true,
          "data": [
            {
              "id": "293e7efb-6bf0-4c3e-bef1-69970f394799",
              "customerId": "d9bcf9a0-8904-403d-9da2-cb7500277f28",
              "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
              "status": "Open",
              "isAssigned": false,
              "lastMessage": "Ravi Hardware",
              "summary": "PIN code entry/query",
              "createdAt": "2026-04-16T08:30:38.052Z",
              "lastMessageAt": "2026-04-16T13:11:02.942Z",
              "metadata": {
                "customerType": "new",
                "tags": [
                  "query",
                  "product_enquiry"
                ]
              }
            }
          ],
          "pagination": {
            "conversationStartRecord": 1,
            "conversationEndRecord": 1,
            "conversationTotalPages": 1,
            "conversationTotalRecords": 1
          },
          "message": "Conversations fetched successfully"
        },
        "totalConversations": 1,
        "conversationStartRecord": 1,
        "conversationEndRecord": 1,
        "conversationTotalPages": 1
      },
      {
        "id": "2ac12503-70e9-47f3-977f-eecafd0159f5",
        "customerId": "a0a28371-eb0c-4f5e-afc2-0617511de0f6",
        "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "customerGroupAssignmentHistory": [
          {
            "groupName": "Warm",
            "movedOnDate": null,
            "groupId": "7af09d17-ec3c-40bd-924f-72dbeaf5eba8",
            "movedByTeamMemberId": null
          }
        ],
        "_id": "2ac12503-70e9-47f3-977f-eecafd0159f5",
        "_score": null,
        "name": "Test Buyer-1415",
        "companyName": "Test Buyer-1415",
        "phone": "914154154114",
        "mobile": "914154154114",
        "address": null,
        "distributorCode": "40141106",
        "email": null,
        "customerCode": null,
        "gstin": null,
        "languageCode": "en",
        "inviteStatus": "N",
        "isActive": 1,
        "isArchive": 0,
        "customerAttributes": [],
        "cfas": [
          {
            "supplierName": "CFA Hyd",
            "fulfillmentLocationId": "fdd94b97-e2e2-439c-b7b3-01805f3f9e70",
            "fulfillmentLocationCode": "CFAHyd"
          }
        ],
        "assignedMembers": [],
        "divisionIds": [],
        "cfaIds": [],
        "conversations": {
          "success": true,
          "data": [],
          "pagination": {
            "conversationStartRecord": 0,
            "conversationEndRecord": 0,
            "conversationTotalPages": 0,
            "conversationTotalRecords": 0
          },
          "message": "Conversations fetched successfully"
        },
        "totalConversations": 0,
        "conversationStartRecord": 0,
        "conversationEndRecord": 0,
        "conversationTotalPages": 0
      },
      {
        "id": "354f9510-1f68-4f5a-afd4-30a6055401da",
        "customerId": "51774fa5-a88d-41d4-96d1-338450282dce",
        "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "customerGroupAssignmentHistory": [
          {
            "groupName": "Warm",
            "movedOnDate": null,
            "groupId": "7af09d17-ec3c-40bd-924f-72dbeaf5eba8",
            "movedByTeamMemberId": null
          }
        ],
        "_id": "354f9510-1f68-4f5a-afd4-30a6055401da",
        "_score": null,
        "name": null,
        "companyName": "malik trail company",
        "phone": "911234567890",
        "mobile": "911234567890",
        "address": null,
        "distributorCode": "204d30a5-abf2-4be3-9115-87182c1f13ab",
        "email": null,
        "customerCode": null,
        "gstin": null,
        "languageCode": "en",
        "inviteStatus": "N",
        "isActive": 1,
        "isArchive": 0,
        "customerAttributes": [],
        "cfas": [
          {
            "supplierName": "Crocodile CFA",
            "fulfillmentLocationId": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
            "fulfillmentLocationCode": "200021"
          }
        ],
        "assignedMembers": [],
        "divisionIds": [],
        "cfaIds": [],
        "conversations": {
          "success": true,
          "data": [
            {
              "id": "c8242133-7680-4182-af5b-15e40b3de467",
              "customerId": "51774fa5-a88d-41d4-96d1-338450282dce",
              "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
              "status": "Open",
              "lastMessage": "Get ledger balance",
              "createdAt": "2026-04-03T06:21:14.486Z",
              "updatedAt": "2026-04-03T06:17:30.877Z",
              "lastMessageAt": "2026-04-03T06:21:14.451Z"
            }
          ],
          "pagination": {
            "conversationStartRecord": 1,
            "conversationEndRecord": 1,
            "conversationTotalPages": 1,
            "conversationTotalRecords": 1
          },
          "message": "Conversations fetched successfully"
        },
        "totalConversations": 1,
        "conversationStartRecord": 1,
        "conversationEndRecord": 1,
        "conversationTotalPages": 1
      }
    ],
    "totalCount": 3,
    "startRecord": 1,
    "endRecord": 3,
    "totalPages": 1,
    "totalRecords": 3
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
