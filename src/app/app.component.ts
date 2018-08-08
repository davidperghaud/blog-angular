import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mes Posts';
  posts = [
    {
      title: "Mon Premier Post",
      content: "Aliqua minim magna culpa ullamco. Est sint mollit nostrud adipisicingreprehenderit mollit commodo aute in quis nostrud. Proident aute exercitation aute ipsum nulla adipisicing amet minim sit laborum excepteur.",
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: "Mon Deuxième Post",
      content: "Aliqua minim magna culpa ullamco. Est sint mollit nostrud adipisicingreprehenderit mollit commodo aute in quis nostrud. Proident aute exercitation aute ipsum nulla adipisicing amet minim sit laborum excepteur.",
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: "Encore un Post",
      content: "Aliqua minim magna culpa ullamco. Est sint mollit nostrud adipisicingreprehenderit mollit commodo aute in quis nostrud. Proident aute exercitation aute ipsum nulla adipisicing amet minim sit laborum excepteur.",
      loveIts: 0,
      created_at: new Date()
    },
  ];
}
