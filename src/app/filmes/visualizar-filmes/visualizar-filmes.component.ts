import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-visualizar-filmes',
  templateUrl: './visualizar-filmes.component.html',
  styleUrls: ['./visualizar-filmes.component.css']
})
export class VisualizarFilmesComponent implements OnInit {

  filme: Filme;
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  constructor(private activatedRouter: ActivatedRoute, private service: FilmesService) { }

  ngOnInit(): void {
    this.buscarFilme(this.activatedRouter.snapshot.params['id']);
  }

  private buscarFilme(id: number): void {
    this.service.visualizar(id).subscribe( (filme: Filme) => {
      this.filme = filme;
    });
  }

}
