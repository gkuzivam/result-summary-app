import { Component } from '@angular/core';

import { ResultComponent } from "./result/result.component";

@Component({
  selector: 'app-root',
  imports: [ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'result-summary-app';
}
