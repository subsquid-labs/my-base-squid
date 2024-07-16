import {TypeormDatabase} from '@subsquid/typeorm-store'
import {Trade, Transaction} from './model'
import {processor} from './processor'
import * as friendTechShares from './abi/friendTechShares'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    const txEntities: Map<string, Transaction> = new Map()
    const tradeEntities: Trade[] = []

    for (let block of ctx.blocks) {
        for (let tx of block.transactions) {
            txEntities.set(tx.hash, new Transaction({
                id: tx.hash,
                block: block.header.height,
                to: tx.to
            }))
        }
        for (let log of block.logs) {
            let decodedLog = friendTechShares.events.Trade.decode(log)
            tradeEntities.push(new Trade({
                id: log.id,
                trader: decodedLog.trader,
                subject: decodedLog.subject,
                isBuy: decodedLog.isBuy,
                shareAmount: decodedLog.shareAmount,
                ethAmount: decodedLog.ethAmount,
                protocolEthAmount: decodedLog.protocolEthAmount,
                subjectEthAmount: decodedLog.subjectEthAmount,
                supply: decodedLog.supply,
                transaction: txEntities.get(log.getTransaction().hash)
            }))
        }
    }

    await ctx.store.insert([...txEntities.values()])
    await ctx.store.insert(tradeEntities)
})
