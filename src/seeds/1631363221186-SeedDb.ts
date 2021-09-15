import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1631363221186 implements MigrationInterface {
  name = 'SeedDb1631363221186';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );
    // password is 123
    await queryRunner.query(
      `INSERT INTO users (email, username, password) VALUES ('katala@mail.ru', 'katalajonni', '$2b$10$8gETjXwPXQdYPMr0/LyKrOZZINUGDURxXa4TTTqsaQCIm196w9FZC')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article desc', 'first article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article desc', 'second article body', 'coffee,dragons,nestjs', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
