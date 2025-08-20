/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  UniswapV2Factory,
  UniswapV2Factory_PairCreated,
  UniswapV2Pair,
  UniswapV2Pair_Approval,
  UniswapV2Pair_Burn,
  UniswapV2Pair_Mint,
  UniswapV2Pair_Swap,
  UniswapV2Pair_Sync,
  UniswapV2Pair_Transfer,
} from "generated";

UniswapV2Factory.PairCreated.handler(
  async ({ event, context }) => {
    const entity: UniswapV2Factory_PairCreated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      token0: event.params.token0,
      token1: event.params.token1,
      pair: event.params.pair,
      _3: event.params._3,
    };

    context.UniswapV2Factory_PairCreated.set(entity);
  },
  { wildcard: true }
);

UniswapV2Pair.Approval.handler(
  async ({ event, context }) => {
    const entity: UniswapV2Pair_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };

    context.UniswapV2Pair_Approval.set(entity);
  },
  { wildcard: true }
);

UniswapV2Pair.Burn.handler(
  async ({ event, context }) => {
    const entity: UniswapV2Pair_Burn = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      sender: event.params.sender,
      amount0: event.params.amount0,
      amount1: event.params.amount1,
      to: event.params.to,
    };

    context.UniswapV2Pair_Burn.set(entity);
  },
  { wildcard: true }
);

UniswapV2Pair.Mint.handler(
  async ({ event, context }) => {
    const entity: UniswapV2Pair_Mint = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      sender: event.params.sender,
      amount0: event.params.amount0,
      amount1: event.params.amount1,
    };

    context.UniswapV2Pair_Mint.set(entity);
  },
  { wildcard: true }
);

UniswapV2Pair.Swap.handler(
  async ({ event, context }) => {
    const entity: UniswapV2Pair_Swap = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      sender: event.params.sender,
      amount0In: event.params.amount0In,
      amount1In: event.params.amount1In,
      amount0Out: event.params.amount0Out,
      amount1Out: event.params.amount1Out,
      to: event.params.to,
    };

    context.UniswapV2Pair_Swap.set(entity);
  },
  { wildcard: true }
);

UniswapV2Pair.Sync.handler(
  async ({ event, context }) => {
    const entity: UniswapV2Pair_Sync = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      reserve0: event.params.reserve0,
      reserve1: event.params.reserve1,
    };

    context.UniswapV2Pair_Sync.set(entity);
  },
  { wildcard: true }
);

UniswapV2Pair.Transfer.handler(
  async ({ event, context }) => {
    const entity: UniswapV2Pair_Transfer = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      from: event.params.from,
      to: event.params.to,
      value: event.params.value,
    };

    context.UniswapV2Pair_Transfer.set(entity);
  },
  { wildcard: true }
);
