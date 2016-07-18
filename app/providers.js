System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var lookupLists, LOOKUP_LISTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("lookupLists", lookupLists = {
                mediums: ['Editted', 'Submitted']
            });
            exports_1("LOOKUP_LISTS", LOOKUP_LISTS = new core_1.OpaqueToken('LookupLists'));
        }
    }
});
//# sourceMappingURL=providers.js.map