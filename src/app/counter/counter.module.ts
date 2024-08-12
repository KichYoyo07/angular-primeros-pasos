import { NgModule } from "@angular/core";
import { CounterComponet } from "./componets/counter/counter.componet";

@NgModule({
  declarations: [
    CounterComponet
  ],
  exports: [
      CounterComponet
  ]
})
export class CounterModule {


}
