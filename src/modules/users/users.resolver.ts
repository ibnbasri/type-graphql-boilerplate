import { Query, Resolver } from "type-graphql";


@Resolver()
export class Resolvers {

  @Query(() => String)
  async hello () {
    return "Hello"
  }

  @Query(() => String)
  async sapa () {
    return "Salam Kenal"
  }

}