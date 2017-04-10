import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

const appRoutes: Routes = [
  { path: 'app-about', component: AboutComponent },
  {
    path: 'app-contacts',
    component: ContactsComponent,
    data: {
      title: 'Contact us'
    }
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);