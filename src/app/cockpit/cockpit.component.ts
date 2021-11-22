import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector:    'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls:   ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName    = '';
  @ViewChild('serverContentInput') newServerContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) {

    this.newServerName    = serverNameInput.value;
  
    this.serverCreated.emit({
      serverName:    this.newServerName,
      serverContent: this.newServerContent.nativeElement.value
    });

  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {

    this.newServerName    = serverNameInput.value;

    this.serverCreated.emit({
      serverName:    this.newServerName,
      serverContent: this.newServerContent.nativeElement.value
    });

  }

}
