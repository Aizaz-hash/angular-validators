import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports :[CommonModule , ReactiveFormsModule , FormsModule]
})
export class TableComponent {
  tableForm: FormGroup;
  previousValues: any[] = []; // Store previous values


  constructor(private fb: FormBuilder) {
    this.tableForm = this.fb.group({
      rows: this.fb.array([])  // FormArray to manage dynamic rows
    });
    this.addRow();
  }

  get rows(): FormArray<FormGroup> {
    return this.tableForm.get('rows') as FormArray<FormGroup>;
  }
  

  addRow() {

    if (!this.validateTable())
    {
      return
    }
    else
    {
      const row = this.fb.group({
        column1: ['', Validators.required],
        column2: ['', Validators.required],
        column3: ['', Validators.required],
        column4: ['', Validators.required],
        column5: ['', Validators.required],
        column6: ['', Validators.required],
        column7: ['', Validators.required],
        column8: ['', Validators.required],
      });
  
      // Store initial empty values
      this.previousValues.push({ ...row.value });

      // Listen for changes in the row
      row.valueChanges.subscribe(() => {
        this.detectChanges();
      });

      this.rows.push(row);
    }

   
  }


  validateTable() {
    this.rows.controls.forEach(row => {
      row.markAllAsTouched(); // Force validation errors to show
      row.updateValueAndValidity(); // Re-check validation state
    });

    return this.tableForm.valid
  }

  detectChanges() {
    this.rows.controls.forEach((row, index) => {
      const currentRowValue = row.value;
      const previousRowValue = this.previousValues[index];

      const changes = this.getChangedFields(previousRowValue, currentRowValue);

      if (Object.keys(changes).length > 0) {
        console.log(`Row ${index + 1} changed:`, changes);
        this.previousValues[index] = { ...currentRowValue }; // Update stored values
      }
    });
  }

  getChangedFields(oldValue: any, newValue: any): any {
    let changes: any = {};
    Object.keys(newValue).forEach(key => {
      if (oldValue[key] !== newValue[key] && oldValue[key] !== '' && oldValue[key] !== null) {
        // Only log if the previous value was NOT empty/null
        changes[key] = { old: oldValue[key] };
      }
    });
    return changes;
  }

}


