import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class AppService{
    constructor(private http: HttpClient){}

    getPokemons(): Observable<any>{
        return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=1281`)
    }

    getPokemonByName(name: string): Observable<any>{
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    }
}