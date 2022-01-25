import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-btn',
  templateUrl: './shared-btn.component.html',
  styleUrls: ['./shared-btn.component.css']
})
export class SharedBtnComponent implements OnInit {

  @Input() text:string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
