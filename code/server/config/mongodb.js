const isProd = process.env.NODE_ENV === 'production'
const dev = {
    username: 'beijidehuo',
    pwd: '123456',
    address: '127.0.0.1:27017',
    db: 'blog'
}

const prod = {
    username: 'beijidehuo',
    pwd: '123456',
    address: '127.0.0.1:27017',
    db: 'blog'
}
export default (isProd ? prod : dev)
