import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JokeListComponent } from './app.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeComponent } from './joke/joke.component';
import { PipeInadecuadasPipe } from './pipes/pipe-inadecuadas.pipe';

@NgModule({
  declarations: [
    JokeListComponent,
    JokeFormComponent,
    JokeComponent,
    PipeInadecuadasPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
