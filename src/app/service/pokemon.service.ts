import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';
const url = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private httpService: HttpClient,
  ) { }

  async getListPokemon(): Promise<Pokemon> {
    let promise = new Promise<Pokemon>((resolve, reject) => {
      this.httpService
        .get<Pokemon>(
          `${url}/pokemon?limit=30&offset=0`,
        )
        .toPromise()
        .then(
          (response: any) => {
            resolve(response);
          },
          (msg) => {
            reject(msg);
          }
        );
    });
    return promise;
  }

  async getPokemonDescription(urlPokemon:string): Promise<any> {
    let promise = new Promise<any>((resolve, reject) => {
      this.httpService
        .get<any>(
          `${urlPokemon}`,
        )
        .toPromise()
        .then(
          (response: any) => {
            resolve(response);
          },
          (msg) => {
            reject(msg);
          }
        );
    });
    return promise;
  }
}
