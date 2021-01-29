import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAuthService} from '../../services/user-auth.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  public subTitleText: string = 'Войдите для начала работы';
  public exist = '';
  public hide: boolean = true;
  public signIn!: FormGroup;
  public isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dataGet: UserAuthService,
    private dialog: MatDialog,
    private router: Router
  ){}

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void{
    this.signIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public submit(): void{
    this.isSubmitted = true;
    if (this.signIn.valid){
      this.checkUser(this.getter.email.value);
    }
  }

  public checkUser(email: string): void{
      this.dataGet.checkIfUserExist(email)
        .subscribe((response) => {
        if (response.length === 0){
          this.exist = 'Пользователя несуществует!';
          this.clearMessage();
        }
        else if (response[0].password !== this.getter.password.value){
          this.exist  = 'Пароль не верный!';
          this.clearMessage();
        }
        else {
          this.dataGet.activeUser(response[0]);
          this.router.navigateByUrl('/logged');
        }
      });
  }

  public get getter(): { [p: string]: AbstractControl } {
    return this.signIn.controls;
  }

  private clearMessage(): void{
    setTimeout(() => {
      this.exist = '';
    }, 3000);
  }

}
