
# List maker

List maker simplifies your interaction with lists in javascript. Now, you can manipulate lists easily and efficiently with much more easy-to-understand code!


## Installation

Install list maker with npm

```bash
  npm i list-maker
```

    
## Documentation

A new list can be made by using the following code

```javascript
const { List } = require('list-maker');
let names = new List(["John", "Tim", "John", "Paul"]);
// To access the array, call the .array property
console.log(names.array); // Logs ["John", "Tim", "John", "Paul"]
```
To add an element to the newly created list, use the add function

```javascript
names.add("Kanye");
console.log(names.array); // Now the list has a new element called Kanye: ["John", "Tim", "John", "Paul", "Kanye"]
```

To remove an element/elements, use the following functions

```javascript
names.removeAt(1); // The 2nd element has been removed: ["John", "John", "Paul", "Kanye"]
names.removeRepeats(); // Removes all the repeated data in a list: ["John", "Paul", "Kanye"]
names.removeFirst(); // The first element has been removed: ["Paul", "Kanye"]
names.removeLast(); // The last element has been removed: ["Paul"]
names.empty(); // Removes all elements from the list: []
```

It is possible to add multiple elements to a list maker list as well:

```javascript
names.add("Smith", "Kyle", "Logan");
```

Sorting Lists:

```javascript
names.sortAsc(); // Sorting the list in ascending order
names.sortDesc(); // Sorting the list in descending order
```

Splitting of a list:

```javascript
let ageNames = new List([25, "Lowry", 18, "Michael", 37, "Kim", 27, "Lee"]);
ageNames.splitPairs(); // The main list is split into sub-lists with elements having pairs of values, the age and name: [[25, "Lowry"], [18, "Michael"], [37, "Kim"], [27, "Lee"]]
let genderAgeNames = new List("male", 25, "Lowry", "male", 19, "Patrick", "female", 40, "Amanda");
// The list must now be split into a sub-list with three elements:
genderAgeNames.splitList(3)
```

Sometimes list can contain lists inside them. To sort these lists, the sortInnerList function can be used. 

Since we want to sort according to age, that is the first field in the inner list, we pass zero as a parameter (indexing starts with zero).

```javascript
let ageNames = new List([[25, "Lowry"], [18, "Michael"], [37, "Kim"], [27, "Lee"]]);
ageNames.sortInnerList(0);
console.log(ageNames.array); // Ascending order of age: [[18, "Michael"], [25, "Lowry"], [27, "Lee"], [37, "Kim"]]
```

If we want to sort ageNames in ascending order of name, we will provide the number 1 as a parameter:

```javascript
let ageNames = new List([[25, "Lowry"], [18, "Michael"], [37, "Kim"], [27, "Lee"]]);
ageNames.sortInnerList(1);
console.log(ageNames.array); // Ascending order of name: [[37, "Kim"], [27, "Lee"], [25, "Lowry"], [18, "Michael"]]
```

Converting an already created list to a list-maker list:

```javascript
const arr = [1, 2, 3, 4, 5];
let method1 = new List(arr);
let method2 = new List();
method2.dumpList(arr); // Retrieving all the individual elements in arr and dumping them in a list-maker list
```
Advanced remove functions:

```javascript
const names = ["Stuart", "Leonard", "Amy", "Bert", "Stuart"];
names.removeFirstOccurrence("Stuart"); // The function removes the first occurrence of the name stuart: ["Leonard", "Amy", "Bert", "Stuart"]
names.removeIndexes(2, 3); // The function removes elements in the indexes two and three: ["Leonard", "Amy"]
names.removeVal("Leonard"); // Removes all the occurrences of the name Leonard: ["Amy"]
```

Formatting list values:

```javascript
const numbArr = ["1", "2", "3", "4", "5"];
numbArr.convertToNumbers(); // Converts the type of all elements to a number
const stringArr = numbArr.convertToString(); // Converts the type of all elements to a string
const two_dec_arr = numbArr.roundAllDigits(2); // Rounds to 2 decimal places
```

More functions:

```javascript
const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

console.log(nums.numOccurrences(1)); // Returns the number of occurrences of the number 1 in the list
console.log(nums.findPositions(1)); // Returns the index positions of the number 1 in the list
console.log(nums.summate()); // Adds all the values in the list together
console.log(nums.average()); // Takes average of the values in the list

const letters_split = ["H", "E", "L", "L", "O", " ", "W", "O", "R", "L", "D"];
console.log(letters_split.concatenate()); // Returns the string: HELLO WORLD
```

A list can be copied by using the clone function:

```javascript
const series = [1, 2, 3, 4, 5];
const another_series = series.clone();
```
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@aryaanhegde](https://www.github.com/VOYAGERX013)

