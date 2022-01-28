//https://eth-ropsten.alchemyapi.io/v2/8jdBOY4oj4dbw2YEd3ZauMfvwbDZQDRe

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/8jdBOY4oj4dbw2YEd3ZauMfvwbDZQDRe",
      accounts: [
        "c045b44793923a226558723874fe847fab09fba7d04891a88f9ffb439993ead9",
      ],
    },
  },
};
