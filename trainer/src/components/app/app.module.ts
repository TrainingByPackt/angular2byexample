import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TrainerAppComponent }  from './app.component';
import {HeaderComponent} from './header.component';

import {WorkoutRunnerModule} from '../workout-runner/workout-runner.module';
import {StartModule} from '../start/start.module';
import {FinishModule} from '../finish/finish.module';
import {ServicesModule} from '../../services/services.module';
import {WorkoutHistoryModule} from '../workout-history/workout-history.module';
import {WorkoutBuilderModule} from '../workout-builder/workout-builder.module';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import {routing} from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    WorkoutRunnerModule,
    StartModule,
    FinishModule,
    routing,
    ModalModule.forRoot(),
    BootstrapModalModule,
    ServicesModule,
    WorkoutHistoryModule,
    WorkoutBuilderModule],
  declarations: [
    TrainerAppComponent,
    HeaderComponent],
  bootstrap: [TrainerAppComponent]
})
export class AppModule { }