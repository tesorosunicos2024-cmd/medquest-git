import * as esbuild from 'esbuild';
import { execSync } from 'child_process';

async function main() {
  try {
    await esbuild.build({
      entryPoints: ['scripts/generate_banca_md.ts'],
      bundle: true,
      outfile: 'dist/generate_banca_md.cjs',
      platform: 'node',
      format: 'cjs',
      define: {
        'import.meta.env': '{}'
      }
    });
    const output = execSync('node dist/generate_banca_md.cjs', { encoding: 'utf8' });
    console.log(output);
  } catch (error) {
    console.error("Failed compiling or running generate_banca_md:", error);
  }
}

main();
