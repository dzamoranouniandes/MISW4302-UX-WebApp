// componente de alarma de lista
import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmService } from '../alarm.service';

@Component({
  selector: 'app-alarm-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.css']
})
export class AlarmListComponent {
  @Output() createAlarm = new EventEmitter<void>();
  protected alarmService = inject(AlarmService);
  protected alarms = this.alarmService.alarms;

  toggleAlarm(id: number): void {
    this.alarmService.toggleAlarm(id);
  }
}
