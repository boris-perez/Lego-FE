/**
 * @author alain quinones
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES_CONFIG} from './ssi-routes';
import {SsiHomeModule} from '../ssi-home/ssi-home.module';
import {SsiOrganizationModule} from '../ssi-organization/ssi-organization.module';
import {SsiIncidentModule} from '../ssi-incident/ssi-incident.module';
import {SsiPoliciesModule} from '../ssi-policies/ssi-policies.module';
import {SsiPlanningModule} from '../ssi-planning/ssi-planning.module';
import {SsiSecurityModule} from '../ssi-security/ssi-security.module';
import {SsiAuditModule} from '../ssi-audit/ssi-audit.module';


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES_CONFIG),
    SsiHomeModule,
    SsiOrganizationModule,
    SsiIncidentModule,
    SsiPoliciesModule,
    SsiPlanningModule,
    SsiAuditModule,
    SsiSecurityModule
  ],
  exports: [RouterModule]
})
export class SsiRoutesModule {

}
