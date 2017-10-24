import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoadingComponent } from './loading/loading.component';
import { ForumComponent } from './forum/forum.component';
import { MainComponent } from './main/main.component';
import { TopicComponent } from './forum/topic/topic.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'forum', component: ForumComponent }, //localhost:4200/forum
    { path: 'forum/:id', component: TopicComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoadingComponent,
    ForumComponent,
    MainComponent,
    TopicComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
