### JavaScript Number and Math Methods

#### Number Methods

1. **Primitive vs. Object**
   - **Primitive**: Stored directly in the variable.
     ```javascript
     const score = 400;
     console.log(score); // 400
     ```
   - **Object**: Created using the `Number` constructor.
     ```javascript
     const balance = new Number(100);
     console.log(balance); // [Number: 100]
     ```

2. **toString()**
   - Converts a number to a string.
     ```javascript
     console.log(balance.toString().length); // 3
     ```

3. **toFixed(digits)**
   - Formats a number to a fixed number of decimal places.
     ```javascript
     console.log(balance.toFixed(1)); // "100.0"
     ```

4. **toPrecision(digits)**
   - Formats a number to a specified length.
     ```javascript
     const otherNumber = 123.8966;
     console.log(otherNumber.toPrecision(4)); // "123.9"
     ```

5. **toLocaleString(locale)**
   - Formats a number according to the locale.
     ```javascript
     const hundreds = 1000000;
     console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"
     ```

#### Math Methods

1. **Math Object**
   - Provides various mathematical functions and constants.
     ```javascript
     console.log(Math); // Math object with methods and properties
     ```

2. **Math.abs(x)**
   - Returns the absolute value of `x`.
     ```javascript
     console.log(Math.abs(-4)); // 4
     ```

3. **Math.round(x)**
   - Rounds `x` to the nearest integer.
     ```javascript
     console.log(Math.round(4.6)); // 5
     ```

4. **Math.ceil(x)**
   - Rounds `x` up to the nearest integer.
     ```javascript
     console.log(Math.ceil(4.2)); // 5
     ```

5. **Math.floor(x)**
   - Rounds `x` down to the nearest integer.
     ```javascript
     console.log(Math.floor(4.9)); // 4
     ```

6. **Math.min(...values)**
   - Returns the smallest value.
     ```javascript
     console.log(Math.min(4, 3, 6, 8)); // 3
     ```

7. **Math.max(...values)**
   - Returns the largest value.
     ```javascript
     console.log(Math.max(4, 3, 6, 8)); // 8
     ```

8. **Math.random()**
   - Returns a random number between 0 (inclusive) and 1 (exclusive).
     ```javascript
     console.log(Math.random()); // e.g., 0.7452620985659867
     ```

9. **Random Number within a Range**
   - Generates a random number within a specified range.
     ```javascript
     const min = 10;
     const max = 20;
     console.log(Math.floor(Math.random() * (max - min + 1)) + min); // e.g., 15
     ```

### Example Code

```javascript
const score = 400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(1)); // "100.0"

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // "123.9"

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"

// Math Methods
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // e.g., 0.7452620985659867
console.log(Math.random() * 10 + 1); // e.g., 6.292946571842458
console.log(Math.floor(Math.random() * 10) + 1); // e.g., 7

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // e.g., 15
```

// ### Summary

// - **Number Methods**: `toString()`, `toFixed()`, `toPrecision()`, `toLocaleString()`
// - **Math Methods**: `Math.abs()`, `Math.round()`, `Math.ceil()`, `Math.floor()`, `Math.min()`, `Math.max()`, `Math.random()`
// - Generate random numbers within a range using `Math.random()` combined with `Math.floor()`.