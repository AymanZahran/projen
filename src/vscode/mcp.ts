import { VsCode } from "./vscode";
import { Component } from "../component";
import { JsonFile } from "../json";

/**
 * MCP configuration for VS Code workspaces.
 */
export class VsCodeMcp extends Component {
* MCP configuration for VS Code workspaces.
 */
export class VsCodeMcp extends Component {
  private readonly content: { version: number; projects: any[] };
  public readonly file: JsonFile;

  constructor(vscode: VsCode) {
  public readonly file: JsonFile;

  constructor(vscode: VsCode) {
    super(vscode.project);

    this.content = {
      version: 1,
      projects: [],
    };

    this.file = new JsonFile(vscode.project, ".vscode/mcp.json", {
      allowComments: true,
      omitEmpty: false,
      obj: this.content,
    });
  }
}
