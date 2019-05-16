import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { CreateComponent } from './routes/create/create.component';
import { ListComponent } from './routes/list/list.component';
import { LegalComponent } from './routes/legal/legal.component';
import { CreateQuestionsComponent } from './routes/create-questions/create-questions.component';
import { SaveSuccessComponent } from './routes/save-success/save-success.component';
import { AddQuestionComponent } from './routes/add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    LegalComponent,
    CreateQuestionsComponent,
    SaveSuccessComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
