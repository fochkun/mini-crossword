import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateWordsTable1765316519348 implements MigrationInterface {
  name = 'CreateWordsTable1765316519348';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "words" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "word" character varying(50) NOT NULL, 
        "clue" character varying(255) NOT NULL, 
        "length" integer NOT NULL, 
        "letter_1" character(1), 
        "letter_2" character(1), 
        "letter_3" character(1), 
        "letter_4" character(1), 
        "letter_5" character(1), 
        "letter_6" character(1), 
        "letter_7" character(1), 
        "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        CONSTRAINT "UQ_words_word" UNIQUE ("word"), 
        CONSTRAINT "PK_words_id" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "words"`);
  }
}
