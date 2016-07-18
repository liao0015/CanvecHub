import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {FavoriteDirective} from './favorite.directive';

@Component({
    selector: 'media-item',
    directives: [FavoriteDirective],
    templateUrl: 'app/media-item.component.html',
    styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
    @Input('mediaItemToWatch') mediaItem;
    @Output('deleted') delete = new EventEmitter();
    
    onEdit() {
        //this.delete.emit(this.mediaItem);
        console.log("Editting " + this.mediaItem.name);
    }
    onFollow(){
        console.log("Following "+ this.mediaItem.name)
    }
}