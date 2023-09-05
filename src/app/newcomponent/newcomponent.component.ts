import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyApiService } from '../my-api.service';
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
  constructor(private fb: FormBuilder,private myApiService: MyApiService) {
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
  ngOnInit(): void {
    this.getData();
  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      let currentData: any = this.form.value;
   //   currentData.id = this.count;
     // this.tableData.push(currentData);
      this.myApiService.createData(currentData).subscribe({
        next: (response) => {
          console.log('ADD request successful:', response);
          this.getData();
        },
        error: (error) => {
          console.error('Add request error:', error);
        }
      });
    //  this.count++;
      this.form.reset();
    }
  }


  onEdit(val : any){
    let editData = this.tableData.find((x: any) => x.id == val);
    this.form.patchValue(editData);
  }

  onDelete(val : any){
    console.log(val);
    this.myApiService.deleteData(val).subscribe({
      next: (response) => {
        console.log('DELETE request successful:', response);
      },
      error: (error) => {
        console.error('DELETE request error:', error);
      }
    });
  }

  onUpdate() { 
    if (this.form.valid) {
      console.log('Form value:', this.form.value);
      let editedData = this.form.value;
      // let index = this.tableData.findIndex((x: any) => x.id == editedData.id);
      // this.tableData[index] = editedData;
      // this.form.reset();
      console.log('ID to update:', editedData.id);
      const url = `${this.myApiService.apiUrl}/${editedData.id}`;
      console.log('Constructed URL:', url);
  
      this.myApiService.updateData(editedData.id, editedData).subscribe({
        next: (response) => {
          console.log('PUT request successful:', response);
        },
        error: (error) => {
          console.error('PUT request error:', error);
        }
      });
    }
  }
  

  getData() {
    this.myApiService.getData().subscribe({
      next: (data) => {
       this.tableData = data
      },
      error: (error) => {
       console.error(error);
      }
    });
  }

 
}
