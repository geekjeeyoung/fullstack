import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field } from "type-graphql";

@ObjectType() // for graphql schema
@Entity()
export class User {
  @Field() // for graphql schema
  @PrimaryKey()
  id!: number;

  @Field(() => String) // for graphql schema
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String) // for graphql schema
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field() // for graphql schema
  @Property({ type: "text", unique: true })
  username!: string;

  @Property({ type: "text" })
  password!: string;
}
