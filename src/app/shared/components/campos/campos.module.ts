import { InputNumberComponent } from './input-number/input-number.component';
import { MaterialModule } from './../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDatepickerComponent } from './input-datepicker/input-datepicker.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputDatepickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    InputTextComponent,
    InputNumberComponent,
    InputDatepickerComponent
  ]
})
export class CamposModule { }
