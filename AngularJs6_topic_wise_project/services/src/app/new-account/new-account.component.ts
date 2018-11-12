import { Component } from '@angular/core';

import { LoggingSevice } from '../logging.service';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingSevice]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingSevice,
              private accountsService: AccountsService) {
        this.accountsService.statusUpdated.subscribe(
          (status: string) => alert('New Status:' + status)
        );

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
