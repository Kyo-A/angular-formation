import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { AuthComponent } from './composants/auth/auth.component';
import { ErrorComponent } from './composants/error/error.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './composants/formulaires/template-driven/template-driven.component';
import { HomeComponent } from './composants/home/home.component';
import { MaterialTableComponent } from './composants/material/material-table/material-table.component';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AuthGuard } from './guards/auth.guard';
import { LeaveGuard } from './guards/leave.guard';
import { PersonListResolver } from './resolvers/person-list.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'template-driven', component: TemplateDrivenComponent, canDeactivate: [LeaveGuard] },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'personne', component: PersonneComponent, resolve: { routeResolver: PersonListResolver }, canActivate: [AuthGuard] },
  { path: 'details/:id', component: PersonneDetailsComponent },
  { path: 'material-table', component: MaterialTableComponent },
  { path: 'auth', component: AuthComponent },

  { path: 'vehicule', loadChildren: () => import('./modules/vehicule/vehicule.module')
    .then(m => m.VehiculeModule)
  },
  
  { path: 'error', component: ErrorComponent },
  // pathMatch = "full" signifie que tout chemin d url doit correspondre
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // On affichera error.component en cas de chemin inexistant
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
