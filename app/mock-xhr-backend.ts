import {Request, Response, ResponseOptions, RequestMethod} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

export class MockXHRBackend {
    constructor() {
    }

    createConnection(request: Request) {
        var response = new Observable((responseObserver: Observer<Response>) => {
            var responseData;
            var responseOptions;
            switch (request.method) {
                case RequestMethod.Get:
                    if (request.url.indexOf('mediaitems?medium=') >= 0 || request.url === 'mediaitems') {
                        var medium;
                        if (request.url.indexOf('?') >= 0) {
                            medium = request.url.split('=')[1];
                            if (medium === 'undefined') medium = '';
                        }
                        var mediaItems;
                        if (medium) {
                            mediaItems = this._mediaItems.filter(mediaItem => mediaItem.medium === medium);
                            if (mediaItems.length === 0) {
                                responseOptions = new ResponseOptions({
                                    body: JSON.stringify({error: 'medium is not valid'}),
                                    status: 404}
                                );
                                responseObserver.error(new Response(responseOptions));
                            }
                        } else {
                            mediaItems = this._mediaItems;
                        }
                        responseOptions = new ResponseOptions({
                            body: { mediaItems: JSON.parse(JSON.stringify(mediaItems)) },
                            status: 200
                        });
                    } else {
                        var id = parseInt(request.url.split('/')[1]);
                        mediaItems = this._mediaItems.filter(mediaItem => mediaItem.id === id);
                        responseOptions = new ResponseOptions({
                            body: JSON.parse(JSON.stringify(mediaItems[0])),
                            status: 200
                        });
                    }
                    break;
                case RequestMethod.Post:
                    var mediaItem = JSON.parse(request.text().toString());
                    mediaItem.id = this._getNewId();
                    this._mediaItems.push(mediaItem);
                    responseOptions = new ResponseOptions({ status: 201 });
                    break;
                case RequestMethod.Delete:
                    var id = parseInt(request.url.split('/')[1]);
                    this._deleteMediaItem(id);
                    responseOptions = new ResponseOptions({ status: 200 });
            }
            
            var responseObject = new Response(responseOptions);
            responseObserver.next(responseObject);
            responseObserver.complete();
            return () => { };
        });
        return { response };
    }
    
    _deleteMediaItem(id) {
        var mediaItem = this._mediaItems.find(mediaItem => mediaItem.id === id);
        var index = this._mediaItems.indexOf(mediaItem);
        if (index >= 0) {
            this._mediaItems.splice(index, 1);
        }
    }
    
    _getNewId() {
        if (this._mediaItems.length > 0) {
            return Math.max.apply(Math, this._mediaItems.map(mediaItem => mediaItem.id)) + 1;
        }
    }

    _mediaItems = [
        {
            id: 1,
            name: "Case 1",
            medium: "Submitted",
            category: "Jugular vein",
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: "Case 2",
            medium: "Editted",
            category: "Portal vein",
            year: 2015,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 3,
            name: "Case 3",
            medium: "Editted",
            category: "Venous",
            year: 2016,
            watchedOn: null,
            isFavorite: false
        }, {
            id: 4,
            name: "Case 4",
            medium: "Submitted",
            category: "Deep vein",
            year: null,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 5,
            name: "Case 5",
            medium: "Editted",
            category: "Renal vein",
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        },
        {
            id: 6,
            name: "Case 6",
            medium: "Editted",
            category: "Arterial",
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        },
        {
            id: 7,
            name: "Case 7",
            medium: "Editted",
            category: "Renal vein",
            year: 2011,
            watchedOn: 1457166565384,
            isFavorite: true
        },{
            id: 8,
            name: "Case 8",
            medium: "Submitted",
            category: "Deep vein",
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        },{
            id: 9,
            name: "Case 9",
            medium: "Editted",
            category: "Portal vein",
            year: 2000,
            watchedOn: 1457166565384,
            isFavorite: true
        }
    ];
}