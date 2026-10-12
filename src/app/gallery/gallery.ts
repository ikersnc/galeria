import { Component, HostListener, signal } from '@angular/core';
import { GalleryItem, Photo } from '../gallery-item/gallery-item';

@Component({
  selector: 'app-gallery',
  imports: [GalleryItem],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  photos: Photo[] = [
    { id: 10, title: 'Bosque brumoso', description: 'Árboles envueltos en niebla al amanecer.', url: 'https://picsum.photos/id/10' },
    { id: 15, title: 'Cascada', description: 'Agua cayendo entre las rocas.', url: 'https://picsum.photos/id/15' },
    { id: 16, title: 'Costa', description: 'Playa tranquila al atardecer.', url: 'https://picsum.photos/id/16' },
    { id: 28, title: 'Pinar', description: 'Camino a través de un denso pinar.', url: 'https://picsum.photos/id/28' },
    { id: 29, title: 'Montañas', description: 'Cumbres nevadas bajo un cielo despejado.', url: 'https://picsum.photos/id/29' },
    { id: 37, title: 'Valle', description: 'Un valle verde rodeado de colinas.', url: 'https://picsum.photos/id/37' },
    { id: 57, title: 'Ciudad', description: 'Arquitectura urbana moderna.', url: 'https://picsum.photos/id/57' },
    { id: 65, title: 'Lago', description: 'Reflejos en un lago en calma.', url: 'https://picsum.photos/id/65' },
    { id: 76, title: 'Puente', description: 'Un puente cruzando el río.', url: 'https://picsum.photos/id/76' },
    { id: 90, title: 'Hogar', description: 'Interior acogedor y luminoso.', url: 'https://picsum.photos/id/90' },
    { id: 103, title: 'Desierto', description: 'Dunas bajo el sol.', url: 'https://picsum.photos/id/103' },
    { id: 110, title: 'Camino rural', description: 'Sendero entre campos dorados.', url: 'https://picsum.photos/id/110' },
  ];

  current = signal<Photo | null>(null);

  open(photo: Photo) { this.current.set(photo); }
  close() { this.current.set(null); }

  @HostListener('document:keydown.escape')
  onEscape() { this.close(); }
}
