-- Tabela User
CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "leaderEmail" VARCHAR NOT NULL,
    "email" VARCHAR UNIQUE NOT NULL,
    "name" VARCHAR NOT NULL,
    "cpf" VARCHAR NOT NULL,
    "companyName" VARCHAR NOT NULL,
    "signUpDate" TIMESTAMP DEFAULT now()
);

-- Tabela AdmUser
CREATE TABLE "AdmUser" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR UNIQUE NOT NULL,
    "cnpj" VARCHAR UNIQUE NOT NULL,
    "companyName" VARCHAR UNIQUE NOT NULL,
    "signUpDate" TIMESTAMP DEFAULT now()
);

-- Tabela Team
CREATE TABLE "Team" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR UNIQUE NOT NULL,
    "description" VARCHAR UNIQUE NOT NULL,
    "companyName" VARCHAR UNIQUE NOT NULL
);

-- Tabela Team_User com chaves estrangeiras
CREATE TABLE "Team_User" (
    "id" SERIAL PRIMARY KEY,
    "team_id" INT NOT NULL,
    "user_id" INT NOT NULL,
    CONSTRAINT fk_team FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE CASCADE,
    CONSTRAINT fk_user FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE
);

