import { WizardConfigMenuItemState } from './wizard-config-menu-item-state';

export class WizardConfigMenuItemStates {

    public static INACTIVE: WizardConfigMenuItemState = {

        iconClass: 'fa-solid fa-circle-question',
        theme: {

            color: 'grey'

        }

    };

    public static ACTIVE: WizardConfigMenuItemState = {

        iconClass: 'fa-regular fa-gear',
        theme: {

            color: 'purple',
            fontWeight: 'bold'

        }

    };

    public static ERROR: WizardConfigMenuItemState = {

        iconClass: 'fa-solid fa-xmark',
        theme: {

            color: 'red'

        }

    };

    public static SUCCESS: WizardConfigMenuItemState = {

        iconClass: 'fa-regular fa-circle-check',
        theme: {

            color: 'green'

        }

    };

}
