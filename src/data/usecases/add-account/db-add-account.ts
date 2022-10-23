import { AccountModel, AddAccount, AddAccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const { password } = account
    await this.encrypter.encrypt(password)

    return await new Promise(resolve => resolve({
      id: 'string',
      name: 'string',
      email: 'string',
      password: 'string'
    }))
  }
}
