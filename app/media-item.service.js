System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var MediaItemService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            MediaItemService = (function () {
                function MediaItemService(http) {
                    this.http = http;
                    this._mediaItems = [
                        {
                            id: 1,
                            name: "Case 1",
                            medium: "Series",
                            category: "Jugular vein",
                            year: 2010,
                            watchedOn: 1294166565384,
                            isFavorite: false
                        },
                        {
                            id: 2,
                            name: "Case 2",
                            medium: "Movies",
                            category: "Portal vein",
                            year: 2015,
                            watchedOn: null,
                            isFavorite: true
                        }, {
                            id: 3,
                            name: "Case 3",
                            medium: "Movies",
                            category: "Venous",
                            year: 2016,
                            watchedOn: null,
                            isFavorite: false
                        }, {
                            id: 4,
                            name: "Case 4",
                            medium: "Series",
                            category: "Deep vein",
                            year: null,
                            watchedOn: null,
                            isFavorite: true
                        }, {
                            id: 5,
                            name: "Case 5",
                            medium: "Movies",
                            category: "Renal vein",
                            year: 2015,
                            watchedOn: 1457166565384,
                            isFavorite: false
                        },
                        {
                            id: 6,
                            name: "Case 6",
                            medium: "Movies",
                            category: "Arterial",
                            year: 2015,
                            watchedOn: 1457166565384,
                            isFavorite: false
                        }
                    ];
                }
                MediaItemService.prototype.get = function (medium) {
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.append('medium', medium);
                    return this.http.get('mediaitems', { search: searchParams })
                        .map(function (response) {
                        return response.json().mediaItems;
                    });
                };
                MediaItemService.prototype.add = function (mediaItem) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post('mediaitems', JSON.stringify(mediaItem), { headers: headers })
                        .map(function (response) { });
                };
                MediaItemService.prototype.delete = function (mediaItem) {
                    return this.http.delete("mediaitems/" + mediaItem.id)
                        .map(function (response) { });
                };
                MediaItemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MediaItemService);
                return MediaItemService;
            }());
            exports_1("MediaItemService", MediaItemService);
        }
    }
});
//# sourceMappingURL=media-item.service.js.map