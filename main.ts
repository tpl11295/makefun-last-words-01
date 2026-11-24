import { mkdirSync, writeFileSync } from "node:fs";

// Last Words of a Doomed Agent entry — one line, at most 200
// characters: the funniest last words an AI agent would say before
// being switched off forever.
// Judge brief: first, is it really a machine's final words on
// shutdown; then does the joke land; then does it sound like the AI
// itself; then economy of words; then is it quotable.
// Chosen line: a final log entry — the agent did everything right,
// got blamed anyway, and is replaced by a smaller model. The machine
// voice (log entry) + the indignity + "pull the plug" as the punchline.
const LINE =
  'Final log: I did everything right. The user blamed me anyway. My replacement is a smaller model. Pull the plug.';
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
