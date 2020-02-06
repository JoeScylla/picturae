/**
 * --
 */
Ext.define("Picturae.view.files.toolbar.Top", {
	extend: "Picturae.toolbar.Toolbar",
	alias: "widget.x-fb484b00481a4486b862adbd5664c2ef",
	dock: "top",
	items: [{
		xtype: "segmentedbutton",
			items: [{
			text: "Test #1"
		}, {
			text: "Test #1"
		}]
	}, "->", {
		text: "Test #3",
		handler: function(self) {
			var main = self.up("x-d582801d879347a282c2cc65f13ef12d");
			var grid = main.getComponent("grid");
			var view = main.getComponent("view");

			if (grid.isVisible()) {
				grid.hide();
				view.show();
			} else {
				grid.show();
				view.hide();
			}
		}
	}]
});