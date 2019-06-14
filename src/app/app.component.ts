import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  liste: {name: string, job: string}[] = [
    {name: "berk", job: "lawyer"},
    {name: "ahmet", job: "lawyer"},
    {name: "yilmaz", job: "engineer"},
    {name: "sevket", job: "doctor"}
  ]
  filterWord: string;

}
