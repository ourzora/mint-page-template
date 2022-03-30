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
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract YourContract is
    ERC721,
    IERC2981,
    Pausable,
    AccessControl,
    Ownable
{
    using Strings for uint256;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    uint256 public constant ARTIST_PROOF_COUNT = 17;     // +1 to save on gas cost of <= vs <
    uint256 public constant MAX_SUPPLY = 889;           // +1 to save on gas cost of <= vs <
    string public _baseURIextended = "http://localhost:3000/api/metadata/";
    bytes32 public _merkleRoot = 0x7f9947af1470e7df017d480516fb72e1b515240c75cf5afacfd79d475f309f35;
    address payable private _withdrawalWallet;
    address payable private _royaltyWallet;
    uint256 public _royaltyBasis = 750; // 7.5%
    // Sale / Presale
    bool public presaleActive = false;
    bool public saleActive = false;
    uint256 public constant ETH_PRICE = 0.069 ether;
    uint256 public constant PRESALE_ETH_PRICE = 0.066 ether;
    uint256 public constant MAX_MINT_COUNT = 11;         // +1 to save on gas cost of <= vs <
    uint256 public constant PRESALE_MAX_MINT_COUNT = 3;  // NOT +1 to save on gas

    constructor() ERC721("YourContract", "YourContract") {
        //_pause(); // start paused
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
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

    // Uses a uint256 base to manage allowlist claims
    // arr.length / PRESALE_MAX_MINT_COUNT = max allowlist length
    // So arr.length === 9, PRESALE_MAX_MINT_COUNT === 3 is equal to (9 / 3 * 256) giving a max allowlist length of 768
    uint256 private constant MAX_INT = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;
    uint256[9] arr = [MAX_INT, MAX_INT, MAX_INT, MAX_INT, MAX_INT, MAX_INT, MAX_INT, MAX_INT, MAX_INT];
    function claimTicket(uint256 count, uint256 index) internal {
        require(index < arr.length / PRESALE_MAX_MINT_COUNT * 256, "bad ticket");

        uint256 storageOffset = index / 256;
        uint256 offsetWithin256 = index % 256;
        uint256 localGroup1 = arr[storageOffset];
        uint256 localGroup2 = arr[storageOffset + PRESALE_MAX_MINT_COUNT];
        uint256 localGroup3 = arr[storageOffset + (PRESALE_MAX_MINT_COUNT * 2)];

        uint256 storedBit1 = (localGroup1 >> offsetWithin256) & uint256(1);
        uint256 storedBit2 = (localGroup2 >> offsetWithin256) & uint256(1);
        uint256 storedBit3 = (localGroup3 >> offsetWithin256) & uint256(1);

        uint256 remaining = storedBit1 + storedBit2 + storedBit3;

        require(count <= remaining, "Can't mint more than allocated");

        localGroup1 = localGroup1 & ~(uint256(1) << offsetWithin256);
        arr[storageOffset] = localGroup1;

        if (count + PRESALE_MAX_MINT_COUNT - remaining > 1) {
            localGroup2 = localGroup2 & ~(uint256(1) << offsetWithin256);
            arr[storageOffset + PRESALE_MAX_MINT_COUNT] = localGroup2;
        }

        if (count + PRESALE_MAX_MINT_COUNT - remaining > 2) {
            localGroup3 = localGroup3 & ~(uint256(1) << offsetWithin256);
            arr[storageOffset + (PRESALE_MAX_MINT_COUNT * 2)] = localGroup3;
        }
    }

    function setPresaleActive(bool val)
    external
    onlyRole(MANAGER_ROLE) 
    {
        presaleActive = val;
    }

    function setSaleActive(bool val)
    external
    onlyRole(MANAGER_ROLE) 
    {
        saleActive = val;
    }

    function setMerkleRoot(bytes32 merkleRoot_)
    external
    onlyRole(MANAGER_ROLE) 
    {
        _merkleRoot = merkleRoot_;
    }

    function presaleMint(uint256 count, uint256 index, bytes32[] calldata proof)
    external
    payable
    whenNotPaused
    returns (uint256)
    {
        require(presaleActive, "Presale has not begun");
        require((PRESALE_ETH_PRICE * count) == msg.value, "Incorrect ETH sent; check price!");
        require(_tokenIds.current() + count < MAX_SUPPLY, "SOLD OUT");

        claimTicket(count, index);

        bytes32 leaf = keccak256(abi.encode(index, msg.sender));
        require(MerkleProof.verify(proof, _merkleRoot, leaf), "Invalid proof");

        for (uint256 i=0; i<count; i++) {
            _tokenIds.increment();
            _mint(msg.sender, _tokenIds.current());
        }
        return _tokenIds.current();
    }

    function transferOwnership(address _newOwner)
    public
    override
    onlyOwner
    {
        address currentOwner = owner();
        revokeRole(MANAGER_ROLE, currentOwner);
        revokeRole(MANAGER_ROLE, currentOwner);
        _transferOwnership(_newOwner);
        grantRole(DEFAULT_ADMIN_ROLE, _newOwner);
        grantRole(MANAGER_ROLE, _newOwner);
    }

    function mint(uint256 count)
    external
    payable
    whenNotPaused
    returns (uint256)
    {
        require(saleActive, "Sale has not begun");
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

    function setRoyaltyWallet(address payable royaltyWallet_) external onlyRole(MANAGER_ROLE) {
        _royaltyWallet = (royaltyWallet_);
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
        return (payable(_royaltyWallet), uint((salePrice * _royaltyBasis)/10000));
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, IERC165, AccessControl) returns (bool) {
        return
            interfaceId == type(IERC2981).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    receive () external payable {}
    fallback () external payable {}
}
