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

  jobs$!: Observable<Job[]>;
  persons$!: Observable<Person[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.jobs$ = this.dataService.getJobs();
    this.persons$ = this.dataService.getPersons();
  }
}
