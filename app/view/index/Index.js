/**
 * --
 */
Ext.define("Picturae.view.index.Index", {
    extend: "Picturae.panel.Panel",
    alias: "widget.x-34e87cb2ce0942688d4dae4b960e149f",
    controller: "x-3d4000c0d2314ac0915c5c5e191378fc",
    layout: {
        type: "hbox",
        align: "stretch"
    },
    viewModel: "x-bdf8a1e0f8f940788ea15dde635f2d63",
    items: [{
        xtype: "x-panel",
        flex: 0.25,
        minWidth: 200,
        layout: {
            type: "vbox",
            align: "stretch"
        },
        items: [{
            xtype: "x-c8ab257a7c90416b9e3a8125b91f7a99",
            flex: 1
        }, {
            xtype: "splitter",
            cls: "x-673cb26d631843838b42350fcd11582c",
            size: 3,
        }, {
            xtype: "x-panel",
            animCollapse: false,
            collapseDirection: "bottom",
            collapsible: true,
            flex: 0.25,
            html: "...",
            title: "Tasks"
        }]
    }, {
        xtype: "splitter",
        cls: "x-673cb26d631843838b42350fcd11582c",
        size: 3
    }, {
        xtype: "x-tab-panel",
        flex: 1,
        items: [{
            xtype: "x-d582801d879347a282c2cc65f13ef12d"
        }, {
            xtype: "x-cf18eb15a9194ebda9e957fe0ee4e190"
        }, {
            xtype: "x-3e961ce2c22f486a864af3e247271582"
        }]
    }]
});
