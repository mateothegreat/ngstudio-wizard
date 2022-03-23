import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WizardComponent } from './wizard.component';


@NgModule({

    declarations: [

        WizardComponent

    ],

    imports: [

        CommonModule

    ],

    exports: [

        WizardComponent

    ]
})
export class WizardModule {
}
