/**
 * Sentinel flow — Script Runner format
 * Flow: test  flow
 * Converted from legacy .flow.vitest.ts
 */

export const metadata = {
  flowId: '5748f300-6917-464b-927c-5d6982da34cb',
  name: 'test  flow',
  description: '',
  workspaceId: 'be436b63-64ba-4f94-bfcf-3e3e0bc4e375',
  apiDomain: 'https://api-qa.zotok.ai',
  stepCount: 2,
  framework: 'script-runner',
  executionMode: 'dashboard-and-repo',
} as const;

type FlowState = Record<string, unknown>;

export async function run(context: {
  baseUrl?: string;
  authToken?: string;
  fetchImpl?: typeof fetch;
}): Promise<{ status: number; body: unknown; durationMs: number }> {
  const startedAt = Date.now();
  const baseUrl = (context.baseUrl || metadata.apiDomain).replace(/\/+$/, '');
  const authToken = context.authToken || '';
  const fetchFn = context.fetchImpl || fetch;
  const state: FlowState = {};

  // Step 1: POST /hub/commerce-v2/products/search/{workspaceId}
  {
    const queryPart = '?pageNo=1&pageSize=10&customerId=&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375';
    const url = new URL(`${baseUrl}/hub/commerce-v2/products/search/{workspaceId}${queryPart.startsWith('?') ? queryPart : `?${queryPart}`}`);
    const response = await fetchFn(url.toString(), {
      method: 'POST',
      headers: {
        authorization: `Bearer ${String(state['__token__'] ?? authToken)}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ searchKey: '', includeFacets: true, includeDivisions: true, includeCategoryCodesList: true, includeCfas: true, skuCode: '', sortDirection: 'ASC', sortBy: 'sortOrder', groupByProduct: true, inventoryFilter: '', stockFilter: '', divisionIds: [], cfaIds: [], categoryCodes: [], statusFilter: '', collectionIds: [] }),
    });
    if (![201].includes(response.status)) {
      throw new Error(`Step 1 expected status [201] but got ${response.status}`);
    }
    await response.json();
  }

  // Step 2: GET /configsettings/config
  {
    const queryPart = '?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&module=Catalogue&rollback=false';
    const url = new URL(`${baseUrl}/configsettings/config${queryPart.startsWith('?') ? queryPart : `?${queryPart}`}`);
    const response = await fetchFn(url.toString(), {
      method: 'GET',
      headers: {
        authorization: `Bearer ${String(state['__token__'] ?? authToken)}`,
      },
    });
    if (![200].includes(response.status)) {
      throw new Error(`Step 2 expected status [200] but got ${response.status}`);
    }
    await response.json();
  }

  return {
    status: 200,
    body: { ok: true, flowId: metadata.flowId, flowName: metadata.name, stepsExecuted: 2, state },
    durationMs: Date.now() - startedAt,
  };
}
