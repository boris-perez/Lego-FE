import {PlanningTypeEnum} from '../enum/planning-type.enum';
import {PlanningSeverityEnum} from '../enum/planning-severity.enum';

export class Planning {
  id: string;
  name: string;
  description: string;
  date: Date;
  type: PlanningTypeEnum;
  severity: PlanningSeverityEnum;
  observation: string;
}
