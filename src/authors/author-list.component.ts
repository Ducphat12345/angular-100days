import { Component } from "@angular/core";
import { Author, authors } from "./authors.model";

@Component({
    selector: 'author-list',
    templateUrl: './author-list.component.html'
})
export class AuthorListComponent{
    authors = authors;
    currentAuthor = authors[0];
    onSelected(selectedAuthor: Author){
        this.currentAuthor = selectedAuthor;
    }
    onDeleted(id: number){
        this.authors = this.authors.filter(author => {
            return author.id !== id;
        });

        if(this.currentAuthor.id === id){
            this.currentAuthor = this.authors[0];
        }
    }
}   