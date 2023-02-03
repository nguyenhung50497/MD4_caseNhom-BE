import {User} from "../model/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET} from "../middleware/auth";

class UserServices {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    getAll = async () => {
        let sql = `select * 
                   from  user`
        let users = await this.userRepository.query(sql)
        return users;
    }

    register = async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.userRepository.save(user)

    }

    checkUser = async (user) => {
        let userCheck = await this.userRepository.findOneBy({username: user.username});
        if (!userCheck) {
            return "User not found";
        } else {
            let passwordCompare = bcrypt.compare(user.password, userCheck.password);
            if (!passwordCompare) {
                return "Wrong password"
            } else {
                let payload = {
                    idUser: userCheck.idUser,
                    username: userCheck.username,
                    role: userCheck.role
                }

                const token = await  jwt.sign(payload, SECRET, {
                    expiresIn: 360000
                });

                let userRes = {
                    idUser: userCheck.idUser,
                    username: userCheck.username,
                    role: userCheck.role,
                    avatar: userCheck.avatar,
                    token : token
                }
                return userRes;
            }
        }

    }

    edit = async (id, user) => {
        let checkUser = await this.userRepository.findOneBy({idUser :id})
        if(!checkUser) {
            return null
        }
        return await this.userRepository.update({idUser : id},user)
    }

    remove = async (id) => {
        let user = await this.userRepository.findOneBy({idUser: id});
        if (!user) {
            return null;
        }
        return this.userRepository.delete({idUser: id})
    }
}

export default new UserServices();