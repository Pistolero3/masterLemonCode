console.log("************** DELIVERABLE 05 *********************");
console.log("Slot Machine");

class SlotMachine {
  money: number;
  result: boolean[];

  constructor() {
    this.money = 0;
  }

  roulette(): void {
    this.result = [];
    for (let i = 0; i < 3; i++) {
      this.result.push(Math.random() < 0.6);
    }

    const win = this.result.every((item) => item === true);

    if (win) {
      console.log(`Congratulations!!! You won ${this.money} coins!!`);
      this.money = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }

  play(): void {
    ++this.money;
    this.roulette();
  }
}

const newMachine = new SlotMachine();

newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
