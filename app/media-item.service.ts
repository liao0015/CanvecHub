import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
    constructor(private http: Http) {}
    
    get(medium) {
        var searchParams = new URLSearchParams();
        searchParams.append('medium', medium);
        return this.http.get('mediaitems', {search: searchParams})
            .map(response => {
                return response.json().mediaItems;
            });
    }
    
    add(mediaItem) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('mediaitems', JSON.stringify(mediaItem), { headers: headers })
            .map(response => {});
    }
    
    delete(mediaItem) {
        return this.http.delete(`mediaitems/${mediaItem.id}`)
            .map(response => {});
    }
    
    _mediaItems = [
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