/**
 * @author boris perez
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Planning} from '../api/domain/Planning';

@Injectable()
export class PlanningHttpService extends BaseHttpService<Planning> {

  protected path(): string {
    return '/planning';
  }
}
