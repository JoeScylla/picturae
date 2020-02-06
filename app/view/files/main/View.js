/**
 * --
 */
Ext.define("Picturae.view.files.main.View", {
	extend: "Picturae.view.View",
	alias: "widget.x-0ff989d4c2774e7aa3fdfb7d06f452a3",
	controller: "8992489b3b8649499df8ee08fc5ef809",
	title: "Files: View",
	emptyText: "No record available.",
	itemSelector: "div.x-picturae-view-files-view-item",
	viewModel: "8990bfbb114a4b6599ca1d0175e9bfe3",
	store: {
		type: "x-9361996dc81540e9b0fbb698fcf04bfa" // Picturae.store.Files
	},
	tpl: [
		'<tpl for=".">',
			'<div style="outline: 1px solid red;" class="x-picturae-view-files-view-item">',
				'<b>{id}</b><br />',
				'<b>{name}</b>',
			'</div>',
		'</tpl>'
	],
	dockedItems: [{
		xtype: "x-fb484b00481a4486b862adbd5664c2ef" // Picturae.view.files.toolbar.Top
	}, {
		xtype: "x-cf290447d40e4d0994ff42b2ab063bc8" // Picturae.view.files.toolbar.Bottom
	}]
});
