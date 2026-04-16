/**
 * Sentinel testcase script
 * Generated from extension capture export flow.
 */
export const metadata = {
  "testCaseId": "2faa769d-050c-4205-bfb1-74ad5f57688e",
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
    "documentType": "knowledge"
  },
  "pathParams": {
    "listId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375"
  },
  "assertions": {
    "expectedStatus": [
      201
    ],
    "requiredResponsePaths": [
      "$.data.files[0]"
    ],
    "ignoreResponsePaths": [],
    "equals": {}
  },
  "expectedStatus": 201,
  "responseSample": {
    "data": {
      "files": [
        {
          "id": "New_leads/",
          "name": "New_leads",
          "isDir": true,
          "documentType": "knowledge"
        },
        {
          "id": "",
          "name": "broucher",
          "isDir": true,
          "documentType": "knowledge",
          "subType": "broucher"
        },
        {
          "id": "BirlaNu_Pipes and Fittings Brochure_16 July 2025_Digital_11zon.pdf",
          "name": "BirlaNu_Pipes and Fittings Brochure_16 July 2025_Digital_11zon.pdf",
          "isDir": false,
          "documentType": "knowledge",
          "tags": [
            {
              "Key": "tag_1",
              "Value": "userguide"
            }
          ],
          "url": "https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/drive/knowledge/BirlaNu_Pipes%20and%20Fittings%20Brochure_16%20July%202025_Digital_11zon.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204236Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNBxDCojoXPBjqlAY7pMnLdhkcihlXzoHmWcbU2MmHaGN0%2FHyAZLZFBD9NUK485z0zNgmBKzqZwiw4A0rwlXW1MiD0CRnORkayt%2Bb4zsEPxe5LwzQx9JNE6RoRj4Mv0G5JBXnAyuZatV2z%2B9nukRU6jDbz2TyUQwSsCGpuX2im5%2FxYFwr0grIXH1YDtbH3rBUjH91k%2BYR3NaDPLmMatf8HU%2BSdVCkQrSM7B%2F32pSuc0Qg%3D%3D&X-Amz-Signature=12ef0b3e90f68dba52ff13e74c6d331608b7df8745487f02d8af538969551e8b&X-Amz-SignedHeaders=host"
        },
        {
          "id": "ELECTRONICS.txt",
          "name": "ELECTRONICS.txt",
          "isDir": false,
          "documentType": "knowledge",
          "tags": [
            {
              "Key": "indexed",
              "Value": "true"
            },
            {
              "Key": "last_indexed",
              "Value": "2026-04-13T09:49:01.897069+00:00"
            },
            {
              "Key": "chunks",
              "Value": "2"
            },
            {
              "Key": "tag",
              "Value": "knowledge"
            }
          ],
          "url": "https://zono-digital-qa-media.s3.ap-south-1.amazonaws.com/workspaces/be436b63-64ba-4f94-bfcf-3e3e0bc4e375/drive/knowledge/ELECTRONICS.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4CMSZ232HU73QWUW%2F20260416%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T204236Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEA6Uv72bQxjv6Y9HFN7wE%2FMt%2FalwT1GzC3A0rmjA7lzM4CIE%2FPmuVudUtle7Z%2F4bIR%2BJ1DPERK1xOdHYJXf4DvSWV%2FKv8DCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMODI5NzczNDM2NjYwIgzL%2F6ZHztd7C1XQvNMq0wNkl8zq%2B1DEwIFPU25xB0Kew6MjJ4JIGSBA4nOs2mox3TqCFQoefFdpk2knS%2FQA1cEV3ZzmCYVbBnH90rVmEgZFp%2F88O4KQylTk74JMzqONOkiN1uK%2FPw6Pf5N8ZzMLtGELSp0G%2FxrFaQGM9oBHAKP9IrAkVkTP3kzyVgft8QUIjQIVdFT0v1%2F6cf3fvjA9FOQraJbVBR7h5r1r9MDwyX5E9NWjSDpIk4RYqWpKPOknwjLr1rkbGAiSrXw%2FURiD%2BImSNCamH25pMCpq4H0kL%2FtYih%2FszzJeLUMxiYW%2FOY710GT6beY%2BYUvwNRdMncTYvlJppRmZoe7I49z9oHg%2F0qXarUM8A3Tc8WchcqfbumhuBoJoCgHLyP4WFp5IzxMnMk2fdQj0wXA7xb1yO4ULMWxyqFyhZABAHS0WEhlTBO%2BfEnQIoZ8S4JwNj9IsloY4HOFASecSoIikdBxZLOv4t52Zy2WrN4J3H5%2BS7vd88YfjUgWUvJ0C%2FqXu0t9YOlsXplsrXHS1GtJVEwZX0p8lQYziHpoBM6i217Ynn7JTivjo7fyxpjl6v3iy8FNkCWysg7P3TgH37RUGG3p%2BTD38IEl3JcjW4IG5z3eS6YlRO0jyMcNBxDCojoXPBjqlAY7pMnLdhkcihlXzoHmWcbU2MmHaGN0%2FHyAZLZFBD9NUK485z0zNgmBKzqZwiw4A0rwlXW1MiD0CRnORkayt%2Bb4zsEPxe5LwzQx9JNE6RoRj4Mv0G5JBXnAyuZatV2z%2B9nukRU6jDbz2TyUQwSsCGpuX2im5%2FxYFwr0grIXH1YDtbH3rBUjH91k%2BYR3NaDPLmMatf8HU%2BSdVCkQrSM7B%2F32pSuc0Qg%3D%3D&X-Amz-Signature=9cac2804b218b5d6286824a667ce952cc9fe19c06afbe070c850853faa000862&X-Amz-SignedHeaders=host"
        }
      ]
    }
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
