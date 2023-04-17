import { Component, OnDestroy, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { validDate } from './datepicker.validators';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ]
})
export class DatepickerComponent implements ControlValueAccessor, Validator, OnDestroy {

  public readonly datepickerForm: FormGroup;

  onChangeSubscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.datepickerForm = this.formBuilder.group({
      date: ['', validDate('MM/DD/YYYY')]
    });
  }

  ngOnInit(): void {
  }

  get date() {
    return this.datepickerForm.get('date');
  }

  ngOnDestroy(): void {
    this.onChangeSubscriptions.forEach(sub => sub.unsubscribe());
  }

  writeValue(date: moment.Moment | string | null): void {
    date = date === "" ? null : moment();
    this.datepickerForm.get('date')?.setValue(date);
  }

  onChange = (date: string | null) => { };
  registerOnChange(fn: any): void {
    const subscription = this.datepickerForm.valueChanges.subscribe(fn);
    this.onChangeSubscriptions.push(subscription);
  }

  onTouched = () => { };
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.datepickerForm.disable() : this.datepickerForm.enable();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.datepickerForm.valid ? null : this.getControlErrors();
  }

  private getControlErrors(): any[] {
    const errors: any[] = [];
    Object.keys(this.datepickerForm.controls)
      .map(key => this.datepickerForm.controls[key])
      .forEach(control => errors.push(control.errors))
    return errors;
  }
}
