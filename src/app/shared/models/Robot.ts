import { Pca9685 } from './Pca9685';
import { Movement } from './Movement';

export class Robot {
    id?: number;
    name: string;
    description?: string;
    pca9685s: Pca9685[];
    movements: Movement[];
  
    constructor(data?: Partial<Robot>) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.pca9685s = data.pca9685s;
      this.movements = data.movements;
    }
  }