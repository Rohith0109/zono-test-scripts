/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "d25d4a0c-68e1-4e37-8ebb-cd28ac83bec9",
  "method": "POST",
  "endpoint": "POST /hub/orgs/api/docs/zo-file/list/{listId}",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "module": "orgs",
  "query": "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "headers": {
    "authorization": "[REDACTED]",
    "content-type": "application/json"
  },
  "body": {
    "documentType": "templates"
  },
  "pathParams": {
    "listId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
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
  "responseSample": "{\"data\":{\"files\":[{\"id\":\"Credit_note.html\",\"name\":\"Credit_note.html\",\"isDir\":false,\"documentType\":\"templates\",\"tags\":[],\"url\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/drive/templates/Credit_note.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204236Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNBxDCojoXPBjqlAY7pMnLdhkcihlXzoHmWcbU2MmHaGN0%2FHyAZLZFBD9NUK485z0zNgmBKzqZwiw4A0rwlXW1MiD0CRnORkayt%2Bb4zsEPxe5LwzQx9JNE6RoRj4Mv0G5JBXnAyuZatV2z%2B9nukRU6jDbz2TyUQwSsCGpuX2im5%2FxYFwr0grIXH1YDtbH3rBUjH91k%2BYR3NaDPLmMatf8HU%2BSdVCkQrSM7B%2F32pSuc0Qg%3D%3D&X-Amz-Signature=6475b0c7b51bdb0e10b2b590da52b3233718a53df9f678eea253499c62b79462&X-Amz-SignedHeaders=host\"},{\"id\":\"Debit_note.html\",\"name\":\"Debit_note.html\",\"isDir\":false,\"documentType\":\"templates\",\"tags\":[],\"url\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/drive/templates/Debit_note.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204236Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNBxDCojoXPBjqlAY7pMnLdhkcihlXzoHmWcbU2MmHaGN0%2FHyAZLZFBD9NUK485z0zNgmBKzqZwiw4A0rwlXW1MiD0CRnORkayt%2Bb4zsEPxe5LwzQx9JNE6RoRj4Mv0G5JBXnAyuZatV2z%2B9nukRU6jDbz2TyUQwSsCGpuX2im5%2FxYFwr0grIXH1YDtbH3rBUjH91k%2BYR3NaDPLmMatf8HU%2BSdVCkQrSM7B%2F32pSuc0Qg%3D%3D&X-Amz-Signature=dc30ed83f542069180b8cba65f9917ec93343c7f750802a9e48c17e1c0dfe438&X-Amz-SignedHeaders=host\"},{\"id\":\"Payment.html\",\"name\":\"Payment.html\",\"isDir\":false,\"documentType\":\"templates\",\"tags\":[],\"url\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/drive/templates/Payment.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204236Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNBxDCojoXPBjqlAY7pMnLdhkcihlXzoHmWcbU2MmHaGN0%2FHyAZLZFBD9NUK485z0zNgmBKzqZwiw4A0rwlXW1MiD0CRnORkayt%2Bb4zsEPxe5LwzQx9JNE6RoRj4Mv0G5JBXnAyuZatV2z%2B9nukRU6jDbz2TyUQwSsCGpuX2im5%2FxYFwr0grIXH1YDtbH3rBUjH91k%2BYR3NaDPLmMatf8HU%2BSdVCkQrSM7B%2F32pSuc0Qg%3D%3D&X-Amz-Signature=f772e249d2bb69c7066eb9cc7323106cf9908e55a0256c3f3feb00458fa33342&X-Amz-SignedHeaders=host\"},{\"id\":\"update-debit-note.hml\",\"name\":\"update-debit-note.hml\",\"isDir\":false,\"documentType\":\"templates\",\"tags\":[],\"url\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/drive/templates/update-debit-note.hml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204236Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNBxDCojoXPBjqlAY7pMnLdhkcihlXzoHmWcbU2MmHaGN0%2FHyAZLZFBD9NUK485z0zNgmBKzqZwiw4A0rwlXW1MiD0CRnORkayt%2Bb4zsEPxe5LwzQx9JNE6RoRj4Mv0G5JBXnAyuZatV2z%2B9nukRU6jDbz2TyUQwSsCGpuX2im5%2FxYFwr0grIXH1YDtbH3rBUjH91k%2BYR3NaDPLmMatf8HU%2BSdVCkQrSM7B%2F32pSuc0Qg%3D%3D&X-Amz-Signature=7b555af875e0b0abd642c85750e7ad243add31f3fb127f158acfe089bb829575&X-Amz-SignedHeaders=host\"}],\"defaultFiles\":[{\"id\":\"Credit_note.html\",\"name\":\"Credit_note.html\",\"isDir\":false,\"documentType\":\"templates\",\"tags\":[],\"url\":\"https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/default/templates/Credit_note.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204236Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNB...[TRUNCATED]",
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
