# Self-Sovereign Identity (SSI) Vault

By May 2026, the shift toward **Self-Sovereign Identity** has become the gold standard for Web3 privacy. This repository implements a professional-grade SSI Vault, allowing users to generate, store, and share digital identity credentials without relying on central authorities or "Login with Google" buttons.

## Features
- **DID Management:** Create and manage W3C-compliant Decentralized Identifiers.
- **Selective Disclosure:** Share only necessary data (e.g., "Over 18" status) without revealing the actual birth date using ZK-proofs.
- **Wallet-to-Wallet Permissions:** Securely share encrypted files and credentials using the LIT protocol.
- **Cross-Platform:** Designed to integrate with Farcaster FIDs and ENS domains for unified Web3 social identity.

## Strategic Goal
To eliminate data breaches by moving from "stored data" to "verifiable claims." This vault acts as the user's private digital notary.

## Quick Start
1. `npm install`
2. Generate your local identity: `node identity-gen.js`
3. Issue your first verifiable credential: `node issue-vc.js`

## Technologies
- DID:Peer & DID:Key
- Verifiable Credentials (VC) Data Model
- Jose (JSON Object Signing and Encryption)
