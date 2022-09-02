import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/bookservice.service';

import Book from '../entity/Book';

// import User from 'src/app/entity/User';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

book:Book = new Book();



save(){
  const observable = this.bookService.createbook (this.book);
  observable.subscribe(
    (response:any) => {
      console.log(response);
    },
    function(error){
      console.log(error);
alert("Something went wrong!!!")
      
    }
    
  )
  
  // // console.log(this.user.title +"\n"+ 
  // // this.user.category+"\n"+ 
  // this.user.image+"\n" +
  // this.user.price +"\n"+ 
  // this.user.publisher+"\n"+
  // this.user.active+"\n"+
  // //  this.user.content );

}




  constructor(public bookService :BookserviceService) { }

  ngOnInit(): void {
    // const promise = this.userService.getUsers();
    // promise.subscribe((response) =>{
    //   console.log(response);
    //   this.users= response as User[];
    }
  }


