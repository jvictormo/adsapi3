import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdmTable1726660656466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
            new Table ({
                name: "AdmUser",
                columns: [
                    {
                        name: "email",
                        type: "varchar",
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: "companyName",
                        type: "varchar"
                    },
                    {
                        name: "singUpDate",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("AdmUser")
    }

}
