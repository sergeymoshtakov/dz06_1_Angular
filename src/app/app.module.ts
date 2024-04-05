import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { AuditoryComponent } from './auditory/auditory.component';
import { AuditoriesComponent } from './auditories/auditories.component';
import { FormsModule } from '@angular/forms';
import { AuditoriesService } from './auditories.service';
import { GroupsService } from './groups.service';
import { FilterByFacultyPipe } from './filter-by-faculty.pipe';
import { FilterByGroupPipe } from './filter-by-group.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AuditoryComponent,
    AuditoriesComponent,
    FilterByFacultyPipe,
    FilterByGroupPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AuditoriesService,
    GroupsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
