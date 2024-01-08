import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DescriptionPipe } from 'src/app/shared/pipes/description.pipe';
import { SafePipe } from 'src/app/shared/pipes/safe.pipe';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  standalone: true,
  imports: [SafePipe, DescriptionPipe],
})
export class BannerComponent implements OnChanges {
  @Input({ required: true }) videoId: string = '';
  @Input({ required: true }) desc: string = '';
  @Input({ required: true }) title: string = '';
  videoLink: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoId']) {
      this.videoLink = `https://www.youtube.com/embed/${this.videoId}?autoplay=1&loop=1&mute=1`;
    }
  }
}
