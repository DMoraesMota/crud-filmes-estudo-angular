import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'dio-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

  @Input() controlName: string;
  @Input() formGroup: FormGroup;
  @Input() titulo: string;

  constructor(public validacao: ValidarCamposService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
