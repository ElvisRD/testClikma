import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  @Input() imgs: any;
  sprites: string[] = [];
  firstSprite: string = "";
  loadingImg: boolean = true;

  onImageLoad(){
    console.log("hola");
    
    this.loadingImg = false;
  }

  ngOnInit(){
    let arrayImgs = []
      
    this.firstSprite = this.imgs.front_default;
    arrayImgs[0] = this.imgs.back_default;
    arrayImgs[1] = this.imgs.front_shiny;
    arrayImgs[2] = this.imgs.back_shiny;

    this.sprites = arrayImgs.filter((img:string) => img !== null);
  }

}
