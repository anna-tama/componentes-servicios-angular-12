import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges,AfterViewInit,OnDestroy {

  @Input() img: string = ''; //el padre lo comunica al hijo
  @Output() loaded = new EventEmitter<string>(); //comunica del hijo al padre
  imageDefault  = '../../../assets/images/default.png';

  constructor() {
    //before render
    //no va nada asíncrono como fecth, peticiones al server, suscripción
    console.log('constructor', 'imgValue =>', this.img)
  }

  //before render
  //cambios en inputs
  ngOnChanges(){
    console.log('ngOnChanges', 'imgValue =>', this.img)
  }

  ngOnInit(): void {
    //before render
    //async fetch, llamadas a las apis -
    console.log('ngOnInit', 'imgValue =>', this.img)
  }

  ngAfterViewInit(){
    //after render
    //handler children
    console.log('ngAfterViewInit', 'imgValue =>', this.img)
  }

  ngOnDestroy(){
    //delete
    console.log('ngOnDestroy', 'imgValue =>', this.img)
  }


  imgError(){
    this.img= this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
