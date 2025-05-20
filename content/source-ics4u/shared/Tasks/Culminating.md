---
draft: false
draftSectionTwo: false
tags: 
created: 2025-05-20T07:00:00.000-0400
createdForSectionTwo: 2025-05-20T07:00:00.000-0400
---

> [!TIP]
> 
> You can copy-paste this entire article into a Notion portfolio post, then begin filling out that post as you work on your culminating task this week.

## Enduring Understanding

Working in a group with shared purpose and an appropriate workflow allows for the creation of a product that would otherwise be unapproachable for an individual in the same period of time.

## Product

You are about to begin post-secondary education – the biggest adventure of your life – so far.

In that spirit, the suggested product is a "[Choose Your Own Adventure](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure)" (CYOA) app that:  

- presents a complete narrative (either original or [existing](https://www.fictiondb.com/series/choose-your-own-adventure~15575.htm))
- includes a polished user experience and interface
- provides some additional functionality or utility that would not be possible with a CYOA narrative that is presented in the form of a book (e.g.: statistics, animations, or other)

## Discussion

### Concepts

In class, we will look through some [Choose Your Own Adventure](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure) books.

A [directed graph](https://www.seanmichaelragan.com/html/%5b2008-03-07%5d_Choose_Your_Own_Adventure_book_as_directed_graph.shtml) is the essential data structure of a CYOA narrative. Here is a [particularly epic narrative](https://www.russellgordon.ca/lcs/2023-24/ics4u/joyce-judy.pdf) made by students in a prior year at LCS.

### Template

A Choose Your Own Adventure Template will be provided in our next class as an example of how to implement and use a directed graph to tell a story with many possible endings:

![RocketSim_Screenshot_iPhone_15_6.1_2024-06-05_07.02.48.png|700](https://ics4u-2023-24.russellgordon.ca/img/user/Media/RocketSim_Screenshot_iPhone_15_6.1_2024-06-05_07.02.48.png)

### Exemplars

> [!DISCUSS]
> 
> What types of features can a CYOA app offer that a book cannot?

These students built a story where the reader is immersed in an epic _"Will she / won't she?"_ love triangle drama – outstanding original images added to the polish of this app:

![RocketSim_Screenshot_iPhone_15_6.1_2024-06-05_07.02.48 1.png|700](https://ics4u-2023-24.russellgordon.ca/img/user/Media/RocketSim_Screenshot_iPhone_15_6.1_2024-06-05_07.02.48%201.png)

The story of an aspiring rap star, Kendrick – notable enhancements here include a graph of the story outline that updates as the reader moves through the story, to show what paths have been travelled:

![RocketSim_Screenshot_iPhone_15_6.1_2024-06-05_07.02.48 2.png|700](https://ics4u-2023-24.russellgordon.ca/img/user/Media/RocketSim_Screenshot_iPhone_15_6.1_2024-06-05_07.02.48%202.png)

These students extended the template into a game of sorts, where various criteria (energy, food levels) change based on what parts of the story are visited. This provides the player with a sense of whether they have chosen a helpful or unhelpful path:

![RocketSim_Screenshot_iPhone_15_6.1_2024-06-05_07.02.48 3.png|700](https://ics4u-2023-24.russellgordon.ca/img/user/Media/RocketSim_Screenshot_iPhone_15_6.1_2024-06-05_07.02.48%203.png)

## Getting started

In general terms, here is the suggested order of operations:

### Day 1

1. Agree on a unifying theme for your narrative, e.g.: "Journey Under the Sea"
2. Begin building a directed graph; this is best done together on large-format chart paper.
	- Use point form to identify the gist of what happens on a given node (or page).
	- Later, individuals can flesh out the story on each node.
	- Take photo(s) of the directed graph for all group members to refer to.
3. Group members *must* use a copy of [this spreadsheet](https://docs.google.com/spreadsheets/d/1XA4AzB6bFISR0fkyHJMCbu62D-VkyFUQoBmtAgIZIYs/copy) to record the text of the narrative for each node and edge.
	- [ ] Talk with your group members and assign a range of node ID's to each person in your group.
	- [ ] For example, one member may use the range of id's from 1 to 100, the next from 101 to 200, and so on.
	- [ ] So long as node ID's do not overlap, each group member can work in their own spreadsheet to author the narrative.

### Day 2

4. One member of your group assumes the project manager role, [downloads this template](https://www.russellgordon.ca/lcs/ics4u/CYOATemplate.zip), and uses it to create a remote in their GitHub account – all other members of the group will fork this repository and contribute to it using the [[Source Control Within a Team]] workflow you learned to use earlier this year.
5. Another member of your group assumes the database manager role; they will create the database at Supabase, and use this [database starter script](https://gist.githubusercontent.com/lcs-rgordon/057205e83a622c1abb48a09d9b9c6793/raw/e1ce13e699bda76b9846f24b17991a2695948287/database_starter.mssql) to create and populate tables.
6. Collect spreadsheets from group members that contain the narrative and import this data into your database. 
7. Your group should then brainstorm possible enhancements to your app. Be conservative; time is limited.

> [!NOTE]
> 
> Code contributions and other contributions, such as original artwork, are equally valuable.

> [!TIP]
> 
> Use the `GraphGenerator` app included with the CYOA template project to analyze your group's directed graph, as entered into your group's database. You can then correct any problems with your group's story – such as nodes (pages) without any edges connecting them to other nodes.
> 
> As well, all nodes (pages) that represent endings _must_ be categorized so that your group can produce a directed graph that [has it's endings accurately tallied](https://www.russellgordon.ca/lcs/2023-24/ics4u/directed-graph-example.png). Categorize a node (page) as an ending by populating the `ending_context` and `ending_type_id` column for a given page. For example:
> 
> ![Screenshot 2024-06-05 at 7.15.43 AM.png|600](https://ics4u-2023-24.russellgordon.ca/img/user/Media/Screenshot%202024-06-05%20at%207.15.43%E2%80%AFAM.png)

### All remaining days

8. Keep iterating until your group completes a new *Choose Your Own Adventure* app with some fun additional software features! The wackier the story, the better. ☺️

## Requirements

Primarily, your group must demonstrate the ability to manage the software development process effectively, through all of its stages – planning, development, production, and closing.  

That means:

- [ ] including evidence of narrative planning or analysis in the [form of a directed graph](http://www.seanmichaelragan.com/html/%5B2008-03-07%5D_Choose_Your_Own_Adventure_book_as_directed_graph.shtml)
- [ ] using a GitHub repository with one primary owner
- [ ] creating forks of that repository for the other contributor(s)
- [ ] making use of pull requests to merge changes from forks into the primary repository
- [ ] making use of the "[fetch upstream changes](https://drive.google.com/file/d/1GwhX4SjxEPhgiJTDhOAVDPanRM0ZGCP8/view?usp=sharing)" feature to update from the primary repository
- [ ] using GitHub issues to track plans with your partner(s)
- [ ] referencing issue numbers when making commits / creating pull requests
- [ ] evidence of [user testing](https://www.youtube.com/watch?v=0YL0xoSmyZI) and receipt of feedback that has been acted upon by your team
	- [ ] this should be clearly documented within GitHub Issues
	- [ ] must occur with students _outside_ your own group
	- [ ] user testing must occur _during_ class time

> [!TIP]
> 
> Use of a Kanban-style status board would be a way to exceed expectations as a group for use of GitHub to keep your project organized.

## Commentary

- A CYOA app is suggested because completion requires a blend of skills and enough labour to sustain a group endeavour for the culminating task.
- Good use of algorithms, data structures, user interface design, and creation of the raw data (the narrative) are all necessary for success.

> [!NOTE]
> 
> If a group project you have previously contributed to this year has obvious functionality left to be completed *and* you feel confident that there is enough work left to do for you to meet the requirements above, you are welcome to continue working on that group project – subject to approval from Mr. Gordon.

## Acceptable Generative AI Use

Students are permitted to utilize generative AI tools as supplementary resources for understanding coding principles, assisting in code development, and debugging.

Students should be aware that generative AI tools can produce incomplete code, code that creates or introduces biases, code with errors, inefficiencies in how the code executes, or code complexities that make it difficult to understand and therefore explain the code. It is the student's responsibility to review and understand any code co-written with AI tools, ensuring its functionality. Additionally, students must be prepared to explain their code in detail in their end-of-year interview.

The use of program code, media (e.g., video, images, sound), data, information, or evidence created by someone else or with generative AI tools in the creation of a program and/or a program code segment(s), without appropriate acknowledgment (i.e., through citation, through attribution, and/or by reference), is considered _plagiarism_.

A student who commits plagiarism will receive a score of 0 on the culminating task.

_This statement aligns with College Board and [Lakefield College School policy](https://lcs.myschoolapp.com/ftpimages/108/download/download_4338056.pdf#page=53) for responsible use of generative AI tools and academic honesty. The text of the statement above is largely identical to the policy described by the College Board for the [AP Computer Science Principles Create Task](https://apcentral.collegeboard.org/media/pdf/ap-csp-student-task-directions.pdf#page=8)._

## Evaluation

### Knowledge (25%)

Your documented ability to *use key tools* required to complete your part of the project. This might include Xcode, source control, the Supabase interface, or manual or software-based tools for creating illustrations, music, or sound effects.

Focus on sharing evidence of how you were able to resolve problems, such as logical errors or other issues, or use tools to efficiently and quickly to produce or contribute to the project.

<small>Learning goals: 1, 2</small>

![[Pasted image 20250519203759.png]]

> [!TIP]
> 
> Please add evidence below within this section (screenshots, photographs, or videos less than 1 minute long) and brief supporting paragraphs to support your case for exceeding expectations.

*Add your evidence below...*



### Thinking (25%)

Your ability to contribute to data structure planning (e.g.: directed graph) and to use GitHub Issues for project planning and organization.

<small>Learning goals: 2, 3, 6</small>

![[Pasted image 20250519203942.png]]

> [!TIP]
> 
> Please add evidence below within this section (screenshots, photographs, or videos less than 1 minute long) and brief supporting paragraphs to support your case for exceeding expectations.

*Add your evidence below...*



### Application (25%)

Your demonstrated individual contributions to the group effort to complete your app.

<small>Learning goals: 3, 4, 5</small>

![[Pasted image 20250519204224.png]]

> [!TIP]
> 
> Please add evidence below within this section (screenshots, photographs, or videos less than 1 minute long) and brief supporting paragraphs to support your case for exceeding expectations.

*Add your evidence below...*



### Communication (25%)

In your [end of year interview](https://docs.google.com/presentation/d/1s2cOIdcSdpdGBn9mpxPBmNhGdZVwZx6ZaYtzk1ioVf0/copy), your ability to clearly explain _how_ your group's program works – key data structures and algorithm(s) – using correct vocabulary.  
  
Additionally, be able to identify when you have applied techniques for abstraction and separation of concerns (e.g.: MVVM design pattern), either in the culminating task or in other products you authored or helped to author this year.

<small>Learning goals: 3, 4, 5, 10</small>

![[Pasted image 20250519204237.png]]

> [!TIP]
> 
> Please add evidence below within this section (screenshots, photographs, or videos less than 1 minute long) and brief supporting paragraphs to support your case for exceeding expectations.

*Add your evidence below...*

## Documentation

### Source code

https://github.com/ORG-NAME/REPO-NAME

> [!TIP]
> 
> This should be a link to your *group's* primary repository.

### Video demo

Each student should produce a video, no longer than 1 minute, highlighting their personal contributions to the overall product:

*Replace this with your video...*

### Your issues

This will become a link to issues that were specifically assigned to you:

https://github.com/ORG-NAME/REPO-NAME/issues?q=assignee:USERNAME

> [!TIP]
> 
> Mr. Gordon will help everyone in the class complete this link at the end of the week.

### Your commits

These will become links to commits made by you personally:

https://github.com/ORG-NAME/REPO-NAME/commits?author=USERNAME

https://github.com/ORG-NAME/REPO-NAME/commits/development?author=USERNAME

> [!TIP]
> 
> Mr. Gordon will help everyone in the class complete this link at the end of the week.
> 

### Link to Interview Slides

Provide a link to your interview slides (begin with [this template](https://docs.google.com/presentation/d/1s2cOIdcSdpdGBn9mpxPBmNhGdZVwZx6ZaYtzk1ioVf0/copy)):

*Replace this with a link to your interview slides...*

## Overall feedback

*This will be completed by Mr. Gordon after the culminating task has concluded...*

