/**
 * Verifiable Credential (VC) Signing Logic
 * This module allows a DID to sign claims about another identity.
 */
async function signCredential(issuerDid, subjectDid, claim) {
    const vcPayload = {
        sub: subjectDid,
        iss: issuerDid.id,
        nbf: Math.floor(Date.now() / 1000),
        vc: {
            '@context': ['https://www.w3.org/2018/credentials/v1'],
            type: ['VerifiableCredential', 'IdentityCredential'],
            credentialSubject: claim
        }
    };

    // Use JWS to sign the credential
    const jws = await issuerDid.createJWS(vcPayload);
    console.log("[VC Generated] Signed JWS Credential created.");
    return jws;
}

module.exports = { signCredential };
