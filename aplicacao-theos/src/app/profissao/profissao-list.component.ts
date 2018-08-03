import { Component, OnInit } from '@angular/core';
import { Profissao } from '../profissao';
import { ProfissaoService} from '../profissao.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissao-list',
  templateUrl: './profissao-list.component.html',
  styleUrls: ['./profissao.component.css']
})
export class ProfissaoListComponent implements OnInit {
   profissaolist: Array<Profissao> = [];
   displayedColumns: string[] = ['nome','id'];
  constructor(private profissaoService:ProfissaoService,private router:Router) {
   }

  ngOnInit() {
    this.getAll();

  }
  private getAll() {
    let list = this.profissaoService.find().subscribe(suc=>{
      this.profissaolist = new MatTableDataSource<any>(suc);
    });
  }

  private edit(id:number) {
    console.log('aass')
    this.router.navigate(['/profissao-editar', id]);
  }
  delete(id){
    return this.profissaoService.delete(id).subscribe(suc=> {
      this.getAll();
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.profissaolist.filter = filterValue;
  }

}
