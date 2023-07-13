import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html'
})

export class AuthorizationComponent {
  constructor(private userService: UserService, private router: Router) {
  }


  public login(addForm: NgForm) {
    document.getElementById('add-form')?.click();
    this.userService.login(addForm.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('access_token', response.data.access_token);
        this.router.navigate(['/listOfDevices']);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    });
  }
}
