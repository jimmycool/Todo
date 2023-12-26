export default function () {
    return useState('counter', () => Math.round(Math.random() * 1000))
}