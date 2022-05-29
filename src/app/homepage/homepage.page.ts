import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  private places = [
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/280px-Tour_Eiffel_Wikimedia_Commons.jpg',
      comentario: ['un lugar genial', 'una experiencia cool']
    },
    {
      id:'2',
      title: 'estatua de la livertad',
      imageURL: 'https://farm7.static.flickr.com/6237/6282121179_b50e6ddbbf_z.jpg',
      comentario: ['un lugar genial', 'una experiencia cool']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
