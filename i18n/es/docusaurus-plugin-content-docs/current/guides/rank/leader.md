---
sidebar_position: 2
title: Leader Token
---

# Leader Token

https://github.com/Pond-Foundation/Liquidity-Mining-Auction

There is a Readme file with an overview as well as a draft of the Solidity contract.

>The Liquidity Mining Auction implements a recurring Dutch auction system with integrated permissionless fee distribution. The module manages sequential 42-hour auctions where participants can propose tokens to be liquidity mined by making a bid using PNDC, resulting in winners having the ability to claim mining fees accumulated from mining activity. The token of winning bid is mined until next auction ends.

### How It Works
1. **Dutch Auction**: The price starts high and drops steadily over time. User pay in Ethereum $PNDC.
2. **Place Your Bid**: When a user is willing to pay the current price and places a bid, they win.
3. **Token Leader**: The network and token of the winners choosing become the Token Leader. The protocol buys this token and adds it to the spawn token reward wallet.
4. **Claim Rewards**: Winners can collect fees from the auction pool powered by mining.
5. **Repeat**: The first valid bidder wins, and a new auction starts immediately.

When the Token Leader tokens are the greatest in the reward wallet, the become the reward for spawning.

This system incentivices Market Makers to pay for their favorite tokens to be mined. The buying power and distribution of their tokens will be vast.

I very much look forward to seeing this in action.