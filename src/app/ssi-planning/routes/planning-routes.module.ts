/**
 * @author boris perez
 * */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {PLANNING_ROUTES_CONFIG} from './planning-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PLANNING_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PlanningRoutesModule {
}
