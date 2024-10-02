---
draft: false
draftSectionTwo: true
tags: 
created: 2024-09-27T00:00:00.000-0400
createdForSectionTwo: 2024-09-26T00:00:00.000-0400
---

## Objective

Write a complete solution to *one* of the following puzzles:

- [[winning-score.pdf|Winning Score]]
- [[isbn.pdf|ISBN]]

## Overview

### Consider the puzzle

Work as a full class for up to 15 minutes to discuss these puzzles at the front of the room. It is recommended that you:

- manually calculate output for different input(s) a few times
- make point form notes in English about how to approach the problem

> [!NOTE]
> 
> Please, do not write actual code. It's tempting, but counterproductive. Use point-form English instead.

### Implement a solution

Choose *one* of the given puzzles and:

- [ ] write an interactive macOS command line app
- [ ] write code for a second target that uses a unit testing bundle to automate testing of your logic for correctness
	- unit tests do not need to *check* for invalid inputs, however, the interactive version of your code should still reject invalid inputs
- [ ] author a portfolio post [on Notion](https://notion.so) to document your results

## Resources

While implementing your solution in code, you may refer to any of your own previously written code, or any resources available on our class website, including but not limited to:

- our review of [[Recaps/Loops|loops and conditional statements]]
- how to apply abstraction using [[Functions|functions]]
- [[Writing Unit Tests|how to author unit tests]]

For this in-class activity, while coding, you are required to not chat with other students (verbally or through other means).

For this task, as well, using web search sites or large language models is not permitted. 

The goal is to show that you know how to implement a solution independently.

## Tips

For your test plan, remember to write unit tests that cover:

- typical cases
	- these can include the examples provided in the specification
	- be sure to make at least one or two more test cases for this category
- boundary conditions
	- test the edges of acceptable input

## Example Solutions

**UPDATE:** Sunday, September 29, 2024

Here are Mr. Gordon's solutions to these puzzles – it's important to note that these are *not* the only way to solve these puzzles.

### Winning Score

- **Primary logic:**
	- [main.swift](https://github.com/lcs-rgordon/WinningScore2024/blob/main/WinningScore2024/main.swift)
- **Unit tests:**
	- [WinningScoreTests.swift](https://github.com/lcs-rgordon/WinningScore2024/blob/main/WinningScoreTests/WinningScoreTests.swift)

### ISBN

- **Primary logic:**
	- [main.swift](https://github.com/lcs-rgordon/ISBN2024/blob/main/ISBN2024/main.swift)
- **Unit tests:**
	- [ISBN2024Tests.swift](https://github.com/lcs-rgordon/ISBN2024/blob/main/ISBN2024Tests/ISBN2024Tests.swift)
- **Video walkthrough**
  <div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1014081334?h=757e1b5dfa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>