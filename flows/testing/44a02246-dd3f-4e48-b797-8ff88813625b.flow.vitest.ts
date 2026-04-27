/**
 * Sentinel flow — Vitest format
 * Flow: testing
 * Generated: 2026-04-27T06:54:56.702Z
 *
 * Run with: npx vitest run flows/testing/44a02246-dd3f-4e48-b797-8ff88813625b.flow.vitest.ts
 */
import { expect, test } from 'vitest';

export const metadata = {
  "flowId": "44a02246-dd3f-4e48-b797-8ff88813625b",
  "name": "testing",
  "description": "",
  "workspaceId": "be436b63-64ba-4f94-bfcf-3e3e0bc4e375",
  "apiDomain": "https://api-qa.zotok.ai",
  "stepCount": 2,
  "framework": "vitest",
  "executionMode": "ci-only"
} as const;

type FlowState = Record<string, unknown>;

test("testing", async () => {
  const baseUrl = (process.env.SENTINEL_BASE_URL || metadata.apiDomain).replace(/\/+$/, '');
  const authToken = process.env.SENTINEL_TOKEN || '';
  const state: FlowState = {};

  // Step 1: GET /hub/communication-v2/api/channel/member
  {
    const queryPart = "?workspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&id=4b993e24-277c-42fe-a5db-8ebf08662abe&sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375&random=0.999828238645406";
    const url = new URL(`${baseUrl}/hub/communication-v2/api/channel/member${queryPart.startsWith('?') ? queryPart : `?${queryPart}`}`);
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

  // Step 2: GET /hub/communication-v2/api/conversations/internal-notes/{internalnoteId}
  {
    const queryPart = "?sellerWorkspaceId=be436b63-64ba-4f94-bfcf-3e3e0bc4e375";
    const url = new URL(`${baseUrl}/hub/communication-v2/api/conversations/internal-notes/{internalnoteId}${queryPart.startsWith('?') ? queryPart : `?${queryPart}`}`);
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
