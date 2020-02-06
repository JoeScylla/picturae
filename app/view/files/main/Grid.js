/**
 * --
 */
Ext.define("Picturae.view.files.main.Grid", {
    extend: "Picturae.grid.Panel",
    alias: "widget.x-386b8d1bfe084e0ca1acfe64adecc8a4",
    controller: "8992489b3b8649499df8ee08fc5ef809",
    viewModel: "8990bfbb114a4b6599ca1d0175e9bfe3",
    store: {
        type: "x-9361996dc81540e9b0fbb698fcf04bfa" // Picturae.store.Files
    },
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
        }]
    }
});
