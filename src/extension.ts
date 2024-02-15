// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { isFolder, listFiles } from './lib/fileHelper';
import { openFiles } from './lib/workspaceHelper';
import { feedbackMessages } from './lib/messagesMap';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const openAllDisposable = vscode.commands.registerCommand('open-folder-files.openAll', async args => {
    const { _fsPath } = args;

    const notFolder = !(await isFolder(_fsPath));

    if (notFolder) {
      const errorMsg = feedbackMessages('NOT_FILE_ERROR');
      vscode.window.showErrorMessage(errorMsg);
      return;
    }
    
    const files = await listFiles(_fsPath);

    await openFiles(files);
  });

  context.subscriptions.push(openAllDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

