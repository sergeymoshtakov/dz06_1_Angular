import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  groups = [
    {
      name : 'p-10',
      numOfStudents : 10,
      faculty : 'Biological Faculty',
    },
    {
      name : 'p-11',
      numOfStudents : 15,
      faculty : 'Mathematical Faculty',
    },
    {
      name : 'p-12',
      numOfStudents : 9,
      faculty : 'Computer Science Faculty',
    },
    {
      name : 'p-13',
      numOfStudents : 14,
      faculty : 'Chemical Faculty',
    },
  ];
}
