/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("Picturae.view.main.Main", {
    // extend: "Ext.tab.Panel",
    extend: "Ext.Panel",
    xtype: "x-34e87cb2ce0942688d4dae4b960e149f",
    requires: [
        "Ext.plugin.Viewport",
        "Ext.window.MessageBox",
        "Picturae.view.main.Controller",
        "Picturae.view.main.Model",
        "Picturae.view.tree.Tree"
    ],
    controller: "053fa8ec612940e59713eb7ab11465c1",
    layout: "hbox",
    viewModel: "bdf8a1e0f8f940788ea15dde635f2d63",
    items: [{
        xtype: "x-c8ab257a7c90416b9e3a8125b91f7a99", // Picturae.view.tree.Tree
        flex: 1
    }, {
        xtype: "splitter"
    }, {
        bind: {
            html: "{loremIpsum}"
        },
        flex: 2
    }]
});
