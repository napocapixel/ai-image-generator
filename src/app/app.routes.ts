import { Routes } from '@angular/router';
import { AiImageGeneratorComponent } from './components/image-generator/image-generator.component';

export const routes: Routes = [
  { path: '', component: AiImageGeneratorComponent },
  { path: '**', redirectTo: '' }
];
