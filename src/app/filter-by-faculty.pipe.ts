import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByFaculty'
})
export class FilterByFacultyPipe implements PipeTransform {

  transform(auditories: any[], selectedFaculty: string): any[] {
    if (!selectedFaculty) {
      return auditories;
    }
    return auditories.filter(auditory => auditory.faculty === selectedFaculty);
  }

}
