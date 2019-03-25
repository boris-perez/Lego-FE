/**
 * @author boris perez
 * */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {POLICIES_ROUTES_CONFIG} from './policies-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(POLICIES_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PoliciesRoutesModule {
}
