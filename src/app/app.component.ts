import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { WizardConfigButton } from '../../projects/wizard/src/lib/wizard-config-button';
import { WizardService } from '../../projects/wizard/src/lib/wizard.service';
import { FooterComponent } from './footer/footer.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    private buttonClick$ = new Subject<WizardConfigButton>();

    public constructor(private readonly wizardService: WizardService) {

        this.buttonClick$.subscribe(button => {

            console.log('button clicked', button);

        });

        this.open();

        // setTimeout(() => {
        //
        //     this.wizardService.close();
        //
        //     setTimeout(() => {
        //
        //         this.open();
        //
        //     });
        //
        // }, 5000);
    }

    public open(): void {

        // setTimeout(() => {
        //
        //     this.wizardService.config.pages[1].menu.disabled = true;
        //
        // }, 3000);

        this.wizardService.open({

            title: 'My Wizard',
            defaultPage: 3,
            footerComponentType: FooterComponent,
            buttons: {

                previous: {

                    label: 'PREVIOUS',
                    click$: this.buttonClick$

                },
                next: {

                    label: 'NEXT',
                    click$: this.buttonClick$,
                    theme: {

                        backgroundColor: 'green'

                    }

                },
                last: {

                    label: 'LAST',
                    click$: this.buttonClick$,
                    theme: {

                        backgroundColor: 'red'

                    }

                },
                cancel: {

                    label: 'CANCEL',
                    click$: this.buttonClick$,
                    theme: {

                        backgroundColor: 'grey'

                    }

                }

            },

            theme: {

                width: '800px',
                height: '300px',
                backgroundColor: '#eee',
                disabled: {

                    color: 'red'

                },
                left: {

                    width: '175px'

                }

            },

            pages: [

                {

                    id: 'one',
                    title: 'one',
                    description: 'asdfasd fasdf asdfasd f',
                    componentType: OneComponent,
                    menu: {

                        label: 'Step One'

                    }

                }, {

                    id: 'two',
                    title: 'two',
                    description: 'twoasdfasd fasdf asdfasd f',
                    componentType: TwoComponent,
                    menu: {

                        label: 'Step Two',
                        iconClass: 'fa-solid fa-cloud-word'

                    }

                }, {

                    id: 'three',
                    title: 'three',
                    description: 'threethreeasdfasd fasdf asdfasd f',
                    componentType: ThreeComponent,
                    menu: {

                        label: 'Step Three',
                        iconClass: 'fa-brands fa-accessible-icon'

                    }

                }

            ]

        });

    }

}
