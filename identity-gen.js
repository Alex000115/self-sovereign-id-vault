const { Ed25519Provider } = require('key-did-provider-ed25519');
const { DID } = require('dids');
const { getResolver } = require('key-did-resolver');
const { toString } = require('uint8arrays/to-string');
const crypto = require('crypto');

/**
 * Professional SSI Identity Generator
 * Creates a unique DID based on a private seed.
 */
async function createIdentity() {
    console.log("--- Generating Self-Sovereign Identity ---");

    // In production, this seed should be stored securely in a hardware enclave
    const seed = crypto.randomBytes(32);
    const provider = new Ed25519Provider(seed);
    
    const did = new DID({ provider, resolver: getResolver() });

    // Authenticate the DID
    await did.authenticate();

    console.log(`[Success] Your DID: ${did.id}`);
    console.log(`[Status] Identity is now active and ready to sign VCs.`);
    
    return did;
}

createIdentity().catch(err => console.error("[Error]", err));

module.exports = createIdentity;
