import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auditory',
  templateUrl: './auditory.component.html',
  styleUrl: './auditory.component.css'
})
export class AuditoryComponent {
  @Input() auditory : any;
}
