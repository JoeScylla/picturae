/**
 * --
 */
Ext.define("Picturae.view.file.view.View", {
	extend: "Picturae.view.View",
	alias: "widget.x-0ff989d4c2774e7aa3fdfb7d06f452a3",
	controller: "x-d64a8867a4414203a8397a7440916468",
	emptyText: "No record available.",
	itemSelector: "div.x-picturae-view-files-view-item",
	store: {
		type: "x-9361996dc81540e9b0fbb698fcf04bfa"
	},
	tpl: [
		"<tpl for=\".\">",
			"<div class=\"x-picturae-view-files-view-item\">",
				"<b>{id}</b><br />",
				"<b>{name}</b>",
			"</div>",
		"</tpl>"
	],
	viewModel: "x-377a5ff40eaa401bb352f5574cd6ccf3",
	dockedItems: [{
		xtype: "x-fb484b00481a4486b862adbd5664c2ef"
	}, {
		xtype: "x-cf290447d40e4d0994ff42b2ab063bc8"
	}]
});
