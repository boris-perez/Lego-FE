/**
 * @author boris perez
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Security} from '../api/domain/Security';

@Injectable()
export class SecurityHttpService extends BaseHttpService<Security> {

  protected path(): string {
    return '/security';
  }
}
