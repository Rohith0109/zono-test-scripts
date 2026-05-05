/**
 * Sentinel flow — Vitest format
 * Flow: test  flow
 * Generated: 2026-05-05T10:05:40.542Z
 *
 * Run with: npx vitest run flows/test-flow/5748f300-6917-464b-927c-5d6982da34cb.flow.vitest.ts
 */
import { expect, test } from 'vitest';

export const metadata = {
  "flowId": "5748f300-6917-464b-927c-5d6982da34cb",
  "name": "test  flow",
  "description": "",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "stepCount": 2,
  "framework": "vitest",
  "executionMode": "ci-only"
} as const;

type FlowState = Record<string, unknown>;

test("test  flow", async () => {
  const baseUrl = (process.env.SENTINEL_BASE_URL || metadata.apiDomain).replace(/\/+$/, '');
  const authToken = process.env.SENTINEL_TOKEN || '';
  const state: FlowState = {};

  // Step 1: POST /hub/commerce-v2/products/search/{workspaceId}
  {
    const queryPart = "?pageNo=1&pageSize=10&customerId=&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375";
    const url = new URL(`${baseUrl}/hub/commerce-v2/products/search/{workspaceId}${queryPart.startsWith('?') ? queryPart : `?${queryPart}`}`);
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
      "authorization": "[REDACTED]",
      "content-type": "application/json",
      authorization: `Bearer ${String(state['__token__'] ?? authToken)}`,
    },
      body: JSON.stringify({"searchKey":"","includeFacets":true,"includeDivisions":true,"includeCategoryCodesList":true,"includeCfas":true,"skuCode":"","sortDirection":"ASC","sortBy":"sortOrder","groupByProduct":true,"inventoryFilter":"","stockFilter":"","divisionIds":[],"cfaIds":[],"categoryCodes":[],"statusFilter":"","collectionIds":[]}),
    });
    expect([201]).toContain(response.status);
    const responseBody = await response.json();

  }

  // Step 2: GET /configsettings/config
  {
    const queryPart = "?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&module=Catalogue&rollback=false";
    const url = new URL(`${baseUrl}/configsettings/config${queryPart.startsWith('?') ? queryPart : `?${queryPart}`}`);
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
      "authorization": "[REDACTED]",
      authorization: `Bearer ${String(state['__token__'] ?? authToken)}`,
    },
      
    });
    expect([200]).toContain(response.status);
    const responseBody = await response.json();

  }
});
