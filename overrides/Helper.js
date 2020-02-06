/**
 * --
 */
Ext.define("Picturae.Helper", {
	statics: {
		/**
		 * --
		 * 
		 * @param {Function} callable
		 */
		async: function(callable) {
			if (Ext.isFunction(callable)) {
				Ext.defer(callable, 1);
			}
		},
		/**
		 * --
		 * 
		 * @param {String} selector
		 * @return {Ext.Component}
		 */
		child: function(selector) {
			var r = null;
			
			Ext.ComponentManager.each(function(key, cmp, length) {
				if (cmp.is(selector)) {
					r = cmp;
				}
			});
			
			return r;
		},
		/**
		 * --
		 * 
		 * @param {Function} test
		 * @param {Function} success
		 * @param {Function} failure
		 * @param {Number} interval
		 * @param {Number} count
		 */
		deferUntil: function(test, success, failure, interval, count) {
			var tick = function() {
				if (!test()) {
					count--;
					if (count > 0) {
						Ext.defer(tick, interval);
					} else {
						if (Ext.isFunction(failure)) {
							failure();
						}
					}
				} else {
					success();
				}
			};
			
			Ext.defer(tick, interval);
		},
		/**
		 * --
		 * 
		 * @param {String} message
		 * @param {Array} values
		 */
		error: function(message, values) {
			Ext.create("Core.client.console.Error", message, values).show();
		},
		/**
		 * --
		 * 
		 * @param {String} selector
		 * @return {Ext.Component[]}
		 */
		get: function(selector) {
			var r = [];
			
			Ext.ComponentManager.each(function(key, cmp, length) {
				if (cmp.is(selector)) {
					r.push(cmp);
				}
			});
			
			return r;
		},
		/**
		 * --
		 * 
		 * @param {Function} callback
		 * @param {Function} test
		 * @param {Function} success
		 * @param {Function} failure
		 * @param {Number} interval
		 * @param {Number} count
		 */
		tryUntil: function(callback, test, success, failure, interval, count) {
			var tick = function() {
				if (!test()) {
					callback();
					count--;
					if (count > 0) {
						Ext.defer(tick, interval);
					} else {
						if (Ext.isFunction(failure)) {
							failure();
						}
					}
				} else {
					if (Ext.isFunction(success)) {
						success();
					}
				}
			};
			
			Ext.defer(tick, interval);
		}
	}
});