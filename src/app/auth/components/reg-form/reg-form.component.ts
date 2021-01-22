import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAuthService} from '../../services/user-auth.service';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {
  public regForm!: FormGroup;
  public isSubmited: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userAuth: UserAuthService,
  ) { }

  ngOnInit(): void {

    this.buildForm();
  }

  private buildForm(): void{
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public submit(): void{
    this.isSubmited = true;
    if (this.regForm.valid){
      this.userAuth.registrateUser(this.regForm.value);
    }
  }
  get getter(): { [p: string]: AbstractControl } {
    return this.regForm.controls;
  }
}
