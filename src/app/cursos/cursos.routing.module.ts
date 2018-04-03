import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import { CursosComponent } from "./cursos.component";
import { DesenvolvimentoComponent } from "./desenvolvimento/desenvolvimento.component";
import { GestaoComponent } from "./gestao/gestao.component";

const cursosRoutes = [
    {path: 'cursos', component: CursosComponent, children: [
        {path: 'dev', component: DesenvolvimentoComponent},
        {path: 'gestao', component: GestaoComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})

export class CursosRoutingModule {} 