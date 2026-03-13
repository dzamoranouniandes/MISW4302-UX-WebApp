import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AlarmListComponent } from './alarm-list/alarm-list.component';
import { AlarmCreateComponent } from './alarm-create/alarm-create.component';
import { AuthComponent } from './auth/auth.component';
import { SettingsComponent } from './settings/settings.component';
import { DevicesComponent } from './devices/devices.component';
import { VoiceRecorderComponent } from './voice-recorder/voice-recorder.component';

type Screen = 'alarmas' | 'acceder' | 'crear' | 'config' | 'dispositivos' | 'grabadora';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent,
    AlarmListComponent,
    AlarmCreateComponent,
    AuthComponent,
    SettingsComponent,
    DevicesComponent,
    VoiceRecorderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentScreen = signal<Screen>('alarmas');
  loggedIn = signal(false);

  get activeNavRoute(): string {
    const s = this.currentScreen();
    if (s === 'crear') return 'alarmas';
    if (s === 'dispositivos' || s === 'grabadora') return 'config';
    return s;
  }

  navigate(screen: string): void {
    this.currentScreen.set(screen as Screen);
  }

  onLoginSuccess(): void {
    this.loggedIn.set(true);
    this.navigate('alarmas');
  }

  onRecordPhrase(): void {
    this.navigate('grabadora');
  }
}
