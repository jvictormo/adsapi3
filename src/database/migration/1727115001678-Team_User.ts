import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class TeamUser1727115001678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Team_User",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'team_id',
                        type: 'int'
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                    }
                ]
            })
        )
        //criação das chaves estrangeiras
        await queryRunner.createForeignKeys('Team_User',[
            new TableForeignKey({
                columnNames: ['team_id'], //nome da coluna que possui o valor
                referencedColumnNames: ['id'], //nome da coluna a qual faz referência
                referencedTableName: 'Team', //nomea da tabela que referencia
                onDelete: 'CASCADE' //deleta os registros atrelados a ele
            }),
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'User',
                onDelete: 'CASCADE'
            })
            ]
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('Team_User');
        //verifica se as chaves existem
        const fk1 = table.foreignKeys.find(fk => fk.columnNames.indexOf('team_id') !== -1);
        const fk2 = table.foreignKeys.find(fk => fk.columnNames.indexOf('user_id') !== -1);

        let fks = [fk1, fk2]
        //deleta as chaves
        for (let fkey = 0; fkey < fks.length; fkey++){
            try{
                await queryRunner.dropForeignKey('Team_User', fks[fkey])
            } catch{}
        }
        //deleta a tabela
        await queryRunner.dropTable('Team_User')
    }

}
