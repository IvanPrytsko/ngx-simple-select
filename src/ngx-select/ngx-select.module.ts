import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";
import { NgxSelectComponent } from "./ngx-select";
import { NgxSelectOptionComponent } from "./ngx-select-option/ngx-select-option";
import { NgxSelectOptionModule } from "./ngx-select-option/ngx-select-option.module";

@NgModule({
    imports: [
        CommonModule,
        OverlayModule,
        NgxSelectOptionModule
    ],
    declarations: [
        NgxSelectComponent
    ],
    exports: [
        NgxSelectComponent,
        NgxSelectOptionComponent // TODO: why ?
    ]
})
export class NgxSelectModule {
}
