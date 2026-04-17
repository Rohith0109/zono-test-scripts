/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "2a0e736f-f974-454e-981b-ec4c6095a1bf",
  "method": "POST",
  "endpoint": "POST /hub/orgs/api/accounts/{accountId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
  },
  "pathParams": {
    "accountId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
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
  "responseSample": "{\"bankAccounts\":[{\"id\":\"2a2da8c4-0e06-4a65-aabc-6e02caf372b7\",\"bankName\":\"SBI\",\"accountNumber\":\"[REDACTED]\",\"accountHolderName\":\"Sridhar\",\"ifscCode\":\"SBIN0000\",\"cfaCode\":\"ALL\",\"paymentNotificationtype\":\"ALL\"},{\"id\":\"6dc3a0f6-80de-4629-b741-e5c003cfdc61\",\"bankName\":\"JHjkfjkdfkj\",\"accountNumber\":\"[REDACTED]\",\"accountHolderName\":\"JHJHJKHKJF\",\"ifscCode\":\"KJHKJDFHJH\",\"cfaCode\":\"ALL\",\"paymentNotificationtype\":null}],\"upiAccounts\":[{\"id\":\"46c77a70-11eb-4115-8937-a5c1f5a748c6\",\"upiId\":\"something@upi\",\"mobileNo\":\"911111111398\",\"upiAccountHolderName\":\"Checking something\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/46c77a70-11eb-4115-8937-a5c1f5a748c6.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232OZJN3YMM%2F20260417%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260417T060539Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCmFwLXNvdXRoLTEiSDBGAiEArWOhvgcQQWcoLY7oLIZM4p1GI1hTJwy%2FLgGGfTnyEIUCIQDEYLyq8GQBoxg0%2FHeEy2pMWYNSK30KSGUViZCBBStwOyr%2FAwjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAQaDDgyOTc3MzQzNjY2MCIMVhA%2BSo4Tzswmq%2BooKtMDPOSqW%2FkfyR5hI%2BJqXMMHX8pD8BQ2%2F%2FpFY6twO2s2n0OF7OLNj1cnVMMyYDjufEmG6XuRtfhUkGqynRp%2FuK7sqlaACAyTLdUh5XW9zk3wUWWgp%2FlPbeH%2BM9bwOQsephHf39oz1D0s7WAw4aXYIpTG%2Bfiz7jEJzzGCbIiGUVw5OV01mKuBp%2Bib7YTOv4eyz1S4uwuXlFt1WzofPdkDtQpFdvjXxjGsSp6eRRu0lhGil9kkJD2bj9utkYTH4ooAy9GeG8rqWqHxAYtK0U1xIQf3aa67c6jvInlQnOgzlXjhzO2%2Bv8ZRu9H8fPfRBVZUB9VM1Kk%2F3c14KWm0MDS%2FhL2xutQxZyZL8V64XPf1wXU6Bqtc2gbXru6nqzknD6KLhTzjAjFw5nQPJTX6RSvtnWPJk4wrw0hSKWmmOTiTKoiBEciH662qrONVc4MEi5J7%2FuFfh6%2BVpQug21MdL5K%2F4cVgNDHCx4TU2bRXTkmEMSlcpiaMthH75VmU%2FGEMlBDazrzdCIAr3yl7Bz%2FNCY0OdnYU5jdHKX5lpFo1nZWAvdXr9iF2Q%2B8zCaf%2F5O0tdfPasrHtb3FSmVyh5sS4vVnkN1X52kvaYVlr%2BdM4Zf%2BqUqyaAlOF680wgpSHzwY6pAGKlKZyH4BdrSElOC%2B7P2wDZny%2FfHN6luMqn9pc%2F41f7BfrHRU9yhMEqbWpaQ%2Fz9X4J1A37q8SQXoCKKfGHAT%2B5txAZlKYvf9YLo9FacSf0ePgtuqpqpA%2Bqkmv%2F5UawalGnGOeoLDmlqtm6gfOXBG8mlXmWmXNBrL4T2%2FGyeAhtpTMlNClq0BpO9pGbR6hNUz2v5GMcdoin1Tgy%2BvfEwoawcLFyDg%3D%3D&X-Amz-Signature=462eadc63db5dc5c058b0113bcca51b49d1fa116235ec269455acc08f97bb40a&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"5936c904-e24f-46c1-bba6-7485cf69649a\",\"upiId\":\"ddbo1@ybl\",\"mobileNo\":\"[REDACTED]\",\"upiAccountHolderName\":\"DGBD\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/5936c904-e24f-46c1-bba6-7485cf69649a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232OZJN3YMM%2F20260417%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260417T060539Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCmFwLXNvdXRoLTEiSDBGAiEArWOhvgcQQWcoLY7oLIZM4p1GI1hTJwy%2FLgGGfTnyEIUCIQDEYLyq8GQBoxg0%2FHeEy2pMWYNSK30KSGUViZCBBStwOyr%2FAwjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAQaDDgyOTc3MzQzNjY2MCIMVhA%2BSo4Tzswmq%2BooKtMDPOSqW%2FkfyR5hI%2BJqXMMHX8pD8BQ2%2F%2FpFY6twO2s2n0OF7OLNj1cnVMMyYDjufEmG6XuRtfhUkGqynRp%2FuK7sqlaACAyTLdUh5XW9zk3wUWWgp%2FlPbeH%2BM9bwOQsephHf39oz1D0s7WAw4aXYIpTG%2Bfiz7jEJzzGCbIiGUVw5OV01mKuBp%2Bib7YTOv4eyz1S4uwuXlFt1WzofPdkDtQpFdvjXxjGsSp6eRRu0lhGil9kkJD2bj9utkYTH4ooAy9GeG8rqWqHxAYtK0U1xIQf3aa67c6jvInlQnOgzlXjhzO2%2Bv8ZRu9H8fPfRBVZUB9VM1Kk%2F3c14KWm0MDS%2FhL2xutQxZyZL8V64XPf1wXU6Bqtc2gbXru6nqzknD6KLhTzjAjFw5nQPJTX6RSvtnWPJk4wrw0hSKWmmOTiTKoiBEciH662qrONVc4MEi5J7%2FuFfh6%2BVpQug21MdL5K%2F4cVgNDHCx4TU2bRXTkmEMSlcpiaMthH75VmU%2FGEMlBDazrzdCIAr3yl7Bz%2FNCY0OdnYU5jdHKX5lpFo1nZWAvdXr9iF2Q%2B8zCaf%2F5O0tdfPasrHtb3FSmVyh5sS4vVnkN1X52kvaYVlr%2BdM4Zf%2BqUqyaAlOF680wgpSHzwY6pAGKlKZyH4BdrSElOC%2B7P2wDZny%2FfHN6luMqn9pc%2F41f7BfrHRU9yhMEqbWpaQ%2Fz9X4J1A37q8SQXoCKKfGHAT%2B5txAZlKYvf9YLo9FacSf0ePgtuqpqpA%2Bqkmv%2F5UawalGnGOeoLDmlqtm6gfOXBG8mlXmWmXNBrL4T2%2FGyeAhtpTMlNClq0BpO9pGbR6hNUz2v5GMcdoin1Tgy%2BvfEwoawcLFyDg%3D%3D&X-Amz-Signature=139a44247aa6b7cc29d3ceb8f305dc4fbcc38933c89d0eb72a17b8308d57b825&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":\"ALL\",\"cfaCode\":\"ALL\"},{\"id\":\"907edb6b-5925-478f-8dce-9fdf609d83f8\",\"upiId\":\"hdb@ybl\",\"mobileNo\":\"14005260500\",\"upiAccountHolderName\":\"Test Account \",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/907edb6b-5925-478f-8dce-9fdf609d83f8.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232OZJN3YMM%2F20260417%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260417T060539Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCmFwLXNvdXRoLTEiSDBGAiEArWOhvgcQQWcoLY7oLIZM4p1GI1hTJwy%2FLgGGfTnyEIUCIQDEYLyq8GQBoxg0%2FHeEy2pMWYNSK30KSGUViZCBBStwOyr%2FAwjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAQaDDgyOTc3MzQzNjY2MCIMVhA%2BSo4Tzswmq%2BooKtMDPOSqW%2FkfyR5hI%2BJqXMMHX8pD8BQ2%2F%2FpFY6twO2s2n0OF7OLNj1cnVMMyYDjufEmG6XuRtfhUkGqynRp%2FuK7sqlaACAyTLdUh5XW9zk3wUWWgp%2FlPbeH%2BM9bwOQsephHf39oz1D0s7WAw4aXYIpTG%2Bfiz7jEJzzGCbIiGUVw5OV01mKuBp%2Bib7YTOv4eyz1S4uwuXlFt1WzofPdkDtQpFdvjXxjGsSp6eRRu0lhGil9kkJD2bj9utkYTH4ooAy9GeG8rqWqHxAYtK0U1xIQf3aa67c6jvInlQnOgzlXjhzO2%2Bv8ZRu9H8fPfRBVZUB9VM1Kk%2F3c14KWm0MDS%2FhL2xutQxZyZL8V64XPf1wXU6Bqtc2gbXru6nqzknD6KLhTzjAjFw5nQPJTX6RSvtnWPJk4wrw0hSKWmmOTiTKoiBEciH662qrONVc4MEi5J7%2FuFfh6%2BVpQug21MdL5K%2F4cVgNDHCx4TU2bRXTkmEMSlcpiaMthH75VmU%2FGEMlBDazrzdCIAr3yl7Bz%2FNCY0OdnYU5jdHKX5lpFo1nZWAvdXr9iF2Q%2B8zCaf%2F5O0tdfPasrHtb3FSmVyh5sS4vVnkN1X52kvaYVlr%2BdM4Zf%2BqUqyaAlOF680wgpSHzwY6pAGKlKZyH4BdrSElOC%2B7P2wDZny%2FfHN6luMqn9pc%2F41f7BfrHRU9yhMEqbWpaQ%2Fz9X4J1A37q8SQXoCKKfGHAT%2B5txAZlKYvf9YLo9FacSf0ePgtuqpqpA%2Bqkmv%2F5UawalGnGOeoLDmlqtm6gfOXBG8mlXmWmXNBrL4T2%2FGyeAhtpTMlNClq0BpO9pGbR6hNUz2v5GMcdoin1Tgy%2BvfEwoawcLFyDg%3D%3D&X-Amz-Signature=9290c0ec1dfd31f75026daad9bd03a58d9277ea5347031e9e001e5314390f103&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"a11bceb2-c3ac-46f5-bcf7-02cdb46511dc\",\"upiId\":\"hd566b@ybl\",\"mobileNo\":\"911400526050\",\"upiAccountHolderName\":\"Test Account UPI\",\"qrCodeUrl\":\"\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"bc514eb6-8f77-40fc-b53d-3e87cc605d7f\",\"upiId\":\"gvgv@gyvh\",\"mobileNo\":\"[REDACTED]\",\"upiAccountHolderName\":\"hbhbj\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/bc514eb6-8f77-40fc-b53d-3e87cc605d7f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232OZJN3YMM%2F20260417%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260417T060539Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCmFwLXNvdXRoLTEiSDBGAiEArWOhvgcQQWcoLY7oLIZM4p1GI1hTJwy%2FLgGGfTnyEIUCIQDEYLyq8GQBoxg0%2FHeEy2pMWYNSK30KSGUViZCBBStwOyr%2FAwjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAQaDDgyOTc3MzQzNjY2MCIMVhA%2BSo4Tzswmq%2BooKtMDPOSqW%2FkfyR5hI%2BJqXMMHX8pD8BQ2%2F%2FpFY6twO2s2n0OF7OLNj1cnVMMyYDjufEmG6XuRtfhUkGqynRp%2FuK7sqlaACAyTLdUh5XW9zk3wUWWgp%2FlPbeH%2BM9bwOQsephHf39oz1D0s7WAw4aXYIpTG%2Bfiz7jEJzzGCbIiGUVw5OV01mKuBp%2Bib7YTOv4eyz1S4uwuXlFt1WzofPdkDtQpFdvjXxjGsSp6eRRu0lhGil9kkJD2bj9utkYTH4ooAy9GeG8rqWqHxAYtK0U1xIQf3aa67c6jvInlQnOgzlXjhzO2%2Bv8ZRu9H8fPfRBVZUB9VM1Kk%2F3c14KWm0MDS%2FhL2xutQxZyZL8V64XPf1wXU6Bqtc2gbXru6nqzknD6KLhTzjAjFw5nQPJTX6RSvtnWPJk4wrw0hSKWmmOTiTKoiBEciH662qrONVc4MEi5J7%2FuFfh6%2BVpQug21MdL5K%2F4cVgNDHCx4TU2bRXTkmEMSlcpiaMthH75VmU%2FGEMlBDazrzdCIAr3yl7Bz%2FNCY0OdnYU5jdHKX5lpFo1nZWAvdXr9iF2Q%2B8zCaf%2F5O0tdfPasrHtb3FSmVyh5sS4vVnkN1X52kvaYVlr%2BdM4Zf%2BqUqyaAlOF680wgpSHzwY6pAGKlKZyH4BdrSElOC%2B7P2wDZny%2FfHN6luMqn9pc%2F41f7BfrHRU9yhMEqbWpaQ%2Fz9X4J1A37q8SQXoCKKfGHAT%2B5txAZlKYvf9YLo9FacSf0ePgtuqpqpA%2Bqkmv%2F5UawalGnGOeoLDmlqtm6gfOXBG8mlXmWmXNBrL4T2%2FGyeAhtpTMlNClq0BpO9pGbR6hNUz2v5GMcdoin1Tgy%2BvfEwoawcLFyDg%3D%3D&X-Amz-Signature=d8a9e3b3995b220c69ada747b7b835c44dfa21fd5bf017e60da0ab06b656e4ab&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"dd3fa77f-2984-4c00-9491-c32928c2ae45\",\"upiId\":\"vsreddy@sbi\",\"mobileNo\":\"2875875875\",\"upiAccountHolderName\":\"Sridhar\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/dd3fa77f-2984-4c00-9491-c32928c2ae45.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232OZJN3YMM%2F20260417%2Fap-south-1%2Fs3%2Faws4_r...[TRUNCATED]",
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
