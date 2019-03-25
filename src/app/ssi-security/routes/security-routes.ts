/**
 * @author Boris perez
 */

import {Routes} from '@angular/router';
import {SecurityRootComponent} from '../components/security-root/security-root.component';
import {SecurityMainComponent} from '../components/security-main/security-main.component';


export const SECURITY_ROUTES_CONFIG: Routes = [
  {
    path: 'security',
    component: SecurityRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: '', component: SecurityMainComponent},
        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
