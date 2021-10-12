import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';
import { Alerta } from 'src/app/shared/models/alerta';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';

@Component({
  selector: 'dio-visualizar-filmes',
  templateUrl: './visualizar-filmes.component.html',
  styleUrls: ['./visualizar-filmes.component.css']
})
export class VisualizarFilmesComponent implements OnInit {

  filme: Filme;
  id: number;
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  constructor(private activatedRouter: ActivatedRoute, private service: FilmesService, public dialog: MatDialog, private route: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id']
    this.buscarFilme();
  }

  excluir(): void {
    const config = {
      data: {
        titulo: 'Você tem certeza que deseja excluir o filme?',
        descricao: 'Caso você tenha certeza que deseja excluir, clike no botao OK',
        corBtnCancelar: 'primary',
        corBtnSucesso: 'warn',
        possuirBtnFechar: true,
      } as Alerta,
    };
    const dialogRef = this.dialog.open(AlertaComponent, config);
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.service.excluir(this.id).subscribe( () => {
          this.route.navigateByUrl('/filmes');
        })
      }
    });
  }

  editar():void {
    this.route.navigateByUrl('/filmes/cadastro/' + this.id);
  }

  private buscarFilme(): void {
    this.service.visualizar(this.id).subscribe( (filme: Filme) => {
      this.filme = filme;
    });
  }

}
