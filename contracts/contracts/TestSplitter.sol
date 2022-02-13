// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

contract TestSplitter is PaymentSplitter {
    constructor(address[] memory _payees, uint256[] memory _shares) PaymentSplitter(_payees, _shares) payable {}
}
