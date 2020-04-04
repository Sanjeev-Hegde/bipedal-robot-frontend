export class ServoMotion {
    id?: number;
    servoId: number;
    finalPosition: number;
    speed?: number;
    actionId?: number;
  
    constructor(data?: Partial<ServoMotion>) {
      this.id = data.id;
      this.servoId = data.servoId;
      this.finalPosition = data.finalPosition;
      this.speed = data.speed;
      this.actionId = data.actionId;
    }
  }
  