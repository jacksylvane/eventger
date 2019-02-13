import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.sass'],
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() buttonAction: string;
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  outputClick(): void {
    this.buttonClicked.emit();
  }
}
