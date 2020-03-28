import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import { ApiResponse } from './../../models/api-response.model';
import { IIdentityResult } from '../../models/identity-result.model';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class AsyncValidationService {
  validateIdentity(
    validate: (key: string, value: string) => Observable<ApiResponse<IIdentityResult>>,
    key: string
  ): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return validate(key, control.value).pipe(
        debounceTime(300),
        map(response => {
          return response.result && !response.result.isValid ? { invalidIdentity: true } : null;
        })
      );
    };
  }
}
