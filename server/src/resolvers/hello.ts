import { Resolver, Query } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return "Jeeyoung is here!";
  }
}
