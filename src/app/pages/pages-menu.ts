import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'MODULES',
    group: true,
  },
  {
    title: 'Users',
    icon: 'person',
    children: [
      {
        title: 'Patients',
        link: '/pages/patients/all',
      },
    ],
  },
];
