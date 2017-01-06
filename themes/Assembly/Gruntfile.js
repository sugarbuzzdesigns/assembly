module.exports = function(grunt) {
	grunt.registerTask('default', ['clean', 'jsBuildDist', 'sassBuildDist', 'usebanner']);

	grunt.registerTask('dev', ['default', 'watch']);

	grunt.registerTask('jsBuildDist', ['eslint', 'copy', 'concat:libs', 'concat:common', 'concat:build', 'uglify:common', 'uglify:pages', 'concat:dist', 'clean:tmp']);

	grunt.registerTask('sassBuildDist', ['sass', 'cssmin']);

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
		jsBuildTmpDir: 'library/build/js/tmp',
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
			],
			tmp: [
				'<%= jsBuildTmpDir %>'
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
					{
						expand: false,
						src: ['<%= jsSrcDir %>/pages/assembly.contact.js'],
						dest: '<%= jsBuildDir %>/assembly.contact.js',
						filter: 'isFile'
					},
					{
						expand: false,
						src: ['<%= jsSrcDir %>/pages/assembly.services.js'],
						dest: '<%= jsBuildDir %>/assembly.services.js',
						filter: 'isFile'
					}
				]
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
			common: {
               	src: ['<%= jsBuildTmpDir %>/assembly.common.js'],
            	dest: '<%= jsBuildTmpDir %>/assembly.common.min.js'
			},
			pages: {
				files: {
					'<%= jsDistDir %>/assembly.contact.min.js': ['<%= jsSrcDir %>/pages/assembly.contact.js'],
					'<%= jsDistDir %>/assembly.services.min.js': ['<%= jsSrcDir %>/pages/assembly.services.js']
				}
			}
		},

		removelogging: {
			dist: {
				src: '<%= jsBuildDir %>/**/*.js'
			}
		},

		concat: {
			libs: {
				src: [
					// '<%= jsSrcDir %>/libs/jquery.1.12.4.min.js',
					'<%= jsSrcDir %>/libs/modernizr.custom.min.js',
					'<%= jsSrcDir %>/libs/waypoints.jquery.min.js',
					'<%= jsSrcDir %>/libs/bxslider.min.js',
					'<%= jsSrcDir %>/libs/slick.min.js',
					'<%= jsSrcDir %>/libs/videojs.min.js'
				],
				dest: '<%= jsBuildTmpDir %>/libs.js'
			},
		    common: {
		    	options: {
		    		process: function(src, filepath) {
		    			return '/*! Source: ' + filepath + '*/\n' + src;
		    		}
		    	},
				src: [
					'<%= jsSrcDir %>/common/assembly.util.js',
					'<%= jsSrcDir %>/common/assembly.navigation.js',
					'<%= jsSrcDir %>/common/assembly.carousel.js',
					'<%= jsSrcDir %>/common/assembly.video.js'
				],
				dest: '<%= jsBuildTmpDir %>/assembly.common.js'
		    },
		    build: {
		    	src: ['<%= jsBuildTmpDir %>/libs.js', '<%= jsBuildTmpDir %>/assembly.common.js'],
		    	dest: '<%= jsBuildDir %>/assembly.scripts.js'
		    },
		    dist: {
				src: [
					'<%= jsBuildTmpDir %>/libs.js',
					'<%= jsBuildTmpDir %>/assembly.common.min.js'
				],
				dest: '<%= jsDistDir %>/assembly.scripts.min.js'
		    }
		},

		sass: {
			all: {
				options: {
					sourcemap: 'none',
					style: 'expanded'
				},
				files: {
					'<%= buildDir %>/css/style.css': '<%= sassDir %>/style.scss',
					'<%= buildDir %>/css/admin.css': '<%= sassDir %>/admin.scss',
					'<%= buildDir %>/css/editor-style.css': '<%= sassDir %>/editor-style.scss',
					'<%= buildDir %>/css/ie.css': '<%= sassDir %>/ie.scss',
					'<%= buildDir %>/css/login.css': '<%= sassDir %>/login.scss'
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
				tasks: ['sassBuildDist']
			},
			js: {
				options: {
					spawn: false
				},
				files: [
					'<%= jsSrcDir %>/**/*.js'
				],
				tasks: ['jsBuildDist']
			}
		}
	});
};