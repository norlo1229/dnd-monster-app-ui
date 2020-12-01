export class Stat {
    public value: number;
    public bonus: number;

    constructor(){
        this.value = 10;
        this.bonus = 0;
    }

    public getBonus($event): void {     
        this.bonus = Math.trunc((this.value - 10) / 2);
    }
}