import {SecurityTypeEnum} from '../enum/security-type.enum';
import {SecuritySeverityEnum} from '../enum/security-severity.enum';

export class Security {
  id: string;
  name: string;
  description: string;
  date: Date;
  type: SecurityTypeEnum;
  severity: SecuritySeverityEnum;
  observation: string;
}
