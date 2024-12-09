function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + (person.lastName || ''));
}

printName({firstName: 'John'}); // This now works correctly, prints 'John '
printName({firstName: 'John', lastName: 'Doe'}); // This works correctly