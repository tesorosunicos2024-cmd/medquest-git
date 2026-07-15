import * as esbuild from 'esbuild';
import { execSync } from 'child_process';

async function main() {
  try {
    await esbuild.build({
      entryPoints: ['scripts/parse_and_verify_app.ts'],
      bundle: true,
      outfile: 'dist/parse_and_verify_app.cjs',
      platform: 'node',
      format: 'cjs',
      define: {
        'import.meta.env': '{}'
      }
    });
    const output = execSync('node dist/parse_and_verify_app.cjs', { encoding: 'utf8' });
    console.log(output);
  } catch (error) {
    console.error("Failed compiling or running parse_and_verify:", error);
  }
}

main();
