import { cp, mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const distDir = join(process.cwd(), "dist");
const publishDir = await mkdtemp(join(tmpdir(), "kampung-echoes-gh-pages-"));
const repoUrl = "https://github.com/doux124/KampungEchoes.git";

const run = (command, args, cwd = publishDir) => {
  const result = spawnSync(command, args, { cwd, stdio: "inherit" });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

await cp(join(distDir, "index.html"), join(publishDir, "index.html"));
await cp(join(distDir, "404.html"), join(publishDir, "404.html"));
await cp(join(distDir, "favicon.svg"), join(publishDir, "favicon.svg"));
await cp(join(distDir, "favicon.ico"), join(publishDir, "favicon.ico"));
await cp(join(distDir, "assets"), join(publishDir, "assets"), { recursive: true });
await cp(join(distDir, "demo"), join(publishDir, "demo"), { recursive: true });
await writeFile(join(publishDir, ".nojekyll"), "");

run("git", ["init"]);
run("git", ["checkout", "-b", "gh-pages"]);
run("git", ["add", "."]);
run("git", [
  "-c",
  "user.name=Codex",
  "-c",
  "user.email=codex@example.com",
  "commit",
  "-m",
  "Publish clean GitHub Pages site",
]);
run("git", ["remote", "add", "origin", repoUrl]);
run("git", ["push", "--force", "origin", "gh-pages"]);
