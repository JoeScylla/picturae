/**
 * --
 */
Ext.define("Picturae.view.configuration.grid.Grid", {
    extend: "Picturae.grid.Panel",
    alias: "widget.x-3e961ce2c22f486a864af3e247271582",
    closable: true,
    controller: "x-da65a07b770a4875908c2381152826a3",
    features: [{
        ftype: "grouping",
        groupHeaderTpl: '{name}'
    }],
    glyph: "xf1de",
    store: {
        type: "x-e5e52907088e4e51b38058b4a563d803"
    },
    viewModel: "x-55e3ea28fdd74c769380d9401f8aea60",
    columns: {
        defaults: {
            flex: 1
        },
        items: [{
            dataIndex: "id",
            text: "Id"
        }, {
            dataIndex: "name",
            text: "Name"
        }, {
            dataIndex: "value",
            text: "Value"
        }]
    }
});
