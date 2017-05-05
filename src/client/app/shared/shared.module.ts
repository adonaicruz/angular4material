import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridComponent } from './grid/grid.component';

import { NameListService } from './name-list/name-list.service';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule,MaterialModule.forRoot(),BrowserAnimationsModule,FlexLayoutModule,NgxDatatableModule],
  declarations: [ToolbarComponent, NavbarComponent,GridComponent],
  exports: [ToolbarComponent, NavbarComponent,GridComponent,
    CommonModule, FormsModule, RouterModule,MaterialModule,BrowserAnimationsModule,FlexLayoutModule,NgxDatatableModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
