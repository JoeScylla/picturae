/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("Picturae.view.main.Main", {
    extend: "Picturae.panel.Panel",
    alias: "widget.x-34e87cb2ce0942688d4dae4b960e149f",
    controller: "053fa8ec612940e59713eb7ab11465c1",
    layout: {
        type: "hbox",
        align: "stretch"
    },
    viewModel: "bdf8a1e0f8f940788ea15dde635f2d63",
    items: [{
        xtype: "x-c8ab257a7c90416b9e3a8125b91f7a99", // Picturae.view.structure.Tree
        flex: 0.25,
        minWidth: 200,
		frame: true
    }, {
        xtype: "splitter",
        size: 1
    }, {
        xtype: "x-e495f85244974b2992219b3a39cc53b0", // Picturae.view.tab.Panel
        flex: 1
    }]
});
