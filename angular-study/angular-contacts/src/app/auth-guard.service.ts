import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (
    private router: Router
  ) {}
  canActivate() {
    const token = window.localStorage.getItem('auth_token')
    if (!token) {
      this.router.navigate(['/signin'])
      return false; // 表示不能继续导航
    }
    // 表示继续完成导航
    return true;
  }
}
