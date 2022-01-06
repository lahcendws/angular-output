import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public onomatopoeias:string []=['waw','zap','boom'];


  onReceiveNewOnomatopia(newOnomatopia:string){
    this.onomatopoeias.push(newOnomatopia);
  }
}
