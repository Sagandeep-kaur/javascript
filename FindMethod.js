
let users = [{id:1, name:'sagan'}, {id:2,name:'roni'}, {id:4, name:'gui'}]

let user = users.find(user=> user.id===2)

console.log(user)


let user1 = users.filter(userr=>userr.id>1)
console.log(user1)

for (u of user1){
    console.log(u)
}