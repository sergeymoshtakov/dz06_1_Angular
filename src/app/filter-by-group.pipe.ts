import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByGroup'
})
export class FilterByGroupPipe implements PipeTransform {

  transform(auditories: any[], faculty: string): any[] {
    if (!faculty) {
      return auditories;
    }
    return auditories.filter(auditory => auditory.faculty === faculty);
  }

}
