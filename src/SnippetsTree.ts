import * as vscode from 'vscode'

export class SnippetsTree implements vscode.TreeDataProvider<SnippetsItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<SnippetsItem | undefined> = new vscode.EventEmitter<SnippetsItem | undefined>();
    readonly onDidChangeTreeData: vscode.Event<SnippetsItem | undefined> = this._onDidChangeTreeData.event;

    private elements: SnippetsItem[] = [
        // Button
        new SnippetsItem('Filled Button', '<md-filled-button></md-filled-button>', 0),
        new SnippetsItem('Filled Tonal Button', '<md-filled-tonal-button></md-filled-tonal-button>', 0),
        new SnippetsItem('Outlined Button', '<md-outlined-button></md-outlined-button>', 0),
        new SnippetsItem('Elevated Button', '<md-elevated-button></md-elevated-button>', 0),
        new SnippetsItem('Text Button', '<md-text-button></md-text-button>', 0),

        // Fab
        new SnippetsItem('Fab', '<md-fab></md-fab>', 0),
        new SnippetsItem('Branded Fab', '<md-branded-fab></md-branded-fab>', 0),

        // IconButton
        new SnippetsItem('Icon', '<md-icon></md-icon>', 0),
        new SnippetsItem('Icon Button', '<md-icon-button></md-icon-button>', 0),
        new SnippetsItem('Filled Icon Button', '<md-filled-icon-button></md-filled-icon-button>', 0),
        new SnippetsItem('Filled Tonal Icon Button', '<md-filled-tonal-icon-button></md-filled-tonal-icon-button>', 0),
        new SnippetsItem('Outlined Icon Button', '<md-outlined-icon-button></md-outlined-icon-button>', 0),


        // Checkbox
        new SnippetsItem('Checkbox', '<md-checkbox></md-checkbox>', 0),

        // Chips
        new SnippetsItem('Chip Set', '<md-chip-set></md-chip-set>', 0),
        new SnippetsItem('Assist Chip', '<md-assist-chip></md-assist-chip>', 0),
        new SnippetsItem('Filter Chip', '<md-filter-chip></md-filter-chip>', 0),
        new SnippetsItem('Suggestion Chip', '<md-suggestion-chip></md-suggestion-chip>', 0),
        new SnippetsItem('Input Chip', '<md-input-chip></md-input-chip>', 0),

        // Dialog
        new SnippetsItem('Dialog', '<md-dialog></md-dialog>', 0),

        // Divider
        new SnippetsItem('Divider', '<md-divider></md-divider>', 0),

        // Elevation
        new SnippetsItem('Elevation', '<md-elevation></md-elevation>', 0),

        // Focus Ring
        new SnippetsItem('Focus Ring', '<md-focus-ring></md-focus-ring>', 0),

        // List
        new SnippetsItem('List', '<md-list></md-list>', 0),
        new SnippetsItem('List SnippetsItem', '<md-list-item></md-list-item>', 0),

        // Menu
        new SnippetsItem('Menu', '<md-menu></md-menu>', 0),
        new SnippetsItem('Menu SnippetsItem', '<md-menu-item></md-menu-item>', 0),
        new SnippetsItem('Sub Menu', '<md-sub-menu></md-sub-menu>', 0),

        // Progress Indicators
        new SnippetsItem('Circular Progress', '<md-circular-progress></md-circular-progress>', 0),
        new SnippetsItem('Linear Progress', '<md-linear-progress></md-linear-progress>', 0),

        // Radio
        new SnippetsItem('Radio', '<md-radio></md-radio>', 0),

        // Ripple
        new SnippetsItem('Ripple', '<md-ripple></md-ripple>', 0),

        // Select
        new SnippetsItem('Filled Select', '<md-filled-select></md-filled-select>', 0),
        new SnippetsItem('Outlined Select', '<md-outlined-select></md-outlined-select>', 0),
        new SnippetsItem('Select Option', '<md-select-option></md-select-option>', 0),

        // Slider
        new SnippetsItem('Slider', '<md-slider></md-slider>', 0),

        // Switch
        new SnippetsItem('Switch', '<md-switch></md-switch>', 0),

        // Tabs
        new SnippetsItem('Tabs', '<md-tabs></md-tabs>', 0),
        new SnippetsItem('Primary Tab', '<md-primary-tab></md-primary-tab>', 0),
        new SnippetsItem('Secondary Tab', '<md-secondary-tab></md-secondary-tab>', 0),

        // Text Field
        new SnippetsItem('Filled Textfield', '<md-filled-text-field></md-filled-text-field>', 0),
        new SnippetsItem('Outlined Textfield', '<md-outlined-text-field></md-outlined-text-field>', 0),

        // template
        // new SnippetsItem('', '<md-></md->', 0),

    ]

    getChildren(element?: SnippetsItem): Thenable<SnippetsItem[]> {
        // Return the children of the element.
        return Promise.resolve(this.elements);
    }

    getTreeItem(element: SnippetsItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
        // Return the tree item for the element.
        return Promise.resolve(element);
    }
}

export class SnippetsItem {
    constructor(
        public readonly label: string,
        public readonly code: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        public readonly command?: vscode.Command
    ) { }
}