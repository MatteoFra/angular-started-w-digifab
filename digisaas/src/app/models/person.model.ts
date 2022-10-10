import { Skill } from "./skills.model";

export class Person {
  constructor(
    public id: number,
    public name: string,
    public imgUrl: string,
    public skills: Skill[],
    public city: string,
    public country: string
  ) {}
}
