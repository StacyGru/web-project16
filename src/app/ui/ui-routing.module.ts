import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableWorkersComponent } from './table-workers/table-workers.component';
import { EditformWorkerComponent } from './editform-worker/editform-worker.component';
import { UiComponent } from './ui.component';

const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
      {
        path: '',
        component: TableWorkersComponent,
      },
      {
        path: 'profile',
        component: EditformWorkerComponent,
      },
      {
        path: 'profile/:id',
        component: EditformWorkerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiRoutingModule {}