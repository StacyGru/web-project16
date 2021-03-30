import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { EditformWorkerComponent } from './editform-worker/editform-worker.component';
import { TableWorkersComponent } from './table-workers/table-workers.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FiltersPipe } from 'src/app/shared/pipes/filters.pipe';
import { DepartmentNamePipe } from 'src/app/shared/pipes/department-name.pipe';
import { CountAgePipe } from 'src/app/shared/pipes/count-age.pipe';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';


@NgModule({
  declarations: [
      UiComponent, 
      EditformWorkerComponent, 
      TableWorkersComponent, 
      FiltersPipe, 
      CountAgePipe,
      DepartmentNamePipe,
      SortPipe
    ],
  imports: [
      CommonModule, 
      UiRoutingModule, 
      FormsModule, 
      ReactiveFormsModule, 
      TextMaskModule
    ],
})
export class UiModule {}