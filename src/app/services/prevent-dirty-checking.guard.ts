import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {FormInterface} from './../form.interface';

@Injectable()
export class PreventDirtyCheckingGuard implements CanDeactivate<FormInterface> {
  canDeactivate(form: FormInterface ): Observable<boolean> | Promise<boolean> | boolean {
    if(form.hasUnsavedchanges()){
      return confirm("You have unsaved changes, Are you sure !");
    }
    return true;
  }
}
