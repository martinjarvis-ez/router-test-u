import { Component, Type } from '@angular/core';
import { FactoryMapService } from './content/services/factory-map.service';
import { BookingFunnelModule } from './booking-funnel';
import { ContentModule } from './content';

import * as mapKeys from "lodash/mapKeys";

@Component({
  selector: 'app',
  styles: [`

  `],
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private factoryMap : FactoryMapService){

    mapKeys(ContentModule.getComponentMappings(), (value:Type<any>, path:string)=>{
      factoryMap.registerFactory(path,value);
    });

    mapKeys(BookingFunnelModule.getComponentMappings(), (value:Type<any>, path:string)=>{
      factoryMap.registerFactory(path,value);
    });
  }
}
