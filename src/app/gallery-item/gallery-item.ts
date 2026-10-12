import { Component, input, output } from '@angular/core';

export interface Photo {
  id: number;
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.html',
  styleUrl: './gallery-item.css',
})
export class GalleryItem {
  photo = input.required<Photo>();
  selected = output<Photo>();
}
