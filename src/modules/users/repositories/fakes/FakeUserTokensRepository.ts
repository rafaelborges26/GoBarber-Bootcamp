import { uuid } from 'uuidv4'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository'

import UserToken from '../../infra/typeorm/entities/userToken' //obter formato dos dados

//deixar os metodos prontos para uso, sem precisar utilizar a lib do typeorm fora daqui

class FakeUserTokensRepository implements IUserTokensRepository { //repository do typeorm
   private userToken: UserToken[] = []

    public async generate(user_id: string): Promise<UserToken> {
        const userToken = new UserToken()


        Object.assign(userToken, {
            id: uuid(),
            token: uuid(),
            user_id,
            created_at: new Date(),
            updated_at: new Date()

        })

        this.userToken.push(userToken)

        return userToken
    }

    public async findByToken(token: string): Promise<UserToken | undefined> {
        const userToken = this.userToken.find(
            findToken => findToken.token === token)

            return userToken
    }

}

export default FakeUserTokensRepository
