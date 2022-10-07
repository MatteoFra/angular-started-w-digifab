import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Company } from '../models/company.model';
import { Job } from '../models/job.model';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  company: Company[] = [
    {
      name: 'Google',
      city: 'San Fransisco',
      country: 'USA',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png',
      rate: 3.5,
    },
    {
      name: 'Buffalo Grill',
      city: 'Lille',
      country: 'France',
      imgUrl:
        'https://www.buffalo-grill.fr/static/images/key-figures/buffalo-red.png',
      rate: 3.5,
    },
    {
      name: 'Infomaniak',
      city: 'Genève',
      country: 'Suisse',
      imgUrl:
        'https://h5ckfun.info/wp-content/uploads/2020/02/infomaniak-logo-150x150.jpg',
      rate: 4,
    },
  ];
  jobs: Job[] = [
    {
      title: 'Developer Javascript Fullstack',
      company: this.company[0],
      salary: '$100,000 - $200,000',
    },
    {
      title: 'Artiste',
      company: this.company[1],
      salary: '$20,000 - $25,000',
    },
    {
      title: 'Developper Angular',
      company: this.company[2],
      salary: '$180,000 - $250,000',
    },
  ];
  persons: Person[] = [
    {
      name: 'John',
      skills: [
        { job: 'Developer Python', experience: '3 years' },
        { job: 'Developer JS', experience: '3 years' },
        { job: 'Developer Wordpress', experience: '3 years' },
      ],
      city: 'London',
      country: 'England',
      imgUrl:
        'https://st.depositphotos.com/1269204/1219/i/450/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg',
    },
    {
      name: 'Johnny',
      skills: [{ job: 'Artist', experience: '33 years' }],
      city: 'Paris',
      country: 'France',
      imgUrl:
        'https://www.lab-recherche-environnement.org/wp-content/uploads/erwan-personne-450.jpg',
    },
    {
      name: 'Marie',
      skills: [{ job: 'Developer JAVA', experience: '5 years' }],
      city: 'Toulouse',
      country: 'France',
      imgUrl:
        'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      name: 'Marie-Jeanne',
      skills: [{ job: 'Nurse', experience: '15 years' }],
      city: 'Genève',
      country: 'Suisse',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnVPLUfe3aEhsQ9dr_77tx_DGIIRxSzZrwUMdtdcMaSk08hal2mPmXsguuRrtIWw9iaiw&usqp=CAU',
    },
  ];

  persons$: Subject<Person[]> = new BehaviorSubject(this.persons);
  jobs$: Subject<Job[]> = new BehaviorSubject(this.jobs);

  getJobs(): Subject<Job[]> {
    return this.jobs$;
  }
  getPersons(): Subject<Person[]> {
    return this.persons$;
  }

  deleteData(idx: number, isPerson?: boolean) {
    if (isPerson) {
      delete this.persons[idx];
      this.persons$ = new BehaviorSubject(this.persons);
    } else {
      delete this.jobs[idx];
      this.jobs = this.jobs.filter((a) => a);
      this.jobs$.next(this.jobs);
    }
  }

  constructor() {}
}
