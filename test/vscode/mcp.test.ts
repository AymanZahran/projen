import { PROJEN_MARKER } from "../../src/common";
import { synthSnapshot, TestProject } from "../util";

const MCP_FILE = ".vscode/mcp.json";

test("default mcp config", () => {
  const project = new TestProject();

  project.vscode?.mcp;

  const output = synthSnapshot(project)[MCP_FILE];
  expect(output).toMatchObject({
    [Symbol.for("before-all")]: [
      { type: "LineComment", value: expect.stringContaining(PROJEN_MARKER) },
    ],
  });
  expect(output).toStrictEqual({
    version: 1,
    projects: [],
  });
});
