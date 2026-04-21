import endpointMeta from '../../../metadata/reports/POST__hub_reports_api_v2_dashboard_business-summary.json';
import { runAssertions } from '../../../sentinel/assertions';

export async function run(context: {
  baseUrl: string;
  authToken: string;
  workspaceId?: string;
  pathParamOverrides?: Record<string, string>;
  bodyOverride?: unknown;
  fetchImpl?: typeof fetch;
}) {
  const fetcher = context.fetchImpl || fetch;
  const ws = endpointMeta[context.workspaceId || ''] || endpointMeta.default;

  let path = '/hub/reports/api/v2/dashboard/business-summary';
  const pathParams = { ...(ws.pathParams || {}), ...((context.pathParamOverrides || {})) };
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

  return result;
}
