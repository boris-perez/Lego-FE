import {AuditTypeEnum} from '../enum/audit-type.enum';
import {AuditSeverityEnum} from '../enum/audit-severity.enum';

export class Audit {
  id: string;
  name: string;
  description: string;
  date: Date;
  type: AuditTypeEnum;
  severity: AuditSeverityEnum;
  observation: string;
}
