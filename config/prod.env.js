'use strict'
module.exports = {
  NODE_ENV: '"production"',
  COSMIC_BUCKET: `"${process.env.COSMIC_BUCKET || '87de4da0-eb9c-11ea-ae81-453b8452a5ab'}"`,
  COSMIC_READ_KEY: `"${process.env.COSMIC_READ_KEY || '3xIYwRc8LN0AlJn0FnJrD5rStjg8OoIL7A402kXpyPVnId1zlc'}"`,
  COSMIC_WRITE_KEY: `"${process.env.COSMIC_WRITE_KEY || 'zvSzTKtIcDhfhJVgKieLvhSMkEQ9562E8sp1PHuTbCbKIZUIhR'}"`,
  BLOG_TITLE: `"${process.env.BLOG_TITLE || 'Vue Blog Cosmic JS'}"`,
}