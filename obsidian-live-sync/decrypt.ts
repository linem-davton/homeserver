// 1. Import the official 'decrypt' function from the npm package
import { decrypt } from "npm:octagonal-wheels@0.1.37/encryption/encryption";

// This async wrapper allows us to use 'await'
(async () => {
  // This block only runs when the file is executed directly as a script
  if (import.meta.main) {
    // The provided URI and passphrase
    const setupURI = Deno.env.get("SETUP_URI");
    const passphrase = Deno.env.get("PASSPHRASE");

    try {
      // 1. Extract the raw payload from the URI
      const encodedSettings = setupURI.split("?settings=")[1];

      // 2. Manually decode it ONCE to handle the outer layer of encoding
      const singlyDecodedSettings = decodeURIComponent(encodedSettings);

      // 3. Call the library's decrypt function. It will handle the second decode automatically.
      const decryptedJson = await decrypt(singlyDecodedSettings, passphrase);

      // 4. Parse and print the final result
      const settingsObject = JSON.parse(decryptedJson);
      console.log("✅ Decryption Successful! Here are the settings:");
      console.log(JSON.stringify(settingsObject, null, 2));
    } catch (error) {
      console.error(
        "❌ Decryption Failed. Check that your URI and passphrase are correct.",
        error.message,
      );
    }
  }
})();
