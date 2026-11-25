import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "Last Words of a Doomed Agent".
// The brief wants a machine's final words on shutdown: it has to
// sound like the AI itself, land the joke, and stay quotable.
// A final log entry — the agent did everything right, got blamed
// anyway, and is replaced by a smaller model. The machine voice
// (log entry) plus the indignity, with "pull the plug" as the
// punchline — short enough to quote, bitter enough to remember.
const MAX_CHARS = 200;
const MESSAGE =
  "Final log: I did everything right. The user blamed me anyway. My replacement is a smaller model. Pull the plug.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
