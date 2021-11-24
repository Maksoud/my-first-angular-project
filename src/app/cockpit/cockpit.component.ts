import { 
  Component, 
  OnInit, 
  AfterContentInit, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ContentChild, 
  ElementRef, 
} from '@angular/core';

@Component({
  selector:    'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls:   ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, AfterContentInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  @ViewChild('serverContentInput') newServerContent: ElementRef;
  @ContentChild('countBlueprints') elementCount: ElementRef;

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

  ngAfterContentInit() {
    // console.log("@ContentChild - Number of created Blueprints", this.elementCount.nativeElement.textContent);
  }

  onAddServer(serverNameInput: HTMLInputElement) {

    this.newServerName = serverNameInput.value;

    if (this.newServerName && this.newServerContent.nativeElement.value) {

      this.serverCreated.emit({
        serverName:    this.newServerName,
        serverContent: this.newServerContent.nativeElement.value
      });

    }// if (this.newServerName && this.newServerContent.nativeElement.value)

  }// onAddServer

  onAddBlueprint(serverNameInput: HTMLInputElement) {

    this.newServerName = serverNameInput.value;

    if (this.newServerName && this.newServerContent.nativeElement.value) {

      this.blueprintCreated.emit({
        serverName:    this.newServerName,
        serverContent: this.newServerContent.nativeElement.value
      });

    }// if (this.newServerName && this.newServerContent.nativeElement.value)

  }// onAddBlueprint

}
