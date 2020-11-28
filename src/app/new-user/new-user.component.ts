import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  useForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();

  }
  initForm() {
    this.useForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      hobbies: this.formBuilder.array([])
    });
  }


  onSubmitForm() {
    const formValue = this.useForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);

  }

  getHobbies() {
    return this.useForm.get('hobbies') as FormArray;
  }
  onAddHobby() {
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobbyControl); //ajout du hobby dans l'array 
  }

}
