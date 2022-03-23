import { Subject } from 'rxjs';
import { WizardConfigTheme } from './wizard-config-theme';

export class WizardConfigButton {

    public label: string;
    public click$: Subject<WizardConfigButton>;
    public theme?: WizardConfigTheme;
    public disabled?: boolean;

}
