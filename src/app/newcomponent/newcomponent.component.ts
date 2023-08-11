import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.scss']
})
export class NewcomponentComponent implements OnInit {

  form: FormGroup;
  selected: string = 'M';
  tableData: any[] = [];
  count = 0;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      age: ['',Validators.required],
      gender: ['',Validators.required],
      dob:[''],
      PhoneNumber:[''],
      ContactNumber: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      let currentData: any = this.form.value;
      currentData.id = this.count;
      this.tableData.push(currentData);
      this.count++;
      this.form.reset();
    }
  }


  onEdit(val : any){
    let editData = this.tableData.find((x: any) => x.id == val);
    this.form.patchValue(editData);
  }

  onUpdate() { 
    if (this.form.valid) {
      console.log(this.form.value);
      let editedData = this.form.value;

      let index = this.tableData.findIndex((x: any) => x.id == editedData.id);

      this.tableData[index] = editedData;
      this.form.reset();
      
      // this.tableData.forEach((x: any) => {
      //   if (x.id == editedData.id) {
      //     x = 
      //   }
      // });
    }
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }
}
