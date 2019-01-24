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
  submitted = false;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
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
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    console.log(this.signUpForm);
  }



}
