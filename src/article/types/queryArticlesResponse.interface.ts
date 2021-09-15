import { ArticleType } from '@app/article/types/article.type';

export interface QueryArticlesResponseInterface {
  articles: ArticleType[];
  articlesCount: number;
}
