import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponet } from './pages/main-page.componet';
import { ListComponent } from './components/list/list.component';
import {AddCharacterComponent} from './components/add-character/add-character.component'




@NgModule({
  declarations: [
    MainPageComponet,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponet
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
