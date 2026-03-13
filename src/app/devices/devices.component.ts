import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="topbar">
      <div class="topbar-breadcrumb">
        <span class="link" (click)="back.emit()">Configuración</span>
        <span>›</span>
        <span>Ver Dispositivos</span>
      </div>
      <button class="btn btn-dark" (click)="back.emit()">Volver</button>
    </div>
    <div class="content">
      <div class="dev-title">Dispositivos Registrados</div>
      <div class="dev-grid">
        @for (device of devices; track device.name) {
          <div class="dev-card">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="7" y="2" width="10" height="20" rx="2"/>
              <circle cx="12" cy="18" r="1" fill="currentColor"/>
            </svg>
            <div>
              <div class="dev-name">{{ device.name }}</div>
              <div class="dev-date">Sincronizado el {{ device.date }}</div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .dev-title { font-size:16px; font-weight:700; color:#1F2937; margin-bottom:22px; }
    .dev-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .dev-card { border:1.5px solid #E5E7EB; border-radius:10px; padding:16px 18px; display:flex; align-items:center; gap:14px; cursor:pointer; transition:all .15s; }
    .dev-card:hover { border-color:#7B2FBE; box-shadow:0 3px 10px rgba(123,47,190,.08); }
    .dev-name { font-size:13.5px; font-weight:600; color:#1F2937; }
    .dev-date { font-size:11.5px; color:#9CA3AF; margin-top:2px; }
    .link { color:#7B2FBE; cursor:pointer; }
  `]
})
export class DevicesComponent {
  @Output() back = new EventEmitter<void>();

  devices = [
    { name: 'Celular (Samsung S25)',  date: '15/02/2026' },
    { name: 'Tablet 1 (Samsung A10)', date: '15/02/2026' },
    { name: 'Tablet 2 (iPad)',        date: '15/02/2026' },
    { name: 'PC (Web)',               date: '15/02/2026' },
  ];
}
