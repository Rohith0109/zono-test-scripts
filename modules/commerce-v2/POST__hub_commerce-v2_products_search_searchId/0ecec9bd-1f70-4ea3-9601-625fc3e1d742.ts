/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "0ecec9bd-1f70-4ea3-9601-625fc3e1d742",
  "method": "POST",
  "endpoint": "POST /hub/commerce-v2/products/search/{searchId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "commerce-v2",
  "query": "?pageNo=1&pageSize=40&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "searchKey": "",
    "includeFacets": true,
    "includeDivisions": true,
    "includeCfas": true,
    "includeCategoryCodesList": true,
    "skuCode": "",
    "sortDirection": "ASC",
    "sortBy": "sortOrder",
    "groupByProduct": true,
    "inventoryFilter": "",
    "stockFilter": "",
    "divisionIds": [],
    "cfaIds": [],
    "categoryCodes": [],
    "statusFilter": "",
    "collectionIds": []
  },
  "pathParams": {
    "searchId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
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
  "responseSample": "{\"total\":2891,\"startRecord\":1,\"endRecord\":40,\"products\":[{\"parentSku\":\"225566\",\"productAsset\":{},\"source\":\"\",\"preview\":\"\",\"enabled\":true,\"id\":106907,\"productVariants\":[{\"facets\":[],\"assets\":[{\"filename\":\"225566-01.png\",\"redirectUrl\":\"https://images-qa.zono.digital/?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&filename=225566-01.png&documentType=products&width=512&height=512\",\"sequenceNo\":1,\"subType\":\"featured\"}],\"taxCategory\":{\"id\":88,\"name\":\"GST-0\"},\"enabled\":true,\"price\":11000,\"MRP\":11500,\"PTR\":0,\"isSpecial\":null,\"sku\":\"225566-01\",\"sortOrder\":0,\"id\":106333,\"taxCategoryId\":88,\"productId\":106907,\"name\":\"Reyon Shirt - Pack Of 4\",\"shortName\":\"Reyon Shirt - Pack Of 4\",\"shortDescription\":\"Casual Kidswear Prioritizes Comfort And Practicality, Making It Suitable For Everyday Wear. These Are The Go-to Outfits For Playdates, School, Or Simply Lounging At Home\",\"categories\":[{\"categoryCode\":\"1223123\",\"categoryName\":\"category 1\",\"categoryId\":3791}],\"productVariantId\":106333,\"ean\":null,\"erpId\":null,\"erpPriceUOM\":null,\"additionalUOM\":\"BAG\",\"weightUOM\":\"BOX\",\"ZINS\":false,\"hsnCode\":\"\",\"upcCode\":\"\",\"baseUom\":\"CAN\",\"quantity\":0,\"warrentyInformation\":\"\",\"condition\":\"\",\"packSize\":10,\"manufacturingDate\":null,\"expiryDate\":null,\"bestBeforeOrAfter\":\"\",\"popularity\":99999,\"bestAfter\":\"\",\"minOrderQty\":1,\"maxOrderQty\":0,\"minRemShelfLife\":0,\"qtyMultiplier\":0,\"materialWeight\":3.3,\"netWeight\":\"0.00\",\"volume\":0,\"division\":[{\"divisionCode\":\"4782522\",\"divisionId\":\"d6abaf08-5588-41f3-8f73-c8a4a5ae7004\",\"name\":\"Apparels Division\",\"headDivisionId\":\"b66388c5-17f1-41e7-a19c-b88ceb4c13e7\",\"headDivision\":{\"id\":\"b66388c5-17f1-41e7-a19c-b88ceb4c13e7\",\"code\":\"489663\",\"name\":\"Apparels\"},\"isDefault\":true}],\"cfas\":[{\"cfaCode\":\"CFA-141052\",\"cfaId\":\"00419f39-8845-4103-b96f-03786e99d423\",\"supplierName\":\"CFA-141052\",\"isDefault\":true,\"minOrderQty\":1},{\"cfaCode\":\"CF171\",\"cfaId\":\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"supplierName\":\"CFA DIST171\",\"isDefault\":false,\"minOrderQty\":1},{\"cfaCode\":\"CF445\",\"cfaId\":\"01fc404f-8688-45be-9037-db36f0001677\",\"supplierName\":\"CFA DIST445\",\"isDefault\":false,\"minOrderQty\":1},{\"cfaCode\":\"CF464\",\"cfaId\":\"02c762a3-5659-40f9-b7d8-2f8a52f62bce\",\"supplierName\":\"CFA DIST464\",\"isDefault\":false,\"minOrderQty\":1},{\"cfaCode\":\"CFA\",\"cfaId\":\"060a53e1-58ca-4dc3-ad92-1128838ee05d\",\"supplierName\":\"Testing_cfaa\",\"isDefault\":false,\"minOrderQty\":1},{\"cfaCode\":\"166322\",\"cfaId\":\"1229236f-b697-44b6-ae5f-7c04b3ec1d2e\",\"supplierName\":\"Vijayawada\",\"isDefault\":false,\"minOrderQty\":1},{\"cfaCode\":\"332232\",\"cfaId\":\"17404347-ccd3-424b-bca6-6cc1d42affb5\",\"supplierName\":\"Testing 3636\",\"isDefault\":false},{\"cfaCode\":\"1510026\",\"cfaId\":\"2c31f3a1-d95b-4d8f-b7ca-949990b97ecd\",\"supplierName\":\"Test FL-111\",\"isDefault\":false},{\"cfaCode\":\"1512133\",\"cfaId\":\"302960ad-3ce8-4c80-b000-544380406614\",\"supplierName\":\"Check CFA Test 141142\",\"isDefault\":false},{\"cfaCode\":\"default-cfa\",\"cfaId\":\"40a914c1-4dcf-429f-a019-58cf1f2a7f49\",\"supplierName\":\"Default-CFA\",\"isDefault\":false,\"minOrderQty\":1},{\"cfaCode\":\"6262626\",\"cfaId\":\"480ff806-6a19-4982-bb51-e088f943203c\",\"supplierName\":\"Test7337\",\"isDefault\":false},{\"cfaCode\":\"263266\",\"cfaId\":\"48a3fbe2-00c0-459a-a244-a34a01db17a8\",\"supplierName\":\"Test444\",\"isDefault\":false},{\"cfaCode\":\"1420231\",\"cfaId\":\"59cdb393-2af6-42d9-b3c6-eced0869e6e6\",\"supplierName\":\"Steel \",\"isDefault\":false,\"minOrderQty\":1},{\"cfaCode\":\"65251\",\"cfaId\":\"65dedde8-6324-4da4-b9c6-b47a471fa716\",\"supplierName\":\"Trail\",\"isDefault\":false},{\"cfaCode\":\"BN1513203\",\"cfaId\":\"79dd8802-3118-4850-ac33-3a8b8e191010\",\"supplierName\":\"BirlaNu CFA\",\"isDefault\":false},{\"cfaCode\":\"62320\",\"cfaId\":\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\",\"supplierName\":\"Apparels CFA\",\"isDefault\":false,\"minOrderQty\":1},{\"cfaCode\":\"Manish plywood CFA\",\"cfaId\":\"8c7ce6dd-35ae-4b90-8d66-8526972bc7a8\",\"supplierName\":\"Manish plywood CFA\",\"isDefault\":false},{\"cfaCode\":\"151515\",\"cfaId\":\"a34610f0-657b-407b-be9e-62c6e23f0fbe\",\"supplierName\":\"Shobavat CFA\",\"isDefault\":false},{\"cfaCode\":\"CKB\",\"cfaId\":\"a5dd64db-0121-4355-8ba5-6222d7a1d266\",\"supplierName\":\"Crocodile_KB\",\"isDefault\":false},{\"cfaCode\":\"78452\",\"cfaId\":\"b87fc61e-a3ea-406c-b886-41bc49887c71\",\"supplierName\":\"CFA-145144\",\"isDefault\":false},{\"cfaCode\":\"200021\",\"cfaId\":\"bc26874c-d938-4f76-8b9d-56956b2d8f53\",\"supplierName\":\"Crocodile CFA\",\"isDefault\":false,\"minOrderQty\":1},{\"cfaCode\":\"12213\",\"cfaId\":\"c4bf452e-a601-48f4-8c59-d4d50af1851e\",\"supplierName\":\"Plywood CFA\",\"isDefault\":false},{\"cfaCode\":\"1212021\",\"cfaId\":\"c8f8feb9-f705-4d62-a938-ff1f692551e8\",\"supplierName\":\"Test CFA\",\"isDefault\":false},{\"cfaCode\":\"testCodeCfa\",\"cfaId\":\"df04b03c-d7b3-494e-abcf-1809cd3fa829\",\"supplierName\":\"testCFA\",\"isDefault\":false},{\"cfaCode\":\"1405226\",\"cfaId\":\"e281af2b-26c8-405d-82c4-a29071a341ee\",\"supplierName\":\"Testing CFA 200\",\"isDefault\":false},{\"cfaCode\":\"212154\",\"cfaId\":\"e8193bc2-716e-4c93-9c26-60326dd47c8d\",\"supplierName\":\"Hyderabad\",\"isDefault\":false},{\"cfaCode\":\"14200\",\"cfaId\":\"eedd7f1f-870c-4d26-bbd1-e012bfabf815\",\"supplierName\":\"Fertilizers\",\"isDefault\":false},{\"cfaCode\":\"152135\",\"cfaId\":\"f307179c-65d0-4f70-a724-d6767882d68f\",\"supplierName\":\"Snacks\",\"isDefault\":false},{\"cfaCode\":\"CFAHyd\",\"cfaId\":\"fdd94b97-e2e2-439c-b7b3-01805f3f9e70\",\"supplierName\":\"CFA Hyd\",\"isDefault\":false}],\"collections\":[],\"promotions\":[{\"id\":3869,\"name\":\"New Scheme\",\"promotionType\":\"buy_x_get_y_free\",\"promotionCode\":\"HDRE3958333\",\"enabled\":true,\"startsAt\":\"2026-04-06T18:30:00.000Z\",\"endsAt\":\"2026-04-21T18:30:00.000Z\",\"productVariantId\":106333,\"discount\":\"0.00\",\"discountType\":null,\"minQtyASC\":90,\"freeQtyASC\":10,\"promotionSubType\":1,\"slab\":[{\"to\":100,\"from\":90,\"freeQuantity\":\"10\"},{\"to\":150,\"from\":101,\"freeQuantity\":\"15\"}],\"promotion\":\"80+10\"},{\"id\":3897,\"name\":\"15% off\",\"promotionType\":\"product_discount\",\"promotionCode\":\"HDRE4108333\",\"enabled\":true,\"startsAt\":\"2026-04-13T18:30:00.000Z\",\"endsAt\":\"2026-04-29T18:30:00.000Z\",\"productVariantId\":106333,\"discount\":\"15.00\",\"discountType\":\"products_percentage_discount\",\"minQtyASC\":1,\"freeQtyASC\":0,\"promotionSubType\":null,\"slab\":[{\"to\":100,\"from\":1,\"discount\":15}],\"promotion\":\"15.00%\"}],\"caseSize\":0,\"stock\":0,\"sales\":0,\"margin\":null,\"isActiveForOrderCfaIds\":[\"00419f39-8845-4103-b96f-03786e99d423\",\"00974a9b-7ea1-4f56-961c-064dead25dc3\",\"01fc404f-8688-45be-9037-db36f0001677\",\"02c762a3-5659-40f9-b7d8-2f8a52f62bce\",\"7aceeca1-aa03-41b4-80a7-aa81a4f11f3c\"],\"salesOrg\":null,\"segments\":[{\"segmentId\":\"32f8d974-8195-11f0-83df-02b2e930e7e7\",\"segmentName\":\"Non Moving\"}],\"pricingStrategy\":\"WEIGHT_BASED\"},{\"facets\":[{\"createdAt\":\"2026-04-06T08:10:56.164Z\",\"updatedAt\":\"2026-04-06T08:10:56.164Z\",\"isPrivate\":true,\"channelId\":13574,\"id\":5414,\"values\":[{\"createdAt\":\"2026-04-06T08:11:18.196Z\",\"updatedAt\":\"2026-04-06T08:11:18.196Z\",\"id\":16178,\"facetValueCode\":\"red\",\"facetValue\":\"red\"}],\"facetCode\":\"clrrFacet\",\"name\":\"clrr\"}],\"assets\":[{\"filename\":\"225566-02.png\",\"redirectUrl\":\"https://images-qa.zono.digital/?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&filename=225566-02.png&documentType=products&width=512&height=512\",\"sequenceNo\":1,\"subType\":\"featured\"}],\"taxCategory\":{\"id\":88,\"name\":\"GST-0\"},\"enabled\":true,\"price\":105000,\"MRP\":0,\"PTR\":0,\"isSpecial\":null,\"sku\":\"225566-02\",\"sortOrder\":0,\"id\":106334,\"taxCategoryId\":88,\"productId\":106907,\"name\":\"Reyon Shirt - Pack Of 4\",\"shortName\":\"Reyon Shirt - Pack Of 4\",\"shortDescription\":\"Casual Kidswear Prioritizes Comfort And Practicality, Making It Suitable For Everyday Wear. These Are The Go-to Outfits For Playdates, School, Or Simply Lounging At Home\",\"categories\":[{\"categoryCode\":\"1223123\",\"categoryName\":\"category 1\",\"categoryId\":3791}],\"productVariantId\":106334,\"ean\":null,\"erpId\":null,\"erpPriceUOM\":null,\"additionalUOM\":\"\",\"weightUOM\":\"\",\"ZINS\":false,\"hsnCode\":\"\",\"upcCode\":\"\",\"baseUom\":\"\",\"quantity\":0,\"warrentyInformation\":\"\",\"condition\":\"\",\"packSize\":1,\"manufacturingDate\":null,\"expiryDate\":null,\"bestBeforeOrAfter\":\"\",\"popularity\":99999,\"bestAfter\":\"\",\"minOrderQty\":1,\"maxOrderQty\":0,\"minRemShelfLife\":10,\"qtyMultiplier\":5,\"materialWeight\":null,\"netWeight\":\"0.00\",\"volume\":0,\"division\":[{\"divisionCode\":\"14202563\",\"divisionId\":\"e58bed17-ab14-4ee7-bea6-dc7a225d3b37\",\"name\":\"Steel\",\"headDivisionId\":\"7418dcbb-758e-4e1f-ae44-77fff70634a1\",\"headDivision\":{\"id\":\"7418dcbb-758e-...[TRUNCATED]",
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
