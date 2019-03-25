/**
 * @author Boris Perez
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PlanningRoutesModule} from './routes/planning-routes.module';

import {PlanningHttpService} from './services/planning-http-service';

import {SsiPlanningComponent} from './ssi-planning.component';
import {PlanningMainComponent} from './components/planning-main/planning-main.component';
import {PlanningRootComponent} from './components/planning-root/planning-root.component';

@NgModule({
  declarations: [
    SsiPlanningComponent,
    PlanningRootComponent,
    PlanningMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PlanningRoutesModule,
    HttpClientModule
  ],
  exports: [
    SsiPlanningComponent,
    PlanningRootComponent,
    PlanningMainComponent
  ],
  providers: [
    PlanningHttpService
  ]
})
export class SsiPlanningModule {
}
