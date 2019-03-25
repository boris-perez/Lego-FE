/**
 * @author Boris perez
 */

import {Routes} from '@angular/router';
import {AuditRootComponent} from '../components/audit-root/audit-root.component';
import {AuditMainComponent} from '../components/audit-main/audit-main.component';


export const AUDIT_ROUTES_CONFIG: Routes = [
  {
    path: 'audit',
    component: AuditRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: '', component: AuditMainComponent},
        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
