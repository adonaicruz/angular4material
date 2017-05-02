import {NgModule} from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { TestRoutingModule } from './test-routing.module';
import { TestGridComponent } from './grid/test-grid.component';

@NgModule({
  imports: [SharedModule,TestRoutingModule],
  declarations: [TestGridComponent],
  exports: [TestGridComponent],
  providers: []
})

export class TestModule {

}
