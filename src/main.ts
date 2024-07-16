import {TypeormDatabase} from '@subsquid/typeorm-store'
import {Burn} from './model'
import {processor} from './processor'
import * as friendTechShares from './abi/friendTechShares'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    for (let block of ctx.blocks) {
        for (let log of block.logs) {
            let decodedLog = friendTechShares.events.Trade.decode(log)
            console.log(decodedLog)
        }
        for (let tx of block.transactions) {
            console.log(tx)
       }
    }
})
