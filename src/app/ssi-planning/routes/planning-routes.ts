/**
 * @author Boris perez
 */

import {Routes} from '@angular/router';
import {PlanningRootComponent} from '../components/planning-root/planning-root.component';
import {PlanningMainComponent} from '../components/planning-main/planning-main.component';


export const PLANNING_ROUTES_CONFIG: Routes = [
  {
    path: 'planning',
    component: PlanningRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: '', component: PlanningMainComponent},
        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
