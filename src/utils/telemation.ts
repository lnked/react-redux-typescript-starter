// export class Telemation {

//   static create(to: number): Telemation;
//   static create(from: number, to: number, duration: number): Telemation;

//   static create(a: number, b?: number, c?: number) {
//     if (arguments.length === 1) {
//       return new Telemation(0, a, 0);
//     }
//     return new Telemation(a, b!, c!);
//   }

//   finished: boolean;
//   protected start: number;

//   constructor (from: number, to: number, protected duration: number) {
//     this.start = Date.now();
//     this.finished = !duration;
//   }

//   update(to: number): Telemation;
//   update(from: number, to: number, duration: number): Telemation;

//   update(a: number, b?: number, c?: number): Telemation {
//     if (arguments.length === 1) {
//       this.from = 0;
//       this.to = a;
//       this.duration = 0;
//     } else {
//       this.from = a;
//       this.to = b!;
//       this.duration = c!;
//     }
//     this.finished = !this.duration;

//     return this;
//   }

//   get value() {
//     if (this.finished) {
//       return this.to;
//     }
//     const p = Math.min(1, Math.max(0, ((Date.now() - this.start)) / this.duration));
//     if (p === 1) {
//       this.finished = true;
//       return this.to;
//     } else if (p === 0) {
//       return this.from;
//     }

//     return (this.from + (this.to - this.from) * (p * (2 - p)));
//   }

// }
