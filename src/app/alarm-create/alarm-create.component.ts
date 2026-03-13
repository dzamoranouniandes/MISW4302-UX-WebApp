
import { Component, inject, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlarmService } from '../alarm.service';

@Component({
  selector: 'app-alarm-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alarm-create.component.html',
  styleUrls: ['./alarm-create.component.css']
})
export class AlarmCreateComponent {
  @Output() back = new EventEmitter<void>();

  protected alarmService = inject(AlarmService);

  label = '';
  time = '10:40 A.M.';
  freq: 'semanal' | 'mensual' = 'semanal';
  notifyOnDisable = true;
  voiceControl = false;

  showTimePicker = false;
  tpHour = 10;
  tpMin = 40;
  tpAmPm: 'AM' | 'PM' = 'AM';

  days = [
    { key: 'L',  active: true  },
    { key: 'M',  active: true  },
    { key: 'M',  active: true  },
    { key: 'J',  active: true  },
    { key: 'V',  active: true  },
    { key: 'S',  active: false },
    { key: 'D',  active: false },
  ];

  toggleDay(day: { key: string; active: boolean }): void {
    day.active = !day.active;
  }

  openTimePicker(): void { this.showTimePicker = true; }
  closeTimePicker(): void { this.showTimePicker = false; }

  confirmTime(): void {
    const h = Math.min(Math.max(this.tpHour, 1), 12);
    const m = this.tpMin.toString().padStart(2, '0');
    this.time = `${h}:${m} ${this.tpAmPm === 'AM' ? 'A.M.' : 'P.M.'}`;
    this.showTimePicker = false;
  }

  saveAlarm(): void {
    const activeDays = this.days.filter(d => d.active).map(d => d.key);
    this.alarmService.addAlarm({
      time: this.time,
      label: this.label || 'Nueva Alarma',
      enabled: true,
      type: 'weekly',
      days: activeDays.length ? activeDays : ['L','M','J','V'],
    });
    this.back.emit();
  }
}
