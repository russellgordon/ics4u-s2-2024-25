---
draft: false
draftSectionTwo: false
tags: 
created: 2024-09-23T00:00:00.000-0400
createdForSectionTwo: 2024-09-25T00:00:00.000-0400
---

## Objective

Write a complete solution to the following puzzle:

[[deficient-perfect-abundant.pdf|Deficient, Perfect, and Abundant]]

## Overview

In this in-class activity, you will work as a full class for up to 15 minutes to discuss an approach to this problem on the whiteboards at the front of the room.

Then, you will work (primarily) alone to:

- [ ] write an interactive macOS command line app
- [ ] write code for a second target that uses a unit testing bundle to automate testing of your logic for correctness
	- unit tests do not need to *check* for invalid inputs, however, the interactive version of your code should still reject invalid inputs
- [ ] author a portfolio post [on Notion](https://notion.so) to document your results

For the final 15 minutes of class, you will compare solutions with your peers.

## Resources

While implementing your solution in code, you may refer to any of your own previously written code, or any resources available on our class website, including but not limited to:

- our review of [[Recaps/Loops|loops and conditional statements]])
- how to apply abstraction using [[Functions|functions]])
- [[Writing Unit Tests|how to author unit tests]]

For this in-class activity, while coding, you are required to not chat with other students (verbally or through other means).

For this task, as well, using web search sites or large language models is not permitted. The goal is to show that you know how to implement a solution independently.

## Tips

For your test plan, remember to write unit tests that cover:

- typical cases
	- these can include the examples provided [[deficient-perfect-abundant.pdf|in the specification]]
	- be sure to make at least one or two more test cases for this category
- boundary conditions
	- test the edges of acceptable input

## Example Solution

**UPDATE:** Wednesday, September 25, 2024

Here is Mr. Gordon's solution to this problem – it's important to note that this is *not* the only way to solve this problem.

- **Primary logic:**
	- [main.swift](https://github.com/lcs-rgordon/DeficientPerfectAbundant2024/blob/main/DeficientPerfectAbundant2024/main.swift)
- **Unit tests:**
	- [DeficientPerfectAbundantTests.swift](https://github.com/lcs-rgordon/DeficientPerfectAbundant2024/blob/main/DeficientPerfectAbundantTests/DeficientPerfectAbundantTests.swift)

You will get more benefit from reviewing what changed, commit by commit. View the [history of commits here](https://github.com/lcs-rgordon/DeficientPerfectAbundant2024/commits/main/), then click the links at left, one by one, to see how the solution developed.