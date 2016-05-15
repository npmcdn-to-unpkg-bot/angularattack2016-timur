SystemJS.config({
  packages: {
    'app': {
      'format': 'cjs',
      'main': 'dist/app/main.js'
    }
  }
})

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
})
