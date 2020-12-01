import { Stat } from './stat';

export class Stats{
    public strength:Stat;
    public dexterity:Stat;
    public constitution:Stat;
    public intelligence:Stat;
    public wisdom:Stat;
    public charisma:Stat;

    constructor(){
        this.strength = new Stat();
        this.dexterity = new Stat();
        this.constitution = new Stat();
        this.intelligence = new Stat();
        this.wisdom = new Stat();
        this.charisma = new Stat();
    }
}