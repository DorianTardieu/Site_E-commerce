import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './image.component.html'
})
export class ImageComponent {
  public currentCount = 0;
  isHovering: boolean = true;

  public images = [
    {
      defaultUrl: "https://th.bing.com/th/id/R.fc9ff391e0b92927fc4a526a939b2ca3?rik=M35YB1MrloATrw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fd4%2fCat_March_2010-1a.jpg&ehk=lmx5Dow%2btE7KUtrgWeamODrZNBeLisLC4x4%2bkXQRDq8%3d&risl=1&pid=ImgRaw&r=0",
      hoverUrl:"https://c.tenor.com/ar59YKLhKF4AAAAC/tenor.gif",
      isHovering:false
    },
    {
      defaultUrl: "https://th.bing.com/th/id/R.fc9ff391e0b92927fc4a526a939b2ca3?rik=M35YB1MrloATrw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fd4%2fCat_March_2010-1a.jpg&ehk=lmx5Dow%2btE7KUtrgWeamODrZNBeLisLC4x4%2bkXQRDq8%3d&risl=1&pid=ImgRaw&r=0",
      hoverUrl: "https://c.tenor.com/ar59YKLhKF4AAAAC/tenor.gif",
      isHovering: false
    },
    {
      defaultUrl: "https://th.bing.com/th/id/R.fc9ff391e0b92927fc4a526a939b2ca3?rik=M35YB1MrloATrw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fd4%2fCat_March_2010-1a.jpg&ehk=lmx5Dow%2btE7KUtrgWeamODrZNBeLisLC4x4%2bkXQRDq8%3d&risl=1&pid=ImgRaw&r=0",
      hoverUrl: "https://c.tenor.com/ar59YKLhKF4AAAAC/tenor.gif",
      isHovering: false
    }
  ]

  public onMouseOver(index: number) {
    this.images[index].isHovering = true;
  }

  public onMouseOut(index: number) {
    this.images[index].isHovering = false;
  }
  public incrementCounter() {
    this.currentCount++;
  }
}
