---
draft: false
draftSectionTwo: false
tags: 
created: 2024-10-12T00:00:00.000-0400
createdForSectionTwo: 2024-10-12T00:00:00.000-0400
---

> [!NOTE]
> 
> Apologies, Mr. Gordon's voice was a bit hoarse while recording these videos.

## Counting using a loop

In response to a couple of questions (through portfolio entries) about how to use loops to count occurrences of something, Mr. Gordon recorded this 5-minute video yesterday:

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1018748052?h=82f4d2ab0a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>

Here is the code that was developed by the end of the video:

```swift
import Foundation

// Task: Count how many even numbers there are within a range

// INPUT
let lower = 1
let upper = 15

// PROCESS
var countOfEvenNumbers = 0
for i in lower...upper {
    print(i)
    
    // Is this number even?
    if i % 2 == 0 {
        countOfEvenNumbers += 1
        print("\(i) is even")
    }
}

// OUTPUT
print("Between \(lower) and \(upper) there are \(countOfEvenNumbers) even numbers.")
```

## Decompose logic

Next, Mr. Gordon recorded this 14-minute video, showing how this program might be broken up into functions, such that it would be possible to verify whether the logic is correct, using unit tests:

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1018749212?h=a52c291d1b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>

Here is the code that was developed by the end of the second video:

```swift
import Foundation

// Task: Count how many even numbers there are within a range

// FUNCTIONS
func getInput(withPrompt prompt: String, minimum: Int?, maximum: Int?) -> Int {
    
    // Loop until a valid value is provided
    while true {
        
        // Prompt the user
        print(prompt)
        
        // Collect the input
        guard let givenInput = readLine() else {
            continue
        }
        
        // Convert to an integer
        guard let givenInteger = Int(givenInput) else {
            continue
        }
        
        // If a lowest value for the integer was specified...
        if let minimumValue = minimum {
            
            // ... then check that the given integer is greater than or equal to the lowest desired value.
            guard givenInteger >= minimumValue else {
                continue
            }
            
        }
        
        // If an highest possible value for the integer was specified...
        if let maximumValue = maximum {
            
            // ... then check that the given integer is less than or equal to the highest desired value.
            guard givenInteger <= maximumValue else {
                continue
            }
            
            
        }
        
        // If we've made it past all the checks, the input is an integer in the desired range of values, so, return it
        return givenInteger
        
    }
    
}

func isEven(_ number: Int) -> Bool {
    if number % 2 == 0 {
        return true
    } else {
        return false
    }
}

// Quick tests
//print(isEven(number: 6)) // true
//print(isEven(number: 7)) // false

func countEvenNumbers(between lower: Int, and upper: Int) -> Int {
    
    var countOfEvenNumbers = 0
    
    for i in lower...upper {
//        print(i)
        
        // Is this number even?
        if isEven(i) {
            countOfEvenNumbers += 1
//            print("\(i) is even")
        }
        
    }
    
    return countOfEvenNumbers
}


// INPUT
let lowerEndOfRange = getInput(withPrompt: "What is the lower end of the range? ", minimum: 0, maximum: nil)
let upperEndOfRange = getInput(withPrompt: "What is the upper end of the range? ", minimum: lowerEndOfRange, maximum: nil)

// PROCESS
let count = countEvenNumbers(between: lowerEndOfRange, and: upperEndOfRange)

// Quick tests
//print(countEvenNumbers(between: 1, and: 5)) // 2

// OUTPUT
print("Between \(lowerEndOfRange) and \(upperEndOfRange) there are \(count) even numbers.")
```