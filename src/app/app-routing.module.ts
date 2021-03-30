import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
  },
  {
    path: 'ui',
    loadChildren: () =>
      import('./ui/ui.module').then((m) => m.UiModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
