import { Component } from '@angular/core';
import { AppService } from './app.service';
import { SortEvent } from 'primeng/api';
import { Pokemons, Pokemon } from './interfaces/types';
import { Table } from 'primeng/table';
import typesPokemon from '../assets/types.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService){}
  
  loading: boolean = true;
  dialogVisible: boolean = false;
  pokemons: string[] = [];
  backupPokemons: string[] = [];
  pokemon?: Pokemon;
  searchValue: string = '';
  totalRecords: number = 0;
  currentPage: number = 0;

  ngOnInit(){
    this.loadPokemons();
  }

  textSearch(event : string){
    let numPkm = 0;
    this.currentPage = 0;
    this.pokemons = this.backupPokemons.filter((pokemon: any) => pokemon.toLowerCase().startsWith(event.toLowerCase()));
    if(this.pokemons.length < 11){
      numPkm = 10 - this.pokemons.length;
      for(let i = 0; i < numPkm ; i++){
        if(numPkm === 10){
          this.pokemons[0] = "No se encontraron resultados."
        }
        this.pokemons.push('\u00A0');
      }
    }
  }

  clear(table: Table){
    this.searchValue = '';
    this.pokemons = [...this.backupPokemons]
    table.clear();
    
  }

  sortNamePokemons(event : SortEvent){
    if(event.order === 1){
      this.pokemons.sort((a: string, b: string) => this.sortRowsEmpty(a,b,1));
    }else{
      this.pokemons.sort((a: string, b: string) => this.sortRowsEmpty(a,b,-1));
    }
  }

  sortRowsEmpty(a: string, b: string, order: number){
    if (a === "\u00A0" && b === "\u00A0") {
      return 0; 
    } else if (a === "\u00A0") {
      return 1;  
    } else if (b === "\u00A0") {
      return -1; 
    } else {
      if(order === 1){
        return a.localeCompare(b);  
      }else{
        return b.localeCompare(a);  
      }
    }
  }

  showDialog(name: string){
    this.dialogVisible = true;
    this.appService.getPokemonByName(name.replace(/ /g,"-")).subscribe(
      (res : any) => {
        this.pokemon = res;
        if(this.pokemon !== undefined){
          this.pokemon.name = res.name.charAt(0).toUpperCase() + res.name.slice(1).replace(/-/g, " ");
          this.pokemon.weight = res.weight/10;
          this.pokemon.height = res.height/10; 
          
          
          for(let i=0; i < res.types.length; i++){
            for(let j=0; j<typesPokemon.length; j++){
              if(res.types[i].type.name === typesPokemon[j].type){
                this.pokemon.types[i].type.name = typesPokemon[j].name;
                this.pokemon.types[i].type.color = typesPokemon[j].color;
              }
            }
          }
        }
      }
    );
  }

  closeDialog(event: boolean){
    this.pokemon = undefined;
    this.dialogVisible = event;    
  }

  loadPokemons(){
    let arrayPkms = [];
    this.appService.getPokemons().subscribe(
      (res : Pokemons) => {
        this.totalRecords = res.count;
        arrayPkms = res.results.map((pkm) => pkm.name.replace(/-/g, " "));
        this.pokemons = arrayPkms.map((pokemon) => pokemon.charAt(0).toUpperCase() + pokemon.slice(1));
        this.backupPokemons = arrayPkms.map((pokemon) => pokemon.charAt(0).toUpperCase() + pokemon.slice(1));
        for (let i = 0; i < 9; i++) {
          this.pokemons.push('\u00A0');
          this.backupPokemons.push('\u00A0');
        }
       
      }
    );
  }

}
