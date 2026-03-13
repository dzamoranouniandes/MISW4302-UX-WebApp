// sidebar.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() activeRoute: string = 'alarmas';
  @Input() loggedIn: boolean = false;
  @Output() routeChange = new EventEmitter<string>();

  navigate(route: string): void {
    this.routeChange.emit(route);
  }
}


