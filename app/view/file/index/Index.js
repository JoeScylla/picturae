/**
 * --
 */
Ext.define("Picturae.view.file.index.Index", {
    extend: "Picturae.panel.Panel",
    alias: "widget.x-d582801d879347a282c2cc65f13ef12d",
    controller: "x-0120f1f1fbdd404d80303576b60165f3",
    glyph: "xf00a",
    layout: "fit",
    viewModel: "x-8990bfbb114a4b6599ca1d0175e9bfe3",
    items: [{
        xtype: "x-386b8d1bfe084e0ca1acfe64adecc8a4",
        itemId: "grid"
    }, {
        xtype: "x-0ff989d4c2774e7aa3fdfb7d06f452a3",
        hidden: true,
        itemId: "view"
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
            text: "Grid",
            itemId: "toolbar-button-switch",
            Xlisteners: {
                click: "doToggleLayout"
            }
        }]
    }, {
        xtype: "x-toolbar",
        dock: "bottom",
        items: [{
            xtype: "tbtext",
            text: "Test the West"
        }]
    }]
});
