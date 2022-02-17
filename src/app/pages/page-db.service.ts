/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Page } from './page.model';

@Injectable({
  providedIn: 'root'
})
export class PageDBService {

    private bois: Page[] = [
    {
      id : 1,
      name: 'Halo Infinite',
      link : 'https://i.blogs.es/06cb35/1366_2000-4-/1366_2000.jpeg',
      text: '¡Comienza la siguiente época de Halo! Para celebrar el 20.º aniversario de la franquicia, la beta multijugador de Halo Infinite ya está disponible para jugar de forma gratuita en Xbox y PC. Comienza tu viaje personal de Spartan hoy con la Temporada 1, \'Heroes of Reach\', y no te pierdas los próximos eventos en el juego por tiempo limitado y premios exclusivos.'
    },
    {
      id : 2,
      name: 'Red Dead Redemption 2',
      link : 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2018/10/Red-Dead-Redemption-2.jpg?fit=1191%2C670&ssl=1',
      text:'Red Dead Redemption 2, estilizado Red Dead Redemption II, es un videojuego de acción-aventura western, en un mundo abierto y en perspectiva de primera y tercera persona, con componentes para un jugador y multijugador.​ Fue desarrollado por Rockstar Games.'
    },
    {
      id : 3,
      name: 'Red Dead Redemption 3',
      link : 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2018/10/Red-Dead-Redemption-2.jpg?fit=1191%2C670&ssl=1',
      text:'Red Dead Redemption 3, estilizado Red Dead Redemption II, es un videojuego de acción-aventura western, en un mundo abierto y en perspectiva de primera y tercera persona, con componentes para un jugador y multijugador.​ Fue desarrollado por Rockstar Games.'
    }
  ];

  constructor() { }

  getPages(){
    return this.bois;
  }

  getPage(id: number): Page{
    for(const boi of this.bois){
      if(boi.id === id){
        return boi;
      }
    }
  }

  addPage(link: string, name: string, text: string){
    this.bois.push({
      id: this.bois.length + 1,
      name,
      link,
      text
    });
  }

  deletePage(id: number){
    const newBois: Page[] = [];
    for(const boi of this.bois){
      if(boi.id !== id){
        newBois.push(boi);
      }
    }
    this.bois = newBois;
  }
}
