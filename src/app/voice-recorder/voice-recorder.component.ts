import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voice-recorder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="topbar">
      <div class="topbar-breadcrumb">
        <span class="link" (click)="back.emit()">Configuración</span>
        <span>›</span>
        <span>Grabadora de Voz</span>
      </div>
      <div class="topbar-actions">
        <button class="btn btn-dark" (click)="back.emit()">Volver</button>
        <button class="btn btn-primary" (click)="accept()">Aceptar</button>
      </div>
    </div>
    <div class="content" style="position:relative">
      <h2 class="rec-title">Grabadora de Voz</h2>
      <div class="rec-center">
        <div class="rec-box">
          <div class="waveform">
            @for (bar of bars; track $index) {
              <div class="wbar"
                [style.height.px]="bar.h"
                [style.animation-delay]="bar.delay + 's'"
                [class.rec]="isRecording"
                [class.play]="isPlaying">
              </div>
            }
          </div>
        </div>
        <div class="rec-btns">
          <button class="btn btn-outline" (click)="togglePlay()">{{ isPlaying ? '⏹ Detener' : 'Escuchar' }}</button>
          <button class="btn btn-gray"    (click)="clear()">Borrar</button>
        </div>
        <div style="margin-top:18px">
          <button class="btn" style="width:110px"
            [style.background]="isRecording ? '#EF4444' : '#7B2FBE'"
            style="color:white;width:110px"
            (click)="toggleRecord()">
            {{ isRecording ? '⏹ Detener' : '● Grabar' }}
          </button>
        </div>
      </div>
      <div class="rec-avatar">S</div>
    </div>
  `,
  styles: [`
    .rec-title { font-size:16px; font-weight:700; color:#1F2937; margin-bottom:24px; }
    .rec-center { display:flex; flex-direction:column; align-items:center; }
    .rec-box { width:180px; height:150px; border:1.5px solid #E5E7EB; border-radius:10px; display:flex; align-items:center; justify-content:center; margin-bottom:18px; }
    .waveform { display:flex; align-items:center; gap:4px; height:72px; }
    .wbar { width:6px; border-radius:4px; background:#D1D5DB; animation:wv 1.2s ease-in-out infinite; }
    .wbar.rec  { background:#EF4444; }
    .wbar.play { background:#7B2FBE; }
    @keyframes wv { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(.35)} }
    .rec-btns { display:flex; gap:10px; }
    .rec-avatar { position:absolute; bottom:18px; right:18px; width:38px; height:38px; border-radius:50%; background:#7B5EA7; color:#fff; font-weight:700; font-size:14px; display:flex; align-items:center; justify-content:center; }
    .link { color:#7B2FBE; cursor:pointer; }
  `]
})
export class VoiceRecorderComponent {
  @Output() back = new EventEmitter<void>();
  @Output() accepted = new EventEmitter<void>();

  isRecording = false;
  isPlaying   = false;

  bars = [20,34,54,68,88,72,58,78,62,44,28,48,68,54,38,24].map((h, i) => ({
    h, delay: +(i * 0.08).toFixed(2)
  }));

  toggleRecord(): void {
    this.isRecording = !this.isRecording;
    if (this.isRecording) this.isPlaying = false;
  }

  togglePlay(): void {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) this.isRecording = false;
  }

  clear(): void {
    this.isRecording = false;
    this.isPlaying   = false;
  }

  accept(): void {
    this.accepted.emit();
    this.back.emit();
  }
}
