import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();

  }
  addTask(newTask) {
    return this._http.post('/tasks', newTask)
  }
  getTasks() {
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }
  getTaskById(id) {
    return this._http.get('/tasks/'+id);
  }
  editTaskById(id) {
    return this._http.put('/tasks/'+id, current_task);
  }
  deleteTaskById(id) {
    return this._http.delete('/tasks/'+id);
  }
  postToServer(num) {
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/tasks', num);
  }
}


  // this.getPokemon();
  // this.getAbilities();
  // this.getAbility1();
  // this.getAbility2();
  // this.getAbility1Users();
  // this.getAbility2Users();



  // getPokemon() {
  //   let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/38/');
  //   pokemon.subscribe(data => console.log(`Got ${data.name}!`, data));
  // }
  // getAbilities() {
  //   let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/38/');
  //   pokemon.subscribe(data => console.log(`Got ${data.name}'s abilities: ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}`));
  // }
  // getAbility1() {
  //   let ability1 = this._http.get('https://pokeapi.co/api/v2/ability/70/');
  //   ability1.subscribe(data => console.log(`Got the ${data.name} ability: ${data.pokemon.length}`));
  // }
  // getAbility2() {
  //   let ability2 = this._http.get('https://pokeapi.co/api/v2/ability/18/');
  //   ability2.subscribe(data => console.log(`Got the ${data.name} ability: ${data.pokemon.length}`));
  // }
  // getAbility1Users() {
  //   let ability1users = this._http.get('https://pokeapi.co/api/v2/ability/70/');
  //   ability1users.subscribe(data => {
  //     console.log(`Here are the pokemon with ability ${data.name}`)
  //     for (let x of data.pokemon) {
  //       console.log(`${x.pokemon.name}`);
  //     }
  //   });
  // }
  // getAbility2Users() {
  //   let ability2users = this._http.get('https://pokeapi.co/api/v2/ability/18/');
  //   ability2users.subscribe(data => {
  //     console.log(`Here are the pokemon with ability ${data.name}`)
  //     for (let x of data.pokemon) {
  //       console.log(`${x.pokemon.name}`);
  //     }
  //   });
  // }
