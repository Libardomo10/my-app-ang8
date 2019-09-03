import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { News } from '../model/news';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  News: News[];
  constructor(public newApi: NewsService) { }

  ngOnInit() {
    let s = this.newApi.GetNewList();
    s.snapshotChanges().subscribe(data => {

      this.News = []; 
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        console.log("item que se imprime.......", a)

        if(!a['archived'] || a['archived'] == false) {
          this.News.push(a as News);
        }
      })

    })
  }
}
