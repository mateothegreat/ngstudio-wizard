import { Injectable } from '@angular/core';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { ReplaySubject } from 'rxjs';
import { WizardConfig } from './wizard-config';
import { WizardConfigMenuItemStates } from './wizard-config-menu-item-states';
import { WizardConfigPage } from './wizard-config-page';
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

        if (this.currentPageNumber !== 1) {

            this.currentPageNumber--;
            this.currentPage$.next(this.config.pages[this.currentPageNumber - 1]);

            this.config.buttons.previous.click$.next(this.config.buttons.previous);

        }

    }

    public next(): void {

        if (this.currentPageNumber < this.config.pages.length) {

            this.currentPageNumber++;
            this.currentPage$.next(this.config.pages[this.currentPageNumber - 1]);

            this.config.buttons.next.click$.next(this.config.buttons.next);

        }

    }

    public switch(page: number): void {

        if (page !== this.currentPageNumber) {

            this.currentPageNumber = page;
            this.currentPage$.next(this.config.pages[this.currentPageNumber - 1]);

            for (let i = 0; i < this.config.pages.length; i++) {

                this.config.pages[i].active = false;
                this.config.pages[i].menu.state = WizardConfigMenuItemStates.INACTIVE;

            }

            this.config.pages[this.currentPageNumber - 1].active = true;
            this.config.pages[this.currentPageNumber - 1].menu.state = WizardConfigMenuItemStates.ACTIVE;

        }

    }

}
