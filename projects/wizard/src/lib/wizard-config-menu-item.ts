import { WizardConfigMenuItemState } from './wizard-config-menu-item-state';
import { WizardConfigMenuItemStates } from './wizard-config-menu-item-states';

export class WizardConfigMenuItem {

    public label: string;
    public iconClass?: string;
    public complete?: boolean;
    public position?: 'left' | 'right';
    public disabled?: boolean;
    public state?: WizardConfigMenuItemState = WizardConfigMenuItemStates.INACTIVE;

    public constructor(config: WizardConfigMenuItem) {

        Object.assign(this, config);

    }

}
