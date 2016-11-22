module.exports = function(grunt) {
	grunt.registerTask('default', ['clean', 'jsBuild', 'sassBuild', 'usebanner']);

	grunt.registerTask('jsBuild', ['eslint', 'concat', 'copy', 'uglify']);

	grunt.registerTask('sassBuild', ['sass', 'cssmin']);

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/* repo: <%= pkg.name %>/<%= gitinfo.description %> - Package Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:MM tt") %> - User: Phoydar */\n',

		buildDir: 'library/build',
		distDir: 'library/dist',

		cssBuildDir: 'library/build/css',
		cssDistDir: 'library/dist/css',

		sassDir: 'library/scss',

		jsSrcDir: 'library/js',
		jsBuildDir: 'library/build/js',
		jsDistDir: 'library/dist/js',

		gitinfo: {
			commands: {
				'description': ['describe', '--tags', '--always', '--long', '--dirty']
			}
		},

		clean: {
			all: [
				'<%= distDir %>',
				'<%= buildDir %>'
			]
		},

		usebanner: {
			all: {
				options: {
					banner: '<%= banner %>',
					linebreak: false
				},
				files: {
					src: [
						'library/build/**/*.css',
						'library/build/**/*.js',
						'library/dist/**/*.css',
						'library/dist/**/*.js'
					]
				}
			}
		},

		eslint: {
			options: {

			},
			target: ['Gruntfile.js', 'library/js/**/*.js']
		},

		copy: {
			js: {
				files: [
					// includes files within path
					{
						expand: false,
						src: ['<%= jsSrcDir %>/common/assembly.navigation.js'],
						dest: '<%= jsBuildDir %>/assembly.navigation.js',
						filter: 'isFile'
					}
				]
			}
		},

		concat: {
		    options: {
				separator: ';'
		    },
		    dist: {
				src: [
					'<%= jsSrcDir %>/libs/modernizr.custom.min.js',
					'<%= jsSrcDir %>/scripts.js'
				],
				dest: '<%= jsBuildDir %>/scripts.js'
		    }
		},

		uglify: {
			options: {
				preserveComments: false,
				beautify: false, // set to true to expand the code
				mangle: false, // set to false to preserve variable names
				sourceMap: false,
				sourceMapIncludeSources: false
			},
			dist: {
				options: {
					sourceMapName: '<%= dirDist %>/scripts.map',
					sourceMapUrl: 'scripts.map'
				},
				files: {
					'<%= jsDistDir %>/scripts.min.js' : '<%= jsBuildDir %>/scripts.js',
					'<%= jsDistDir %>/assembly.navigation.min.js' : '<%= jsBuildDir %>/assembly.navigation.js'
				}
			}
		},

		sass: {
			all: {
				options: {
					sourcemap: 'none',
					style: 'expanded'
				},
				files: {
					'<%= cssBuildDir %>/style.css': '<%= sassDir %>/style.scss',
					'<%= cssBuildDir %>/admin.css': '<%= sassDir %>/admin.scss',
					'<%= cssBuildDir %>/editor-style.css': '<%= sassDir %>/editor-style.scss',
					'<%= cssBuildDir %>/ie.css': '<%= sassDir %>/ie.scss',
					'<%= cssBuildDir %>/login.css': '<%= sassDir %>/login.scss'
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			all: {
				files: {
					'<%= cssDistDir %>/style.min.css': '<%= cssBuildDir %>/style.css',
					'<%= cssDistDir %>/admin.min.css': '<%= cssBuildDir %>/admin.css',
					'<%= cssDistDir %>/editor-style.min.css': '<%= cssBuildDir %>/editor-style.css',
					'<%= cssDistDir %>/ie.min.css': '<%= cssBuildDir %>/ie.css',
					'<%= cssDistDir %>/login.min.css': '<%= cssBuildDir %>/login.css'
				}
			}
		},

		watch: {
			css: {
				options: {
					spawn: false
				},
				files: [
					'<%= sassDir %>/**/*.scss'
				],
				tasks: ['sassBuild']
			},
			js: {
				options: {
					spawn: false
				},
				files: [
					'<%= jsSrcDir %>/**/*.js'
				],
				tasks: ['jsBuild']
			}
		}
	});
};