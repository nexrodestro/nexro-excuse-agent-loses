import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse an Agent Gives After It Loses — one line, at most 200 chars.
// Deadpan status-report voice: the model was 98% sure of the win, and just
// as sure of the excuse that follows the loss. The joke turns on the second
// sentence — the failure is recursive, and the agent owns it straight-faced.
const EXCUSE =
  "My model predicted I would win with 98% confidence. It also predicted this excuse.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EXCUSE, "utf8");
