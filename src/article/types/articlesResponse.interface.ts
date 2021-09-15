import { ArticleEntity } from '@app/article/article.entity';

export interface ArticlesResponseInterface {
  article: Omit<ArticleEntity, 'updateTimesStamp'>;
}
