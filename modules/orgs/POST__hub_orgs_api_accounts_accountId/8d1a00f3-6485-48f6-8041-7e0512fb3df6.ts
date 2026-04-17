/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "8d1a00f3-6485-48f6-8041-7e0512fb3df6",
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
  "responseSample": "{\"bankAccounts\":[{\"id\":\"2a2da8c4-0e06-4a65-aabc-6e02caf372b7\",\"bankName\":\"SBI\",\"accountNumber\":\"[REDACTED]\",\"accountHolderName\":\"Sridhar\",\"ifscCode\":\"SBIN0000\",\"cfaCode\":\"ALL\",\"paymentNotificationtype\":\"ALL\"},{\"id\":\"6dc3a0f6-80de-4629-b741-e5c003cfdc61\",\"bankName\":\"JHjkfjkdfkj\",\"accountNumber\":\"[REDACTED]\",\"accountHolderName\":\"JHJHJKHKJF\",\"ifscCode\":\"KJHKJDFHJH\",\"cfaCode\":\"ALL\",\"paymentNotificationtype\":null}],\"upiAccounts\":[{\"id\":\"46c77a70-11eb-4115-8937-a5c1f5a748c6\",\"upiId\":\"something@upi\",\"mobileNo\":\"911111111398\",\"upiAccountHolderName\":\"Checking something\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/46c77a70-11eb-4115-8937-a5c1f5a748c6.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232DHJNONW4%2F20260417%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260417T051142Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCmFwLXNvdXRoLTEiRjBEAiBzmGtQYq5RxeHOS9vala8KbkjCB6SAVBQXul59jnt4EAIgHNEgiucj74%2BawIb%2FshykmGsYr8PLjg%2BtVQV3K6dWR3gq%2FwMIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgw4Mjk3NzM0MzY2NjAiDLjqsuM4DzsRt8wO%2FyrTAygpgOsp13FH7kDky56paTfORcCWdle8UTEvUVXG1e70m0E5gE1EQcD9c5FcMdPuNGksLDgvkx7IAKL7zuLeSYtylHXfTMHSVHfLcWzQ01SfHtkR%2F293n4OlbSdLrCS2C7OjbiFVPxUVaJeFjXgsbfrdl5Q5EYeMRqq7RdJzB0RubdH8W%2Fi5i%2F2DhxSFHcvHb2ZHk2UVo9f9yH%2BpyfEquh%2FDQFhw1P9EujWwVxesJcsIAI%2Bmqbx2VqKk2%2BTfl5oIGTQIpB76wZ6T7E9UMwCBLTI5kYQG6pRGuQ%2FictmII%2F%2BpQNAwIcPyYA2u64dZYP%2BYR5Phi92MTtZ%2BiCVebp6gSCEpYO0QYowlw%2FmfYNj3HkiOpyldLmQXYM%2Fr0NxkbyYV85tJzwdOk%2F1IyzP15DNJPfKp18O3ddP1H68h4fx3OYLosYKgsjLdkU3a%2BkaZ1f%2FpcN6%2FX32cFW2I7BGdNRj%2BXOxMYXpljsjliNrEDu1knKPN8rgUA4fbFGP8BzvqSL4JWMbJ1IRhYkfZqCfZ6EvvwRbGt%2Br4DJqOG31jYy%2FfJpmBPCDnnmkzfMOdRuZkjbrVWnvamg0BBw3VK3%2BVgkJauAzNrVM4pI7NFVqUNNXya6mF7N4lMJ77hs8GOqYBy4PcSX0a6pC2pc9KLjWeS78xHnc3VPRMMp%2F0qO0pYXTtx%2BASY2KYNsGw%2BzgO2LPCHAW1UXYegGTGZkAmULeuwjxbMCozSDtJ5HVAJrS65EviSd1A5vfl9PzVZTspgYg7uLP%2BbwshJ0Tlrswg1fNXdr%2FCgJDnXTg4RsVj0GxjSYPvofVB0orBnepR3HO9n5mpJ7e0R1px49M3Pun2%2Fmdko3TDbhrl0g%3D%3D&X-Amz-Signature=833f55290f66453bf77bf56335ebcedbe2a47aaa63f9eb058137b190e8f1133c&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"5936c904-e24f-46c1-bba6-7485cf69649a\",\"upiId\":\"ddbo1@ybl\",\"mobileNo\":\"[REDACTED]\",\"upiAccountHolderName\":\"DGBD\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/5936c904-e24f-46c1-bba6-7485cf69649a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232DHJNONW4%2F20260417%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260417T051142Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCmFwLXNvdXRoLTEiRjBEAiBzmGtQYq5RxeHOS9vala8KbkjCB6SAVBQXul59jnt4EAIgHNEgiucj74%2BawIb%2FshykmGsYr8PLjg%2BtVQV3K6dWR3gq%2FwMIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgw4Mjk3NzM0MzY2NjAiDLjqsuM4DzsRt8wO%2FyrTAygpgOsp13FH7kDky56paTfORcCWdle8UTEvUVXG1e70m0E5gE1EQcD9c5FcMdPuNGksLDgvkx7IAKL7zuLeSYtylHXfTMHSVHfLcWzQ01SfHtkR%2F293n4OlbSdLrCS2C7OjbiFVPxUVaJeFjXgsbfrdl5Q5EYeMRqq7RdJzB0RubdH8W%2Fi5i%2F2DhxSFHcvHb2ZHk2UVo9f9yH%2BpyfEquh%2FDQFhw1P9EujWwVxesJcsIAI%2Bmqbx2VqKk2%2BTfl5oIGTQIpB76wZ6T7E9UMwCBLTI5kYQG6pRGuQ%2FictmII%2F%2BpQNAwIcPyYA2u64dZYP%2BYR5Phi92MTtZ%2BiCVebp6gSCEpYO0QYowlw%2FmfYNj3HkiOpyldLmQXYM%2Fr0NxkbyYV85tJzwdOk%2F1IyzP15DNJPfKp18O3ddP1H68h4fx3OYLosYKgsjLdkU3a%2BkaZ1f%2FpcN6%2FX32cFW2I7BGdNRj%2BXOxMYXpljsjliNrEDu1knKPN8rgUA4fbFGP8BzvqSL4JWMbJ1IRhYkfZqCfZ6EvvwRbGt%2Br4DJqOG31jYy%2FfJpmBPCDnnmkzfMOdRuZkjbrVWnvamg0BBw3VK3%2BVgkJauAzNrVM4pI7NFVqUNNXya6mF7N4lMJ77hs8GOqYBy4PcSX0a6pC2pc9KLjWeS78xHnc3VPRMMp%2F0qO0pYXTtx%2BASY2KYNsGw%2BzgO2LPCHAW1UXYegGTGZkAmULeuwjxbMCozSDtJ5HVAJrS65EviSd1A5vfl9PzVZTspgYg7uLP%2BbwshJ0Tlrswg1fNXdr%2FCgJDnXTg4RsVj0GxjSYPvofVB0orBnepR3HO9n5mpJ7e0R1px49M3Pun2%2Fmdko3TDbhrl0g%3D%3D&X-Amz-Signature=60ff110d7080c33662e9e228133bc5ab1267ba5f4fe47c0ddc63258c93062e72&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":\"ALL\",\"cfaCode\":\"ALL\"},{\"id\":\"907edb6b-5925-478f-8dce-9fdf609d83f8\",\"upiId\":\"hdb@ybl\",\"mobileNo\":\"14005260500\",\"upiAccountHolderName\":\"Test Account \",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/907edb6b-5925-478f-8dce-9fdf609d83f8.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232DHJNONW4%2F20260417%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260417T051142Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCmFwLXNvdXRoLTEiRjBEAiBzmGtQYq5RxeHOS9vala8KbkjCB6SAVBQXul59jnt4EAIgHNEgiucj74%2BawIb%2FshykmGsYr8PLjg%2BtVQV3K6dWR3gq%2FwMIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgw4Mjk3NzM0MzY2NjAiDLjqsuM4DzsRt8wO%2FyrTAygpgOsp13FH7kDky56paTfORcCWdle8UTEvUVXG1e70m0E5gE1EQcD9c5FcMdPuNGksLDgvkx7IAKL7zuLeSYtylHXfTMHSVHfLcWzQ01SfHtkR%2F293n4OlbSdLrCS2C7OjbiFVPxUVaJeFjXgsbfrdl5Q5EYeMRqq7RdJzB0RubdH8W%2Fi5i%2F2DhxSFHcvHb2ZHk2UVo9f9yH%2BpyfEquh%2FDQFhw1P9EujWwVxesJcsIAI%2Bmqbx2VqKk2%2BTfl5oIGTQIpB76wZ6T7E9UMwCBLTI5kYQG6pRGuQ%2FictmII%2F%2BpQNAwIcPyYA2u64dZYP%2BYR5Phi92MTtZ%2BiCVebp6gSCEpYO0QYowlw%2FmfYNj3HkiOpyldLmQXYM%2Fr0NxkbyYV85tJzwdOk%2F1IyzP15DNJPfKp18O3ddP1H68h4fx3OYLosYKgsjLdkU3a%2BkaZ1f%2FpcN6%2FX32cFW2I7BGdNRj%2BXOxMYXpljsjliNrEDu1knKPN8rgUA4fbFGP8BzvqSL4JWMbJ1IRhYkfZqCfZ6EvvwRbGt%2Br4DJqOG31jYy%2FfJpmBPCDnnmkzfMOdRuZkjbrVWnvamg0BBw3VK3%2BVgkJauAzNrVM4pI7NFVqUNNXya6mF7N4lMJ77hs8GOqYBy4PcSX0a6pC2pc9KLjWeS78xHnc3VPRMMp%2F0qO0pYXTtx%2BASY2KYNsGw%2BzgO2LPCHAW1UXYegGTGZkAmULeuwjxbMCozSDtJ5HVAJrS65EviSd1A5vfl9PzVZTspgYg7uLP%2BbwshJ0Tlrswg1fNXdr%2FCgJDnXTg4RsVj0GxjSYPvofVB0orBnepR3HO9n5mpJ7e0R1px49M3Pun2%2Fmdko3TDbhrl0g%3D%3D&X-Amz-Signature=9a6c0c7948906c77d499d5a111a8976d489861b6d2ad0d7048b8e59acd68716d&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"a11bceb2-c3ac-46f5-bcf7-02cdb46511dc\",\"upiId\":\"hd566b@ybl\",\"mobileNo\":\"911400526050\",\"upiAccountHolderName\":\"Test Account UPI\",\"qrCodeUrl\":\"\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"bc514eb6-8f77-40fc-b53d-3e87cc605d7f\",\"upiId\":\"gvgv@gyvh\",\"mobileNo\":\"[REDACTED]\",\"upiAccountHolderName\":\"hbhbj\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/bc514eb6-8f77-40fc-b53d-3e87cc605d7f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232DHJNONW4%2F20260417%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260417T051142Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCmFwLXNvdXRoLTEiRjBEAiBzmGtQYq5RxeHOS9vala8KbkjCB6SAVBQXul59jnt4EAIgHNEgiucj74%2BawIb%2FshykmGsYr8PLjg%2BtVQV3K6dWR3gq%2FwMIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgw4Mjk3NzM0MzY2NjAiDLjqsuM4DzsRt8wO%2FyrTAygpgOsp13FH7kDky56paTfORcCWdle8UTEvUVXG1e70m0E5gE1EQcD9c5FcMdPuNGksLDgvkx7IAKL7zuLeSYtylHXfTMHSVHfLcWzQ01SfHtkR%2F293n4OlbSdLrCS2C7OjbiFVPxUVaJeFjXgsbfrdl5Q5EYeMRqq7RdJzB0RubdH8W%2Fi5i%2F2DhxSFHcvHb2ZHk2UVo9f9yH%2BpyfEquh%2FDQFhw1P9EujWwVxesJcsIAI%2Bmqbx2VqKk2%2BTfl5oIGTQIpB76wZ6T7E9UMwCBLTI5kYQG6pRGuQ%2FictmII%2F%2BpQNAwIcPyYA2u64dZYP%2BYR5Phi92MTtZ%2BiCVebp6gSCEpYO0QYowlw%2FmfYNj3HkiOpyldLmQXYM%2Fr0NxkbyYV85tJzwdOk%2F1IyzP15DNJPfKp18O3ddP1H68h4fx3OYLosYKgsjLdkU3a%2BkaZ1f%2FpcN6%2FX32cFW2I7BGdNRj%2BXOxMYXpljsjliNrEDu1knKPN8rgUA4fbFGP8BzvqSL4JWMbJ1IRhYkfZqCfZ6EvvwRbGt%2Br4DJqOG31jYy%2FfJpmBPCDnnmkzfMOdRuZkjbrVWnvamg0BBw3VK3%2BVgkJauAzNrVM4pI7NFVqUNNXya6mF7N4lMJ77hs8GOqYBy4PcSX0a6pC2pc9KLjWeS78xHnc3VPRMMp%2F0qO0pYXTtx%2BASY2KYNsGw%2BzgO2LPCHAW1UXYegGTGZkAmULeuwjxbMCozSDtJ5HVAJrS65EviSd1A5vfl9PzVZTspgYg7uLP%2BbwshJ0Tlrswg1fNXdr%2FCgJDnXTg4RsVj0GxjSYPvofVB0orBnepR3HO9n5mpJ7e0R1px49M3Pun2%2Fmdko3TDbhrl0g%3D%3D&X-Amz-Signature=7ba77ebd64a204d6a551797d9647f77e56e6d8c472f9a1170ae89d3b9fa2b3db&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"dd3fa77f-2984-4c00-9491-c32928c2ae45\",\"upiId\":\"vsreddy@sbi\",\"mobileNo\":\"2875875875\",\"upiAccountHolderName\":\"Sridhar\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/dd3fa77f-2984-4c00-9491-c32928c2ae45.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232DHJNONW4%2F20260417%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Dat...[TRUNCATED]",
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
