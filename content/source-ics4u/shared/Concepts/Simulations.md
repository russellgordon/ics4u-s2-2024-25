---
draft: false
draftSectionTwo: false
tags: 
created: 2024-11-11T07:23:31.000-0400
createdForSectionTwo: 2024-11-11T07:00:00.000-0400
---

## Introduction

A simulation is an abstraction of some phenomena that allows investigation that would not be possible in the real world.

By tweaking the rules of a simulation, you can easily investigate the impact of different variables.

Developing an abstract simulation involves removing some details to focus on the main details required to investigate the desired topic.

Simulations can contain bias derived from decisions about what real-world elements were removed and which were retained for use in the simulation.

## Boids

In the late 1980s, computer scientist Craig Reynolds developed algorithmic steering behaviours for animated characters.

These behaviours allowed individual elements to navigate their digital environments in a “lifelike” manner with strategies for fleeing, wandering, arriving, pursuing, evading, etc.

The most famous example is Reynolds’ “boids” model for “flocking/swarming” behaviour.

Three rules define the movement of each "boid" or character:

1. Separation (also known as “avoidance”) – steer to avoid colliding with your neighbours:
   
   ![[Pasted image 20241110181641.png|250]]
   
  2. Alignment (also known as “copy”) – steer in the same direction as your neighbours:
     
     ![[Pasted image 20241110181715.png|250]]

3. Cohesion (also known as “center”) – steer towards the centre of your neighbours (stay with the group):
   
   ![[Pasted image 20241110181804.png|250]]
   
Overall, the three rules are:

![[Pasted image 20241110181821.png|250]]

You can view an example of this simulation here:

![[Flocking example.mp4]]

> [!TIP]
> 
> Some of the information presented earlier, the images, and the video, are excerpts from [The Nature of Code](https://natureofcode.com/), by Daniel Shiffman, which is an amazing book about how to use Javascript to simulate natural systems.
> 
> The full book is available online, direct from the author, and you can choose what you wish to pay to read it.
> 
> This is a really interesting book to explore... honestly! We could build an entire computer science course around completing the lessons and exercises in this book.
> 
> ![[Pasted image 20241110182350.png]]

## Global Warming

Here is another good example of [an interesting and useful simulation](https://www.bloomberg.com/graphics/2020-global-warming-simulator/):

[![[Pasted image 20241110182633.png]]](https://www.bloomberg.com/graphics/2020-global-warming-simulator/)

## Exercises

From Khan Academy, complete this unit, its related quizzes, and the unit test:

- [Simulations](https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:simulations)
	- Please complete all subsections and their related quizzes:
		- Exploring simulations
		- Simulating randomness
		- Creating simulations
	- It makes for pretty light and interesting reading!

> [!TIP]
> 
> Mr. Gordon can see your progress toward mastery of these topics in our class on Khan Academy.
> 
> So, make your [Notion](https://notion.so) portfolio post more of your own personal note – what are the key terms and ideas you do not want to forget?