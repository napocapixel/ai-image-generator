import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { AiGeneratedImageComponent } from '../image-display/image-display.component';
import { AiImagePromptComponent } from '../prompt-input/prompt-input.component';

@Component({
  selector: 'app-ai-image-generator',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    AiGeneratedImageComponent,
    AiImagePromptComponent
  ],
  templateUrl: './image-generator.component.html',
  styleUrl: './image-generator.component.scss'
})
export class AiImageGeneratorComponent implements OnInit, OnDestroy {
  @ViewChild(AiImagePromptComponent) promptInput!: AiImagePromptComponent;
  
  private destroy$ = new Subject<void>();
  private imageUrlSubject = new BehaviorSubject<string | null>(null);
  
  generatedImageUrl$ = this.imageUrlSubject.asObservable();
  isLoading$ = new BehaviorSubject<boolean>(false);

  get hasGeneratedImage(): boolean {
    return this.imageUrlSubject.value !== null;
  }

  constructor(private openaiService: OpenaiService) {}

  ngOnInit(): void {
    this.destroy$.subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  generateImage(prompt: string): void {
    if (!prompt.trim()) return;
    
    this.isLoading$.next(true);
    
    this.openaiService.generateImage(prompt)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (url) => {
          this.imageUrlSubject.next(url);
          this.isLoading$.next(false);
        },
        error: (error) => {
          this.imageUrlSubject.next(null);
          this.isLoading$.next(false);
        }
      });
  }

  clearImage = () => {
    this.imageUrlSubject.next(null);
    this.promptInput.clearForm();
  }
}
