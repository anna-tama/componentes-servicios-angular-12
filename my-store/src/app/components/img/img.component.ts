import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges,AfterViewInit,OnDestroy {


  img: string = ''; //el padre lo comunica al hijo
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('Change just img', this.img)
    //[img]="imgParent" =   @Input('img') ambos se llaman img para que funcione
  }

  //@Input() img: string = ''; //el padre lo comunica al hijo
  @Input() alt: string = ''; //el padre lo comunica al hijo

  @Output() loaded = new EventEmitter<string>(); //comunica del hijo al padre
  imageDefault  = '../../../assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    //before render
    //no va nada asíncrono como fecth, peticiones al server, suscripción
    // console.log('constructor', 'imgValue =>', this.img)
  }

  //before render
  //cambios en inputs
  ngOnChanges(changes: SimpleChanges){
    // console.log('ngOnChanges', 'imgValue =>', this.img)
    console.log('changes',changes);
  }

  ngOnInit(): void {
    //before render
    //async fetch, llamadas a las apis -
    // console.log('ngOnInit', 'imgValue =>', this.img);
  //  this.counterFn= window.setInterval(()=>{ //cuando creo el set interval
  //     this.counter += 1;
  //     console.log('run counter')
  //   },1000)
  }
  ngAfterViewInit(){
    //after render
    //handler children
    // console.log('ngAfterViewInit', 'imgValue =>', this.img)
  }

  ngOnDestroy(){
    //delete
    // console.log('ngOnDestroy', 'imgValue =>', this.img)
    //limpio el evento para que no quede ejecutando en 2do plano
    // window.clearInterval(this.counterFn);
  }


  imgError(){
    this.img= this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
