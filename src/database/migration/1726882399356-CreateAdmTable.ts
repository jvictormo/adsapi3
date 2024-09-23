import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdmTable1726882399356 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"AdmUser",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name:'name',
                        type:'varchar'
                    },
                    {
                        name:'email',
                        type:'varchar',
                        isUnique: true
                    },
                    {
                        name:'cnpj',
                        type:'varchar',
                        isUnique: true
                    },
                    {
                        name:'companyName',
                        type:'varchar',
                        isUnique: true
                    },
                    {
                        name: "signUpDate",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('AdmUser')
    }

}
