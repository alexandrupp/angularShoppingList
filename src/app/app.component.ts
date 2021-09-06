import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService, UsersService]
})
export class AppComponent {

  accounts: { name: string, status: string }[] = [];

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

}
