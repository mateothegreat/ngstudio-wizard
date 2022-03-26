import { Subject } from 'rxjs';
import { WizardConfigMenuItemState } from './wizard-config-menu-item-state';
import { WizardConfigMenuItemStates } from './wizard-config-menu-item-states';
import { WizardConfigMenuItemThemes } from './wizard-config-menu-item-themes';

export class WizardConfigMenuItem {

    public label: string;
    public iconClass?: string;
    public complete?: boolean;
    public position?: 'left' | 'right';
    public disabled?: boolean;
    public state?: WizardConfigMenuItemStates = WizardConfigMenuItemStates.INACTIVE;
    public theme?: WizardConfigMenuItemState = WizardConfigMenuItemThemes['ACTIVE'];
    public theme$?: Subject<WizardConfigMenuItemState> = new Subject();

    public constructor(config: WizardConfigMenuItem) {

        Object.assign(this, config);

        this.theme$.subscribe(state => {

            console.log(state);

        });

    }

}
