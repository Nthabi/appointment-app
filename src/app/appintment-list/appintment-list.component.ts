import { Component, signal, WritableSignal } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appintment-list',
  templateUrl: './appintment-list.component.html',
  styleUrl: './appintment-list.component.css'
})
export class AppintmentListComponent {

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  addAppointment() {
    console.log(this.newAppointmentDate + " " + this.newAppointmentTitle);
  }

}
