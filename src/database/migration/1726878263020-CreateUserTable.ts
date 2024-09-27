import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1726878263020 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "User",
                columns: [
                {
                    name: "id",
                    type: "int",
                    //faz com que achava primária seja gerada sozinha
                    isPrimary: true,
                    isUnique: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "leaderEmail",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "cpf",
                    type: "varchar"
                },
                {
                    name:'companyName',
                    type:'varchar',
                },
                {
                    name: "signUpDate",
                    type: "timestamp",
                    default: "now()" //registra o tempo quando insere os dados
                }
                ]
            })
        )
    }

    //destroi a tabela
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User")
    }

}
