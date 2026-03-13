import { Injectable, signal } from '@angular/core';
import { Alarm } from './alarm.model';

@Injectable({ providedIn: 'root' })
export class AlarmService {
  private _alarms = signal<Alarm[]>([
    { id: 1, time: '09:00 A.M.', label: 'Gimnasio',            days: ['L','M','M','J','V','S','D'], enabled: true,  type: 'weekly' },
    { id: 2, time: '10:40 A.M.', label: 'Cita Médica',         date: '13 de Marzo 2026',           enabled: true,  type: 'once'   },
    { id: 3, time: '05:30 P.M.', label: 'Clase Universidad',   days: ['L','M','M','J','V','S','D'], enabled: true,  type: 'weekly' },
    { id: 4, time: '11:55 P.M.', label: 'Trabajo Universidad', date: '22 de Febrero 2026',         enabled: true,  type: 'once'   },
  ]);

  readonly alarms = this._alarms.asReadonly();

  addAlarm(alarm: Omit<Alarm, 'id'>): void {
    this._alarms.update(list => [...list, { ...alarm, id: Date.now() }]);
  }

  toggleAlarm(id: number): void {
    this._alarms.update(list =>
      list.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a)
    );
  }

  deleteAlarm(id: number): void {
    this._alarms.update(list => list.filter(a => a.id !== id));
  }
}
