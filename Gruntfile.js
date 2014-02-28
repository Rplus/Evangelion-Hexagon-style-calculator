module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        stylus: {
            compile: {
                files: {
                    './style/style.css': './style/style.styl'
                }
            }
        },

        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },
                files: {
                    "index.html": ['index.jade']
                }
            }
        },

        connect: {
            server: {
                options: {
                    // protocol: 'https'
                }
            }
        },

        autoprefixer: {
            // option: browsers: ['last 2 version', 'ie 8', 'ie 9'],
            single_file: {
                src: './style/style.css',
                dest: './style/style.css'
            }
        },

        cssmin: {
            minify: {
                files: {
                    './style/style.css': './style/style.css'
                }
            }
        },

        watch: {
            stylus: {
                files: ['./style/*.styl'],
                tasks: ['stylus', 'autoprefixer']
            },
            jade: {
                files: ['./index.jade'],
                tasks: ['jade']
            },
            html: {
                files: ['./index.html', './style/style.css'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('see', ['connect', 'watch']);
    grunt.registerTask('make', ['stylus', 'autoprefixer','cssmin']);
    grunt.registerTask('default', ['stylus', 'autoprefixer', 'cssmin']);
};