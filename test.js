console.log("Running tests...");

// Test 1: basic math
const result = 2 + 2;
if (result === 4) {
  console.log("Test 1 passed: basic math");
} else {
  throw new Error("Test 1 failed");
}

// Test 2: verify server module loads correctly
try {
  require("./server");
  console.log("Test 2 passed: server loaded");
} catch (e) {
  throw new Error("Test 2 failed: " + e.message);
}
