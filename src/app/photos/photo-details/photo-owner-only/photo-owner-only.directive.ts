import { Directive } from "@angular/core";
import { Input } from "@angular/core";
import { Photo } from "src/app/photos/photo/photo";
import { ElementRef } from "@angular/core";
import { Renderer } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";
import { OnInit } from "@angular/core";

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit{
    
    @Input() ownedPhoto: Photo;
    
    constructor(
        
        private element: ElementRef<any>,
        private renderer: Renderer,
        private userService: UserService
    ){}
    ngOnInit(): void {
       this.userService
       .getUser()
       .subscribe(user => {
           if(!user || user.id != this.ownedPhoto.userId){
               this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
           }
       });
    }


}