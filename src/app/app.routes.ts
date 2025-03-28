import { Routes } from '@angular/router';
import { NewComponent } from './modules/new/new.component';
import { PreviewComponent } from './modules/preview/preview.component';
import { TableComponent } from './modules/table/create-table/table.component';
import { PreviewTableComponent } from './modules/table/preview-table/preview.component';

export const routes: Routes = [
    { path: '', redirectTo: '/new/table', pathMatch: 'full' },
    { path: 'new', component: NewComponent },
    { path: 'preview', component: PreviewComponent },
    { path: 'new/table', component: TableComponent },
    { path: 'prewview/table', component: PreviewTableComponent },
  ];