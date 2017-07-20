import { Component, Input  } from '@angular/core';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent   {
    // a simple loader
     @Input() load = false;
     @Input() message: string;

}
