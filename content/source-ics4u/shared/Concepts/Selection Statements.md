---
tags:
created: 2024-10-01T00:00:00.000-0400
createdForSectionTwo: 2024-10-01T00:34:55.000-0400
draft: false
draftSectionTwo: false
---

> [!NOTE]
> 
> Mr. Gordon generated this concept summary and the related exercises using the Claude Anthropic AI.
> 
> He then edited the results for clarity, accuracy, and brevity.

Selection statements allow us to *selectively* run blocks of code when a given condition is `true`. Selection statements are also called *conditional statements*.

## `if` Statements

An `if` statement allows you to execute code based on certain conditions.

### Basic Syntax:

```swift
if condition {
    // Code to execute if condition is true
}
```

### Example:

```swift
let temperature = 25

if temperature > 30 {
    print("It's hot outside!")
} else if temperature > 20 {
    print("It's a nice day!")
} else {
    print("It's a bit chilly.")
}
```

In this example, the program will print "It's a nice day!" because the temperature is 25.

## `switch` Statements

A `switch` statement allows you to check a value against multiple possible matching patterns, including ranges.

### Basic Syntax:

```swift
switch someValue {
case value1:
    // Code to execute if someValue matches value1
case value2, value3:
    // Code to execute if someValue matches value2 or value3
case valueRange:
    // Code to execute if someValue falls within valueRange
default:
    // Code to execute if no other cases match
}
```

#### Example 1: Matching Specific Values

```swift
let dayOfWeek = "Wednesday"

switch dayOfWeek {
case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday":
    print("It's a weekday.")
case "Saturday", "Sunday":
    print("It's the weekend!")
default:
    print("Invalid day of the week.")
}
```

In this example, the program will print "It's a weekday." because the `dayOfWeek` is "Wednesday".

#### Example 2: Matching Ranges

```swift
let temperature = 28

switch temperature {
case ...0:
    print("Freezing!")
case 1...10:
    print("Very cold")
case 11...20:
    print("Cool")
case 21...30:
    print("Warm")
case 31...:
    print("Hot!")
default:
    print("Invalid temperature")
}
```

This will print "Warm" because 28 falls within the range 21...30.

#### Example 3: Combining Ranges and Specific Values

```swift
let grade = 85

switch grade {
case 90...100:
    print("A")
case 80..<90:
    print("B")
case 70..<80:
    print("C")
case 60..<70:
    print("D")
case 0..<60:
    print("F")
case -1:
    print("Incomplete")
default:
    print("Invalid grade")
}
```

This will print "B" because 85 falls within the range 80..<90.

In these examples:

- `...` is used for one-sided ranges (e.g., `...0` means "0 and below", `31...` means "31 and above")
- `...` is inclusive on both sides (e.g., `1...10` includes both 1 and 10)
- `..<` is inclusive on the left and exclusive on the right (e.g., `80..<90` includes 80 but not 90)

These range operators make `switch` statements very powerful for handling numeric ranges in Swift.

## Exercises

### 1. Ice Cream Flavour Checker

Write an `if` statement that checks a variable `flavor` and prints different messages based on the flavor:

- If it's "chocolate", print "Classic choice!"
- If it's "vanilla", print "Simple and delicious!"
- For any other flavor, print "Enjoy your ice cream!"
 
### 2. Age Group Categorizer

Create a `switch` statement that takes a person's age as an integer and categorizes them into different life stages. Use ranges in your `switch` statement to handle the following categories:

- 0-2 years: "Infant"
- 3-12 years: "Child"
- 13-19 years: "Teenager"
- 20-39 years: "Young Adult"
- 40-59 years: "Middle-aged Adult"
- 60 years and above: "Senior"

Also, include a case for invalid ages (negative numbers). Test your code with various ages to ensure it works correctly. Here's a starting point for your code:

```swift
let age = 25  // Change this value to test different ages

switch age {
    // Your code here
}
```