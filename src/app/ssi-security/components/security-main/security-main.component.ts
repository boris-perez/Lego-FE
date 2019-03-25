/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {SecurityHttpService} from '../../services/security-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Security} from '../../api/domain/security';

@Component({
  selector: 'security-main',
  templateUrl: './security-main.component.html',
  styleUrls: ['./security-main.component.scss']
})
export class SecurityMainComponent implements OnInit, OnDestroy {

  private _securitySubscription: Subscription;

  constructor(private _securityHttpService: SecurityHttpService) {

  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._securitySubscription);
  }

  private _initialize(): void {
    this._securitySubscription = this._securityHttpService.doFindAll().subscribe(
      (security: Security[]) => {
        console.log(security);
      }
    );
  }
}
