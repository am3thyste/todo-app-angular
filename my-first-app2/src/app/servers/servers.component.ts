import { Component, OnInit } from '@angular/core';

@Component({
 // selector: '[app-servers]',
 selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus = 'No server was created!';
  serverName= 'testServer';
  username = '';
  emptyUsername=true;
  serverCreated=false;
  servers = ['TestServer', 'TestServer 2'];
  detailsDisplayed = false;
  buttonClicks = [];
  colorButtonClick = '';

  constructor() { 
    setTimeout(() => {
this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event){
this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDisplay(){
    this.detailsDisplayed = !this.detailsDisplayed;
    // this.buttonClicks.push(this.buttonClicks.length + 1);
    this.buttonClicks.push(new Date());

  }

}

