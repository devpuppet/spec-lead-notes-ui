import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { TextFieldModule } from '@angular/cdk/text-field'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'

const modules = [
  MatDialogModule,
  MatButtonModule,
  TextFieldModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class NgMaterialModule { }
