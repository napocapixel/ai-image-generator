import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Observable, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ai-image-prompt',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './prompt-input.component.html',
  styleUrl: './prompt-input.component.scss'
})
export class AiImagePromptComponent implements OnInit, OnDestroy {
  @Input() isLoading$!: Observable<boolean>;
  @Output() generateImage = new EventEmitter<string>();

  promptForm: FormGroup;
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.promptForm = this.fb.group({
      prompt: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    if (this.promptForm.valid) {
      this.generateImage.emit(this.promptForm.get('prompt')?.value);
    }
  }

  clearForm(): void {
    this.promptForm.reset();
    this.promptForm.get('prompt')?.setErrors(null);
  }
} 