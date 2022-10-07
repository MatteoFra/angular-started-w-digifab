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

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>('http://localhost:3000/persons');
  }
  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('http://localhost:3000/jobs');
  }

  deleteData(idx: number, isPerson: boolean) {
    if (isPerson) {
      this.http.delete<Person[]>(`http://localhost:3000/persons/${idx}`)
    } else {
      this.http.delete<Job[]>(`http://localhost:3000/jobs/${idx}`).subscribe(
        data => {
          console.log(data)
        }
      )
    }
  }
}
