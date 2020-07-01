import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  autores=[{
    nome:"Maria",
    sobrenome:"José",
    numero:"67222"
  },
  {
    nome:"José",
    sobrenome:"Maria",
    numero:"76111"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
