/**
 * @author boris perez
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Audit} from '../api/domain/Audit';

@Injectable()
export class AuditHttpService extends BaseHttpService<Audit> {

  protected path(): string {
    return '/audit';
  }
}
