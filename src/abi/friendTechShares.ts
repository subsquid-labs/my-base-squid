import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    Trade: event("0x2c76e7a47fd53e2854856ac3f0a5f3ee40d15cfaa82266357ea9779c486ab9c3", "Trade(address,address,bool,uint256,uint256,uint256,uint256,uint256)", {"trader": p.address, "subject": p.address, "isBuy": p.bool, "shareAmount": p.uint256, "ethAmount": p.uint256, "protocolEthAmount": p.uint256, "subjectEthAmount": p.uint256, "supply": p.uint256}),
}

export const functions = {
    buyShares: fun("0x6945b123", "buyShares(address,uint256)", {"sharesSubject": p.address, "amount": p.uint256}, ),
    getBuyPrice: viewFun("0x4635256e", "getBuyPrice(address,uint256)", {"sharesSubject": p.address, "amount": p.uint256}, p.uint256),
    getBuyPriceAfterFee: viewFun("0x0f026f6d", "getBuyPriceAfterFee(address,uint256)", {"sharesSubject": p.address, "amount": p.uint256}, p.uint256),
    getPrice: viewFun("0x5cf4ee91", "getPrice(uint256,uint256)", {"supply": p.uint256, "amount": p.uint256}, p.uint256),
    getSellPrice: viewFun("0x9ae71781", "getSellPrice(address,uint256)", {"sharesSubject": p.address, "amount": p.uint256}, p.uint256),
    getSellPriceAfterFee: viewFun("0x2267a89c", "getSellPriceAfterFee(address,uint256)", {"sharesSubject": p.address, "amount": p.uint256}, p.uint256),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    protocolFeeDestination: viewFun("0x4ce7957c", "protocolFeeDestination()", {}, p.address),
    protocolFeePercent: viewFun("0xd6e6eb9f", "protocolFeePercent()", {}, p.uint256),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    sellShares: fun("0xb51d0534", "sellShares(address,uint256)", {"sharesSubject": p.address, "amount": p.uint256}, ),
    setFeeDestination: fun("0xfbe53234", "setFeeDestination(address)", {"_feeDestination": p.address}, ),
    setProtocolFeePercent: fun("0xa4983421", "setProtocolFeePercent(uint256)", {"_feePercent": p.uint256}, ),
    setSubjectFeePercent: fun("0x5a8a764e", "setSubjectFeePercent(uint256)", {"_feePercent": p.uint256}, ),
    sharesBalance: viewFun("0x020235ff", "sharesBalance(address,address)", {"_0": p.address, "_1": p.address}, p.uint256),
    sharesSupply: viewFun("0xf9931be0", "sharesSupply(address)", {"_0": p.address}, p.uint256),
    subjectFeePercent: viewFun("0x24dc441d", "subjectFeePercent()", {}, p.uint256),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
}

export class Contract extends ContractBase {

    getBuyPrice(sharesSubject: GetBuyPriceParams["sharesSubject"], amount: GetBuyPriceParams["amount"]) {
        return this.eth_call(functions.getBuyPrice, {sharesSubject, amount})
    }

    getBuyPriceAfterFee(sharesSubject: GetBuyPriceAfterFeeParams["sharesSubject"], amount: GetBuyPriceAfterFeeParams["amount"]) {
        return this.eth_call(functions.getBuyPriceAfterFee, {sharesSubject, amount})
    }

    getPrice(supply: GetPriceParams["supply"], amount: GetPriceParams["amount"]) {
        return this.eth_call(functions.getPrice, {supply, amount})
    }

    getSellPrice(sharesSubject: GetSellPriceParams["sharesSubject"], amount: GetSellPriceParams["amount"]) {
        return this.eth_call(functions.getSellPrice, {sharesSubject, amount})
    }

    getSellPriceAfterFee(sharesSubject: GetSellPriceAfterFeeParams["sharesSubject"], amount: GetSellPriceAfterFeeParams["amount"]) {
        return this.eth_call(functions.getSellPriceAfterFee, {sharesSubject, amount})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    protocolFeeDestination() {
        return this.eth_call(functions.protocolFeeDestination, {})
    }

    protocolFeePercent() {
        return this.eth_call(functions.protocolFeePercent, {})
    }

    sharesBalance(_0: SharesBalanceParams["_0"], _1: SharesBalanceParams["_1"]) {
        return this.eth_call(functions.sharesBalance, {_0, _1})
    }

    sharesSupply(_0: SharesSupplyParams["_0"]) {
        return this.eth_call(functions.sharesSupply, {_0})
    }

    subjectFeePercent() {
        return this.eth_call(functions.subjectFeePercent, {})
    }
}

/// Event types
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type TradeEventArgs = EParams<typeof events.Trade>

/// Function types
export type BuySharesParams = FunctionArguments<typeof functions.buyShares>
export type BuySharesReturn = FunctionReturn<typeof functions.buyShares>

export type GetBuyPriceParams = FunctionArguments<typeof functions.getBuyPrice>
export type GetBuyPriceReturn = FunctionReturn<typeof functions.getBuyPrice>

export type GetBuyPriceAfterFeeParams = FunctionArguments<typeof functions.getBuyPriceAfterFee>
export type GetBuyPriceAfterFeeReturn = FunctionReturn<typeof functions.getBuyPriceAfterFee>

export type GetPriceParams = FunctionArguments<typeof functions.getPrice>
export type GetPriceReturn = FunctionReturn<typeof functions.getPrice>

export type GetSellPriceParams = FunctionArguments<typeof functions.getSellPrice>
export type GetSellPriceReturn = FunctionReturn<typeof functions.getSellPrice>

export type GetSellPriceAfterFeeParams = FunctionArguments<typeof functions.getSellPriceAfterFee>
export type GetSellPriceAfterFeeReturn = FunctionReturn<typeof functions.getSellPriceAfterFee>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type ProtocolFeeDestinationParams = FunctionArguments<typeof functions.protocolFeeDestination>
export type ProtocolFeeDestinationReturn = FunctionReturn<typeof functions.protocolFeeDestination>

export type ProtocolFeePercentParams = FunctionArguments<typeof functions.protocolFeePercent>
export type ProtocolFeePercentReturn = FunctionReturn<typeof functions.protocolFeePercent>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type SellSharesParams = FunctionArguments<typeof functions.sellShares>
export type SellSharesReturn = FunctionReturn<typeof functions.sellShares>

export type SetFeeDestinationParams = FunctionArguments<typeof functions.setFeeDestination>
export type SetFeeDestinationReturn = FunctionReturn<typeof functions.setFeeDestination>

export type SetProtocolFeePercentParams = FunctionArguments<typeof functions.setProtocolFeePercent>
export type SetProtocolFeePercentReturn = FunctionReturn<typeof functions.setProtocolFeePercent>

export type SetSubjectFeePercentParams = FunctionArguments<typeof functions.setSubjectFeePercent>
export type SetSubjectFeePercentReturn = FunctionReturn<typeof functions.setSubjectFeePercent>

export type SharesBalanceParams = FunctionArguments<typeof functions.sharesBalance>
export type SharesBalanceReturn = FunctionReturn<typeof functions.sharesBalance>

export type SharesSupplyParams = FunctionArguments<typeof functions.sharesSupply>
export type SharesSupplyReturn = FunctionReturn<typeof functions.sharesSupply>

export type SubjectFeePercentParams = FunctionArguments<typeof functions.subjectFeePercent>
export type SubjectFeePercentReturn = FunctionReturn<typeof functions.subjectFeePercent>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

