function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + person.lastName);
}

printName({firstName: 'John'}); // This will cause a compilation error if strictNullChecks is enabled
printName({firstName: 'John', lastName: 'Doe'}); // This works correctly