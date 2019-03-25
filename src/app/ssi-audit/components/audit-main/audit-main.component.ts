/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuditHttpService} from '../../services/audit-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Audit} from '../../api/domain/audit';

@Component({
  selector: 'audit-main',
  templateUrl: './audit-main.component.html',
  styleUrls: ['./audit-main.component.scss']
})
export class AuditMainComponent implements OnInit, OnDestroy {

  private _auditSubscription: Subscription;

  constructor(private _auditHttpService: AuditHttpService) {

  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._auditSubscription);
  }

  private _initialize(): void {
    this._auditSubscription = this._auditHttpService.doFindAll().subscribe(
      (audit: Audit[]) => {
        console.log(audit);
      }
    );
  }
}
