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
    
    let appointment: Appointment = {
      id: Date.now(),
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    }

    this.appointments.push(appointment);
    this.newAppointmentDate = new Date();
    this.newAppointmentTitle = "";

  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }

}
