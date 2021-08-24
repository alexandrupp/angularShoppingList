import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      type: "server",
      name: "Testserver",
      content: "Just a test!"
    },
    {
      type: "And I said",
      name: "Hey",
      content: "He he he"
    }
  ];
}
