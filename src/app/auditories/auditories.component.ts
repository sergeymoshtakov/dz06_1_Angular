import { Component } from '@angular/core';
import { AuditoriesService } from '../auditories.service';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-auditories',
  templateUrl: './auditories.component.html',
  styleUrl: './auditories.component.css'
})
export class AuditoriesComponent {
  auditories : any[] = [];
  groups : any[] = [];
  selectedFilter : string = '';
  selectedFaculty : string = '';
  selectedGroup : string = '';

  constructor(private auditoriesService : AuditoriesService, private groupsService : GroupsService){}

  ngOnInit() : void{
    this.auditories = this.auditoriesService.auditories;
    this.groups = this.groupsService.groups;
  }

  sortByCapacity(){
    this.selectedFilter = 'capacity';
  }

  sortByName(){
    this.selectedFilter = 'name';
  }
}
