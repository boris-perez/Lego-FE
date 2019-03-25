/**
 * @author Boris perez
 */

import {Routes} from '@angular/router';
import {PoliciesRootComponent} from '../components/policies-root/policies-root.component';
import {PoliciesMainComponent} from '../components/policies-main/policies-main.component';


export const POLICIES_ROUTES_CONFIG: Routes = [
  {
    path: 'policies',
    component: PoliciesRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: '', component: PoliciesMainComponent},
        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
