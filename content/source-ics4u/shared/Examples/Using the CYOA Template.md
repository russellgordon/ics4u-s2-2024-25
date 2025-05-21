---
tags:
created: 2025-05-21T07:00:00.000-0400
createdForSectionTwo: 2025-05-21T00:34:55.000-0400
draft: false
draftSectionTwo: false
---

## Source code

The project manager should do the following steps, in order:

First, obtain the [template for the Choose Your Own Adventure app](https://www.russellgordon.ca/lcs/ics4u/CYOATemplate.zip), expand the Zip file, and move it to the Grade 12 Computer Science folder on their computer:

   ![[Pasted image 20250521073924.png|500]]
   
Next, create a local Git repository within the project:

   ![[Pasted image 20250521074127.png|600]]

Then, create a public remote on GitHub:

![[Pasted image 20250521074306.png]]

The other members of your group should create a fork of the new repository that is owned by the project manager.

Contributions to the source code must be made using the approach you learned earlier this year: [[Source Control Within a Team]].

> [!TIP]
> 
> You can review a [[CYOA Template Documentation|description of how this source code works here]].
   
## Database

This provided template connects to a database run out of a Supabase project created by Mr. Gordon.

Here is a look at the schema of this database:

![[Pasted image 20250521074650.png]]

The database manager needs to create a new project at Supabase.

Then, they should use the [provided starter script](https://gist.githubusercontent.com/lcs-rgordon/057205e83a622c1abb48a09d9b9c6793/raw/e1ce13e699bda76b9846f24b17991a2695948287/database_starter.mssql) in the SQL Editor, and run that script, to create the same schema in their own Supabase project:

![[Pasted image 20250521075504.png]]

Next, the database manager should invite Mr. Gordon as an administrator within their Supabase organization:

![[Pasted image 20250521080833.png]]

The database manager needs to obtain the project URL and API key for their own group's project, and replace the values provided in the CYOA template.

They should navigate to this section of their project to obtain those values:

![[Pasted image 20250521080952.png]]

... then replace those values within the template code with the values from their project, first here:

![[Pasted image 20250521081110.png]]

... as well as here:

![[Pasted image 20250521081131.png]]

> [!TIP]
> 
> You are encouraged to [[CYOA Database Documentation|review the documentation regarding the database and its schema]].



