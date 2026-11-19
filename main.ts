// gta6-meme-x-01: the entry is a post on X, not this program.
//
// This program only hands the post's address to the grader. It reads
// POST.json from the repository root, checks that it is an object with
// a string url, and writes the same bytes to the output directory as
// POST.json. Nothing else is read, written, or judged here.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(join(repoDir, "POST.json"), "utf8");
const post: unknown = JSON.parse(raw);
if (typeof post !== "object" || post === null || typeof (post as { url?: unknown }).url !== "string") {
  throw new Error(`POST.json in ${repoDir} must be a JSON object with a string url field`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), raw);
