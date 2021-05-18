import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'compass',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'MODULES',
    group: true,
  },
  {
    title: 'Clinic',
    icon: 'map',
    children: [
      {
        title: 'Clinics',
        link: '/pages/clinics/all',
      },
      {
        title: 'Add Clinic',
        link: '/pages/clinics/create',
      },
    ],
  },
  {
    title: 'Patient',
    icon: 'person',
    children: [
      {
        title: 'Patients',
        link: '/pages/patients/all',
      },
      {
        title: 'Add Patient',
        link: '/pages/patients/create',
      },
    ],
  },
  {
    title: 'Employee',
    icon: 'briefcase',
    children: [
      {
        title: 'Employees',
        link: '/pages/employees/all',
      },
      {
        title: 'Add Employee',
        link: '/pages/employees/create',
      },
    ],
  },
  {
    title: 'Appointment',
    icon: 'bookmark',
    children: [
      {
        title: 'Appointments',
        link: '/pages/appointments/all',
      },
      {
        title: 'Add Appointment',
        link: '/pages/appointments/create',
      },
    ],
  },
];
