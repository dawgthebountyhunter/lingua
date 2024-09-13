const fs = require('fs');

// Read the file
let filePath = 'src/data/vocabulary.ts';
console.log(`Reading file from: ${filePath}`);
let data = fs.readFileSync(filePath, 'utf8');

console.log('File content (first 100 characters):', data.substring(0, 100));

// Parse the file content to get the array
let match = data.match(/const vocabularyData: VocabularyItem\[] = ([\s\S]*?);/);
if (!match) {
    console.error('Could not find vocabularyData in the file');
    process.exit(1);
}

let vocabularyData = eval(match[1]);

console.log(`Found ${vocabularyData.length} vocabulary items`);

// Check and add the "foundational" tag to the first 200 entries
let changedCount = 0;
let alreadyTaggedCount = 0;
for (let i = 0; i < 200 && i < vocabularyData.length; i++) {
    if (!vocabularyData[i].tags) {
        vocabularyData[i].tags = ['foundational'];
        changedCount++;
    } else if (!vocabularyData[i].tags.includes('foundational')) {
        vocabularyData[i].tags.push('foundational');
        changedCount++;
    } else {
        alreadyTaggedCount++;
    }
}

console.log(`Modified ${changedCount} entries`);
console.log(`${alreadyTaggedCount} entries already had the 'foundational' tag`);

if (changedCount > 0) {
    // Convert the modified array back to a string
    let newData = `const vocabularyData: VocabularyItem[] = ${JSON.stringify(vocabularyData, null, 2)};`;

    // Write the modified content back to the file
    fs.writeFileSync(filePath, data.replace(/const vocabularyData: VocabularyItem\[] = [\s\S]*?;/, newData));
    console.log('File updated with changes.');
} else {
    console.log('No changes were necessary. File remains the same.');
}

// Print the tags of the first 5 items for verification
console.log('\nTags of the first 5 items:');
for (let i = 0; i < 5 && i < vocabularyData.length; i++) {
    console.log(`Item ${i + 1}: ${JSON.stringify(vocabularyData[i].tags)}`);
}