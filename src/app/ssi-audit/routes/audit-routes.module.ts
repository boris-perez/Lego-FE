/**
 * @author boris perez
 * */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AUDIT_ROUTES_CONFIG} from './audit-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AUDIT_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AuditRoutesModule {
}
