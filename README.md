# AI Image Generator

An Angular application that generates images using OpenAI's DALL-E API based on user input.

## Features

- Clean, modern UI using Angular Material
- Image generation using OpenAI's DALL-E API
- Responsive design
- Real-time image generation

## Prerequisites

- Node.js (v18.19 or higher)
- Angular CLI
- OpenAI API key

## Setup

1. Clone the repository:
```bash
git clone [your-repo-url]
cd ai-image-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create environment files:
   - Copy `src/environments/environment.example.ts` to `src/environments/environment.ts`
   - Add your OpenAI API key to the environment file

4. Run the development server:
```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200`

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
