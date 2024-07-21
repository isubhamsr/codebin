import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-createbean',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './createbean.component.html',
  styleUrl: './createbean.component.css'
})
export class CreatebeanComponent {
  
  title = new FormControl("",[
    Validators.required,
  ])

  code = new FormControl("",[
    Validators.required,
  ])

  createForm = new FormGroup({
    title: this.title,
    code: this.code
  }) 

  onSubmit(){
    console.log(this.createForm.value);
    
  }

  onReset(){
    this.createForm.reset()
  }
}
