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
    this.loadingImg = false;
  }

  ngOnInit(){
    let arrayImgs = []
    
    this.firstSprite = this.imgs.front_default;
    arrayImgs[0] = this.imgs.back_default;
    arrayImgs[1] = this.imgs.front_shiny;
    arrayImgs[2] = this.imgs.back_shiny;
    arrayImgs[3] = this.imgs.other.dream_world.front_default;
    arrayImgs[4] = this.imgs.other.home.front_default;
    arrayImgs[5] = this.imgs.other.home.front_shiny;
    arrayImgs[6] = this.imgs.other["official-artwork"].front_default;
    arrayImgs[7] = this.imgs.other["official-artwork"].front_shiny;

    this.sprites = arrayImgs.filter((img:string) => img !== null);
  }

}
