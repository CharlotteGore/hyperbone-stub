module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell : {
			build : {
				command : 'component build --verbose',
				options : {
					stdout : true,
					stderr : true
				}
			},
			install : {
				command : 'component install --verbose'	,
				options : {
					stdout : true,
					stderr : true
				}
			},
			flatinate : {
				command : 'flatinator -n hyperbone-stub --app hyperbone-stub',
				options : {
					stdout : true,
					stderr : true
				}
			},
			clean : {
				command : 'rm -fr ./build ./components',
				options : {
					stdout : true,
					stderr : true
				}
			}
				
		},
		watch : {
			js : {
				files : ["./index.js", "./lib/*/index.js"],
				tasks : ['shell:build', 'shell:flatinate']
			}
		}
	});
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('install', 'shell:install');
	grunt.registerTask('build', ['shell:build', 'shell:flatinate']);
	grunt.registerTask('clean', 'shell:clean');
};

