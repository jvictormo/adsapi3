import { query } from "express";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTeamTable1727108565208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Team",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name:'companyName',
                        type:'varchar',
                        isUnique: true
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Team")
    }

}
