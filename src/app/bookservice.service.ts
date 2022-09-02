import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Post_URL ="http://localhost:8086/books"

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  createbook(books:{

    id:string;
	  title:string;
      category:string;
      image:string;
      price:string;
      publisher:string;
      active:string;
	 content:string;

  })
  {
return this.http.post( Post_URL,books);
  }

  constructor(public http: HttpClient) { }
}
