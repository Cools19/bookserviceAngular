import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [{path:'book', component:BookComponent},
{path:'signin',component:SigninComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
