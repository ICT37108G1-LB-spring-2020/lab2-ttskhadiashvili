import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  infoTitles: string[];
  students: string[][];

  constructor() {
    this.infoTitles = ['Name', 'Surname', 'ID'];
    this.students = [
      ['Harry', 'Potter', '1565487823'],
      ['Sirius', 'Black', '0501020896'],
      ['Albus', 'Dambldore', '0000456512'],
      ['Severus', 'Snape', '4567891235']
    ];
  }

  ngOnInit(): void {
  }
}
