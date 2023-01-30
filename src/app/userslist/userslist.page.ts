import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
   
  characters: any[] =[];
  constructor(
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(result => {
        this.characters = result.results;
    })
  }

}
