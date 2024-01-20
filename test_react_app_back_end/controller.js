const users =[
    {
        id : 1,
        name :'janith',
},{
    id : '2',
    name : 'Nanayakkara',
}
]

const getAllUser = (cb) =>{
    cb(users);
}

const getUserId = (id , cb) =>{
    const user = users.find(user => user.id == id)
       cb(users);
    
}

exports.getAllUser = getAllUser;
exports.getUserId = getUserId;

