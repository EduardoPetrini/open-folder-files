import * as vscode from 'vscode';

export const isFolder = async (path: string) => {
  const stat = await vscode.workspace.fs.stat(vscode.Uri.file(path));

  if (stat.type === vscode.FileType.Directory) {
    return true;
  }

  return false;
};

export const listFiles = async (path: string) => {
  const uri = vscode.Uri.file(path);
  const entries = await vscode.workspace.fs.readDirectory(uri);

  const files: vscode.Uri[] = [];

  entries.forEach(file => {
    const [name, fileType] = file;

    if (fileType !== vscode.FileType.File) {
      return false;
    }

    const filePath = vscode.Uri.joinPath(uri, name);
    files.push(filePath);
  });

  return files;
};
