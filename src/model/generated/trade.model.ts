import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, BooleanColumn as BooleanColumn_, BigIntColumn as BigIntColumn_, ManyToOne as ManyToOne_, Index as Index_} from "@subsquid/typeorm-store"
import {Transaction} from "./transaction.model"

@Entity_()
export class Trade {
    constructor(props?: Partial<Trade>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    trader!: string

    @StringColumn_({nullable: false})
    subject!: string

    @BooleanColumn_({nullable: false})
    isBuy!: boolean

    @BigIntColumn_({nullable: false})
    shareAmount!: bigint

    @BigIntColumn_({nullable: false})
    ethAmount!: bigint

    @BigIntColumn_({nullable: false})
    protocolEthAmount!: bigint

    @BigIntColumn_({nullable: false})
    subjectEthAmount!: bigint

    @BigIntColumn_({nullable: false})
    supply!: bigint

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    transaction!: Transaction | undefined | null
}
