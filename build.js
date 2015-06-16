'use strict'

var minimist = require('minimist'),
    metalsmith = require('metalsmith')(__dirname),
    markdown = require('metalsmith-markdown'),
    partials = require('metalsmith-register-partials'),
    layouts = require('metalsmith-layouts'),
    moveUp = require('metalsmith-move-up'),
    ignore = require('metalsmith-ignore'),
    serve = require('metalsmith-serve'),
    watch = require('metalsmith-watch')

var argv = minimist(process.argv.splice(2), {
  boolean: ['serve'],
  alias: {'serve': 's'}
})

metalsmith.source('./src')
metalsmith.destination('./dist')

metalsmith.use(markdown({
  smartypants: true,
  gfm: true,
  tables: true
}))

metalsmith.use(partials({
  directory: 'src/partials'
}))

metalsmith.use(layouts({
  engine: 'handlebars',
  directory: 'src/layouts'
}))

metalsmith.use(moveUp({
  pattern: 'pages/**'
}))

if (argv.serve) {
  metalsmith.use(watch())
  metalsmith.use(serve({
    port: 4000,
    verbose: true,
    cache: 1
  }))
} else {
  metalsmith.use(ignore([
    'layouts/*',
    'partials/*'
  ]))
}

metalsmith.build(function (err) {
  if (err) console.log(err)
  else console.log('Build complete...')
})
