/**
 * --
 */
Ext.define("Picturae.view.tree.Tree", {
    extend: "Ext.tree.Panel",
    xtype: "x-c8ab257a7c90416b9e3a8125b91f7a99",
    requires: [
        "Picturae.store.Structure",
        "Picturae.view.tree.Controller",
        "Picturae.view.tree.Model"
    ],
    controller: "60ae5057bee54f0dabac5c94e2d2a408",
    layout: "hbox",
    listeners: {
        itemclick: "onItemClick"
    },
    rootVisible: false,
    viewModel: "65889d7ccfa14d688b81ec63dcb11393",
    store: {
        type: "x-b21c59bc6d544deeb345eb0eb887b958" // Picturae.store.Structure
    }
});
