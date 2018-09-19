import { Component } from '@angular/core';
import { upNotification } from 'assets/js/push';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  upNotification(){
    upNotification();
  }
}
