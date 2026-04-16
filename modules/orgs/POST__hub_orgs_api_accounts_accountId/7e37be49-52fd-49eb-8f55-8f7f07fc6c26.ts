/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "7e37be49-52fd-49eb-8f55-8f7f07fc6c26",
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
  "responseSample": "{\"bankAccounts\":[{\"id\":\"2a2da8c4-0e06-4a65-aabc-6e02caf372b7\",\"bankName\":\"SBI\",\"accountNumber\":\"[REDACTED]\",\"accountHolderName\":\"Sridhar\",\"ifscCode\":\"SBIN0000\",\"cfaCode\":\"ALL\",\"paymentNotificationtype\":\"ALL\"},{\"id\":\"6dc3a0f6-80de-4629-b741-e5c003cfdc61\",\"bankName\":\"JHjkfjkdfkj\",\"accountNumber\":\"[REDACTED]\",\"accountHolderName\":\"JHJHJKHKJF\",\"ifscCode\":\"KJHKJDFHJH\",\"cfaCode\":\"ALL\",\"paymentNotificationtype\":null}],\"upiAccounts\":[{\"id\":\"46c77a70-11eb-4115-8937-a5c1f5a748c6\",\"upiId\":\"something@upi\",\"mobileNo\":\"911111111398\",\"upiAccountHolderName\":\"Checking something\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/46c77a70-11eb-4115-8937-a5c1f5a748c6.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204234Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNBxDCojoXPBjqlAY7pMnLdhkcihlXzoHmWcbU2MmHaGN0%2FHyAZLZFBD9NUK485z0zNgmBKzqZwiw4A0rwlXW1MiD0CRnORkayt%2Bb4zsEPxe5LwzQx9JNE6RoRj4Mv0G5JBXnAyuZatV2z%2B9nukRU6jDbz2TyUQwSsCGpuX2im5%2FxYFwr0grIXH1YDtbH3rBUjH91k%2BYR3NaDPLmMatf8HU%2BSdVCkQrSM7B%2F32pSuc0Qg%3D%3D&X-Amz-Signature=f739b6b896658ba8ac901bd1ef1501f73c99a5008a91cecc52b156b5d39b959b&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"5936c904-e24f-46c1-bba6-7485cf69649a\",\"upiId\":\"ddbo1@ybl\",\"mobileNo\":\"[REDACTED]\",\"upiAccountHolderName\":\"DGBD\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/5936c904-e24f-46c1-bba6-7485cf69649a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204234Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNBxDCojoXPBjqlAY7pMnLdhkcihlXzoHmWcbU2MmHaGN0%2FHyAZLZFBD9NUK485z0zNgmBKzqZwiw4A0rwlXW1MiD0CRnORkayt%2Bb4zsEPxe5LwzQx9JNE6RoRj4Mv0G5JBXnAyuZatV2z%2B9nukRU6jDbz2TyUQwSsCGpuX2im5%2FxYFwr0grIXH1YDtbH3rBUjH91k%2BYR3NaDPLmMatf8HU%2BSdVCkQrSM7B%2F32pSuc0Qg%3D%3D&X-Amz-Signature=480966c17bd7f632634b44bf77e84283afea9825e91ef1fcfb21fe9682e1924f&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":\"ALL\",\"cfaCode\":\"ALL\"},{\"id\":\"907edb6b-5925-478f-8dce-9fdf609d83f8\",\"upiId\":\"hdb@ybl\",\"mobileNo\":\"14005260500\",\"upiAccountHolderName\":\"Test Account \",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/907edb6b-5925-478f-8dce-9fdf609d83f8.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204234Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNBxDCojoXPBjqlAY7pMnLdhkcihlXzoHmWcbU2MmHaGN0%2FHyAZLZFBD9NUK485z0zNgmBKzqZwiw4A0rwlXW1MiD0CRnORkayt%2Bb4zsEPxe5LwzQx9JNE6RoRj4Mv0G5JBXnAyuZatV2z%2B9nukRU6jDbz2TyUQwSsCGpuX2im5%2FxYFwr0grIXH1YDtbH3rBUjH91k%2BYR3NaDPLmMatf8HU%2BSdVCkQrSM7B%2F32pSuc0Qg%3D%3D&X-Amz-Signature=071e8c517a6f930f5b46bf12a35e2c8759e6ec55ad4340a85393bc758dc9917b&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"a11bceb2-c3ac-46f5-bcf7-02cdb46511dc\",\"upiId\":\"hd566b@ybl\",\"mobileNo\":\"911400526050\",\"upiAccountHolderName\":\"Test Account UPI\",\"qrCodeUrl\":\"\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"bc514eb6-8f77-40fc-b53d-3e87cc605d7f\",\"upiId\":\"gvgv@gyvh\",\"mobileNo\":\"[REDACTED]\",\"upiAccountHolderName\":\"hbhbj\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/bc514eb6-8f77-40fc-b53d-3e87cc605d7f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204234Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNBxDCojoXPBjqlAY7pMnLdhkcihlXzoHmWcbU2MmHaGN0%2FHyAZLZFBD9NUK485z0zNgmBKzqZwiw4A0rwlXW1MiD0CRnORkayt%2Bb4zsEPxe5LwzQx9JNE6RoRj4Mv0G5JBXnAyuZatV2z%2B9nukRU6jDbz2TyUQwSsCGpuX2im5%2FxYFwr0grIXH1YDtbH3rBUjH91k%2BYR3NaDPLmMatf8HU%2BSdVCkQrSM7B%2F32pSuc0Qg%3D%3D&X-Amz-Signature=33d3ff5b84f9a6f7388a2ee3d16b28391ea1347aeddc7d01f718436a3b7bdada&X-Amz-SignedHeaders=host\",\"paymentNotificationtype\":null,\"cfaCode\":\"ALL\"},{\"id\":\"dd3fa77f-2984-4c00-9491-c32928c2ae45\",\"upiId\":\"vsreddy@sbi\",\"mobileNo\":\"2875875875\",\"upiAccountHolderName\":\"Sridhar\",\"qrCodeUrl\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/payment/qr_code/dd3fa77f-2984-4c00-9491-c32928c2ae45.png?X-Amz-Algori...[TRUNCATED]",
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
