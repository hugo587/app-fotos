import { NgModule } from "@angular/core";
import { ShowIfLoggedDirective } from "src/app/shared/directives/show-if-logged/show-if-logged.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        ShowIfLoggedDirective
    ],
    exports:[
        ShowIfLoggedDirective
    ],
    imports:[
        CommonModule
    ]
})
export class ShowIfLoggedModule{}