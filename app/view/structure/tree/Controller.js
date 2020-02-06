/**
 * --
 */
Ext.define("Picturae.controller.view.structure.tree.Controller", {
    extend: "Ext.app.ViewController",
    alias: "controller.x-60ae5057bee54f0dabac5c94e2d2a408",
    /**
     * -
     * 
     * @param {Ext.tree.Panel} tree 
     * @param {Ext.data.TreeModel} model 
     * @param {HTMLElement} item 
     * @param {Number} index 
     * @param {Ext.EventObject} event 
     * @param {Object} options 
     */
    onItemClick: function (tree, model, item, index, event, options) {
        console.log("ON_ITEM_CLICK");

        var sqlite3 = require("sqlite3");
       
        var db = new sqlite3.Database(":memory:");
        db.serialize(function() {
          db.run("CREATE TABLE lorem (info TEXT)");
  
          var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
          for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
          }
          stmt.finalize();
          
          db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
            console.log("" + row.id + ": " + row.info);
          });
        });
  
        db.close();
    }
});
