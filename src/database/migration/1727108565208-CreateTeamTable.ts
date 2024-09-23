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
                        name: 'leader_id',
                        type: 'int'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true
                    }
                ]
            })
        )

        await queryRunner.createForeignKey("Team",
            new TableForeignKey({
                columnNames: ["leader_id"],
                referencedColumnNames: ['id'],
                referencedTableName: 'User',
                onDelete: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("Team");

        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("leader_id") !== -1);
        
        await queryRunner.dropForeignKey("Team", foreignKey);

        await queryRunner.dropTable("Team")
    }

}
