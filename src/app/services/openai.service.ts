import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { environment } from '../../environments/environment';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: environment.openAiApiKey,
      dangerouslyAllowBrowser: true
    });
  }

  generateImage(prompt: string): Observable<string> {
    return from(this.openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1024x1024'
    })).pipe(
      map(response => {
        const url = response.data[0]?.url;
        if (!url) {
          throw new Error('No image URL received from OpenAI');
        }
        return url;
      })
    );
  }
}
