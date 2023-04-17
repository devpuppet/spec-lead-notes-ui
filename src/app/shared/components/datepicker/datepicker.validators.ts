import { AbstractControl, ValidationErrors } from "@angular/forms";
import * as moment from "moment";

export function validDate(dateFormat: string) {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        const valid = moment(value, dateFormat, true).isValid();

        if (!valid) {
            return { dateMustBeValid: { date: value, requiredFormat: dateFormat } };
        }

        return null;
    }
}