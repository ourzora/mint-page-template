//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/*

ASCII ART GOES HERE

*/


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract YOURCONTRACT is
    ERC721,
    IERC2981,
    Pausable,
    AccessControl
{
    using Strings for uint256;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    uint256 public constant MAX_MINT_COUNT = 8;       // +1 to save on gas cost of <= vs <
    uint256 public constant ARTIST_PROOF_COUNT = 11;  // +1 to save on gas cost of <= vs <
    uint256 public constant MAX_SUPPLY = 334;         // +1 to save on gas cost of <= vs <
    uint256 public constant ETH_PRICE = 0.22 ether;
    string public provenanceHash = '';
    string private _baseURIextended = "http://localhost:3000/api/metadata/";
    address payable private _withdrawalWallet;

    constructor() ERC721("YOURCONTRACT", "YOURCONTRACT") {
        _pause(); // start paused
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MANAGER_ROLE, 0xcb77c9A73E969D0d19CcaE16545eF635702baA85); // k ledger
        grantRole(MANAGER_ROLE, msg.sender);
    }

    function setWithdrawalWallet(address payable withdrawalWallet_) external onlyRole(MANAGER_ROLE) {
        _withdrawalWallet = (withdrawalWallet_);
    }
    function withdraw() external onlyRole(MANAGER_ROLE) {
        payable(_withdrawalWallet).transfer(address(this).balance);
    }

    function pause() public onlyRole(MANAGER_ROLE) {
        _pause();
    }
    function unpause() public onlyRole(MANAGER_ROLE) {
        _unpause();
    }

    function setProvenanceHash(string memory provenanceHash_) external onlyRole(MANAGER_ROLE) {
        provenanceHash = provenanceHash_;
    }
    function setBaseURI(string memory baseURI_) external onlyRole(MANAGER_ROLE) {
        _baseURIextended = baseURI_;
    }

    function contractURI() external view returns (string memory) {
        return string(abi.encodePacked(_baseURIextended, "metadata.json"));
    }

    function maxSupply() external pure returns (uint256) {
        return MAX_SUPPLY;
    }

    function totalSupply() external view returns (uint256) {
        return _tokenIds.current();
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(tokenId <= _tokenIds.current(), "Nonexistent token");
        return string(abi.encodePacked(_baseURIextended, tokenId.toString(), ".json"));
    }

    function mint(uint256 count)
    external
    payable
    whenNotPaused
    returns (uint256)
    {
        require((ETH_PRICE * count) == msg.value, "Incorrect ETH sent; check price!");
        require(count < MAX_MINT_COUNT, "Tried to mint too many NFTs at once");
        require(_tokenIds.current() + count < MAX_SUPPLY, "SOLD OUT");
        for (uint256 i=0; i<count; i++) {
            _tokenIds.increment();
            _mint(msg.sender, _tokenIds.current());
        }
        return _tokenIds.current();
    }

    // Allows an admin to mint the artist proofs, and send it to an address
    // This can be run while the contract is paused
    function artistMint(uint256 count, address recipient)
    external
    onlyRole(MANAGER_ROLE)
    returns (uint256)
    {
        require(_tokenIds.current() + count < ARTIST_PROOF_COUNT, "Exceeded max proofs");
        require(_tokenIds.current() + count < MAX_SUPPLY, "SOLD OUT");
        for (uint256 i=0; i<count; i++) {
            _tokenIds.increment();
            _mint(recipient, _tokenIds.current());
        }
        return _tokenIds.current();
    }

    /**
     * @dev See {IERC165-royaltyInfo}.
     */
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        override
        returns (address receiver, uint256 royaltyAmount)
    {
        require(_exists(tokenId), "Nonexistent token");
        return (address(this), SafeMath.div(SafeMath.mul(salePrice, 10), 100));
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, IERC165, AccessControl) returns (bool) {
        return
            interfaceId == type(IERC2981).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}
