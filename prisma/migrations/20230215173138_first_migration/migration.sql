-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "birthDate" VARCHAR(10) NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
