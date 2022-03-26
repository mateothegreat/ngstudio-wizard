import { Component, Input, OnInit } from '@angular/core';
import { WizardConfigPage } from '../../../projects/wizard/src/lib/wizard-config-page';
import { WizardConfigPageState } from '../../../projects/wizard/src/lib/wizard-config-page-state';
import { WizardService } from '../../../projects/wizard/src/lib/wizard.service';

@Component({
    selector: 'app-one',
    templateUrl: './one.component.html',
    styleUrls: [ './one.component.scss' ]
})
export class OneComponent implements OnInit {

    @Input() private page: WizardConfigPage<any>;

    public constructor(private readonly wizardService: WizardService) {

        setTimeout(() => {

            this.page.state = WizardConfigPageState.ERROR;

        });

    }

    public ngOnInit(): void {


    }

}
