import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAuthService} from '../../services/user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})

export class RegFormComponent implements OnInit {
  public regForm!: FormGroup;
  public isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userAuth: UserAuthService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void{
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      agree: ['', Validators.requiredTrue]
    });
  }

  public submit(): void{
    this.isSubmitted = true;
    if (this.regForm.valid){
      delete this.regForm.value.agree;
      this.userAuth.registerUser(this.regForm.value).subscribe(() => {
        this.router.navigateByUrl('/auth');
      });
    }
  }

  get getter(): { [p: string]: AbstractControl } {
    return this.regForm.controls;
  }
}
