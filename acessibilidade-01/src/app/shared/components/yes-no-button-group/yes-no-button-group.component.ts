import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.css']
})
export class YesNoButtonGroupComponent implements OnInit {

  @Input() public value: string = "";
  @Input() public label: string = "";
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonOption;

  constructor() { }

  ngOnInit(): void {
  }

  public activate(value: string): void{
    this.value = value
    this.valueChange.emit(this.value);
  }
}

enum YesNoButtonOption{
  YES = 'yes',
  NO  = 'no'
}
