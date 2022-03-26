import { Type } from '@angular/core';
import { WizardConfigMenuItem } from './wizard-config-menu-item';
import { WizardConfigPageState } from './wizard-config-page-state';

export class WizardConfigPage<T> {

    public id: string;
    public title: string;
    public description?: string;
    public componentType: Type<T>;
    public menu: WizardConfigMenuItem;
    public state?: WizardConfigPageState = WizardConfigPageState.INACTIVE;

    public constructor(config: WizardConfigPage<T>) {

        Object.assign(this, config);

        this.menu = new WizardConfigMenuItem(config.menu);

    }

    public setState?(state: WizardConfigPageState): void {

        this.state = state;

    }

}
