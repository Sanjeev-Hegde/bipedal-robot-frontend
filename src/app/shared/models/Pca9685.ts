import { Servo } from './Servo';

export class Pca9685 {
  id?: number;
  name?: string;
  address: number;
  frequency: number;
  servos?: Servo[];
  robotId?: number;

  constructor(data?: Partial<Pca9685>) {
    this.id =data.id;
    this.name = data.name;
    this.address = data.address;
    this.frequency = data.frequency;
    this.servos = data.servos;
    this.robotId = data.robotId;
  }
}