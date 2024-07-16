import {TypeormDatabase} from '@subsquid/typeorm-store'
import {Burn} from './model'
import {processor} from './processor'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    for (let block of ctx.blocks) {
        for (let log of block.logs) {
            console.log(log)
        }
        for (let tx of block.transactions) {
            console.log(tx)
       }
    }
})
