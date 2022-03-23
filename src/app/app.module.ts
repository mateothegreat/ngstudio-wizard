import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WizardModule } from '../../projects/wizard/src/lib/wizard.module';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({

    declarations: [

        AppComponent,
         OneComponent,
         TwoComponent,
         ThreeComponent,
         FooterComponent

    ],

    imports: [

        BrowserModule,
        WizardModule

    ],
    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
