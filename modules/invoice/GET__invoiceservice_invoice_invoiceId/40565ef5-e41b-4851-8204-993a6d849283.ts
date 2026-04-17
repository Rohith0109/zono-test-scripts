/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "40565ef5-e41b-4851-8204-993a6d849283",
  "method": "GET",
  "endpoint": "GET /invoiceservice/invoice/{invoiceId}",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "invoice",
  "query": "?includePayment=true&workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]"
  },
  "body": "",
  "pathParams": {
    "invoiceId": "f7768bc8-d365-47f4-9a3e-87402bf6cd13"
  },
  "assertions": {
    "expectedStatus": [
      200
    ],
    "requiredResponsePaths": [
      "$.referenceInvoiceNumber",
      "$.customerPhone",
      "$.LRNumber",
      "$.destination",
      "$.cgst",
      "$.igst",
      "$.sgst",
      "$.ugst",
      "$.educationCess",
      "$.ptrDiscAmt",
      "$.spclDiscAmtPts",
      "$.debitNoteNumber",
      "$.debitNoteAmt",
      "$.creditNoteOneNumber",
      "$.creditNoteOneAmtPts",
      "$.creditNoteTwoNumber",
      "$.creditNoteTwoAmtPts",
      "$.creditNoteThreeNumber",
      "$.creditNoteThreeAmtPts",
      "$.disc",
      "$.roundOff",
      "$.transporterName",
      "$.discountRate",
      "$.calculationMethod",
      "$.numCases",
      "$.TDSAmount"
    ],
    "ignoreResponsePaths": [
      "$.id",
      "$.createdDate",
      "$.updatedDate",
      "$.LRDate"
    ],
    "equals": {}
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
