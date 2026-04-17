import { expect } from 'vitest';

export interface AssertionConfig {
  expectedStatus?: number[];
  requiredResponsePaths?: string[];
  equals?: Record<string, unknown>;
  contains?: Record<string, unknown>;
  regex?: Record<string, string>;
}

export interface RunResult {
  status: number;
  body: unknown;
  durationMs: number;
}

function get(obj: unknown, path: string): unknown {
  return path.split('.').reduce((cur, key) => {
    if (cur == null || typeof cur !== 'object') return undefined;
    return (cur as Record<string, unknown>)[key];
  }, obj);
}

export function runAssertions(result: RunResult, assertions: AssertionConfig): void {
  if (assertions.expectedStatus?.length) {
    expect(
      assertions.expectedStatus,
      `Expected status to be one of [${assertions.expectedStatus.join(', ')}], got ${result.status}`,
    ).toContain(result.status);
  }

  for (const path of assertions.requiredResponsePaths ?? []) {
    expect(
      get(result.body, path),
      `Required path "${path}" missing in response`,
    ).toBeDefined();
  }

  for (const [path, expected] of Object.entries(assertions.equals ?? {})) {
    expect(
      get(result.body, path),
      `equals check failed at "${path}"`,
    ).toBe(expected);
  }

  for (const [path, expected] of Object.entries(assertions.contains ?? {})) {
    expect(
      JSON.stringify(get(result.body, path) ?? ''),
      `contains check failed at "${path}"`,
    ).toContain(String(expected));
  }

  for (const [path, pattern] of Object.entries(assertions.regex ?? {})) {
    expect(
      String(get(result.body, path) ?? ''),
      `regex check failed at "${path}"`,
    ).toMatch(new RegExp(pattern));
  }
}
