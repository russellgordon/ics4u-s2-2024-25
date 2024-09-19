---
draft: false
draftSectionTwo: false
tags: 
created: 2024-09-17T00:00:00.000-0400
createdForSectionTwo: 2024-09-19T00:00:00.000-0400
---

## Identify repetitive code

From the [[Logic and Calculations]] recap, reviewing part of your solution, you may observe a pattern in the code that feels a little *icky*. Consider the section of code that collects the input:

```swift
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

// Get number of evening minutes
var eveningMinutes = 0
while true {
    
    // Prompt
    print("Number of evening minutes?")
    
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
    eveningMinutes = givenInteger
    break
 
}

// Get number of weekend minutes
var weekendMinutes = 0
while true {
    
    // Prompt
    print("Number of weekend minutes?")
    
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
    weekendMinutes = givenInteger
    break
 
}
```

We are *definitely* repeating ourselves, but last year, we learned **D.R.Y.** – *don't* repeat yourself!

The code to collect input is crying out for a function.

## Create a function

What we need to do is identify the *input* we need to provide to the function, and what output we want from that function.

We need to provide, as input:

- a prompt
- possibly, a minimum acceptable value
- possibly, a maximum acceptable value

As output, we expect to receive an integer.

So, we could write a function like this:

```swift
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
```

We can observe a few things. In the function header:

```swift
func getInput(withPrompt prompt: String, minimum: Int?, maximum: Int?) -> Int {
```

The *name* of the function is `getInput`.

There are three *parameters*, whose external names are `withPrompt`, `minimum`, and `maximum`. The internal parameter name of the first parameter is `prompt`.

These three parameters can be thought of as *questions* the function is asking when it is invoked.

So, when we use, or invoke the function, we must provide three *arguments*, or answers, like this:

```swift
// 1. Input

// Get daytime minutes
let dayTimeMinutes = getInput(withPrompt: "Number of daytime minutes? ",
                       minimum: 0,
                       maximum: nil)

// Get evening minutes
let eveningMinutes = getInput(withPrompt: "Number of evening minutes? ",
                           minimum: 0,
                           maximum: nil)

// Get weekend minutes
let weekendMinutes = getInput(withPrompt: "Number of weekend minutes? ",
                           minimum: 0,
                           maximum: nil)
```

Each time we invoke the function, we provide the three answers:

1. a reasonable prompt
2. a minimum value
3. we express that there is no upper limit on the values we want to collect by providing `nil`

The function returns an integer each time it is invoked.

Now, add this function to your solution to [[the-cell-sell.pdf|the Cell Sell puzzle]].

## Try out the function

We can set a breakpoint and step through the code, line by line, to understand how this function works.

Review the following short video:

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1010191794?h=f74f5263c3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>

Now, try using the debugger in the same way in your own code – take note of when we *step into* code as compared to *stepping over* code.

> [!IMPORTANT]
> 
> **Step into** ↓ means you will enter a function and step through each line of code it contains.
> 
> **Step over** ↷ means the line of code (which may invoke a function) runs, but you will not have to step through each line of code within the function.

> [!NOTE]
> 
> The code in the **Process** and **Output** sections in that video is deliberately left incomplete.
