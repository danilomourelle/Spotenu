import { User, UserType, stringToUserType } from "../models/User";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { TokenManager } from "../services/TokenManager";
import { IdManager } from "../services/IdManager";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { NotFoundError } from "../errors/NotFoundError";
import { GenericError } from "../errors/GenericError";
import { UserAuth } from "../messages/UserAuth";
import { Creation } from "../messages/Creation";
import { ContentList } from "../messages/ContentList";
import { GenericResult } from "../messages/GenericResult";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashManager: HashManager,
    private tokenManager: TokenManager,
    private idManager: IdManager
  ) { }

  public async signIn(
    name: string,
    nickname: string,
    email: string,
    password: string,
    userType: string,
    description?: string,
    token?: string
  ): Promise<UserAuth | Creation> {
    if (!name || !nickname || !email || !password || !userType) {
      throw new InvalidParameterError("Preencha todos os campos");
    }

    const newUserType = stringToUserType(userType)

    if (newUserType === UserType.BAND && !description) {
      throw new InvalidParameterError("Usuários tipo BANDA devem preencher uma descrição");
    }
    if (newUserType === UserType.ADMIN && token) {
      const userData = this.tokenManager.retrieveDataFromToken(token)
      if (userData.type !== UserType.ADMIN) {
        throw new InvalidParameterError("Usuários do tipo ADMINISTRADOR precisam ser craidos a partir de outro ADMINISTRADOR previamente logado");
      }
    }
    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("Email inválido");
    }
    if (password.length < 6) {
      throw new InvalidParameterError("Senha Inválida, necessário pelo menos 6 dígitos");
    }

    let result = await this.userDatabase.getUserByEmailorNick(email)
    if (result) {
      throw new InvalidParameterError("Email já cadastrado");
    }
    result = await this.userDatabase.getUserByEmailorNick(nickname)
    if (result) {
      throw new InvalidParameterError("Nickname já cadastrado");
    }
    const id = this.idManager.generateId()
    const hashPassword = await this.hashManager.generateHash(password);

    await this.userDatabase.createUser(
      new User(
        id,
        name,
        nickname,
        email,
        hashPassword,
        newUserType,
        newUserType === UserType.ADMIN,
        description
      )
    );

    if (newUserType === UserType.CUSTOMER) {
      return new UserAuth(
        this.tokenManager.generateToken({
          id,
          isActive: false,
          type: newUserType
        }),
        {
          id,
          name,
          isActive: false,
          type: newUserType
        },
        201
      )
    }
    return new Creation("Usuário criado com sucesso")
  }

  public async login(
    user: string,
    password: string,
  ): Promise<UserAuth> {
    if (!user || !password) {
      throw new InvalidParameterError("Preencha todos os campos");
    }

    const userFound = await this.userDatabase.getUserByEmailorNick(user)

    if (!userFound) {
      throw new NotFoundError("Usuário não encontrado")
    }
    if (userFound.getType() === UserType.BAND && !userFound.getIsActive()) {
      throw new UnauthorizedError("Usuários cadastrados como BANDA precisam ser aprovados para prosseguir")
    }

    const isPasswordValid = await this.hashManager.compareHash(password, userFound.getPassword())

    if (!isPasswordValid) {
      throw new InvalidParameterError("Senha Inválida")
    }

    return new UserAuth(
      this.tokenManager.generateToken({
        id: userFound.getId(),
        isActive: userFound.getIsActive(),
        type: userFound.getType()
      }),
      {
        id: userFound.getId(),
        name: userFound.getName(),
        isActive: userFound.getIsActive(),
        type: userFound.getType()
      }, 202)
  }

  public async getAllBands(
    token: string,
  ): Promise<ContentList> {
    if (!token) {
      throw new InvalidParameterError("Preencha todos os campos");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN) {
      throw new UnauthorizedError("Acesso Negado")
    }

    const bandList = await this.userDatabase.getAllBands()

    return new ContentList(
      bandList.map(band => ({
        name: band.getName(),
        email: band.getEmail(),
        nickname: band.getNickname(),
        isActive: band.getIsActive()
      })))
  }

  public async getBandsToApprove(
    token: string,
  ): Promise<ContentList> {
    if (!token) {
      throw new InvalidParameterError("Preencha todos os campos");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN) {
      throw new UnauthorizedError("Acesso Negado")
    }

    const bandList = await this.userDatabase.getBandsToApprove()

    return new ContentList(
      bandList.map(band => ({
        id: band.getId(),
        name: band.getName(),
      })))
  }

  public async approveBand(
    token: string,
    id: string
  ): Promise<GenericResult> {
    if (!token || !id) {
      throw new InvalidParameterError("Preencha todos os campos");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN) {
      throw new UnauthorizedError("Acesso Negado")
    }

    const userFound = await this.userDatabase.getUserById(id)
    if (!userFound) {
      throw new NotFoundError("Usuário não encontrado")
    }
    if (userFound.getType() !== UserType.BAND) {
      throw new GenericError("Usuário não foi cadastrado como BANDA")
    }
    if (userFound.getIsActive()) {
      throw new GenericError("Este usuário já se encontra aprovado")
    }

    await this.userDatabase.activate(id)

    return new GenericResult()
  }

  public async approveAllBands(
    token: string,
    idList: string[],
  ): Promise<GenericResult> {
    if (!token || (idList.length === 0)) {
      throw new InvalidParameterError("Preencha todos os campos");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN) {
      throw new UnauthorizedError("Acesso Negado")
    }

    await this.userDatabase.activateAll(idList)

    return new GenericResult()
  }

  /*  public async approveCustomer(
     token: string,
     id: string[]
   ): Promise<GenericResult> {
     if (!token) {
       throw new InvalidParameterError("Missing input");
     }
 
     const userData = this.tokenManager.retrieveDataFromToken(token)
     if (userData.type !== UserType.ADMIN) {
       throw new UnauthorizedError("Access denied")
     }
 
     const userFound = await this.userDatabase.getUserById(id[0])
     if (!userFound) {
       throw new NotFoundError("User Not Found")
     }
     if (userFound.getType() !== UserType.CUSTOMER) {
       throw new GenericError("User not a customer")
     }
     if (userFound.getIsActive()) {
       throw new GenericError("User already approved")
     }
 
     await this.userDatabase.activate(id)
 
     return new GenericResult()
   } */

  public async updateUser(
    token: string,
    name: string
  ): Promise<GenericResult> {
    if (!token || !name) {
      throw new InvalidParameterError("Preencha todos os campos");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)

    const userFound = await this.userDatabase.getUserById(userData.id)
    if (!userFound) {
      throw new NotFoundError("Usuário não encontrado")
    }

    await this.userDatabase.update(userFound.getId(), name)

    return new GenericResult()
  }
}
