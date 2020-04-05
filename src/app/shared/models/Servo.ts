export class Servo  {
    id?: number;
    name: string;
    channel: number;
    minPulseLength: number;
    maxPulseLength: number;
    pca9685Id?: number;
  
    constructor(data?: Partial<Servo>) {
      this.id = data.id;
      this.name = data.name;
      this.channel = data.channel;
      this.minPulseLength  = data.minPulseLength;
      this.maxPulseLength = data.maxPulseLength;
      this.pca9685Id = data.pca9685Id;
    }
  }

  export class ServoSlider extends Servo{
    range?:number
  }