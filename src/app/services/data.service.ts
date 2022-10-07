import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Company } from '../models/company.model';
import { Job } from '../models/job.model';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  persons$: Subject<Person[]> = new BehaviorSubject<any>([]);
  jobs$: Subject<Job[]> = new BehaviorSubject<any>([]);

  getPersons() {
    this.http
      .get<Person[]>('http://localhost:3000/persons')
      .subscribe((data) => {
        this.persons$.next(data);
        console.log('get persons');
      });
  }

  getJobs() {
    this.http.get<Job[]>('http://localhost:3000/jobs').subscribe((data) => {
      this.jobs$.next(data);
      console.log('get jobs');
    });
  }

  addJob(formValue: Job, id: number) {
    this.http
      .post<Job>('http://localhost:3000/jobs', { ...formValue, id })
      .subscribe(() => {
        console.log('job added');
      });

    this.getJobs();
  }

  addPerson(formValue: Job, id: number) {
    // console.log('add person', {... formValue, id});

    this.http
      .post<Job>('http://localhost:3000/persons', { ...formValue, id })
      .subscribe(() => {
        console.log('person added');
      });

    this.getPersons();
  }

  deleteJob(idx: number) {
    this.http
      .delete<Job[]>(`http://localhost:3000/jobs/${idx}`)
      .subscribe(() => {
        console.log('job deleted');
      });

    this.getJobs();
  }

  deletePerson(idx: number) {
    this.http
      .delete<Job[]>(`http://localhost:3000/persons/${idx}`)
      .subscribe(() => {
        console.log('person deleted');
      });

    this.getJobs();
  }

  // getPersonsObs(): Observable<Person[]> {
  //   return this.http.get<Person[]>('http://localhost:3000/persons');
  // }
  // getJobsObs(): Observable<Job[]> {
  //   return this.http.get<Job[]>('http://localhost:3000/jobs');
  // }

  // getPersons(): Observable<Person[]> {
  //   return this.http.get<Person[]>('http://localhost:3000/persons');
  // }
  // getJobs(): Observable<Job[]> {
  //   return this.http.get<Job[]>('http://localhost:3000/jobs');
  // }

  // deleteData(idx: number, isPerson: boolean) {
  //   if (isPerson) {
  //     this.http.delete<Person[]>(`http://localhost:3000/persons/${idx}`).subscribe(
  //       data => console.log(data)
  //     )
  //   } else {
  //     this.http.delete<Job[]>(`http://localhost:3000/jobs/${idx}`).subscribe(
  //       data => console.log(data)
  //     )
  //   }
  // }
}
