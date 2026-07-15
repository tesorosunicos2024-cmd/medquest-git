import * as esbuild from 'esbuild';
import { execSync } from 'child_process';

async function main() {
  try {
    await esbuild.build({
      entryPoints: ['scripts/count_real_questions.ts'],
      bundle: true,
      outfile: 'dist/count_real_questions.cjs',
      platform: 'node',
      format: 'cjs',
      define: {
        'import.meta.env': '{}'
      }
    });
    const output = execSync('node dist/count_real_questions.cjs', { encoding: 'utf8' });
    console.log(output);
  } catch (error) {
    console.error("Failed to compile or run:", error);
  }
}

main();
