import { InputNumberComponent } from './input-number/input-number.component';
import { MaterialModule } from './../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDatepickerComponent } from './input-datepicker/input-datepicker.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputSelectComponent } from './input-select/input-select.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputDatepickerComponent,
    InputTextareaComponent,
    InputSelectComponent
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
    InputDatepickerComponent,
    InputTextareaComponent,
    InputSelectComponent
  ]
})
export class CamposModule { }
