import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})


export class PaginadorComponent implements OnInit {

  @Input() totalResults: number =1;
  @Input() limitProducts: number=1;
  @Input() value: string='';
  currentPage: number=1;
  currentvalue: string= ''
  totalPages: number=1;
  lastPage: number=1;
  pages: [] = [];


  constructor( private activatedRoute: ActivatedRoute,
                private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams
      .subscribe( ({page,value})  => {
        if (!page) {
          page = 1
        }
        if (!value) {
          value = this.value;
        }
        this.currentvalue= value;
        console.log("ESTE ES EL VALOR DEL VALUE  "+value);
        this.totalPages = Math.trunc( this.totalResults / this.limitProducts ) + 1
        this.lastPage = this.totalPages
        this.currentvalue= value;
        console.log(value);

        this.currentPage = Number( page )
      })

      for (let i = 1; i <= this.totalPages; i++) {
        this.pages.push(i as never)

      }


  }


  changePage( page: number ){

    this.currentPage = page
    this.currentvalue
    const url = this.router.url.split('?')[0]
    console.log(url)
      this.router.navigateByUrl(`${ url }?page=${page}&value=${this.currentvalue}`)
    
  }



}
