import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent) 
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() public value: string = "";
  @Input() public label: string = "";
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonOption;
  public onChange = (value: string) => {}
  public onTouched = (value: string) => {}

  constructor() { }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  public activate(value: string): void{
    this.writeValue(value);
  }
}

enum YesNoButtonOption{
  YES = 'yes',
  NO  = 'no'
}
