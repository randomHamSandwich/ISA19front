import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PacijentComponent} from './pacijent/pacijent.component';
import { KlinikaListComponent} from './klinika-list/klinika-list.component';
// import { PacijentUpdateComponent } from './pacijent-update/pacijent-update.component';
import { LekarListComponent } from'./lekar-list/lekar-list.component';
import { PregledListComponent } from'./pregled-list/pregled-list.component';
import { OperacijaListComponent} from './operacija-list/operacija-list.component';
import { BrziPreglediListComponent } from './brzi-pregledi-list/brzi-pregledi-list.component';
import { KartonComponent} from  './karton/karton.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    // {
    //     path: 'user',
    //     component: UserComponent
    // },

    {
        path: 'pacijent',
        component: PacijentComponent
    },

    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'klinikalist',
        component: KlinikaListComponent

    },
    // {
    //     path: 'pacijentupdate',
    //     component: PacijentUpdateComponent

    // },
    {
        path: 'lekarlist',
        component: LekarListComponent

    },
    {
        path: 'pregledlist',
        component: PregledListComponent

    },
    {
        path: 'operacijalist',
        component: OperacijaListComponent

    },
    {
        path: 'brzipregledi',
        component: BrziPreglediListComponent

    },
    {
        path: 'karton',
        component: KartonComponent

    },
    
    
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
