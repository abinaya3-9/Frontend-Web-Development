// let name="madhu"
// let name='madhu'
let name=`madhu`
let course="maths"
console.log(name)
console.log(name.length)
console.log("welcome to 'webpage'")
console.log('hello "world"')
console.log( `Nmae :${name} Course: ${course}`)
console.log("Name"+name+"Course"+course)
let a="hand sand band"
let b="buttur"

console.log(a.replace("h","s"))
console.log(b.replaceAll("u","e"))
 console.log(a.repeat(5))
 console.log(a.split(","))
 console.log(a.split(" "))
//  padstart and padend
let c="abc abc"
console.log(c.padStart(15,"hello"))
console.log(c.padEnd(10,"world"))

console.log(c.isWellFormed())
console.log(c.toWellFormed())
 let d="a`"
 console.log(d.isWellFormed())
console.log(c.normalize()== d.normalize())
console.log("helloworld".slice(0,3))
console.log(a.substring(0,6))
console.log("   javascript  ".trim())
console.log("   javascript  ".trimStart())
console.log("   javascript  ".trimEnd())
console.log(c.endsWith("bc"))
console.log(c.startsWith("ab"))
console.log(c.includes("ab"))
console.log(c.charAt(2))
console.log(c.indexOf("a"))
console.log(c.lastIndexOf("abc"))
console.log(c.toUpperCase())
console.log(c[0])
console.log(c[2])
console.log(c[c.length-1])
let g=10
let n=2
console.log(Math.max(g,n))
console.log(Math.min(g,n))
console.log(Math.pow(g,n))


