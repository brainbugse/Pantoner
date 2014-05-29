
module.exports = function(grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// our config
	grunt.initConfig({

		// watch for changes and trigger compass, jshint, uglify and livereload
		watch: {
			sass: {
				files: ['scss/_pantone.scss','scss/test.scss'],
				tasks: ['sass']
			},
			stylus: {
				files: ['stylus/_pantone.styl','stylus/test.styl'],
				tasks: ['stylus']
			},
			build: {
				files: ['dev/*.*','json/*.json'],
				tasks: ['shell']
			}
		},


		// compile sass
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: { 
					// process demo styles
					'demo.css': 'dev/demo.scss',
					'scss/test.css': 'scss/test.scss',
				}
			}
		},


		// compile stylus
		stylus: {
			compile: {
				files: {
					'stylus/test.css': 'stylus/test.styl',
				}
			}
		},


		// generate the sass and html files with node scripts
		shell: {
			build: {
				command: 'node dev/build.js'
			}
		}

	});

	// register task
	grunt.registerTask('default', ['watch']);
};