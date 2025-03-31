import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-generator',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './image-generator.component.html',
  styleUrl: './image-generator.component.scss'
})
export class ImageGeneratorComponent {
  generatedImageUrl: string | null = null;

  constructor(private openaiService: OpenaiService) {}

  testImageGeneration() {
    this.openaiService.generateImage('A cute cat playing with yarn')
      .subscribe({
        next: (url) => {
          console.log('Generated image URL:', url);
          this.generatedImageUrl = url;
        },
        error: (error) => {
          console.error('Error generating image:', error);
          this.generatedImageUrl = null;
        }
      });
  }
}
