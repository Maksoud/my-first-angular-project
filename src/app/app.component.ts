import { 
  Component, 
  OnInit, 
  AfterViewInit, 
  ViewChild, 
  ElementRef, 
} from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  servers    = 0;
  blueprints = 0;

  serverElements = [{
    type:    'server', 
    name:    'TestServer', 
    content: 'Just a test!'
  }];

  @ViewChild('countServers') countServers: ElementRef;
  @ViewChild('countBlueprints') countBlueprints: ElementRef;

  ngOnInit(): void {

    // Count Servers and Blueprints
    this.serverElements.forEach( (item) => {
      if (item.type == "server") this.servers++;
      if (item.type == "blueprint") this.blueprints++;
    });

  }

  ngAfterViewInit(){
    this.countElements();
  }

  countElements() {

    // Set the quantity in the view
    this.countServers.nativeElement.textContent    = this.servers;
    this.countBlueprints.nativeElement.textContent = this.blueprints;

  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {

    this.serverElements.push({
      type:    'server',
      name:    serverData.serverName,
      content: serverData.serverContent
    });

    this.servers++;

    this.countElements();

  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {

    this.serverElements.push({
      type:    'blueprint',
      name:    blueprintData.serverName,
      content: blueprintData.serverContent
    });

    this.blueprints++;

    this.countElements();

  }

  onChangeFirst(){
    this.serverElements[0].name = "Changed!";
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }

}
