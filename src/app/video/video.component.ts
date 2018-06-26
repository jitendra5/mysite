import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  video = document.getElementById('myVideo');
  // Get the button

  // Pause and play the video, and change the button text
  myFunction(vid, btn) {
    console.log(vid);
    if (vid.paused) {
      vid.play();
      btn.innerHTML = 'PAUSE';
    } else {
      vid.pause();
      btn.innerHTML = 'PLAY';
    }
  }
}
