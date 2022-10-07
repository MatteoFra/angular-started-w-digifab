import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from 'src/app/models/job.model';
import { Person } from 'src/app/models/person.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {

  jobs!: Job[];
  persons!: Person[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getJobs()
    this.dataService.jobs$.subscribe(
      data => {
        this.jobs = data
      }
    );

    this.dataService.getPersons()
    this.dataService.persons$.subscribe(
      data => {
        this.persons = data
      }
    );
  }


  // jobs$!: Observable<Job[]>;
  // persons$!: Observable<Person[]>;

  // constructor(private dataService: DataService) { }

  // ngOnInit(): void {
  //   this.jobs$ = this.dataService.getJobs();
  //   this.persons$ = this.dataService.getPersons();
  // }
}
