const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: '17/01/2023',
    lastHash: '46e1d8eb4fe2b8e21cc0140a3508638db29b49db2c74f08ca1932c997e625487',
    hash: '49514652c0713b97b7177e5e5f1e21c221fb19e6388d9b19ea2e699d1953cbf7',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};

const STARTING_BALANCE = 1000;

const REWARD_INPUT = { address: '*authorized-reward*' };

const MINING_REWARD = 50;

module.exports = { GENESIS_DATA, MINE_RATE , STARTING_BALANCE, REWARD_INPUT, MINING_REWARD };