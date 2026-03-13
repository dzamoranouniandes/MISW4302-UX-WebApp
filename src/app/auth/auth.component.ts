import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="topbar">
      <span class="topbar-title">Autenticación</span>
      <button class="btn btn-dark" (click)="back.emit()">Volver</button>
    </div>
    <div class="content">
      <div class="auth-center">
        <div class="google-box">
          <svg width="80" height="80" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
        </div>
        <div class="auth-form">
          <div class="form-group">
            <label class="form-label">Usuario:</label>
            <input class="form-input" type="text" placeholder="Nombre de usuario" [(ngModel)]="username" [class.input-error]="hasError">
          </div>
          <div class="form-group">
            <label class="form-label">Password:</label>
            <input class="form-input" type="password" placeholder="••••••••••••••••••••" [(ngModel)]="password">
          </div>
          <div class="auth-actions">
            <button class="btn btn-dark" (click)="back.emit()">Cancelar</button>
            <button class="btn btn-primary" (click)="login()">Acceder</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-center { display:flex; flex-direction:column; align-items:center; padding-top:24px; }
    .google-box { width:150px; height:150px; border:1.5px solid #E5E7EB; border-radius:10px; display:flex; align-items:center; justify-content:center; margin-bottom:26px; }
    .auth-form { width:320px; display:flex; flex-direction:column; gap:14px; }
    .form-group { display:flex; flex-direction:column; gap:5px; }
    .form-label { font-size:13px; font-weight:600; color:#374151; }
    .auth-actions { display:flex; justify-content:center; gap:10px; margin-top:6px; }
    .input-error { border-color:#EF4444 !important; }
  `]
})
export class AuthComponent {
  @Output() back = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<void>();

  username = '';
  password = '';
  hasError = false;

  login(): void {
    if (this.username && this.password) {
      this.loginSuccess.emit();
    } else {
      this.hasError = true;
      setTimeout(() => this.hasError = false, 1500);
    }
  }
}
