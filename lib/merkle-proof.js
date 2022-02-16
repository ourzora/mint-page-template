import { MerkleTree } from "merkletreejs";
import { utils } from "ethers";

const hashify = (x) => utils.keccak256(utils.toUtf8Bytes(x));

export const generateMerkleTree = (inputs) => {
  const leaves = inputs.map((x) => hashify(x));
  return new MerkleTree(leaves, utils.keccak256, { sort: true });
};

export const getProof = (tree, leaf) => tree.getProof(hashify(leaf));

export const verifyProof = (tree, proof, leaf, root) =>
  tree.verify(proof, hashify(leaf), root);
