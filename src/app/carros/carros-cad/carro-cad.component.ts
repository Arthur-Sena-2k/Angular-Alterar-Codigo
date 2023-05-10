import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carros } from '../../shared/modelo/carros';
import { carrosList } from '../../shared/modelo/carrosList';

@Component({
  selector: 'app-carros-cad',
  templateUrl: './carro-cad.component.html',
  styleUrls: ['./carro-cad.component.scss']
})
export class CarroCadComponent {

  carro: Carros;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  carros = carrosList;

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.carro = new Carros();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      const carroEncontrado = this.carros.find(
        carro => carro.modelo === idParaEdicao);
      if (carroEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.carro = carroEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  cadastrar(): void {
    if (this.estahCadastrando && this.carro) {
      this.carros.push(this.carro);
    }
    this.carro = new Carros();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['carroslistagem']);
  }

}