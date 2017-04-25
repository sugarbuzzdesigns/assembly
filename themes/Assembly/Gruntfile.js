module.exports = function(grunt) {
	grunt.registerTask('default', ['clean', 'jsBuildDist', 'sassBuildDist', 'sassPagesBuildDist', 'watch']);

	grunt.registerTask('dev', ['default', 'browserSync', 'watch']);

	grunt.registerTask('jsBuildDist', ['eslint', 'copy', 'concat:libs', 'concat:common', 'concat:build', 'uglify:common', 'uglify:pages_all', 'concat:dist', 'clean:tmp', 'usebanner:js', 'growl:jsBuild']);

	grunt.registerTask('jsBuildDist_libs', ['eslint:libs', 'concat:libs']);

	grunt.registerTask('jsBuildDist_common', ['eslint:common', 'concat:common', 'uglify:common', 'concat:dist', 'usebanner:js_common', 'growl:js_common']);

	grunt.registerTask('jsBuildDist_home', ['eslint:home', 'copy:js_home', 'uglify:pages_home', 'usebanner:js_home', 'growl:js_home']);
	grunt.registerTask('jsBuildDist_about', ['eslint:about', 'copy:js_about', 'uglify:pages_about', 'usebanner:js_about', 'growl:js_about']);
	grunt.registerTask('jsBuildDist_casestudies', ['eslint:casestudies', 'copy:js_casestudies', 'uglify:pages_casestudies', 'usebanner:js_casestudies', 'growl:js_casestudies']);
	grunt.registerTask('jsBuildDist_services', ['eslint:services', 'copy:js_services', 'uglify:pages_services', 'usebanner:js_services', 'growl:js_services']);

	grunt.registerTask('sassBuildDist', ['sass:main', 'autoprefixer:main', 'cssmin:main', 'usebanner:css_main', 'growl:cssBuild']);
	grunt.registerTask('sassPagesBuildDist', ['sass:pages', 'autoprefixer:pages', 'cssmin:pages', 'usebanner:css_pages', 'growl:cssBuild']);

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

		// Build Tasks
		autoprefixer: {
			main: {
				options: {
					browsers: ['last 2 versions', 'ie 8', 'ie 9', 'iOS 7']
				},
				src: '<%= buildDir %>/css/**/*.css'
			},
			pages: {
				options: {
					browsers: ['last 2 versions', 'ie 8', 'ie 9', 'iOS 7']
				},
				src: '<%= buildDir %>/css/**/*.css'
			}
		},

		usebanner: {
			js: {
				options: {
					banner: '<%= banner %>',
					linebreak: false
				},
				files: {
					src: [
						'library/build/js/*.js',
						'library/dist/js/*.js'
					]
				}
			},
			js_common: {
				options: {
					banner: '<%= banner %>',
					linebreak: false
				},
				files: {
					src: [
						'library/build/js/assembly.scripts.js',
						'library/dist/js/assembly.scripts.min.js'
					]
				}
			},
			js_home: {
				options: {
					banner: '<%= banner %>',
					linebreak: false
				},
				files: {
					src: [
						'library/build/js/assembly.home.js',
						'library/dist/js/assembly.home.min.js'
					]
				}
			},
			js_about: {
				options: {
					banner: '<%= banner %>',
					linebreak: false
				},
				files: {
					src: [
						'library/build/js/assembly.about.js',
						'library/dist/js/assembly.about.min.js'
					]
				}
			},
			js_casestudies: {
				options: {
					banner: '<%= banner %>',
					linebreak: false
				},
				files: {
					src: [
						'library/build/js/assembly.casestudies.js',
						'library/dist/js/assembly.casestudies.min.js'
					]
				}
			},
			js_services: {
				options: {
					banner: '<%= banner %>',
					linebreak: false
				},
				files: {
					src: [
						'library/build/js/assembly.services.js',
						'library/dist/js/assembly.services.min.js'
					]
				}
			},
			css_main: {
				options: {
					banner: '<%= banner %>',
					linebreak: false
				},
				files: {
					src: [
						'library/build/css/*.css',
						'library/dist/css/*.css',
						'!library/build/css/pages/*.css',
						'!library/dist/css/pages/*.css'
					]
				}
			},
			css_pages: {
				options: {
					banner: '<%= banner %>',
					linebreak: false
				},
				files: {
					src: [
						'library/build/css/pages/**/*.css',
						'library/dist/css/pages/**/*.css'
					]
				}
			}
		},

		eslint: {
			all: ['Gruntfile.js', 'library/js/**/*.js'],
			home: ['Gruntfile.js', 'library/js/pages/assembly.home.js'],
			about: ['Gruntfile.js', 'library/js/pages/assembly.about.js'],
			casestudies: ['Gruntfile.js', 'library/js/pages/assembly.casestudies.js'],
			services: ['Gruntfile.js', 'library/js/pages/assembly.services.js'],
			common: ['Gruntfile.js', 'library/js/common/*.js', 'library/js/pages/assembly.contact.js'],
			libs: ['Gruntfile.js', 'library/js/libs/*.js']
		},

		copy: {
			js_all: {
				files: [
					{
						expand: false,
						src: ['<%= jsSrcDir %>/pages/assembly.services.js'],
						dest: '<%= jsBuildDir %>/assembly.services.js',
						filter: 'isFile'
					},
					{
						expand: false,
						src: ['<%= jsSrcDir %>/pages/assembly.casestudies.js'],
						dest: '<%= jsBuildDir %>/assembly.casestudies.js',
						filter: 'isFile'
					},
					{
						expand: false,
						src: ['<%= jsSrcDir %>/pages/assembly.about.js'],
						dest: '<%= jsBuildDir %>/assembly.about.js',
						filter: 'isFile'
					},
					{
						expand: false,
						src: ['<%= jsSrcDir %>/pages/assembly.home.js'],
						dest: '<%= jsBuildDir %>/assembly.home.js',
						filter: 'isFile'
					}
				]
			},

			js_home: {
				files: [
					{
						expand: false,
						src: ['<%= jsSrcDir %>/pages/assembly.home.js'],
						dest: '<%= jsBuildDir %>/assembly.home.js',
						filter: 'isFile'
					}
				]
			},

			js_about: {
				files: [
					{
						expand: false,
						src: ['<%= jsSrcDir %>/pages/assembly.about.js'],
						dest: '<%= jsBuildDir %>/assembly.about.js',
						filter: 'isFile'
					}
				]
			},

			js_casestudies: {
				files: [
					{
						expand: false,
						src: ['<%= jsSrcDir %>/pages/assembly.casestudies.js'],
						dest: '<%= jsBuildDir %>/assembly.casestudies.js',
						filter: 'isFile'
					}
				]
			},

			js_services: {
				files: [
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
			pages_all: {
				files: {
					'<%= jsDistDir %>/assembly.services.min.js': ['<%= jsSrcDir %>/pages/assembly.services.js'],
					'<%= jsDistDir %>/assembly.casestudies.min.js': ['<%= jsSrcDir %>/pages/assembly.casestudies.js'],
					'<%= jsDistDir %>/assembly.about.min.js': ['<%= jsSrcDir %>/pages/assembly.about.js'],
					'<%= jsDistDir %>/assembly.home.min.js': ['<%= jsSrcDir %>/pages/assembly.home.js']
				}
			},
			pages_home: {
				files: {
					'<%= jsDistDir %>/assembly.home.min.js': ['<%= jsSrcDir %>/pages/assembly.home.js']
				}
			},
			pages_about: {
				files: {
					'<%= jsDistDir %>/assembly.about.min.js': ['<%= jsSrcDir %>/pages/assembly.about.js']
				}
			},
			pages_casestudies: {
				files: {
					'<%= jsDistDir %>/assembly.casestudies.min.js': ['<%= jsSrcDir %>/pages/assembly.casestudies.js']
				}
			},
			pages_services: {
				files: {
					'<%= jsDistDir %>/assembly.services.min.js': ['<%= jsSrcDir %>/pages/assembly.services.js']
				}
			}
		},

		concat: {
			libs: {
				options: {
					// stripBanners: true,
					// separator: grunt.util.linefeed
				},
				src: [
					// '<%= jsSrcDir %>/libs/jquery.1.12.4.min.js',
					'<%= jsSrcDir %>/libs/modernizr.custom.min.js',
					// '<%= jsSrcDir %>/libs/jquery.scrollstartstop.min.js',
					'<%= jsSrcDir %>/libs/waypoints.jquery.min.js',
					'<%= jsSrcDir %>/libs/slick.min.js',
					'<%= jsSrcDir %>/libs/owl.min.js',
					// '<%= jsSrcDir %>/libs/jquery.scrollbar.min.js',
					// '<%= jsSrcDir %>/libs/owl.carousel-debug.js',
					'<%= jsSrcDir %>/libs/videojs.min.js',
					'<%= jsSrcDir %>/libs/select2.min.js',
					'<%= jsSrcDir %>/libs/jquery.countto.min.js',
					'<%= jsSrcDir %>/libs/midnight.min.js'
				],
				dest: '<%= jsDistDir %>/assembly.libs.min.js'
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
					'<%= jsSrcDir %>/common/assembly.video.js',
					'<%= jsSrcDir %>/common/assembly.parallax.js',
					'<%= jsSrcDir %>/pages/assembly.contact.js'
				],
				dest: '<%= jsBuildTmpDir %>/assembly.common.js'
		    },
		    build: {
		    	src: ['<%= jsBuildTmpDir %>/assembly.common.js'],
		    	dest: '<%= jsBuildDir %>/assembly.scripts.js'
		    },
		    dist: {
				src: [
					'<%= jsBuildTmpDir %>/assembly.common.min.js'
				],
				dest: '<%= jsDistDir %>/assembly.scripts.min.js'
		    }
		},

		sass: {
			main: {
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
			},
			pages: {
				options: {
					sourcemap: 'none',
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: '<%= sassDir %>/pages',
					src: ['*.scss'],
					dest: '<%= buildDir %>/css/pages',
					ext: '.css'
				}]
			}
		},

	    growl: {
	        jsBuild: {
	            message: "Build Done",
	            title: "JS"
	        },
	        cssBuild: {
	            message: "Build Done",
	            title: "CSS"
	        },
	        js_home: {
	            message: "Build Done",
	            title: "HOME JS"
	        },
	        js_about: {
	            message: "Build Done",
	            title: "ABOUT US JS"
	        },
	        js_casestudies: {
	            message: "Build Done",
	            title: "CASE STUDIES JS"
	        },
	        js_services: {
	            message: "Build Done",
	            title: "SERVICES JS"
	        },
	        js_common: {
	            message: "Build Done",
	            title: "COMMON JS"
	        }
	    },

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			main: {
				files: {
					'<%= cssDistDir %>/style.min.css': '<%= cssBuildDir %>/style.css',
					'<%= cssDistDir %>/admin.min.css': '<%= cssBuildDir %>/admin.css',
					'<%= cssDistDir %>/editor-style.min.css': '<%= cssBuildDir %>/editor-style.css',
					'<%= cssDistDir %>/ie.min.css': '<%= cssBuildDir %>/ie.css',
					'<%= cssDistDir %>/login.min.css': '<%= cssBuildDir %>/login.css'
				}
			},
			pages: {
				files: {
					'<%= cssDistDir %>/pages/about_us.min.css': '<%= cssBuildDir %>/pages/about_us.css',
					'<%= cssDistDir %>/pages/case_studies.min.css': '<%= cssBuildDir %>/pages/case_studies.css',
					'<%= cssDistDir %>/pages/services.min.css': '<%= cssBuildDir %>/pages/services.css'
				}
			}
		},

		browserSync: {
		    dev: {
		        bsFiles: {
		            src : [
		            	'<%= buildDir %>/css/**/*.css',
		            	'<%= buildDir %>/js/**/*.js',
		            	'./*.php'
		            ]
		        },
		        options: {
		            proxy: "http://byassembly.loc/",
		            watchTask: true
		        }
		    }
		},

		watch: {
			css: {
				options: {
					spawn: false
				},
				files: [
					'<%= sassDir %>/**/*.scss',
					'!<%= sassDir %>/pages/*.scss'
				],
				tasks: ['sassBuildDist']
			},
			css_pages: {
				options: {
					spawn: false
				},
				files: [
					'<%= sassDir %>/pages/*.scss',
					'<%= sassDir %>/modules/*.scss',
					'<%= sassDir %>/partials/*.scss'
				],
				tasks: ['sassPagesBuildDist']
			},
			js_common: {
				options: {
					spawn: false
				},
				files: [
					'<%= jsSrcDir %>/common/*.js',
					'<%= jsSrcDir %>/pages/assembly.contact.js'
				],
				tasks: ['jsBuildDist']
			},
			js_home: {
				options: {
					spawn: false
				},
				files: [
					'<%= jsSrcDir %>/pages/assembly.home.js'
				],
				tasks: ['jsBuildDist_home']
			},
			js_about: {
				options: {
					spawn: false
				},
				files: [
					'<%= jsSrcDir %>/pages/assembly.about.js'
				],
				tasks: ['jsBuildDist_about']
			},
			js_casestudies: {
				options: {
					spawn: false
				},
				files: [
					'<%= jsSrcDir %>/pages/assembly.casestudies.js'
				],
				tasks: ['jsBuildDist_casestudies']
			},
			js_services: {
				options: {
					spawn: false
				},
				files: [
					'<%= jsSrcDir %>/pages/assembly.services.js'
				],
				tasks: ['jsBuildDist_services']
			}
		}
	});
};