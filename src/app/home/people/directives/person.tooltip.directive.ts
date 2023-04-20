import { ApplicationRef, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input, NgModuleRef, OnDestroy, ViewContainerRef } from "@angular/core";
import { PersonTooltipComponent } from "../components/person-tooltip/person-tooltip.component";
import { Person } from "../models/unit.model";

@Directive({
    selector: '[tooltip]'
})
export class PersonTooltipDirective implements OnDestroy {

    @Input() data!: Person;

    private componentRef: ComponentRef<any> | null = null;

    constructor(
        private elementRef: ElementRef,
        private appRef: ApplicationRef,
        private viewContainerRef: ViewContainerRef,
        private injector: Injector) { }

    ngOnDestroy(): void {
        this.destroy();
    }

    @HostListener('mouseenter')
    public onMouseEnter() {
        if (this.componentRef === null) {
            this.componentRef = this.viewContainerRef.createComponent(PersonTooltipComponent,
                { injector: this.injector });
            const hv = this.componentRef.hostView;
            const embeddedViewref = hv as EmbeddedViewRef<any>;
            const domElement = embeddedViewref.rootNodes[0] as HTMLElement
            document.body.appendChild(domElement);
            this.setTooltipComponentProperties();
        }
    }

    private setTooltipComponentProperties() {
        if (this.componentRef) {
            this.componentRef.instance.personData = this.data;
            const { left, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
            this.componentRef.instance.left = left;
            this.componentRef.instance.top = bottom;
        }
    }

    @HostListener('mouseleave')
    public onMouseLeave() {
        this.destroy();
    }

    private destroy() {
        if (this.componentRef) {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }

}