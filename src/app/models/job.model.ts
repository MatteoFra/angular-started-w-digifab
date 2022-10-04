import { Company } from "./company.model";

export class Job {

    constructor(public title: string,
      public company: Company,
      public salary: string,
      ) {
    }
    
  }