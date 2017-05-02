import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestGridComponent } from './grid/test-grid.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'test', component: TestGridComponent}
    ])
  ],
  exports: [RouterModule]
})
export class TestRoutingModule {
    
}