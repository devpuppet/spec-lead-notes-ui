import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { TextFieldModule } from '@angular/cdk/text-field'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatMomentDateModule } from '@angular/material-moment-adapter';

const modules = [
  MatDialogModule,
  MatButtonModule,
  TextFieldModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatMomentDateModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class NgMaterialModule { }
