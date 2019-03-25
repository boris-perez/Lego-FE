/**
 * @author Boris Perez
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PoliciesRoutesModule} from './routes/policies-routes.module';

import {PoliciesHttpService} from './services/policies-http-service';

import {SsiPoliciesComponent} from './ssi-policies.component';
import {PoliciesMainComponent} from './components/policies-main/policies-main.component';
import {PoliciesRootComponent} from './components/policies-root/policies-root.component';



@NgModule({
  declarations: [
    SsiPoliciesComponent,
    PoliciesRootComponent,
    PoliciesMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PoliciesRoutesModule,
    HttpClientModule
  ],
  exports: [
    SsiPoliciesComponent,
    PoliciesRootComponent,
    PoliciesMainComponent
  ],
  providers: [
    PoliciesHttpService
  ]
})
export class SsiPoliciesModule {
}
