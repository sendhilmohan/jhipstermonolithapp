import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipstermonolithappSharedModule } from 'app/shared/shared.module';
import { JhipstermonolithappCoreModule } from 'app/core/core.module';
import { JhipstermonolithappAppRoutingModule } from './app-routing.module';
import { JhipstermonolithappHomeModule } from './home/home.module';
import { JhipstermonolithappEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipstermonolithappSharedModule,
    JhipstermonolithappCoreModule,
    JhipstermonolithappHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipstermonolithappEntityModule,
    JhipstermonolithappAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class JhipstermonolithappAppModule {}
