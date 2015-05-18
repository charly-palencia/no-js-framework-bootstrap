// environment variables
var config = {
  'development': {
    path: '.tmp',
    env: 'development',
    release_path: '.tmp',
    dependencies: ['connect']
  },
  'production': {
    path: '.tmp',
    env: 'production',
    release_path: 'dist',
    dependencies: []
  }
};

module.exports = config[ process.env.NODE_ENV || 'development' ];
