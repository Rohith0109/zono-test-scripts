import endpointMeta from '../../../metadata/orgs/GET__hub_orgs_api_customers_workspaceId.json';
import { runAssertions } from '../../../utilities/run-assertions';

export async function run(context: {
  baseUrl: string;
  authToken: string;
  workspaceId?: string;
  testcaseId?: string;
  pathParamOverrides?: Record<string, string>;
  bodyOverride?: unknown;
  fetchImpl?: typeof fetch;
}) {
  const fetcher = context.fetchImpl || fetch;
  const testcases: typeof endpointMeta.testcases = endpointMeta.testcases || [];

  const tc =
    testcases.find((t: typeof testcases[number]) => t.id === context.testcaseId) ??
    testcases.find((t: typeof testcases[number]) => t.id === endpointMeta.defaultTestcaseId) ??
    testcases[0];

  if (!tc) {
    throw new Error(`No testcase found in ${endpointMeta.endpointKey}`);
  }

  const scope: Record<string, unknown> =
    context.workspaceId ? ((tc.workspaceScopes ?? {})[context.workspaceId] ?? {}) : {};

  const pathParams = {
    ...(tc.request.pathParams ?? {}),
    ...((scope.pathParams as Record<string, string> | undefined) ?? {}),
    ...(context.pathParamOverrides ?? {}),
  };
  const query: string = (scope.query as string | undefined) ?? tc.request.query ?? '';
  const body = context.bodyOverride ?? (scope.body !== undefined ? scope.body : tc.request.body);
  const headers: Record<string, string> = {
    ...(tc.request.headers ?? {}),
    ...((scope.headers as Record<string, string> | undefined) ?? {}),
  };
  const assertions = tc.assertions ?? {};

  let resolvedPath = '/hub/orgs/api/customers/{workspaceId}';
  for (const [key, value] of Object.entries(pathParams)) {
    resolvedPath = resolvedPath.replaceAll(`{${key}}`, String(value));
  }

  const queryStr = query ? `?${String(query).replace(/^\?/, '')}` : '';
  const url = `${String(context.baseUrl || '').replace(/\/+$/, '')}${resolvedPath}${queryStr}`;

  const startedAt = Date.now();
  const response = await fetcher(url, {
    method: 'GET',
    headers: {
      ...headers,
      authorization: String(context.authToken || '').startsWith('Bearer ')
        ? String(context.authToken || '')
        : `Bearer ${String(context.authToken || '')}`,
    },
    
  });
  const durationMs = Date.now() - startedAt;
  const responseBody = await response.json().catch(() => null);
  const result = { status: response.status, body: responseBody, durationMs };
  runAssertions(result, assertions);
  return result;
}
