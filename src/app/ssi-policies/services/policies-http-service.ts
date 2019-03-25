/**
 * @author boris perez
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Policies} from '../api/domain/Policies';

@Injectable()
export class PoliciesHttpService extends BaseHttpService<Policies> {

  protected path(): string {
    return '/policies';
  }
}
