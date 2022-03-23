import { Type } from '@angular/core';
import { WizardConfigButtons } from './wizard-config-buttons';
import { WizardConfigPage } from './wizard-config-page';
import { WizardConfigTheme } from './wizard-config-theme';

export class WizardConfig {

    public title: string;
    public description?: string;
    public defaultPage?: number;
    public footerComponentType?: Type<any>;
    public buttons: WizardConfigButtons;
    public theme?: WizardConfigTheme;

    public pages: Array<WizardConfigPage<any>>;

    public constructor(config: WizardConfig) {

        Object.assign(this, config);

        for (let i = 0; i < this.pages.length; i++) {

            this.pages[i] = new WizardConfigPage<any>(this.pages[i]);

        }

    }

}
