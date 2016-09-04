SystemJS.config({
  paths: {
    'github:*': '/jspm_packages/github/*',
    'npm:*': '/jspm_packages/npm/*'
  },
  map: {
    'app': 'dist',
    'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.6',
    'angular2-in-memory-web-api': 'https://unpkg.com/angular2-in-memory-web-api',
    '@angular': 'https://unpkg.com/@angular'
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

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'zone.js': 'npm:zone.js@0.6.12'
  },
  packages: {}
});
