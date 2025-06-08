export default function Capatalize(str:string){
    let tmp = str.slice(0,1)
    const tmp2 = str.slice(1)
    tmp = tmp.toUpperCase()
    return tmp + tmp2
}

const str = "nehan"
console.log(Capatalize(str))