import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: "./servers.component.html",
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.css',],
  styles: [`
  .password {
      color: white
  }`]
})
export class ServersComponent implements OnInit {

  //Assignment Data Binding
  username = "";
  usernameIsEmpty = true;

  onUpdateUsername(event: Event) {
    this.usernameIsEmpty = (<HTMLInputElement>event.target).value === "" ? true : false;
  }

  resetUsername() {
    this.username = "";
  }

  //Assignment Data Binding's End

  //Assignment Directives

  displayPassword = false;
  passwordDisplayCounter = 0;
  displayArray = ["dummy display text"]

  showSecretPassword() {
    this.displayPassword = !this.displayPassword;
    this.passwordDisplayCounter += 1;
    //this.displayArray.push(`Password was displayed ${this.passwordDisplayCounter} times`);
    this.displayArray.push(new Date().toString());
  }

  //Assignment Directives's End

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Test Server";
  serverCreated = false;
  servers = ["TestServer", "TestServer2"]

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server was craeted! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
