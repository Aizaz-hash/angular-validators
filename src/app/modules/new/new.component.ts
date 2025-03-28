import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  imports: [CommonModule , FormsModule, ReactiveFormsModule ],
  standalone : true,
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  constructor(private formBuilder : FormBuilder){}
  formValidtor!: FormGroup
  tableData: { firstName: string; lastName : string ; country:string ; state:string;city:string; postalCode: number }[] = [];
  submitted : boolean = false

  ngOnInit()
  {
    this.initForm()
  } 

  initForm()
  {
    this.formValidtor =this.formBuilder.group(
    {
      firstName :['',[Validators.required , Validators.maxLength(10)]],
      lastName :['',[Validators.required  , Validators.maxLength(10)]],
      country :['',[Validators.required , Validators.maxLength(10)]],
      state :['',[Validators.required , Validators.maxLength(10)]],
      city :['',[Validators.required , Validators.maxLength(10)]],
      postalCode: ['',[Validators.required , Validators.min(0)]]
    }
    );
    this.submitted = false

  }

  get formData()
  {
    return this.formValidtor.controls
  }


  addRow() 
  {

    this.submitted = true
    if (this.formValidtor.invalid) 
    {
      return;
    }
    this.tableData.push(
    {
      firstName:this.formValidtor.controls['firstName'].value,
      lastName:this.formValidtor.controls['lastName'].value,
      country:this.formValidtor.controls['country'].value,
      state:this.formValidtor.controls['state'].value,
      city:this.formValidtor.controls['city'].value,
      postalCode:this.formValidtor.controls['postalCode'].value,
    }
    );
    
    this.initForm()
  }
  
}
