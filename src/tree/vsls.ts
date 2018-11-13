import * as vscode from "vscode";
import { SelfCommands } from "../constants";

const LIVE_SHARE_VIEW_ID = "liveshare.session";

export class VslsSessionTreeProvider
  implements vscode.TreeDataProvider<any>, vscode.Disposable {
  onDidChangeTreeData?: vscode.Event<any> | undefined;
  private _disposables: vscode.Disposable[] = [];

  constructor() {
    this._disposables.push(
      vscode.window.registerTreeDataProvider(LIVE_SHARE_VIEW_ID, this)
    );
  }

  getTreeItem(element: any): vscode.TreeItem | Thenable<vscode.TreeItem> {
    const treeItem = new vscode.TreeItem(element.label);
    treeItem.command = {
      // TODO: create a compound command here to capture the
      // event source
      command: SelfCommands.OPEN_WEBVIEW,
      title: "",
      arguments: []
    };
    return treeItem;
  }

  getChildren(element?: any): vscode.ProviderResult<any[]> {
    // throw new Error("Method not implemented.");
    return Promise.resolve([{ label: "test" }]);
  }

  dispose() {
    this._disposables.forEach(dispose => dispose.dispose());
  }
}
