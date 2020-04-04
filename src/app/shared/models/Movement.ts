import { Action } from './Action';

export class Movement  {
    id?: number;
    name: string;
    description: string;
    actions: Action[];
    robotId?: number;
  
    constructor(data?: Partial<Movement>) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.actions =data.actions;
      this.robotId = data.robotId;
    }
  }