import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  id = 1;
  status = 'Off';
  allowNewServer = false;
  serverCreationStatus = 'No Server is created';
  serverName = 'Test  Server';
  creationStatus = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  createNewServer() {
    this.creationStatus = true;
    this.serverCreationStatus = 'A new Server has been created , ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
