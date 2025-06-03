import { VsCodeRecommendedExtensions } from "./extensions";
import { VsCodeLaunchConfig } from "./launch-config";
import { VsCodeSettings } from "./settings";
import { VsCodeMcp } from "./mcp";
import { Component } from "../component";
import { Project } from "../project";

export class VsCode extends Component {
  private _launchConfig?: VsCodeLaunchConfig;
  private _settings?: VsCodeSettings;
  private _extensions?: VsCodeRecommendedExtensions;
  private _mcp?: VsCodeMcp;

  constructor(project: Project) {
    super(project);
  }

  public get launchConfiguration() {
    if (!this._launchConfig) {
      this._launchConfig = new VsCodeLaunchConfig(this);
    }

    return this._launchConfig;
  }

  public get settings() {
    if (!this._settings) {
      this._settings = new VsCodeSettings(this);
    }

    return this._settings;
  }

  public get extensions() {
    if (!this._extensions) {
      this._extensions = new VsCodeRecommendedExtensions(this);
    }

    return this._extensions;
  }

  public get mcp() {
    if (!this._mcp) {
      this._mcp = new VsCodeMcp(this);
    }

    return this._mcp;
  }
}
