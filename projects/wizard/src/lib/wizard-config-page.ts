import { Type } from '@angular/core';
import { WizardConfigMenuItem } from './wizard-config-menu-item';

export class WizardConfigPage<T> {

    public id: string;
    public title: string;
    public description?: string;
    public componentType: Type<T>;
    public menu: WizardConfigMenuItem;
    public active?: boolean;

    public constructor(config: WizardConfigPage<T>) {

        Object.assign(this, config);

        this.menu = new WizardConfigMenuItem(config.menu);

    }

}
