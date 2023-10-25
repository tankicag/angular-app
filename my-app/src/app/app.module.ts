import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CustomersModule,
    SharedModule,
    CoreModule,
    OrdersModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
