import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeBrandNameLength1695592436964 implements MigrationInterface {
  name = 'ChangeBrandNameLength1695592436964';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "brand" DROP CONSTRAINT "UQ_5f468ae5696f07da025138e38f7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "brand" ALTER COLUMN "name" TYPE varchar(200);`,
    );
    await queryRunner.query(
      `ALTER TABLE "brand" ADD CONSTRAINT "UQ_5f468ae5696f07da025138e38f7" UNIQUE ("name")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "brand" DROP CONSTRAINT "UQ_5f468ae5696f07da025138e38f7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "brand" ALTER COLUMN "name" TYPE varchar(255);`,
    );
    await queryRunner.query(
      `ALTER TABLE "brand" ADD CONSTRAINT "UQ_5f468ae5696f07da025138e38f7" UNIQUE ("name")`,
    );
  }
}
