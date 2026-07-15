import * as esbuild from 'esbuild';
import { execSync } from 'child_process';

async function main() {
  try {
    await esbuild.build({
      entryPoints: ['scripts/complete_app_survey.ts'],
      bundle: true,
      outfile: 'dist/complete_app_survey.cjs',
      platform: 'node',
      format: 'cjs',
      define: {
        'import.meta.env': '{}'
      }
    });
    const output = execSync('node dist/complete_app_survey.cjs', { encoding: 'utf8' });
    console.log(output);
  } catch (error) {
    console.error("Failed compiling or running complete_app_survey:", error);
  }
}

main();
