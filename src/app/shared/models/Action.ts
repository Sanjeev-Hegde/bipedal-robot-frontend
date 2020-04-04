import { ServoMotion } from './ServoMotion';

export class Action {
    id?: number;
    sequenceId: number;
    type: string;
    delay?: number;
    goTo?: number;
    movementId?: number;
    servoMotions: ServoMotion[];
    // Define well-known properties here
  
    constructor(data?: Partial<Action>) {
      this.id = data.id;
      this.sequenceId = data.sequenceId;
      this.type = data.type;
      this.delay = data.delay;
      this.goTo = data.goTo;
      this.movementId = data.movementId;
      this.servoMotions = data.servoMotions;
    }
  }