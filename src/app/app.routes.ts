import { Routes } from '@angular/router';
import { NewComponent } from './modules/new/new.component';
import { PreviewComponent } from './modules/preview/preview.component';

export const routes: Routes = [
    { path: '', redirectTo: '/new', pathMatch: 'full' },
    { path: 'new', component: NewComponent },
    { path: 'preview', component: PreviewComponent },
  ];