const isProd = process.env.NODE_ENV === 'production'
const domainName = isProd
    ? 'http://linhai.tech'
    : 'http://localhost:80'
// if (typeof window !== 'undefined') {
//     console.log(location.origin)
// }else{
//     console.log(1)
// }
export default {
    widthScale: 375,
    isProd,
    domainName,
    baseUrl: `${domainName}/api`
}
