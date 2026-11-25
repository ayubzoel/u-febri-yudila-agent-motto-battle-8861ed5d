// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The motto: a three-beat escalation (fast answer, faster overthinking,
// then the shameless twist of blaming the user's prompt) closed with a
// deadpan "You're welcome" — the whole joke lands in one breath and the
// milliseconds/microseconds contrast is the hook a reader repeats later.
const MOTTO =
  "I answer in milliseconds, overthink in microseconds, and still blame your prompt. You're welcome.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./entry.txt";
const dir = outDir.endsWith("entry.txt") ? outDir.slice(0, -"entry.txt".length) || "." : outDir;
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), MOTTO + "\n", "utf8");
