
  import { Directive, ElementRef, HostListener } from "@angular/core";

  @Directive({
      selector : '[advanceCss]'
  })
  
  export class AdvancecssDirective {
  
      constructor(private eleRef : ElementRef){}
  
      @HostListener('mouseover') onMouseOver(){
          this.eleRef.nativeElement.style.backgroundColor='pink'
          this.eleRef.nativeElement.style.padding='10px'
      }
      @HostListener('mouseout') onMouseOut(){
          this.eleRef.nativeElement.style.backgroundColor='greenyellow'
          this.eleRef.nativeElement.style.padding='10px'
}
  }

