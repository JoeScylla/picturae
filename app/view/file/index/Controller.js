/**
 * --
 */
Ext.define("Picturae.view.file.index.Controller", {
    extend: "Ext.app.ViewController",
    alias: "controller.x-0120f1f1fbdd404d80303576b60165f3",
    control: {
        "#toolbar-button-switch": {
            click: "onToolbarButtonSwitchClick"
        }
    },
    /**
     * --
     * 
     * @param {Picturae.button.Button} button 
     */
    onToolbarButtonSwitchClick: function(button) {
        var self = this;
        var view = self.getView();
        var grid = view.getComponent("grid");
        var view = view.getComponent("view");

        if (grid.isVisible()) {
            button.setText("Table");
            grid.hide();
            view.show();
        } else {
            button.setText("Grid");
            grid.show();
            view.hide();
        }
    }
});
