import { BaseDatabase } from "./BaseDatabase";
import { User, stringToUserType, UserType } from "../models/User";

export class UserDatabase extends BaseDatabase {
  public static TABLE_NAME: string = "User";


  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.nickname,
        dbModel.email,
        dbModel.password,
        stringToUserType(dbModel.type),
        super.convertTinyIntToBoolean(dbModel.is_active),
        dbModel.description
      )
    )
  }

  public async createUser(user: User): Promise<void> {
    await this.setConnection()
      .insert({
        id: user.getId(),
        name: user.getName(),
        nickname: user.getNickname(),
        email: user.getEmail(),
        password: user.getPassword(),
        type: user.getType(),
        is_active: super.convertBooleanToTinyInt(user.getIsActive()),
        description: user.getDescription() || null
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserByEmailOrNick(user: string): Promise<User | undefined> {
    const result = await this.setConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email: user })
      .orWhere({ nickname: user });

    return this.toModel(result[0]);
  }

  public async getUserById(id: string): Promise<User | undefined> {
    const result = await this.setConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id })

    return this.toModel(result[0]);
  }

  public async getAllBands(): Promise<User[]> {
    const result = await this.setConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ type: UserType.BAND });

    return result.map((band: any) => {
      return this.toModel(band) as User
    })
  }

  public async getBandsToApprove(): Promise<User[]> {
    const result = await this.setConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ type: UserType.BAND })
      .andWhere({ is_active: super.convertBooleanToTinyInt(false) });

    return result.map((band: any) => {
      return this.toModel(band) as User
    })
  }

  public async activate(id:string): Promise<void> {
    await this.setConnection()
      .update({ is_active: super.convertBooleanToTinyInt(true) })
      .from(UserDatabase.TABLE_NAME)
      .where({ id }) 
  }

  public async activateAll(idList:string[]): Promise<void> {
    await this.setConnection()
      .update({ is_active: super.convertBooleanToTinyInt(true) })
      .from(UserDatabase.TABLE_NAME)
      .whereIn('id', idList) 
  }

  public async update(id: string, name: string): Promise<void> {
    await this.setConnection()
      .update({ name })
      .from(UserDatabase.TABLE_NAME)
      .where({ id });
  }
}
