/**
 * @author alain quinones
 */
import {Routes} from '@angular/router';
import {SsiHomeComponent} from '../ssi-home/ssi-home.component';
import {SsiOrganizationComponent} from '../ssi-organization/ssi-organization.component';
import {SsiIncidentComponent} from '../ssi-incident/ssi-incident.component';
import {SsiPoliciesComponent} from '../ssi-policies/ssi-policies.component';
import {SsiPlanningComponent} from '../ssi-planning/ssi-planning.component';
import {SsiSecurityComponent} from '../ssi-security/ssi-security.component';
import {SsiAuditComponent} from '../ssi-audit/ssi-audit.component';


export const ROUTES_CONFIG: Routes = [
  {path: 'home', component: SsiHomeComponent},
  {path: 'organization', component: SsiOrganizationComponent},
  {path: 'incident', component: SsiIncidentComponent},
  {path: 'policies', component: SsiPoliciesComponent},
  {path: 'audit', component: SsiAuditComponent},
  {path: 'security', component: SsiSecurityComponent},
  {path: 'planning', component: SsiPlanningComponent},
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
