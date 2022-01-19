let suffix: string | null = getSuffix();
if (suffix != null) {
  const suffixLocal = suffix;
  let exampleOne: string = 'jane' + suffixLocal.toUpperCase();
  ['jane', 'john'].forEach(name => {
    let exampleTwo: string = name + suffixLocal.toUpperCase();
  });
}

let example: string | null = forExample();
if (example != null) {
  const exampleLocal = example;
  setTimeout(() => {
    console.log(exampleLocal.toUpperCase());
  });
}
example = null;