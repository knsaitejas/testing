import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { EditVoteQuotesComponent } from './edit-vote-quotes/edit-vote-quotes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{path: '', component: DashboardComponent},
	{path: 'edit/:id', component: EditQuoteComponent},
	{path: 'vote/:id', component: EditVoteQuotesComponent},
	{path: 'new', component: NewQuoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
