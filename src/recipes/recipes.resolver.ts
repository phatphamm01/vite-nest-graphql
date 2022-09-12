import { Args, Query, Resolver } from '@nestjs/graphql';

import { RecipesArgs } from './dto/recipes.args';

@Resolver((of) => String)
export class RecipesResolver {
  @Query((returns) => [String])
  recipes(@Args() recipesArgs: RecipesArgs): Promise<string> {
    return new Promise((res) => res(''));
  }
}
