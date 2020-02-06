/**
 * --
 */
Ext.define("Picturae.view.structure.Tree", {
    extend: "Picturae.tree.Panel",
    alias: "widget.x-c8ab257a7c90416b9e3a8125b91f7a99",
    controller: "60ae5057bee54f0dabac5c94e2d2a408",
    layout: "fit",
    listeners: {
        itemclick: "onItemClick"
    },
    rootVisible: false,
    title: "Structure",
    viewModel: "65889d7ccfa14d688b81ec63dcb11393",
    store: {
        type: "x-b21c59bc6d544deeb345eb0eb887b958" // Picturae.store.Structure
    },
    columns: [{
        xtype: "treecolumn",
        dataIndex: "text",
        align: "left",
        flex: 1
    }],
    dockedItems: [{
        xtype: "x-665645f5f15541b4a73edf7d63b115e3" // Picturae.view.structure.toolbar.Top
    }, {
        xtype: "x-142a111fd693469c83e79ae3f52614b4" // Picturae.view.structure.toolbar.Bottom
    }]
});
