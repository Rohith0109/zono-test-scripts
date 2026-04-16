/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "d9139771-fcd9-4931-91e2-ba9b58d41e22",
  "method": "POST",
  "endpoint": "POST /hub/reports/api/v2/product-performance-report",
  "workspaceId": "unknown",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "reports",
  "query": "",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "sellerWorkspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
    "sortDirection": "DESC",
    "pageNo": 1,
    "pageSize": 20,
    "filters": {},
    "startDate": "2026-04-12",
    "endDate": "2026-04-17"
  },
  "pathParams": {},
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.data[0].sNo",
      "$.data[0].sku",
      "$.data[0].facetDetails",
      "$.data[0].productname",
      "$.data[0].Category",
      "$.data[0].Division",
      "$.data[0].quantity",
      "$.data[0].maximumprice",
      "$.data[0].minimumprice",
      "$.data[0].asp",
      "$.data[0].totalOrders",
      "$.data[0].totalValue",
      "$.totalOrders",
      "$.totalSkus",
      "$.totalCategories",
      "$.totalDivisions",
      "$.totalQuantitySold",
      "$.totalSalesValue",
      "$.averageSellingPrice",
      "$.totalRecords",
      "$.startRecord",
      "$.endRecord"
    ],
    "ignoreResponsePaths": [
      "$.data[0].productvariantid",
      "$.data[0].cfaid",
      "$.data[0].sellerworkspaceid",
      "$.updatedAt"
    ],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "data": [
      {
        "sNo": 1,
        "sku": "02012601",
        "productvariantid": "127975",
        "cfaid": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "Duracel Battery Aa Pack Of 10",
        "Category": null,
        "Division": "Apparels Division",
        "quantity": "631",
        "maximumprice": "7500",
        "minimumprice": "6750",
        "asp": "7500.0000",
        "totalOrders": "10",
        "totalValue": "4732500"
      },
      {
        "sNo": 2,
        "sku": "335588-05",
        "productvariantid": "106359",
        "cfaid": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "Reyon Floral Tops",
        "Category": null,
        "Division": "Apparels Division",
        "quantity": "140",
        "maximumprice": "93000",
        "minimumprice": "93000",
        "asp": "93000.0000",
        "totalOrders": "5",
        "totalValue": "13020000"
      },
      {
        "sNo": 3,
        "sku": "CROI864",
        "productvariantid": "116018",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "SOCKS-ZAVI NEW|Assorted",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "73",
        "maximumprice": "28800",
        "minimumprice": "28800",
        "asp": "32000.0000",
        "totalOrders": "3",
        "totalValue": "2336000"
      },
      {
        "sNo": 4,
        "sku": "CROI836",
        "productvariantid": "116022",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "PREMIUM|TRUNK-CRPT1-07|Assorted",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "67",
        "maximumprice": "32310",
        "minimumprice": "32310",
        "asp": "35900.0000",
        "totalOrders": "3",
        "totalValue": "2405300"
      },
      {
        "sNo": 5,
        "sku": "4606674",
        "productvariantid": "137016",
        "cfaid": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "18G-GI125-1.6Kg",
        "Category": null,
        "Division": "Apparels Division",
        "quantity": "67",
        "maximumprice": "15000",
        "minimumprice": "15000",
        "asp": "15000.0000",
        "totalOrders": "2",
        "totalValue": "1005000"
      },
      {
        "sNo": 6,
        "sku": "PLSB1",
        "productvariantid": "128681",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "Plastic Box",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "67",
        "maximumprice": "2250",
        "minimumprice": "2250",
        "asp": "2500.0000",
        "totalOrders": "3",
        "totalValue": "167500"
      },
      {
        "sNo": 7,
        "sku": "225566-05",
        "productvariantid": "106332",
        "cfaid": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "Reyon Shirts",
        "Category": null,
        "Division": "Apparels Division",
        "quantity": "63",
        "maximumprice": "100000",
        "minimumprice": "95000",
        "asp": "100000.0000",
        "totalOrders": "9",
        "totalValue": "6300000"
      },
      {
        "sNo": 8,
        "sku": "36206220",
        "productvariantid": "137015",
        "cfaid": "7aceeca1-aa03-41b4-80a7-aa81a4f11f3c",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "Checking_test@5210",
        "Category": null,
        "Division": "Apparels Division",
        "quantity": "60",
        "maximumprice": "6000",
        "minimumprice": "6000",
        "asp": "6000.0000",
        "totalOrders": "2",
        "totalValue": "360000"
      },
      {
        "sNo": 9,
        "sku": "STA001",
        "productvariantid": "128261",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "Milton Stainless Steel Jar",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "60",
        "maximumprice": "0",
        "minimumprice": "0",
        "asp": "0.0000",
        "totalOrders": "2",
        "totalValue": "0"
      },
      {
        "sNo": 10,
        "sku": "BDD-KDN/PEL",
        "productvariantid": "116014",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "SOCKS-ROBIN NEW|Assorted",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "58",
        "maximumprice": "34900",
        "minimumprice": "31410",
        "asp": "34900.0000",
        "totalOrders": "3",
        "totalValue": "2024200"
      },
      {
        "sNo": 11,
        "sku": "RX6363",
        "productvariantid": "127974",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "Radish – Cross X-35",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "57",
        "maximumprice": "30870",
        "minimumprice": "30870",
        "asp": "34300.0000",
        "totalOrders": "2",
        "totalValue": "1955100"
      },
      {
        "sNo": 12,
        "sku": "344/DHN-33",
        "productvariantid": "116012",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "CLASSIC|BRIEF-CRCB1-01|Assorted",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "55",
        "maximumprice": "20900",
        "minimumprice": "18810",
        "asp": "20900.0000",
        "totalOrders": "3",
        "totalValue": "1149500"
      },
      {
        "sNo": 13,
        "sku": "3121c6b3-3cdb-409d-945f-e89f15d1c3af-000000d8",
        "productvariantid": "128246",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "AIR FILTER MARUTI DEZIRE",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "54",
        "maximumprice": "137880",
        "minimumprice": "137880",
        "asp": "153200.0000",
        "totalOrders": "2",
        "totalValue": "8272800"
      },
      {
        "sNo": 14,
        "sku": "F778",
        "productvariantid": "128720",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "Building blocks ",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "54",
        "maximumprice": "45000",
        "minimumprice": "45000",
        "asp": "50000.0000",
        "totalOrders": "2",
        "totalValue": "2700000"
      },
      {
        "sNo": 15,
        "sku": "CROI853",
        "productvariantid": "116016",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "SOCKS-CRALS-105|Assorted",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "54",
        "maximumprice": "40410",
        "minimumprice": "40410",
        "asp": "44900.0000",
        "totalOrders": "2",
        "totalValue": "2424600"
      },
      {
        "sNo": 16,
        "sku": "SKU7373",
        "productvariantid": "127107",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "Jbl Speaker",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "54",
        "maximumprice": "399960",
        "minimumprice": "399960",
        "asp": "444400.0000",
        "totalOrders": "2",
        "totalValue": "23997600"
      },
      {
        "sNo": 17,
        "sku": "CROI872",
        "productvariantid": "120030",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "CLASSIC VEST_TEXAS RN NEW {White}",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "54",
        "maximumprice": "25110",
        "minimumprice": "25110",
        "asp": "27900.0000",
        "totalOrders": "2",
        "totalValue": "1506600"
      },
      {
        "sNo": 18,
        "sku": "3121c6b3-3cdb-409d-945f-e89f15d1c3af-000000d5",
        "productvariantid": "128245",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "AIR FILTER MARUTI CELERIO",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "51",
        "maximumprice": "114750",
        "minimumprice": "114750",
        "asp": "127500.0000",
        "totalOrders": "2",
        "totalValue": "6502500"
      },
      {
        "sNo": 19,
        "sku": "3738YEHD*2*2",
        "productvariantid": "120038",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "TRACK PANT-CRTP1-05 (CHARCOAL MEL)@5 Pack",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "51",
        "maximumprice": "89910",
        "minimumprice": "89910",
        "asp": "99900.0000",
        "totalOrders": "2",
        "totalValue": "5094900"
      },
      {
        "sNo": 20,
        "sku": "CROI528",
        "productvariantid": "120033",
        "cfaid": "bc26874c-d938-4f76-8b9d-56956b2d8f53",
        "facetDetails": null,
        "sellerworkspaceid": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
        "productname": "JOGGERS CRJ1-07 NAVY 2*2",
        "Category": null,
        "Division": "Crocodile",
        "quantity": "48",
        "maximumprice": "89910",
        "minimumprice": "89910",
        "asp": "99900.0000",
        "totalOrders": "2",
        "totalValue": "4795200"
      }
    ],
    "totalOrders": 89,
    "totalSkus": 61,
    "totalCategories": 1,
    "totalDivisions": 6,
    "totalQuantitySold": 2350,
    "totalSalesValue": 128055992,
    "averageSellingPrice": 91764.6739,
    "totalRecords": 62,
    "startRecord": 1,
    "endRecord": 20,
    "updatedAt": "2026-04-16T19:51:48.404839"
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
