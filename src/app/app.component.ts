import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private datePipe: DatePipe) {
  }
  count = 0;
  show = false;
  registros: string[] = [];
  toggle() {
    this.show = !this.show;
    this.log();
  }

  log() {
    this.count++;
    this.registros.push('Se registra click: ' + this.show + ' Fecha: '
      + this.datePipe.transform(Date.now().toString(), 'dd/MM/yyyy HH:mm') + '\n');
  }

  getTextColor() {
    return this.count >= 5 ? true : '';
  }

  getBgColor() {
    return this.count >= 5 ? 'blue' : '';
  }

}
