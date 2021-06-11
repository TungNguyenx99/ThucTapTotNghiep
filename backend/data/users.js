import bcrypt from 'bcryptjs'

const users =[
    {

        name: 'TungNguyen',
        email: 'tungnguyenx99@gmail.com',
        password:bcrypt.hashSync('12345678',10),
        isAdmin:true
    },{

        name: 'TungNguyen',
        email: 'bachbeo2702@gmail.com',
        password:bcrypt.hashSync('12345678',10)
    }
]

export default users