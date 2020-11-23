import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestePipePipe } from '@pipes/teste-pipe.pipe';

@NgModule({
  declarations: [TestePipePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
