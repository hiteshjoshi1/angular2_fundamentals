import { Component, OnInit, Input, Output, EventEmitter,OnChanges } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {


  @Input() items: number;

  @Input() pageSize = 10;

  @Output() pageChanged = new EventEmitter();

  onPage: number;

  totalPages : number[];

  constructor() { }

  ngOnChanges(){
       
    this.onPage = 1;
		var pagesCount = this.items / this.pageSize; 
//  if(pagesCount == 1) {
// 	this.totalPages = [];
//  }
  
		this.totalPages = [];
		for (var i = 1; i <= pagesCount; i++)
			this.totalPages.push(i);
		
	}


  ngOnInit() {

     }

changePage(page){
		this.onPage = page; 
		this.pageChanged.emit(page);
	}

	previous(){
		if (this.onPage == 1)
			return;

		this.onPage--;
		this.pageChanged.emit(this.onPage);
	}

	next(){
		if (this.onPage == this.totalPages.length)
			return; 
		
		this.onPage++;
		this.pageChanged.emit(this.onPage);
	}

}
