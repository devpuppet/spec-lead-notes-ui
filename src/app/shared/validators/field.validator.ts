import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of, switchMap, timer } from "rxjs";

export function inputValidator(control: AbstractControl): Observable<ValidationErrors | null> {

    const value = control.value;

    return timer(2000)
    .pipe(
        switchMap(() => value.length === 0 || value.includes("!") ?
            of({ 'validInput': true, 'requiredValue': 'Not allowed: empty and !' }) :
            of(null))
    );
}