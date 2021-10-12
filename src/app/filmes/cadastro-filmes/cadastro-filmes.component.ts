import { Filme } from "./../../shared/models/filme";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FilmesService } from "src/app/core/filmes.service";
import { ValidarCamposService } from "src/app/shared/components/campos/validar-campos.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertaComponent } from "src/app/shared/components/alerta/alerta.component";
import { Alerta } from "src/app/shared/models/alerta";
import { MatDialog } from "@angular/material";

@Component({
  selector: "dio-cadastro-filmes",
  templateUrl: "./cadastro-filmes.component.html",
  styleUrls: ["./cadastro-filmes.component.scss"],
})
export class CadastroFilmesComponent implements OnInit {
  id: number;
  cadastro: FormGroup;
  options = [
    "Açao",
    "Aventura",
    "Científica",
    "Ficção Científica",
    "Romance",
    "Terror",
  ];

  constructor(
    private fb: FormBuilder,
    public validacao: ValidarCamposService,
    private filmeService: FilmesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.cadastro = this.fb.group({
      titulo: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(256),
        ],
      ],
      urlFoto: ["", [Validators.minLength(10)]],
      dtLancamento: ["", [Validators.required]],
      descricao: [""],
      nota: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDB: ["", [Validators.minLength(10)]],
      genero: ["", [Validators.required]],
    });
  }

  submit(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return;
    }

    const filme = this.cadastro.getRawValue() as Filme;
    if (this.id) {
      filme.id = this.id;
    } else {
      this.salvar(filme);
    }
  }

  reiniciarForm(): void {
    this.cadastro.reset();
  }

  private salvar(filme: Filme) {
    this.filmeService.salvar(filme).subscribe(
      () => {
        const config = {
          data: {
            btnSucesso: "Ir para a listagem",
            btnCancelar: "Cadastrar um novo filme",
            corBtnCancelar: "primary",
            possuirBtnFechar: true,
          } as Alerta,
        };
        const dialogRef = this.dialog.open(AlertaComponent, config);
        dialogRef.afterClosed().subscribe((opcao: boolean) => {
          if (opcao) {
            this.router.navigateByUrl("filmes");
          } else {
            this.reiniciarForm();
          }
        });
      },
      () => {
        const config = {
          data: {
            titulo: "Erro ao salvar o registro!",
            descricao:
              "Não conseguimos salvar seu registro, favor tentar novamente mais tarde",
            corBtnSucesso: "warn",
            btnSucesso: "Fechar",
          } as Alerta,
        };
        this.dialog.open(AlertaComponent, config);
      }
    );
  }
}
