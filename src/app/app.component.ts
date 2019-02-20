import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleComponent } from './article/article.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 0),
      new Article('Material Angular', 'http://material.io', 10),
      new Article('Hackr.io', 'http://hackr.io', 5)
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    console.log(
      `Adding article w/ title : ${title.value} and link: ${link.value}`
    );
    return false;
  }
}
