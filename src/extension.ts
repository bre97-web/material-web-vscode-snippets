import * as vscode from 'vscode'
import { SnippetsItem, SnippetsTree } from './SnippetsTree'

export function activate(context: vscode.ExtensionContext) {
    const treeDataProvider = new SnippetsTree();
    const treeView = vscode.window.createTreeView('tree', { treeDataProvider });
    treeView.onDidChangeSelection(event => {
        const selectedItem = event.selection[0];
        if (selectedItem instanceof SnippetsItem && selectedItem.command) {
            vscode.commands.executeCommand(selectedItem.command.command, selectedItem.command.arguments);
        }
        
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const position = editor.selection.active;
            const content = selectedItem.code + '\n\t';
    
            editor.edit(editBuilder => {
                editBuilder.insert(position, content);
                vscode.commands.executeCommand('extension.focusEditor')
            });
        }
    });

    vscode.commands.registerCommand('extension.focusEditor', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            vscode.window.showTextDocument(editor.document);
        }
    });

    context.subscriptions.push(treeView);
}