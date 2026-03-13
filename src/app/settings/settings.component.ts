import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="topbar">
      <span class="topbar-title">Configuración</span>
      <button class="btn btn-dark" (click)="back.emit()">Volver</button>
    </div>
    <div class="content">
      <h2 class="section-h">Configuración General de Alarmas</h2>

      <div class="cfg-sec">
        <div class="cfg-sec-head">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9"/>
          </svg>
          Opciones de Sincronización
        </div>
        <div class="cfg-check-row">
          <div class="chk" [class.off]="!syncEnabled" (click)="syncEnabled = !syncEnabled">
            @if (syncEnabled) {
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
            }
          </div>
          <span>¿Sincronizar alarmas en este dispositivo?</span>
        </div>
        <button class="btn btn-primary" (click)="viewDevices.emit()">Ver Dispositivos</button>
      </div>

      <div class="cfg-sec" style="margin-top:28px">
        <div class="cfg-sec-head">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
          Opciones de Voz
        </div>
        <div class="cfg-check-row">
          <div class="chk" [class.off]="!voiceEnabled" (click)="voiceEnabled = !voiceEnabled">
            @if (voiceEnabled) {
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
            }
          </div>
          <span>¿Activar comandos por voz?</span>
        </div>
        <div class="cfg-btns">
          <button class="btn btn-outline" (click)="recordPhrase.emit('postergar')">Grabar frase de postergar</button>
          <button class="btn btn-outline" (click)="recordPhrase.emit('apagar')">Grabar frase de apagar</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .section-h { font-size:16px; font-weight:700; color:#1F2937; margin-bottom:26px; }
    .cfg-sec {}
    .cfg-sec-head { display:flex; align-items:center; gap:8px; font-size:13.5px; font-weight:700; color:#374151; margin-bottom:12px; }
    .cfg-check-row { display:flex; align-items:center; gap:9px; font-size:13px; color:#374151; padding-bottom:12px; border-bottom:1px solid #E5E7EB; margin-bottom:14px; }
    .cfg-btns { display:flex; gap:10px; }
    .chk { width:15px; height:15px; border:2px solid #7B2FBE; border-radius:3px; background:#7B2FBE; display:flex; align-items:center; justify-content:center; flex-shrink:0; cursor:pointer; }
    .chk.off { background:transparent; }
  `]
})
export class SettingsComponent {
  @Output() back = new EventEmitter<void>();
  @Output() viewDevices = new EventEmitter<void>();
  @Output() recordPhrase = new EventEmitter<string>();

  syncEnabled = true;
  voiceEnabled = true;
}
