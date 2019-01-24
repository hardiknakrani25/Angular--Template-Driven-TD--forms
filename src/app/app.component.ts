import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Male', 'Female'];
  @ViewChild('f') signUpForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username : suggestedName,
    //     email: ''
    //   },
    // secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'Male'
    // });


    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }



  // using viewchild
  onSubmit() {
    console.log(this.signUpForm);
  }



}
