import { Component, OnInit } from '@angular/core';

interface Image {
  id: number;
  src: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: Image[] = [
    { id: 1, src: '../../../assets/zelda1.jpeg', title: 'Imagen 1' },
    { id: 2, src: '../../../assets/zelda2.jpeg', title: 'Imagen 2' },
    { id: 3, src: '../../../assets/zelda3.jpeg', title: 'Imagen 3' },
    { id: 4, src: '../../../assets/zelda4.jpeg', title: 'Imagen 4' },
    { id: 5, src: '../../../assets/zelda5.jpeg', title: 'Imagen 5' },
    { id: 6, src: '../../../assets/zelda6.jpeg', title: 'Imagen 6' },
    { id: 7, src: '../../../assets/zelda7.jpeg', title: 'Imagen 7' },
    { id: 8, src: '../../../assets/zelda8.jpeg', title: 'Imagen 8' },
    // ... agregar más imágenes aquí
  ];

  selectedImage: Image = this.images[0];
  currentIndex: number = 0;
  imageSize: number = 500;
  imageHeight: number = 350;
  slideshowRunning: boolean = false;
  slideshowInterval: any;
  currentPageIndex: number = 0;
  pageSize: number = 3;

  constructor() {}

  ngOnInit() {}

  selectImage(image: Image) {
    this.selectedImage = image;
  }

  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedImage = this.images[this.currentIndex];
    }
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.selectedImage = this.images[this.currentIndex];
    }
  }

  isFirstImage() {
    return this.currentIndex === 0;
  }

  isLastImage() {
    return this.currentIndex === this.images.length - 1;
  }

  increaseSize() {
    if (this.imageSize < 700) {
      this.imageSize += 10;
      this.imageHeight += 10;
    }
  }

  decreaseSize() {
    if (this.imageSize > 300) {
      this.imageSize -= 10;
      this.imageHeight -= 10;
    }
  }

  startSlideshow() {
    this.slideshowRunning = true;
    this.slideshowInterval = setInterval(() => {
      this.nextImage();
      if (this.isLastImage()) {
        this.currentIndex = -1;
      }
    }, 2000);
  }

  stopSlideshow() {
    this.slideshowRunning = false;
    clearInterval(this.slideshowInterval);
  }

  goToPreviousPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }

  goToNextPage() {
    const maxPageIndex = Math.floor(this.images.length / this.pageSize);
    if (this.currentPageIndex < maxPageIndex) {
      this.currentPageIndex++;
    }
  }

  isLastPage(): boolean {
    const maxPageIndex = Math.floor(this.images.length / this.pageSize);
    return this.currentPageIndex === maxPageIndex;
  }

  isFirstPage(): boolean {
    return this.currentPageIndex === 0;
  }
}
