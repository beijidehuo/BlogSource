const isProd = process.env.NODE_ENV === 'production'
const dev = {
  env: 'development',
  port: '80',
  host: 'http://localhost/',
}

const prod = {
  env: 'development',
  port: '80',
  host: 'http://localhost/',
}
export default isProd ? prod : dev