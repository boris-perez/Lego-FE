/**
 * @author Boris Perez
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AuditRoutesModule} from './routes/audit-routes.module';

import {AuditHttpService} from './services/audit-http-service';

import {SsiAuditComponent} from './ssi-audit.component';
import {AuditMainComponent} from './components/audit-main/audit-main.component';
import {AuditRootComponent} from './components/audit-root/audit-root.component';


@NgModule({
  declarations: [
    SsiAuditComponent,
    AuditRootComponent,
    AuditMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuditRoutesModule,
    HttpClientModule
  ],
  exports: [
    SsiAuditComponent,
    AuditRootComponent,
    AuditMainComponent
  ],
  providers: [
    AuditHttpService
  ]
})
export class SsiAuditModule {
}
