import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { WizardConfigMenuItemThemes } from './wizard-config-menu-item-themes';
import { WizardConfigPage } from './wizard-config-page';
import { WizardService } from './wizard.service';

@Component({

    selector: 'lib-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: [ './wizard.component.scss' ]

})
export class WizardComponent implements AfterViewInit {

    @ViewChild('pageOutlet', { read: ViewContainerRef }) private readonly pageOutlet: ViewContainerRef;
    @ViewChild('footer', { read: ViewContainerRef }) private readonly footer: ViewContainerRef;

    public currentPage: WizardConfigPage<any>;
    public themes = WizardConfigMenuItemThemes;

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService,
                       public readonly wizardService: WizardService) {

    }

    public ngAfterViewInit(): void {

        if (this.wizardService.config.footerComponentType) {

            this.dynamicComponentFactoryService.createInContainer('footer', this.footer, this.wizardService.config.footerComponentType);

        }

        this.wizardService.currentPage$.subscribe(page => {

            setTimeout(() => {

                this.currentPage = page;

            });

            if (this.pageOutlet.length > 0) {

                this.pageOutlet.clear();
                this.dynamicComponentFactoryService.destroy('page');

            }

            const component = this.dynamicComponentFactoryService.createInContainer('page', this.pageOutlet, page.componentType);

            component.componentRef.instance['page'] = page;

        });

    }

}
