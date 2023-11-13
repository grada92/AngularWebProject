import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // direttiva per aprire menù
  @HostBinding('class.open') isOpen = false;

   @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
   }
}
