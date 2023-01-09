import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent],
  //Se exporta aqui para poderlo usar en el app component
  exports: [SidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
