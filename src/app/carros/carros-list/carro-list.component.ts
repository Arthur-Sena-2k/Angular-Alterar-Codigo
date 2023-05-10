import { Component } from '@angular/core';
import { Carros } from '../../shared/modelo/carros';
import { carrosList } from '../../shared/modelo/carroslist';

@Component({
    selector: 'app-carro-list',
    templateUrl: './carro-list.component.html',
    styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent {
  
    carrosList = carrosList;
    
      excluir(carroARemover: Carros): void {
        const index = this.carrosList.findIndex(carro =>
          carro.modelo === carroARemover.modelo);
    
        this.carrosList.splice(index, 1);
    }
    
    
}