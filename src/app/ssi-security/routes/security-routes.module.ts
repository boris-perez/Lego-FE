/**
 * @author boris perez
 * */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SECURITY_ROUTES_CONFIG} from './security-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SECURITY_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SecurityRoutesModule {
}
