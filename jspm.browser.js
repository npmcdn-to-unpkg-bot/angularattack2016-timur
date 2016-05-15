SystemJS.config({
  paths: {
    'github:*': '/jspm_packages/github/*',
    'npm:*': '/jspm_packages/npm/*'
  },
  map: {
    'app': 'dist/app',
    'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api',
    '@angular': 'https://npmcdn.com/@angular'
  },
  packages: {
    'app': {
      'main': 'main.js',
      'defaultExtension': 'js'
    },
    'rxjs': {
      'defaultExtension': 'js'
    },
    'angular2-in-memory-web-api': {
      'defaultExtension': 'js'
    },
    '@angular/common': {
      'main': 'index.js',
      'defaultExtension': 'js'
    },
    '@angular/compiler': {
      'main': 'index.js',
      'defaultExtension': 'js'
    },
    '@angular/core': {
      'main': 'index.js',
      'defaultExtension': 'js'
    },
    '@angular/http': {
      'main': 'index.js',
      'defaultExtension': 'js'
    },
    '@angular/platform-browser': {
      'main': 'index.js',
      'defaultExtension': 'js'
    },
    '@angular/platform-browser-dynamic': {
      'main': 'index.js',
      'defaultExtension': 'js'
    },
    '@angular/router': {
      'main': 'index.js',
      'defaultExtension': 'js'
    },
    '@angular/router-deprecated': {
      'main': 'index.js',
      'defaultExtension': 'js'
    },
    '@angular/testing': {
      'main': 'index.js',
      'defaultExtension': 'js'
    },
    '@angular/upgrade': {
      'main': 'index.js',
      'defaultExtension': 'js'
    }
  }
});
