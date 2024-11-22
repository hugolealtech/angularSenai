import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { BotaoComponent } from "./components/botao/botao.component";

@Component({
    selector: 'app-root',
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        BotaoComponent,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['nome', 'status'];
  processos = [
    { nome: 'Processo 1', status: 'Em andamento' },
    { nome: 'Processo 2', status: 'Concluído' },
    { nome: 'Processo 3', status: 'Pendente' },
  ];
}
