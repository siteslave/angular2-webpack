import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent }   from './app.component';
import { MainComponent }   from './main/main.component';
import { NewComponent }   from './new/new.component';
import { EditComponent }   from './edit/edit.component';
import { ChartComponent }   from './charts/chart.component';

import { RoleService } from './role.service';
import { Connection } from './connection';
import { routing } from './app.routing';

import { RoleNamePipe } from './role.pipe'

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, ChartsModule ],
  declarations: [ AppComponent, MainComponent, NewComponent, EditComponent, ChartComponent, RoleNamePipe ],
  bootstrap: [AppComponent],
  providers: [Connection, RoleService]
})
export class AppModule { }
