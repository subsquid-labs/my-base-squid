import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, StringColumn as StringColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Trade} from "./trade.model"

@Entity_()
export class Transaction {
    constructor(props?: Partial<Transaction>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    block!: number

    @StringColumn_({nullable: true})
    to!: string | undefined | null

    @OneToMany_(() => Trade, e => e.transaction)
    trades!: Trade[]
}
