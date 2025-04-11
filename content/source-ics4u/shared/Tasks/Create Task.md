---
draft: false
draftSectionTwo: false
tags: 
created: 2025-04-01T07:00:00.000-0400
createdForSectionTwo: 2025-04-03T07:00:00.000-0400
---

## Timelines

- You will have a minimum of three full class periods to work on your Create Task over the coming week.
	- You are encouraged to use your culminating task from last year as a starting point.
	- You will have the choice of using additional in-class time, but may need to then complete AP CSP exam prep or other tasks outside of class time.
- Your Create Task must be fully submitted [to the College Board through your Digital Portfolio](https://digitalportfolio.collegeboard.org/) no later than the end of this module – ideally before that point in time.
  
## Requirements

1. Review the [formal 2025 AP Create Task requirements](https://apcentral.collegeboard.org/media/pdf/ap-csp-student-task-directions.pdf#page=4).
2. Understand the [2023 AP Create Task rubric](https://www.russellgordon.ca/lcs/2023-24/ics4u/ap-create-task-scoring-guidelines.pdf).
    - These are the guidelines that the College Board evaluator will likely use to score the responses that you author in May on the exam.
    - To better understand requirements, please watch [this video that compares the exemplar to the rubric](https://www.yout-ube.com/watch?v=xNn6gU_gvRo).
  
## Exemplar

Multiplication Maestro is another MVP (minimum viable product) for the AP Create Task.

1. Watch the [[MultiplicationMaestroDemo.mov|53 second video demo of Multiplication Maestro]].
2. Familiarize yourself with the source code [[ReviewChangesCommitByCommit.mp4|by reviewing commits step by step]].
	-  Here is the [list of commits for Multiplication Maestro](https://github.com/lcs-rgordon/MultiplicationMaestro/commits/main).
    -  Green segments reflect code that was added in a given commit.
    -  Red segments reflect code that was removed.
3. [Clone the exemplar project](https://github.com/lcs-rgordon/MultiplicationMaestro) and try it out.
    - Note the following:
        1. Code is written to be as simple to understand as possible. 
            - You can likely think of better ways to organize the code...
        2. Results are filtered [using an approach that is](https://github.com/lcs-rgordon/MultiplicationMaestro/blob/8d20826a2c5db8e0ea06a941d9438384ca65891b/MultiplicationMaestro/Views/ContentView.swift#L219-L246):
            - designed to meet AP Create Task requirements
            - not the way you would filter a list "in real life" when writing an app using Swift and SwiftUI
4. Watch [this video that explains Create Task requirements and how the exemplar meets them](https://www.yout-ube.com/watch?v=xNn6gU_gvRo).
    - For the exemplar, here is: 
        - The [complete program code](https://www.russellgordon.ca/lcs/2023-24/ics4u/ap-create-task-program-code.pdf) as a PDF file
        - The [1-minute video](https://drive.google.com/file/d/18REb5dUpQzt7bMegkwxZNVyBzAqMWAgR/view)
        - The [written responses](https://www.russellgordon.ca/lcs/2023-24/ics4u/written-responses-with-program-code.pdf), which this year, you will write on the exam itself on ==Thursday, May 15, 2025 at 12 noon==.

## Things to do

1. If writing your program from scratch, consider making a plan for your project.
    - While not formally required, paper prototypes may help organize your thoughts.
2. Author your program code – _source control must be used_.
    - Commit and push your code regularly, using [descriptive commit messages](https://github.com/lcs-rgordon/MultiplicationMaestro/commits/main).
3. Test your code thoroughly.
4. Leave enough time to:
    1. Print your code to PDF – here is how to do it in less than 5 minutes.
		1. [Download, install, and open BBEdit](https://www.barebones.com).
		2. Complete these steps – follow the links to see a video demo:
			- 00:00 - [Open Xcode and BBEdit side-by-side](https://www.youtube.com/watch?v=szNtDddK0T0&t=0s)
			- 00:06 - [Copy and paste each file into BBEdit, removing your name](https://www.youtube.com/watch?v=szNtDddK0T0&t=6s)
			- 01:23 - [Save the file in BBEdit with `.swift` as the file extension](https://www.youtube.com/watch?v=szNtDddK0T0&t=83s)
			- 01:48 - [Print the document with line numbers and syntax highlighting](https://www.youtube.com/watch?v=szNtDddK0T0&t=108s)
			- 02:31 - [Optionally print the document in landscape mode to show longer lines better](https://www.youtube.com/watch?v=szNtDddK0T0&t=151s)
			  > [!TIP]
			  >  
			  >  The full program code PDF *with comments* is what you will upload to the Digital Portfolio website.

		3. Finally, make a version of your PDF that does *not* have comments by using this regular expression `([ ]){0,}//.*` to find and replace all comments with blanks:
			- [Getting Full Program Code Without Comments](https://vimeo.com/1074642225/a637e48b65?ts=0&share=copy)  
			  > [!TIP]
			  > 
			  > This second full program code PDF *without comments* is what you will use to take screenshots for your [Personalized Project Reference](https://apcentral.collegeboard.org/media/pdf/ap-csp-student-task-directions.pdf#page=6).
		
	1. Record your [1-minute video](https://apcentral.collegeboard.org/media/pdf/ap-csp-student-task-directions.pdf#page=5).
        - The easiest way to record a video is to press `Command-R` when your app is running in the Simulator (if writing an iOS app) or to press `Command-Shift-5` to record your screen (if writing a macOS app)
        - Here is [how to "make small text large"](https://www.russellgordon.ca/tips/embiggen-text-like-a-pro/) if you wish to use this effect in your video.
        > [!NOTE]
        > 
        > It is not required to show text captions within your video, although it is encouraged *if you have the time* as it makes the College Board evaluator's job easier. If you choose to do this, [use Quicktime Player](https://support.apple.com/en-ca/guide/quicktime-player/qtp97b08e666/10.5/mac/12.0) to record your video.
        
	2. Take your screenshots for the [Personalized Project Reference](https://apcentral.collegeboard.org/media/pdf/ap-csp-student-task-directions.pdf#page=6) and save these in a folder on your computer. You will later upload these to your AP CSP Digital Portfolio.
	    > [!IMPORTANT]
	    > 
	    > Take screenshots for your written responses from the *second* PDF you created using BBEdit – the one *without* comments.
	    > 
	    > Do not take screenshots from Xcode directly, or line numbers will not match up with your full program code PDF, which would be confusing for the College Board evaluator who reviews your submission.
	    > 
	    > Be sure that code screenshots are legible – code cannot be so tiny that it becomes nearly impossible to read without a magnifying glass.
	3. Author your written responses to the [probable exam questions](https://russellgordon.ca/lcs/2023-24/ics4u/AP_Create_Task_2022-23_-_Submission_Requirements.pdf#page=3).
	    - Although you are not submitting your written responses now, you can keep these to refer to prior to the exam in May.
	    - You will also need these written responses to prepare for the end-of-module evaluation here at LCS.
	      
5. When you are all finished, [submit your work to the College Board through your Digital Portfolio](https://digitalportfolio.collegeboard.org/).
   
   > [!TIP]
   > 
   > When you upload your work to the Digital Portfolio, you will be asked what programming language you completed the AP CSP curriculum in – of course, here you would select `Swift`.
   > 
   > You will also be asked what programming *environment*  you used – here, please select **Other** and then type `Xcode`.

