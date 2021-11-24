import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  DoCheck, 
  OnChanges, 
  OnInit, 
  SimpleChanges, 
  Component, 
  Input, 
  OnDestroy, 
  ViewChild, 
  ContentChild, 
  ElementRef, 
  /*ViewEncapsulation*/ } from '@angular/core';

@Component({
  selector:    'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls:   ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None Use it if your CSS in app.component.css file will be the only one used
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input('name') name: string;
  @ViewChild('heading') elementName: ElementRef;
  @ContentChild('countServers') elementCount: ElementRef;

  constructor() {
    console.log("Constructor called!");
  }

  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
    // console.log("@ContentChild - Number of created Servers", this.elementCount.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called!");
    console.log("@ViewChild - Content Text:", this.elementName.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }

}
