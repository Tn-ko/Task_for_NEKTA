import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  title = 'my-app';

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