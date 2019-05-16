import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { CreateComponent } from './routes/create/create.component';
import { ListComponent } from './routes/list/list.component';
import { LegalComponent } from './routes/legal/legal.component';
import { CreateQuestionsComponent } from './routes/create-questions/create-questions.component';
import { AddQuestionComponent } from './routes/add-question/add-question.component';
import { SaveSuccessComponent } from './routes/save-success/save-success.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'create-questions', component: CreateQuestionsComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'save', component: SaveSuccessComponent },
  { path: 'list', component: ListComponent },
  { path: 'legal', component: LegalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
