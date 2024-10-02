---
tags:
created: 2024-10-01T00:00:00.000-0400
createdForSectionTwo: 2024-10-01T00:34:55.000-0400
draft: false
draftSectionTwo: false
---

> [!NOTE]
> 
> Mr. Gordon adapted this puzzle from a Canadian Computing Competition problem originally published by the University of Waterloo.
> 
> He used the Claude Anthropic large language model to reformat the problem for better presentation using a web page as opposed to a PDF file.
> 
> He then edited the results for clarity, accuracy, and brevity.


## Puzzle Description

At Chip's Fast Food Emporium there is a very simple menu. Each food item is selected by entering a digit choice.

|Here are the three burger choices:|Here are the three drink choices:|
|---|---|
|1 – Cheeseburger (461 Calories)|1 – Soft Drink (130 Calories)|
|2 – Fish Burger (431 Calories)|2 – Orange Juice (160 Calories)|
|3 – Veggie Burger (420 Calories)|3 – Milk (118 Calories)|
|4 – no burger|4 – no drink|

|Here are the three side order choices:|Here are the three dessert choices:|
|---|---|
|1 – Fries (100 Calories)|1 – Apple Pie (167 Calories)|
|2 – Baked Potato (57 Calories)|2 – Sundae (266 Calories)|
|3 – Chef Salad (70 Calories)|3 – Fruit Cup (75 Calories)|
|4 – no side order|4 – no dessert|

Write a program that will compute the total calories of a meal.

## Input Specifications

The program should prompt the user for a number for each type of item then calculate and display the calorie total.

> [!NOTE]
> Your program should repeat the input prompt if an invalid choice is made.

## Output Specifications

The program prints out on the screen the total calories of the selected meal, and stops executing after this output.

## Sample prompts and user input

```
Welcome to Chip's Fast Food Emporium
Please enter a burger choice: 2
Please enter a side order choice: 1
Please enter a drink choice: 3
Please enter a dessert choice: 4
```

## Sample output

```
Your total Calorie count is 649.
```

## Rating

This problem is pretty mild. Be sure you have reviewed how to use [[Selection Statements|selection statements]].

> [!TIP]
> 
> This is not required, but you can spice up your solution and make your code less repetitive by using [arrays](https://www.hackingwithswift.com/quick-start/beginners/how-to-store-ordered-data-in-arrays) (which we learned about last year) or [dictionaries](https://www.hackingwithswift.com/quick-start/beginners/how-to-store-and-find-data-in-dictionaries) (which we did not learn about last year, but which are very useful).