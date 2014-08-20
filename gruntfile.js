module.exports = function( grunt ) {

	grunt.initConfig( {

		pkg: grunt.file.readJSON( 'package.json' ),

		// Compile LESS
		less: {

			examples: {

				options: {

					cleancss: true,

					paths: [ 'examples/less' ],
				
				},

				files: {

					'examples/css/custom-16.css':			[ 'examples/less/custom-16.less' ],
					'examples/css/custom-24.css':			[ 'examples/less/custom-24.less' ],
					'examples/css/default.css':				[ 'examples/less/default.less' ],
					'examples/css/fluid.css':				[ 'examples/less/fluid.less' ],
					'examples/css/four-columns.css':		[ 'examples/less/four-columns.less' ],
					'examples/css/nested-one-level.css':	[ 'examples/less/nested-one-level.less' ],
					'examples/css/nested-two-levels.css':	[ 'examples/less/nested-two-levels.less' ],
					'examples/css/pull.css':				[ 'examples/less/pull.less' ],
					'examples/css/push.css':				[ 'examples/less/push.less' ],
					'examples/css/sidebar.css':				[ 'examples/less/sidebar.less' ],
					'examples/css/sidebar-double.css':		[ 'examples/less/sidebar-double.less' ],
					'examples/css/style.css':				[ 'examples/less/style.less' ],

				}

			}

		},

		// Watch file changes
		watch: {

			options: {

				livereload: true
			
			},

			html: {			

				files: [ '**/*.html' ]
			
			},

			styles: {

				files: [ 'examples/less/*.less' ],

				tasks: [ 'less' ]
			
			}

		},

		// Clean repo
		clean: {

			css: [ 'examples/css' ],

			other: [ '**/.DS_Store' ]

		}

	} );

	// Load modules
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );

	// Default task 
	grunt.registerTask( 'default',	[

		'clean',
		'less',
		'watch',

	] );

	// Default task 
	grunt.registerTask( 'build',	[

		'clean',
		'less',

	] );

};