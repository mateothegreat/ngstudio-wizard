import { Injectable } from '@angular/core';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { ReplaySubject } from 'rxjs';
import { WizardConfig } from './wizard-config';
import { WizardConfigMenuItemStates } from './wizard-config-menu-item-states';
import { WizardConfigPage } from './wizard-config-page';
import { WizardConfigPageState } from './wizard-config-page-state';
import { WizardComponent } from './wizard.component';

@Injectable({
    providedIn: 'root'
})
export class WizardService {

    public config: WizardConfig;
    public currentPage$: ReplaySubject<WizardConfigPage<any>> = new ReplaySubject();
    public currentPageNumber: number;

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

    }

    public open(config: WizardConfig): void {

        this.config = new WizardConfig(config);

        this.dynamicComponentFactoryService.createInApplicationRoot('wizard', WizardComponent);

        this.switch(config.defaultPage || 1);
        this.currentPageNumber = config.defaultPage || 1;

    }

    public close(): void {

        this.dynamicComponentFactoryService.destroy('wizard');

    }

    public previous(): void {

        this.switch(this.currentPageNumber - 1);

    }

    public next(): void {

        this.config.pages[this.currentPageNumber - 1].menu.state = WizardConfigMenuItemStates.SUCCESS;

        this.switch(this.currentPageNumber + 1);

    }

    public switch(page: number): void {

        console.log(this.config.pages[this.currentPageNumber - 1]?.state);

        for (let i = 0; i < this.config.pages.length; i++) {

            if (this.config.pages[i].state === 'ERROR') {

                return;

            }

        }

        if (page !== this.currentPageNumber && this.config.pages[this.currentPageNumber]?.state !== WizardConfigPageState.ERROR) {

            this.currentPageNumber = page;
            this.currentPage$.next(this.config.pages[this.currentPageNumber - 1]);

            this.config.pages[this.currentPageNumber - 1].setState(WizardConfigPageState.ACTIVE);
            this.config.pages[this.currentPageNumber - 1].menu.state = WizardConfigMenuItemStates.ACTIVE;

        }

    }

}
