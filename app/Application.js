/**
 * --
 */
Ext.define("Picturae.Application", {
    extend: "Ext.app.Application",
    name: "Picturae",
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    stores: [],
    launch: function () {
        
    },
    onAppUpdate: function () {
        Ext.Msg.confirm("Application Update", "This application has an update, reload?",
            function (choice) {
                if (choice === "yes") {
                    window.location.reload();
                }
            }
        );
    }
});
