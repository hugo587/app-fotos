import { NgModule } from "@angular/core";
import { AlertComponent } from "src/app/shared/components/alert/alert.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        AlertComponent
    ],
    exports:[
        AlertComponent
    ],
    imports:[
        CommonModule
    ]
})
export class AlertModule{}