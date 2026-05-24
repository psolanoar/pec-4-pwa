import { Routes } from '@angular/router';
import { ComponentDetailComponent } from './pages/component-detail/component-detail.component';
import { ComponentListComponent } from './pages/component-list/component-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'country', pathMatch: 'full' },
  { path: 'country', component: ComponentListComponent },
  { path: 'country/:id', component: ComponentDetailComponent },
];
