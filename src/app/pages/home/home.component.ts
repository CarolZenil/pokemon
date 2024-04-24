import { Component } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pokemonsList:Array<any> = [];
  constructor(
    private pokemonService: PokemonService,
  ) {

  }
  ngOnInit() {
    this.getListPokemon();
  }

  async getListPokemon(){
    try {
      const result = await this.pokemonService.getListPokemon();
      console.log(result);
      if (result) {
        for (const pokemon of result.results) {
          this.getPokemonDescription(pokemon.url);
        }
        
      }
    } catch (error: any) {
      console.log('eror', error);
    }
  }

  async getPokemonDescription(url:string){
    try {
      const result = await this.pokemonService.getPokemonDescription(url);
      console.log(result);
      if (result) {
        this.pokemonsList.push(result)
      }
    } catch (error: any) {
      console.log('eror', error);
    }
  }

  getColor(type:any){
    for (const pokemon of type) {
      if(pokemon.type.name == 'fire'){
        return '#ff0000'
      }

      if(pokemon.type.name == 'grass'){
        return '#008000'
      }

      if(pokemon.type.name == 'water'){
        return '#0000ff'
      }
    }

    return '#c4bcbc'
  }
}
