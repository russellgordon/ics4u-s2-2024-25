---
tags:
created: 2024-10-01T00:00:00.000-0400
createdForSectionTwo: 2024-10-01T00:34:55.000-0400
draft: false
draftSectionTwo: false
---

> [!NOTE]
> 
> Mr. Gordon generated this concept summary and the related exercises using ChatGPT.
> 
> He then edited the results for clarity, accuracy, and brevity.

In Swift, **loops** allow you to repeat a set of instructions multiple times. There are two main types of loops in Swift that you'll commonly use: **for** loops and **while** loops.

## **For Loops**

A **for** loop is used when you know ahead of time how many times you want to repeat something. You define a range of values, and the loop runs once for each value in that range.

**Example:** Let's say you want to calculate the square of numbers from 1 to 5. You can use a **for** loop to do this:


```swift
for number in 1...5 {
	let square = number * number
	print("The square of \(number) is \(square)")
}
```

**Output:**

```
The square of 1 is 1
The square of 2 is 4
The square of 3 is 9
The square of 4 is 16
The square of 5 is 25
```

**Explanation:**

- `number in 1...5` creates a range from 1 to 5.
- The loop runs once for each number in that range.
- Inside the loop, the square of each number is calculated and printed.

---

## **While Loops**

A **while** loop keeps running as long as a certain condition is true. You use this when you don’t know exactly how many times the loop will run in advance, but you want to keep going until something specific happens.

**Example:** Let's use a **while** loop to find how many times you can divide 100 by 2 until the result is less than 1:

```swift
var number = 100
while number >= 1 {
    print(number)
    number /= 2  // This divides number by 2, using integer division
}
```

**Output**:

```
100
50
25
12
6
3
1
```

**Explanation:**

- The loop checks the condition `number >= 1`. As long as this condition is true, the loop keeps running.
- Each time through the loop, `number` is divided by 2, and we print the value.
- The loop stops when `number` is less than 1.

> [!NOTE]
> 
> Remember, the division that is occurring here is integer division – the `Int` data type, not floating point division – as with the `Double` data type.
> 
> So for example, `25 / 2 == 12`, as compared to `25.0 / 2.0 == 12.5`.

---

### Exercises

#### 1. Multiplying Numbers in a Range

Write a **for** loop that multiplies every number from 1 to 10 by 3 and prints the result.

**Expected output:**

```
1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
... and so on ...
10 * 3 = 30
```

#### 2. Finding Powers of 2

Using a **while** loop, print the powers of 2 (starting at 1) so long as the value printed is less than or equal to 1000.

**Expected output:**

```
1
2
4
8
16
32
64
128
256
512
```