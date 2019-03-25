/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {PoliciesHttpService} from '../../services/policies-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Policies} from '../../api/domain/policies';

@Component({
  selector: 'policies-main',
  templateUrl: './policies-main.component.html',
  styleUrls: ['./policies-main.component.scss']
})
export class PoliciesMainComponent implements OnInit, OnDestroy {

  private _policiesSubscription: Subscription;

  constructor(private _policiesHttpService: PoliciesHttpService) {

  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._policiesSubscription);
  }

  private _initialize(): void {
    this._policiesSubscription = this._policiesHttpService.doFindAll().subscribe(
      (policies: Policies[]) => {
        console.log(policies);
      }
    );
  }
}
