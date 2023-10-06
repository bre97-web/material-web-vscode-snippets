"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const SnippetsTree_1 = require("./SnippetsTree");
function activate(context) {
    const treeDataProvider = new SnippetsTree_1.SnippetsTree();
    const treeView = vscode.window.createTreeView('tree', { treeDataProvider });
    treeView.onDidChangeSelection(event => {
        const selectedItem = event.selection[0];
        if (selectedItem instanceof SnippetsTree_1.SnippetsItem && selectedItem.command) {
            vscode.commands.executeCommand(selectedItem.command.command, selectedItem.command.arguments);
        }
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const position = editor.selection.active;
            const content = selectedItem.code + '\n\t';
            editor.edit(editBuilder => {
                editBuilder.insert(position, content);
                vscode.commands.executeCommand('extension.focusEditor');
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
exports.activate = activate;
//# sourceMappingURL=extension.js.map