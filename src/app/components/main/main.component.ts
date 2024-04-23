import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgOptimizedImage],
  providers: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  playTrailer(): void {
    const trailerUrl = 'https://youtu.be/xdBWrkcmMwU?t=7?autoplay=1';
    window.open(trailerUrl, '_black');
  }
}
