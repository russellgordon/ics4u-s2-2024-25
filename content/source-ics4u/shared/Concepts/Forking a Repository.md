---
draft: false
draftSectionTwo: false
enableToc: false
excludeBacklinks: true
created: 2024-10-01T00:00:00.000-0400
createdForSectionTwo: 2024-10-01T00:00:00.000-0400
tags:
---
Remote repositories hosted on GitHub have an *owner* who has the ability to push commits directly to the repo.

A select few additional users, at the discretion of the repository owner, may also have the same privileges.

However, most often, outside contributors to a repository instead create what is called a *fork* of a repository.

When someone creates a fork of a repository, they are able to make whatever changes they like to that fork, pushing commits to their fork.

Here is an illustration of this concept:

![[fork.png|500]]
<br/><small>Image credit: [Git-it](http://jlord.us/git-it/index.html)</small>

If someone who has made a fork thinks the original repository owner may want the code they have written, they can use GitHub to create a *pull request*. That's like saying:

> Hey, I think you might want this code I've written in my fork. Do you?

If the original repository owner wants to incorporate the changes into their codebase, they can immediately *merge* the pull request.

The original repository owner could also request code changes from the contributor before they accept the pull request. The process looks like this:

![[pull_request_workflow.png|600]]
<br/><small>Image credit: [MuseScore](https://musescore.org/en/pull-requests-merge-process)</small>

Here is how to create a fork of a repository on GitHub, in a short 32-second video:

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1014738801?h=4544f741d1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>

> [!NOTE]
> 
> Observe, in the video, the username in the top-left corner. At first, it is `lcs-rgordon`. That is the original owner of the repository. After that repo is forked, the ownership of the fork is made clear, as the top-left corner now reflects the username of the person who forked the repository: `russellgordon`.

Usually, after creating a fork of a repository, you will want to clone the repo to your computer and open it in Xcode. Here is how to do that:

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1014741086?h=fa85f51ae3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>


