Ext.define("Picturae.store.Configuration", {
    extend: "Ext.data.Store",
    alias: "store.x-e5e52907088e4e51b38058b4a563d803",
    groupField: "group",
    fiels: [{
        type: "int",
        name: "id"
    }, {
        type: "string",
        name: "group"
    }, {
        type: "string",
        name: "name"
    }, {
        type: "value",
        name: "auto"
    }],
    data: [{
        id: 1,
        group: "Group #1",
        name: "Name #1",
        value: "Value #1"
    }, {
        id: 2,
        group: "Group #1",
        name: "Name #2",
        value: "Value #2"
    }, {
        id: 3,
        group: "Group #1",
        name: "Name #3",
        value: "Value #3"
    }, {
        id: 4,
        group: "Group #2",
        name: "Name #4",
        value: "Value #4"
    }, {
        id: 5,
        group: "Group #2",
        name: "Name #4",
        value: "Value #4"
    }]
});