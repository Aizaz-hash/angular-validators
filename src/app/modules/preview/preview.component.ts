import { Component } from '@angular/core';
import { NewComponent } from '../new/new.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview',
  imports: [CommonModule , FormsModule],
  standalone : true,
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  tableData = NewComponent.prototype.tableData; 
}
