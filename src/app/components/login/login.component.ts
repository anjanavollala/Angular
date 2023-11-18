import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value.username, this.form.value.password) && this.router.navigate(['/']);
    }
  }
}
