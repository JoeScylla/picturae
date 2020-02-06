/**
 * --
 */
Ext.define("Picturae.view.files.Main", {
    extend: "Picturae.panel.Panel",
    alias: "widget.x-d582801d879347a282c2cc65f13ef12d",
    controller: "8992489b3b8649499df8ee08fc5ef809",
    layout: "fit",
    title: "Files (Main)",
    viewModel: "8990bfbb114a4b6599ca1d0175e9bfe3",
    items: [{
        xtype: "x-386b8d1bfe084e0ca1acfe64adecc8a4", // Picturae.view.files.main.Grid
        itemId: "grid"
    }, {
        xtype: "x-0ff989d4c2774e7aa3fdfb7d06f452a3", // Picturae.view.files.main.View
        hidden: true,
        itemId: "view"
    }],
    dockedItems: [{
        xtype: "x-fb484b00481a4486b862adbd5664c2ef" // Picturae.view.files.toolbar.Top
    }, {
        xtype: "x-cf290447d40e4d0994ff42b2ab063bc8" // Picturae.view.files.toolbar.Bottom
    }]
});
