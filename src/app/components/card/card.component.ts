import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { Person } from 'src/app/models/person.model';
import { DataService } from '../../services/data.service';

// metadata
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() job!: Job;
  @Input() person!: Person;
  @Input() index!: number;

  isHovered = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  notInterested(idx: number) {
    this.dataService.deleteData(idx, false);
  }
  // async setAttributes() {
  // // user inputs
  // let newName = prompt('new name :');
  // let newFirstName = prompt('new first name :');
  // let newImgUrl = prompt('new imgUrl :');
  // let newAge = prompt('new age :');
  // let newCity = prompt('new city :');

  // // inputs is validated
  // var inputsValid = true;

  // check type of inputs
  //   if (newName != null && typeof newName == 'string') {
  //     this.name = newName;
  //   } else {
  //     alert('error with name');
  //     inputsValid = false;
  //   }
  //   if (newFirstName != null && typeof newFirstName == 'string') {
  //     this.firstname = newFirstName;
  //   } else {
  //     alert('error with firstname');
  //     inputsValid = false;
  //   }
  //   if (
  //     newImgUrl != null &&
  //     typeof newImgUrl == 'string' &&
  //     (await this.isImgUrl(newImgUrl))
  //   ) {
  //     this.imgUrl = newImgUrl;
  //   } else {
  //     alert('error with imgUrl');
  //     inputsValid = false;
  //   }
  //   if (newAge != null && this.isPositiveInteger(newAge)) {
  //     this.age = parseInt(newAge);
  //   } else {
  //     alert('error with age');
  //     inputsValid = false;
  //   }
  //   if (newCity != null && typeof newCity == 'string') {
  //     this.city = newCity;
  //   } else {
  //     alert('error with city');
  //     inputsValid = false;
  //   }

  //   // new set save
  //   if (inputsValid) {
  //     this.isActive = true;
  //     setTimeout(() => {
  //       this.isActive = false;
  //       this.show = false;
  //       setTimeout(() => {
  //         this.show = true;
  //       }, 1500);
  //     }, 1500);
  //   }
  // }

  // isPositiveInteger(str: string) {
  //   if (typeof str !== 'string') {
  //     return false;
  //   }
  //   const num = Number(str);
  //   if (Number.isInteger(num) && num > 0) {
  //     return true;
  //   }
  //   return false;
  // }

  // isImgUrl(url: string) {
  //   const img = new Image();
  //   img.src = url;
  //   return new Promise((resolve) => {
  //     img.onerror = () => resolve(false);
  //     img.onload = () => resolve(true);
  //   });
  // }
}
