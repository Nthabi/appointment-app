import { Component, signal, WritableSignal, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';


@Component({
  selector: 'app-appintment-list',
  templateUrl: './appintment-list.component.html',
  styleUrl: './appintment-list.component.css'
})
export class AppintmentListComponent implements OnInit{

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments =  localStorage.getItem('appointments');

    this.appointments = savedAppointments ? JSON.parse(savedAppointments): []; 
    
  }

  addAppointment() {
    
    let appointment: Appointment = {
      id: Date.now(),
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    }

    this.appointments.push(appointment);
    this.newAppointmentDate = new Date();
    this.newAppointmentTitle = "";

    localStorage.setItem("appointments", JSON.stringify(this.appointments));

  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }

}
