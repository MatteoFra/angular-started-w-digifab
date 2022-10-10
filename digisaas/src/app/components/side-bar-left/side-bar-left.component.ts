import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Job } from 'src/app/models/job.model';
import { Person } from 'src/app/models/person.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.scss'],
})
export class SideBarLeftComponent implements OnInit {
  jobForm!: FormGroup;
  personForm!: FormGroup;
  jobs!: Job[];
  persons!: Person[];

  urlRegex =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // obs for get length
    this.dataService.jobs$.subscribe((data) => {
      this.jobs = data;
    });
    this.dataService.persons$.subscribe((data) => {
      this.persons = data;
    });

    // forms builder
    this.jobForm = this.formBuilder.group({
      title: ['a', [Validators.required]],
      salary: ['b', [Validators.required]],
      company: this.formBuilder.group({
        name: ['c', [Validators.required]],
        city: ['d', [Validators.required]],
        country: ['e', [Validators.required]],
        imgUrl: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mercedes-Benz_free_logo.svg/2048px-Mercedes-Benz_free_logo.svg.png',
          [Validators.required, Validators.pattern(this.urlRegex)],
        ],
        rate: [5, [Validators.required]],
      }),
    });
    this.personForm = this.formBuilder.group({
      name: ['a', [Validators.required]],
      city: ['b', [Validators.required]],
      country: ['c', [Validators.required]],
      skills: this.formBuilder.array([]),
      imgUrl: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mercedes-Benz_free_logo.svg/2048px-Mercedes-Benz_free_logo.svg.png',
        [Validators.required, Validators.pattern(this.urlRegex)],
      ],
    });
  }

  onSubmitJobForm() {
    this.dataService.addJob(this.jobForm.value, this.jobs.length + 1);
  }

  onSubmitPersonForm() {
    this.dataService.addPerson(this.personForm.value, this.persons.length + 1);
  }

  addSkill() {
    const skills = this.personForm.controls['skills'] as FormArray;
    skills.push(
      this.formBuilder.group({
        job: '',
        experience: '',
      })
    );
  }

  removeSkill(id: number){
    const skills = this.personForm.controls['skills'] as FormArray;
    skills.removeAt(id)
  }
}
