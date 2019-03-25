/**
 * @author Boris Perez
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {SecurityRoutesModule} from './routes/security-routes.module';

import {SecurityHttpService} from './services/security-http-service';

import {SsiSecurityComponent} from './ssi-security.component';
import {SecurityMainComponent} from './components/security-main/security-main.component';
import {SecurityRootComponent} from './components/security-root/security-root.component';



@NgModule({
  declarations: [
    SsiSecurityComponent,
    SecurityRootComponent,
    SecurityMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SecurityRoutesModule,
    HttpClientModule
  ],
  exports: [
    SsiSecurityComponent,
    SecurityRootComponent,
    SecurityMainComponent
  ],
  providers: [
    SecurityHttpService
  ]
})
export class SsiSecurityModule {
}
