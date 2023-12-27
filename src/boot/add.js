import {boot} from 'quasar/wrappers'

const add = (a,b)=> {
    return a+b
}

export default boot(({app})=>{
    app.config.globalProperties.$add = add
    
})

let a = 10

let b =20