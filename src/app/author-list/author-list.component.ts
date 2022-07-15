import { Component, OnInit } from '@angular/core';
import { authors, Author } from '../authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html'
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];

  onSelected(selectedAuthor: Author){
    this.currentAuthor = selectedAuthor;
  }

  onDeleted(id: number){
    this.authors = this.authors.filter(author => {
      return author.id !== id;
    });

    if (this.currentAuthor.id === id){
      this.currentAuthor = this.authors[0];
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
