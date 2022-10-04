import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  jobs: Job[] = [];
  persons: Person[] = [];

  constructor() {}

  ngOnInit(): void {
    let person1 = {
      name: 'John',
      job: 'Developer',
      experience: '3 years',
      city: 'London',
      country: 'England',
      imgUrl:
        'https://st.depositphotos.com/1269204/1219/i/450/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg',
    };
    let person2 = {
      name: 'Johnny',
      job: 'Artist',
      experience: '33 years',
      city: 'Paris',
      country: 'France',
      imgUrl:
        'https://www.lab-recherche-environnement.org/wp-content/uploads/erwan-personne-450.jpg',
    };
    let company1 = {
      name: 'Google',
      city: 'San Fransisco',
      country: 'USA',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png',
      rate: 3.5,
    };
    let company2 = {
      name: 'Buffalo Grill',
      city: 'Lille',
      country: 'France',
      imgUrl:
        'https://www.buffalo-grill.fr/static/images/key-figures/buffalo-red.png',
      rate: 3.5,
    };
    let job1 = {
      title: 'Developer Javascript Fullstack',
      company: company1,
      salary: '$100,000 - $200,000',
    };
    let job2 = {
      title: 'Artiste',
      company: company2,
      salary: '$20,000 - $25,000',
    };

    this.jobs.push(job1);
    this.jobs.push(job2);
    this.jobs.push(job1);
    this.jobs.push(job2);
    this.jobs.push(job1);
    this.jobs.push(job2);

    this.persons.push(person1);
    this.persons.push(person2);
    this.persons.push(person1);
    this.persons.push(person2);
    this.persons.push(person1);
    this.persons.push(person2);

    // PERSON
    // public name: string,
    // public job: string,
    // public experience: string,
    // public city: string,
    // public country: string

    // JOBS
    // public title: string,
    // public company: Company,
    // public salary: string,

    // COMPANY
    // public name: string,
    // public city: string,
    // public country: string,
    // public imgUrl: string
  }
}
