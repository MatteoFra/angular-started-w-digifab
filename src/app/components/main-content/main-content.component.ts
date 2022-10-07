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
  jobs!: Job[]
  persons!: Person[]

  // persons$!: Observable<Person[]>;
  // jobs$!: Observable<Job[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    // this.persons$ = this.dataService.getPersons()
    // this.jobs$ = this.dataService.getJobs()

    this.dataService.getJobs().subscribe(
      item => {
        this.jobs = item
        console.log('jobs', item);
      }
    )
    this.dataService.getPersons().subscribe(
      item => {
        this.persons = item
        console.log('persons', item);
      }
    )

  
  }
}
