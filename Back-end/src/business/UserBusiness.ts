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
      throw new InvalidParameterError("Missing input");
    }

    const newUserType = stringToUserType(userType)

    if (newUserType === UserType.BAND && !description) {
      throw new InvalidParameterError("Users of type BAND need a description");
    }
    if (newUserType === UserType.ADMIN && token) {
      const userData = this.tokenManager.retrieveDataFromToken(token)
      if (userData.type !== UserType.ADMIN) {
        throw new InvalidParameterError("Users of type ADMIN need to be created by another previous logged ADMIN user");
      }
    }
    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("Invalid email");
    }
    if (password.length < 6) {
      throw new InvalidParameterError("Invalid password");
    }

    let result = await this.userDatabase.getUserEmailorNick(email)
    if (result) {
      throw new InvalidParameterError("Email já cadastrado");
    }
    result = await this.userDatabase.getUserEmailorNick(nickname)
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
          isActive: false,
          type: newUserType
        },
        201
      )
    }
    return new Creation("User created")
  }

  public async login(
    user: string,
    password: string,
  ): Promise<UserAuth> {
    if (!user || !password) {
      throw new InvalidParameterError("Missing input");
    }

    const userFound = await this.userDatabase.getUserEmailorNick(user)

    if (!userFound) {
      throw new NotFoundError("User Not Found")
    }
    if (userFound.getType() === UserType.BAND && !userFound.getIsActive()) {
      throw new UnauthorizedError("A BAND user needs to be approves first")
    }

    const isPasswordValid = await this.hashManager.compareHash(password, userFound.getPassword())

    if (!isPasswordValid) {
      throw new InvalidParameterError("Invalid Password")
    }

    return new UserAuth(
      this.tokenManager.generateToken({
        id: userFound.getId(),
        isActive: userFound.getIsActive(),
        type: userFound.getType()
      }),
      {
        id: userFound.getId(),
        isActive: userFound.getIsActive(),
        type: userFound.getType()
      }, 202)
  }

  public async getAllBands(
    token: string,
  ): Promise<ContentList> {
    if (!token) {
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN) {
      throw new UnauthorizedError("Access denied")
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
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN) {
      throw new UnauthorizedError("Access denied")
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
    if (!token) {
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN) {
      throw new UnauthorizedError("Access denied")
    }

    const userFound = await this.userDatabase.getUserId(id)
    if (!userFound) {
      throw new NotFoundError("User Not Found")
    }
    if (userFound.getType() !== UserType.BAND) {
      throw new GenericError("User not a band")
    }
    if (userFound.getIsActive()) {
      throw new GenericError("User already approved")
    }

    await this.userDatabase.activateUser(id)

    return new GenericResult()
  }

  public async approveCustomer(
    token: string,
    id: string
  ): Promise<GenericResult> {
    if (!token) {
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN) {
      throw new UnauthorizedError("Access denied")
    }

    const userFound = await this.userDatabase.getUserId(id)
    if (!userFound) {
      throw new NotFoundError("User Not Found")
    }
    if (userFound.getType() !== UserType.CUSTOMER) {
      throw new GenericError("User not a customer")
    }
    if (userFound.getIsActive()) {
      throw new GenericError("User already approved")
    }

    await this.userDatabase.activateUser(id)

    return new GenericResult()
  }

  public async updateUser(
    token: string,
    name: string
  ): Promise<GenericResult> {
    if (!token || !name) {
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)

    const userFound = await this.userDatabase.getUserId(userData.id)
    if (!userFound) {
      throw new NotFoundError("User Not Found")
    }

    await this.userDatabase.update(userFound.getId(), name)

    return new GenericResult()
  }
}
