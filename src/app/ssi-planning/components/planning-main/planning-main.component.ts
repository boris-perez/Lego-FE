/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlanningHttpService} from '../../services/planning-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Planning} from '../../api/domain/planning';

@Component({
  selector: 'planning-main',
  templateUrl: './planning-main.component.html',
  styleUrls: ['./planning-main.component.scss']
})
export class PlanningMainComponent implements OnInit, OnDestroy {

  private _planningSubscription: Subscription;

  constructor(private _planningHttpService: PlanningHttpService) {

  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._planningSubscription);
  }

  private _initialize(): void {
    this._planningSubscription = this._planningHttpService.doFindAll().subscribe(
      (planning: Planning[]) => {
        console.log(planning);
      }
    );
  }
}
