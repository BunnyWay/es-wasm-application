import * as BunnySDK from "https://esm.sh/@bunny.net/edgescript-sdk@0.11";

const wasmBinary = fetch("https://wasm-test.b-cdn.net/incrementer.wasm");
const { instance, module: _ } = await WebAssembly.instantiateStreaming(
  wasmBinary,
);

/**
 * Executes a WASM binary and returns the response value
 * @param {Request} request - The Fetch API Request object.
 * @return {Response} The HTTP response or string.
 */
BunnySDK.net.http.serve(
  (_request: Request) => {
    const increment = instance.exports.increment as (input: number) => number;
    return new Response("Value " + increment(41));
  },
);
