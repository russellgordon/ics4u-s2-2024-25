---
tags:
created: 2024-10-01T00:00:00.000-0400
createdForSectionTwo: 2024-10-01T00:34:55.000-0400
draft: false
draftSectionTwo: false
---

> [!NOTE]
> 
> Mr. Gordon generated this programming puzzle using ChatGPT.
> 
> He then edited the results for clarity, accuracy, and brevity.

## Specification

Two numbers are called _friendly_ if the sum of the digits of both numbers is the same. For example, 123 and 213 are friendly because the sum of their digits is 1 + 2 + 3 = 6 for both.

Write a program that inputs a range of numbers and then counts how many numbers in that range are friendly with a given target number. The numbers in the range are more than zero and less than 1,000.

**Input:**

- The program first prompts for a target number (an integer).
- The program then prompts for the lower limit of the range (an integer).
- The program then prompts for the upper limit of the range (an integer).

**Output:**

- The program outputs the number of friendly numbers between the lower and upper limits (inclusive) that are friendly with the target number.

## Examples

### Sample Session 1

|Event| |
|-|-|
|Program Output|Enter target number:|
|User Input|123|
|Program Output|Enter lower limit of range:|
|User Input|100|
|Program Output|Enter upper limit of range:|
|User Input|200|
|Program Output|The number of friendly numbers between 100 and 200 with target number 123 is 6|

**Explanation**

The target number is 123, whose digits, when added, have a sum of 6:

1 + 2 + 3 = 6

There are six numbers between 100 and 200 whose digits also have a sum of 6, which are: 

- 105
- 114
- 123
- 132
- 141
- 150

### Sample Session 2

|Event| |
|-|-|
|Program Output:|Enter target number|
|User Input:|55|
|Program Output:|Enter lower limit of range|
|User Input:|50|
|Program Output:|Enter upper limit of range|
|User Input:|60|
|Program Output:|The number of friendly numbers between 50 and 60 with target number 55 is 1|

**Explanation**

The target number is 55, whose digits, when added, have a sum of 10:

5 + 5 = 10

There is only one number between 50 and 60 whose digits have a sum of 10. That number is 55.

## Rating

This problem is somewhat spicy. Be sure you have reviewed how to use [[Operators|operators]] and [[Concepts/Loops|loops]].