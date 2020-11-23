import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestePipePipe } from '@pipes/teste-pipe.pipe';
import { TituloComponent } from './components/titulo/titulo.component';

@NgModule({
  declarations: [TestePipePipe, TituloComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
