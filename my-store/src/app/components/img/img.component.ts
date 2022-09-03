import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = ''; //el padre lo comunica al hijo
  @Output() loaded = new EventEmitter<string>(); //comunica del hijo al padre
  imageDefault  = '../../../assets/images/default.png';

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img= this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
