import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  statuses = ["Stable", "Critical", "Finished"];
  projectStatusForm: FormGroup;
  forbiddenProjectNames = ["Test", "abc"];

  ngOnInit() {
    this.projectStatusForm = new FormGroup({
      "name": new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "status": new FormControl(null),
    })
  }

  onSubmit() {
    console.log(this.projectStatusForm);
  }


  forbiddenProjectName(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { "projectNameIsForbidden": true }
    }
    return null;
  }

  // genders = ['male', 'female'];
  // signupForm: FormGroup;
  // forbiddenUsernames = ["Chris", "Ana"];

  // ngOnInit() {
  //   this.signupForm = new FormGroup({
  //     "userData": new FormGroup({
  //       "username": new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
  //       "email": new FormControl(null, [Validators.required, Validators.email], /*this.forbiddenEmails*/), // Argument is not assignable to parameter of type 'AsyncValidatorFn | AsyncValidatorFn[] | null | undefined'
  //     }),
  //     "gender": new FormControl("male"),
  //     "hobbies": new FormArray([]),
  //   });
  //   //this.signupForm.valueChanges.subscribe((value)=>{console.log(value)});
  //   this.signupForm.statusChanges.subscribe((status) => { console.log(status) });
  //   this.signupForm.setValue({
  //     "userData": {
  //       "username": "Max",
  //       "email": "max@test.com",
  //     },
  //     "gender": "male",
  //     "hobbies": []
  //   });
  //   this.signupForm.patchValue({
  //     "userData": {
  //       "username": "Alex",
  //     }
  //   });
  // }

  // onSubmit() {
  //   console.log(this.signupForm);
  //   this.signupForm.reset({"gender": "male"});
  // }

  // onAddHobby() {
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.signupForm.get("hobbies")).push(control);
  // }

  // getControls() {
  //   return (<FormArray>this.signupForm.get("hobbies")).controls;
  // }

  // forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
  //   if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
  //     return { "nameIsForbidden": true };
  //   }
  //   return null;
  // }

  // forbiddenEmails(control: FormControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === "test@test.com") {
  //         resolve({ "emailIsForbidden": true });
  //       }
  //       else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });

  //   return promise;
  // }
}
