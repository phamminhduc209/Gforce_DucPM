module.exports = function(grunt){

	// 01 Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Define Path
		dirs: {
			input				: 'development',
			inputLESS			: 'development/less',
			inputJS				: 'development/js',
			inputHTMLELements	: 'development/htmlEml',
			output				: 'production',
			outputCSS			: 'production/css',
			outputJS			: 'production/js',
		},

		cssmin: {
			options: {
			},
			target: {
				files: {
					'<%= dirs.outputCSS %>/style.css' : '<%= dirs.outputCSS %>/style.css'
				}
			}
		},

		uglify: {
			options: {
				beautify: false,
				compress: {
					drop_console: false
				}
			},
			my_target: {
				files: {
					'<%= dirs.outputJS %>/main.js': ['<%= dirs.inputJS %>/main.js']
				}
			}
		},

		less: {
			development: {
				options: {
					compress: true
				},
				files: {
					"production/css/style.css": "development/less/main.less" // destination: source
				}
			}
		},

		watch: {
			scripts: {
				files: [
					'<%= dirs.inputLESS %>/*.less',				// development/less/*.less
					'<%= dirs.inputLESS %>/*/*.less',			// development/less/*/*.less
					'<%= dirs.inputJS %>/*.js',	
					'<%= dirs.input %>/*.html',
					'<%= dirs.inputHTMLELements %>/*.html',		// development/htmlEml/*.html
				],
				tasks: ['less', 'includes', 'uglify'  ],
				options: {
					spawn: false,
					livereload: true
				},
			},
		},

		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 5000,
					base: '<%= dirs.output %>/',
					livereload: true
				}
			}
		},

		includes: {
			files: {
				src: [
					'<%= dirs.input %>/*.html'
				], // Source files
				dest: '<%= dirs.output %>/',
				flatten: true,
				cwd: '.',
				options: {
					silent: true,
					banner: ''
				}
			}
		},

		htmlmin: {                                     // Task 
			dist: {                                      // Target 
				options: {                                 // Target options 
					removeComments: false,
					collapseWhitespace: true
				},
				files: {                                   // Dictionary of files 
					'<%= dirs.output %>/index2.html': '<%= dirs.output %>/index.html',
				}
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
	});

	grunt.registerTask('dev', [
		'includes',
		'less',
		'connect',
		'watch',
	]);

	grunt.registerTask('build', [
		'cssmin',
		'uglify',
	]);
}