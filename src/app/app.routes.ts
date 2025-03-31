import { Routes } from '@angular/router';
import { ImageGeneratorComponent } from './components/image-generator/image-generator.component';

export const routes: Routes = [
  { path: '', component: ImageGeneratorComponent },
  { path: '**', redirectTo: '' }
];
