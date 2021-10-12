import { InputNumberComponent } from './input-number/input-number.component';
import { MaterialModule } from './../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    InputTextComponent,
    InputNumberComponent
  ]
})
export class CamposModule { }
