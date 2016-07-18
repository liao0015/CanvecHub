System.register(['angular2/platform/browser', './app.component', './media-item.service', 'angular2/core', './providers', 'angular2/http', './mock-xhr-backend', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, media_item_service_1, core_1, providers_1, http_1, mock_xhr_backend_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (media_item_service_1_1) {
                media_item_service_1 = media_item_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (providers_1_1) {
                providers_1 = providers_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (mock_xhr_backend_1_1) {
                mock_xhr_backend_1 = mock_xhr_backend_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                media_item_service_1.MediaItemService,
                core_1.provide(providers_1.LOOKUP_LISTS, { useValue: providers_1.lookupLists }),
                http_1.HTTP_PROVIDERS,
                core_1.provide(http_1.XHRBackend, { useClass: mock_xhr_backend_1.MockXHRBackend }),
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map