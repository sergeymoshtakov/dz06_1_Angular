import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditoriesService {
  auditories = [
    {
      name : 'Auditory 101',
      capacity : 30,
      faculty : 'Biological Faculty',
    },
    {
      name : 'Auditory 102',
      capacity : 35,
      faculty : 'Chemical Faculty',
    },
    {
      name : 'Auditory 103',
      capacity : 28,
      faculty : 'Computer Science Faculty',
    },
    {
      name : 'Auditory 104',
      capacity : 21,
      faculty : 'Mathematical Faculty',
    },
    {
      name : 'Auditory 105',
      capacity : 20,
      faculty : 'Mathematical Faculty',
    },
  ];
}
