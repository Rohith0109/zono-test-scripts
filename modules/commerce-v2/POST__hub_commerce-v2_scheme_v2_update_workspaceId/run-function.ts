import endpointMeta from '../../../metadata/commerce-v2/POST__hub_commerce-v2_scheme_v2_update_workspaceId.json';
import { runAssertions } from '../../../utilities/run-assertions';

export async function run(context: {
  baseUrl: string;
  authToken: string;
  workspaceId?: string;
  caseIndex?: number;
  pathParamOverrides?: Record<string, string>;
  bodyOverride?: unknown;
  fetchImpl?: typeof fetch;
}) {
  const fetcher = context.fetchImpl || fetch;
  const wsArr = Array.isArray(endpointMeta[context.workspaceId || ''])
    ? endpointMeta[context.workspaceId || '']
    : Array.isArray(endpointMeta.default)
      ? endpointMeta.default
      : [endpointMeta.default || endpointMeta[context.workspaceId || ''] || {}];
  const targetIndex = context.caseIndex != null ? context.caseIndex : null;
  const targets = targetIndex !== null ? [wsArr[targetIndex]].filter(Boolean) : wsArr;

  const results = [];
  for (const ws of targets) {
    let path = '/hub/commerce-v2/scheme/v2/update/{workspaceId}';
    const pathParams = { ...(ws.pathParams || {}), ...(context.pathParamOverrides || {}) };
    for (const [key, value] of Object.entries(pathParams)) {
      path = path.replaceAll(`{${key}}`, String(value));
    }

    const query = ws.query ? `?${String(ws.query).replace(/^\?/, '')}` : '';
    const url = `${String(context.baseUrl || '').replace(/\/+$/, '')}${path}${query}`;

    const startedAt = Date.now();
    const response = await fetcher(url, {
      method: endpointMeta._info.method || 'POST',
      headers: {
        ...(ws.headers || {}),
        authorization: String(context.authToken || '').startsWith('Bearer ')
          ? String(context.authToken || '')
          : `Bearer ${String(context.authToken || '')}`,
      },
      body: context.bodyOverride != null ? JSON.stringify(context.bodyOverride) : ws.body != null ? JSON.stringify(ws.body) : undefined,
    });
    const durationMs = Date.now() - startedAt;
    const body = await response.json();
    const result = { status: response.status, body, durationMs };
    runAssertions(result, ws.assertions || {});
    results.push(result);
  }
  return results.length === 1 ? results[0] : results;
}
