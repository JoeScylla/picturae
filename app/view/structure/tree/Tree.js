/**
 * --
 */
Ext.define("Picturae.view.structure.tree.Tree", {
    extend: "Picturae.tree.Panel",
    alias: "widget.x-c8ab257a7c90416b9e3a8125b91f7a99",
    cls: "e1e96798560042ae9ee021925c4d2c91",
    controller: "x-60ae5057bee54f0dabac5c94e2d2a408",
    layout: "fit",
    listeners: {
        itemclick: "onItemClick"
    },
    rootVisible: false,
    store: {
        type: "x-b21c59bc6d544deeb345eb0eb887b958" // Picturae.store.Structure
    },
    title: "Structure",
    viewModel: "x-65889d7ccfa14d688b81ec63dcb11393",
    columns: [{
        xtype: "treecolumn",
        dataIndex: "text",
        align: "left",
        flex: 1
    }],
    dockedItems: [{
        xtype: "x-toolbar",
        dock: "top",
        items: [{
            xtype: "segmentedbutton",
                items: [{
                text: "Test #1"
            }, {
                text: "Test #1"
            }]
        }, "->", {
            text: "Test #3"
        }]
    }]
});
