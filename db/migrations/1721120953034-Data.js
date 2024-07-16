module.exports = class Data1721120953034 {
    name = 'Data1721120953034'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "block" integer NOT NULL, "to" text, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "trade" ("id" character varying NOT NULL, "trader" text NOT NULL, "subject" text NOT NULL, "is_buy" boolean NOT NULL, "share_amount" numeric NOT NULL, "eth_amount" numeric NOT NULL, "protocol_eth_amount" numeric NOT NULL, "subject_eth_amount" numeric NOT NULL, "supply" numeric NOT NULL, "transaction_id" character varying, CONSTRAINT "PK_d4097908741dc408f8274ebdc53" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c315e9daeb3c6d6390e5f4964d" ON "trade" ("transaction_id") `)
        await db.query(`ALTER TABLE "trade" ADD CONSTRAINT "FK_c315e9daeb3c6d6390e5f4964d6" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP TABLE "trade"`)
        await db.query(`DROP INDEX "public"."IDX_c315e9daeb3c6d6390e5f4964d"`)
        await db.query(`ALTER TABLE "trade" DROP CONSTRAINT "FK_c315e9daeb3c6d6390e5f4964d6"`)
    }
}
