import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent)
    }
  ],
  selector: 'app-input',
  styleUrls: ['./input.component.sass'],
  templateUrl: './input.component.html'
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() label: string;
  @Input() type: string;
  @Input() disabled = false;

  value: string | number = '';

  propagateChange = (_: any) => { };
  touched = () => { };

  valueChanged(value: any): void {
    this.propagateChange(value);
  }

  onBlur(): void {
    this.touched();
  }

  writeValue(value: string | number) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.touched = fn;
  }
}
