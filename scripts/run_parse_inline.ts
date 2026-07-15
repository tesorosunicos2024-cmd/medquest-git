import * as esbuild from 'esbuild';
import { execSync } from 'child_process';

async function main() {
  try {
    await esbuild.build({
      entryPoints: ['scripts/parse_inline_safe.ts'],
      bundle: true,
      outfile: 'dist/parse_inline_safe.cjs',
      platform: 'node',
      format: 'cjs',
      define: {
        'import.meta.env': '{}'
      }
    });
    const output = execSync('node dist/parse_inline_safe.cjs', { encoding: 'utf8' });
    console.log(output);
  } catch (error) {
    console.error("Failed compiling or running parse_inline_safe:", error);
  }
}

main();
