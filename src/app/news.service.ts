import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsRef: AngularFireList<any>
  constructor(private db: AngularFireDatabase) { }

  GetNewList() {
    this.newsRef = this.db.list('products');
    return this.newsRef;
  }
}
