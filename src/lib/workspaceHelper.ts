import * as vscode from 'vscode';

export const openFiles = async (files: vscode.Uri[]) => {
  for (let file of files) {
    const document = await vscode.workspace.openTextDocument(file);
    await vscode.window.showTextDocument(document, { preview: false });
  }
};
