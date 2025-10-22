import { Component } from '@angular/core';
import { FocuslyDirective } from '@zaybu/focusly';

@Component({
  selector: 'app-root',
  imports: [FocuslyDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'focusly-demo';

  columns = [0,1,2,3,4,5,6]; 
  rows = [0,1,2,3,4,5,6];

}
