import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cknewangular';
  myForm!: FormGroup;
  nameControl!: FormControl;


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Create individual form controls
    this.nameControl = new FormControl('', Validators.required);
    

    // Create a form group and associate controls
    this.myForm = this.fb.group({
      name: this.nameControl,
    
    });
  }
  handleContentChange(event){
    this.nameControl.setValue(event);
    console.log(event,"value======>",this.nameControl.value,"<========");
  }
 
}
