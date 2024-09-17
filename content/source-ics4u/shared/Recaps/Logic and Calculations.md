---
draft: false
draftSectionTwo: false
tags: 
created: 2024-09-16T00:00:00.000-0400
createdForSectionTwo: 2024-09-17T00:00:00.000-0400
---
[Conditional statements](https://www.hackingwithswift.com/read/0/8/conditional-statements) allow us to *selectively* run blocks of code when given a condition is `true`. If needed, we can [check multiple conditions](https://www.hackingwithswift.com/quick-start/beginners/how-to-check-multiple-conditions).

If we need to check many conditions and run different code for each condition, a [switch statement](https://www.hackingwithswift.com/quick-start/beginners/how-to-use-switch-statements-to-check-multiple-conditions) might be easier to use.

We can use [for loops](https://www.hackingwithswift.com/quick-start/beginners/how-to-use-a-for-loop-to-repeat-work) to repeat a block of code a fixed number of times.

When we need to repeat a block of code as long as a condition remains true, that's a job for a [while loop](https://www.hackingwithswift.com/quick-start/beginners/how-to-use-a-while-loop-to-repeat-work).

[Operators](https://www.hackingwithswift.com/read/0/4/operators) allow us to assign values to a variable or a constant, perform arithmetic, or make comparisons.

> [!TIP]
> 
> Take some time with your partner to try out the examples provided at the links above in an Xcode Playground.
> 
> This is especially recommended if it's been a while since you have done much programming.

## Exercise

### The Cell Sell

As a recap of how to work with variables and express logic using code, please work with a partner using the *driver-navigator* pattern to complete this exercise on [[the-cell-sell.pdf|comparing the cost of old-fashioned cell-phone plans]].

To begin, create a macOS command line project in Xcode named **CellSell**:

![[Screenshot 2024-09-16 at 6.25.57 AM.png]]

As a starting point, replace the code in `main.swift` with this:

```swift
import Foundation

// 1. Input

// Get number of daytime minutes
var dayTimeMinutes = 0
while true {
    
    // Prompt
    print("Number of daytime minutes?")
    
    // Collect input
    guard let givenInput = readLine() else {
        // Repeat prompt, no input given
        continue
    }
    
    // Convert to integer
    guard let givenInteger = Int(givenInput) else {
        // Repeat prompt, not an integer
        continue
    }
    
    // Now we have an integer, break input loop
    dayTimeMinutes = givenInteger
    break

}

// 2. Process

// Calculate costs for plan A
var a = 0

// Add daytime cost
a += (dayTimeMinutes - 100) * 25

// Calculate costs for plan B

// 3. Output
print("Plan A costs \(a)")

```

The code above is incomplete and incorrect. Work with your partner to complete the code.

You can test your solution [[the-cell-sell-test-plan.pdf|using this test plan]]. Your program can be considered complete if it passes all of the test cases provided.