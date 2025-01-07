---
draft: true
draftSectionTwo: true
tags:
---

```mermaid
flowchart TD
    START([START]) --> A{Is there an existing record for this student id?}
    A -->|No| B[Record exception and report in app UI]
    A -->|Yes| C{Is arrival category nil?}
    C -->|Yes| D[Record on-time arrival]
    C -->|No| E{Is arrival category on-time?}
    E -->|Yes| F[Ignore arrival and report in app UI]
    E -->|No| G{Is arrival category absent?}
    G -->|Yes| H[Record late arrival]
    G -->|No| I{Is arrival category late?}
    I -->|Yes| J[Ignore arrival and report in app UI]
    B --> END([END])
    D --> END
    F --> END
    H --> END
    J --> END

```

```mermaid
flowchart TD
    A[Start] --> B{Is there an existing record for this student ID?}
    B -- No --> C[Record exception and report in app UI]
    B -- Yes --> D{Is arrival category nil?}
    D -- Yes --> E[Record on-time arrival]
    D -- No --> F{Is arrival category on-time?}
    F -- Yes --> G[Ignore arrival and report in app UI]
    F -- No --> H{Is arrival category absent?}
    H -- Yes --> I[Record late arrival]
    H -- No --> J{Is arrival category late?}
    J -- Yes --> K[Ignore arrival and report in app UI]
    J -- No --> L[End]
```


This page is a place to place text or other bits of information in, temporarily.

Here is when the SICs are available this week:

Day|Time|SIC|Location
-|-|-|-
Monday|1:00 PM to 1:30 PM|Nikita|Room 6
Friday|1:00 PM to 1:30 PM|Ben|Room 6

## SIC Drop-In Sessions

Here is this week's schedule:

Day|Time|SIC|Location
-|-|-|-
Monday, April 29|1:00 PM to 1:30 PM|Griffin|Room 36
Tuesday, April 30|12:30 PM to 1:30 PM|Morgan|Room 36
Thursday, May 2|12:30 PM to 1:30 PM|Justin|Room 36
Friday, May 3|12:30 PM to 1:30 PM|Quin|Room 36

## Grove Time

This week's schedule is:

Day|Time|Location
-|-|-
Thursday|12:30 PM to 1:00 PM|Room 36
Friday|12:30 PM to 2:00 PM|Room 36

Grove Time is a drop-in, no appointment needed.

If you have a question, **don't hesitate**, come on by!

### RSA Numbers

As a further recap – this problem involves the use of loops in addition to conditionals – try the [[rsa-numbers.pdf|following puzzle involving identifying RSA numbers]].

To do so, make a new macOS command line project named **RSANumbers**.

You can test the correctness of your solution [[test-plan-rsa-numbers.pdf|using this test plan]].