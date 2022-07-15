import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../authors';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html'
})
export class AuthorDetailComponent implements OnInit {
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
