import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// pattern matching or string matchig

export function passwordValidator(passwordRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const val = passwordRe.test(control.value);
      return !val ? {validPassword: {value: control.value}} : null;
    };
  }