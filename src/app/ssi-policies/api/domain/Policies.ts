import {PoliciesTypeEnum} from '../enum/policies-type.enum';
import {PoliciesSeverityEnum} from '../enum/policies-severity.enum';

export class Policies {
  id: string;
  name: string;
  description: string;
  date: Date;
  type: PoliciesTypeEnum;
  severity: PoliciesSeverityEnum;
  observation: string;
}
