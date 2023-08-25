import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.scss']
})
export class SecondcomponentComponent implements OnInit {
  jsonVariable: any[] = [
    {
      "id": 1,
      "title": "Section 1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": 2,
      "title": "Section 2",
      "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": 3,
      "title": "Section 3",
      "description": "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ];
  shown1 = false;
  shown2:boolean = false;
  shown3:boolean = false;

  constructor() { }
  toggleDescription(): void {
    this.shown1 = !this.shown1;
  }
  toggleDescription2(): void {
    this.shown2 = !this.shown2;
  }
  toggleDescription3(): void {
    this.shown3 = !this.shown3;
  }
  ngOnInit(): void {
  }

}
