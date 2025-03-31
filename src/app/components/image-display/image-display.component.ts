import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ai-generated-image',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './image-display.component.html',
  styleUrl: './image-display.component.scss'
})
export class AiGeneratedImageComponent {
  @Input() imageUrl$!: Observable<string | null>;
  @Input() isLoading$!: Observable<boolean>;
  @Input() onClear!: () => void;
} 