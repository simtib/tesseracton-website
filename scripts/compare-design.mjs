import { readFile } from 'node:fs/promises';

const before = JSON.parse(await readFile('.design-checks/before.json', 'utf8'));
const after = JSON.parse(await readFile('.design-checks/after.json', 'utf8'));
let differences = 0;
for (const key of Object.keys(before)) {
  const original = before[key];
  const migrated = after[key];
  const changes = {
    sameText: original.text === migrated.text,
    heightDelta: migrated.height - original.height,
    changedHeadings: original.headings.flatMap((heading, index) =>
      JSON.stringify(heading) === JSON.stringify(migrated.headings[index])
        ? [] : [{ before: heading, after: migrated.headings[index] }]),
  };
  if (!changes.sameText || changes.heightDelta || changes.changedHeadings.length) differences++;
  console.log(key, JSON.stringify(changes));
}
process.exitCode = differences ? 1 : 0;
