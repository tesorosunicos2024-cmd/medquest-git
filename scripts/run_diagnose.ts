import * as esbuild from 'esbuild';
import { execSync } from 'child_process';

async function main() {
  try {
    await esbuild.build({
      entryPoints: ['scripts/diagnose_usable_filter.ts'],
      bundle: true,
      outfile: 'dist/diagnose_usable_filter.cjs',
      platform: 'node',
      format: 'cjs',
      define: {
        'import.meta.env': '{}'
      }
    });
    const output = execSync('node dist/diagnose_usable_filter.cjs', { encoding: 'utf8' });
    console.log(output);
  } catch (error) {
    console.error("Failed compiling or running diagnose:", error);
  }
}

main();
