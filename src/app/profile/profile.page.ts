import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // this gives information about the current url
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 profileId!: string | null;
 character: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
   this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('https://rickandmortyapi.com/api/character/'+this.profileId)
    .subscribe( result => {
      this.character = result;
    })
  }

}
