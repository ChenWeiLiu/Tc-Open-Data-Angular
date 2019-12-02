import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentNumberComponent} from './components/tc/student-number/student-number.component';

const routes: Routes = [
  {path: '', redirectTo: '/student-number', pathMatch: 'full'},
  {path: 'student-number', component: StudentNumberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
