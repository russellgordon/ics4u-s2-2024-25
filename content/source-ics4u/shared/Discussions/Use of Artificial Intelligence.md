---
draft: false
draftSectionTwo: false
tags: 
created: 2024-11-19T01:23:31.000-0400
createdForSectionTwo: 2024-11-20T03:00:00.000-0400
---

As we embark on the central, most important portion of this course – learning [[Software Development Methodologies|the software development lifecycle]] by [[Group Software Development Initiatives|creating software to solve authentic problems]] while  [[Source Control Within a Team|working in a team]], we are essentially looking to *live* this graphic from our course outline:

![[Pasted image 20241203203431.png]]

We want to get prototypes of our software in front of the audience for our software as quickly as possible, so that we can collect feedback, and use that feedback improve the next prototype. The goal is to better meet the needs of our users.

At this point, you know already how to use loops, write functions, create user interfaces, use arrays, and organize information within a database. You have been evaluated on these topics numerous times earlier in this course and last year, in the Grade 11 course.

You are being evaluated now on your ability to work well with others, to use source control and project management workflows, and take a software project from its inception through to its delivery as part of a team.

So if using artificial intelligence helps you on the implementation side of your group project – hint, it will – then do it!

Here are just some of the ways you are encouraged to use artificial intelligence – a broad term that encompasses many different forms of technology.

## Computer vision

[Computer vision](https://www.ibm.com/topics/computer-vision) is "a field **artificial** **intelligence** (AI) that uses machine learning and neural networks to teach computers and systems to derive meaningful information from digital images, videos and other visual inputs".

What does that mean? 

Use the frameworks that are available to us on the iOS platform to do such things as [scan barcodes](https://github.com/twostraws/CodeScanner) or [recognize text](https://www.createwithswift.com/recognizing-text-with-the-vision-framework/) on a shipping label. Being able to take input into our apps in this manner opens up a lot of possibilities for apps that we could author.

![[Pasted image 20241203210858.png|250]]

## Large language models

### Build a database

Last year we learned how to use an [[ER Diagrams|entity-relationship diagrams]] to describe the information that a database needs to hold to support an app.

As we did last year, when working within your groups this year, use ChatGPT to convert a sketch of an ER diagram you have drawn:

![[IMG_4290.jpg]]

... into SQL code:

```sql
CREATE TABLE author (
    id INT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100)
);

CREATE TABLE genre (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE book (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    price DECIMAL(10, 2),
    star_rating DECIMAL(2, 1),
    date_started DATE,
    date_finished DATE,
    review TEXT,
    genre_id INT,
    author_id INT,
    FOREIGN KEY (genre_id) REFERENCES genre(id),
    FOREIGN KEY (author_id) REFERENCES author(id)
);
```

From there, we can use the SQL to create a database, for example, in [Supabase](https://supabase.com/):

![[Screenshot 2024-12-03 at 9.06.46 PM.png]]

### Generate example data

When we are trying to build a prototype of an app to demonstrate to users how the app might function, a previously tedious part of that exercise would have been creating data for the app. 

Rather than create that data manually, given an existing database, we can ask ChatGPT, or similar large language models, to generate data for us:


```sql
-- Insert sample data into the author table
INSERT INTO author (id, first_name, last_name) VALUES
(1, 'John', 'Doe'),
(2, 'Jane', 'Smith');

-- Insert sample data into the genre table
INSERT INTO genre (id, name) VALUES
(1, 'Science Fiction'),
(2, 'Fantasy'),
(3, 'Non-Fiction');

-- Insert sample data into the book table
INSERT INTO book (id, title, price, star_rating, date_started, date_finished, review, genre_id, author_id) VALUES
(1, 'The Time Machine', 12.99, 4.5, '2023-01-01', '2023-01-15', 'A great read about time travel.', 1, 1),
(2, 'The Hobbit', 15.99, 5.0, '2023-02-01', '2023-02-20', 'A classic fantasy adventure.', 2, 2),
(3, 'Dune', 9.99, 4.8, '2023-03-01', '2023-03-30', 'Epic sci-fi saga.', 1, 1),
(4, 'Sapiens: A Brief History of Humankind', 19.99, 4.7, '2023-04-01', '2023-04-25', 'Insightful look into human history.', 3, 2),
(5, 'Harry Potter and the Philosopher\'s Stone', 10.99, 4.9, '2023-05-01', '2023-05-15', 'Magical and captivating story.', 2, 2);
```

### Generate an interface mockup

Similar to how we have used a sketch of an ER diagram to generate SQL to build a database, we can make a hand-drawn sketch of a user interface we wish to make, and have ChatGPT generate some code to use as a starting point for making the actual UI.

If you find it easier to describe a user interface using text, that can be done as well. For example:

> Please create a series of SwiftUI views that will serve as a static mockup of a single screen of a user interface for an app to track books and movies that a user has purchased. The user interface should include a navigation title of "My Library" and a tab view with tabs for "Books", "Movies", "Favourites". Select appropriate SF Symbol images for each tab. In the title bar section of the "Books" tab, include a "+" icon in the top-right corner. The "Books" tab should be a scrollable list of book titles, with each item in the scrollable list a single book. Each entry in the list should include the title of the book, slightly larger than the author of the book – these two pieces of information should be arranged vertically within each list item. Please generate at least a dozen books that will be displayed in this interface.

Here is what ChatGPT might generate for that prompt – note that since a large language model is *stochastic* – the same input given twice will not produce the same output – your results may vary from what is shown here, if you try the example prompt above:

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            BooksView()
                .tabItem {
                    Label("Books", systemImage: "book.fill")
                }
            MoviesView()
                .tabItem {
                    Label("Movies", systemImage: "film.fill")
                }
            FavouritesView()
                .tabItem {
                    Label("Favourites", systemImage: "star.fill")
                }
        }
    }
}

struct BooksView: View {
    let books = [
        ("To Kill a Mockingbird", "Harper Lee"),
        ("1984", "George Orwell"),
        ("Pride and Prejudice", "Jane Austen"),
        ("The Great Gatsby", "F. Scott Fitzgerald"),
        ("Moby Dick", "Herman Melville"),
        ("War and Peace", "Leo Tolstoy"),
        ("The Catcher in the Rye", "J.D. Salinger"),
        ("Brave New World", "Aldous Huxley"),
        ("The Hobbit", "J.R.R. Tolkien"),
        ("Jane Eyre", "Charlotte Brontë"),
        ("Crime and Punishment", "Fyodor Dostoevsky"),
        ("The Lord of the Rings", "J.R.R. Tolkien")
    ]
    
    var body: some View {
        NavigationView {
            List(books, id: \.0) { title, author in
                VStack(alignment: .leading) {
                    Text(title)
                        .font(.headline)
                    Text(author)
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                }
                .padding(.vertical, 4)
            }
            .navigationTitle("My Library")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button(action: {
                        // Action for adding a book
                    }) {
                        Image(systemName: "plus")
                    }
                }
            }
        }
    }
}

struct MoviesView: View {
    var body: some View {
        Text("Movies Tab")
            .font(.title)
            .foregroundColor(.gray)
    }
}

struct FavouritesView: View {
    var body: some View {
        Text("Favourites Tab")
            .font(.title)
            .foregroundColor(.gray)
    }
}

#Previews {
	ContentView()
}
```

Here is what the interface looks like:

![[Screenshot 2024-12-03 at 9.23.31 PM.png]]

### Resolve a syntax error

A common syntax error is omitting the `.` character before a view modifier.

For example, here is the default code provided when we create a new project in Xcode:

![[Screenshot 2024-12-03 at 9.28.17 PM.png]]

Let's deliberately introduce a syntax error and remove the `.` before the `padding()` view modifier:

![[Screenshot 2024-12-03 at 9.29.29 PM.png]]

As you can see, the Xcode Previews window immediately crashes, without giving any useful error message.

The syntax error is easy enough to spot in such a small section of code, but imagine something much larger, like the code from the [[Use of Artificial Intelligence#Generate an interface mockup|example above]]:

![[Screenshot 2024-12-03 at 9.32.12 PM.png]]

We can provide the following prompt to ChatGPT:

> The following code is written in SwiftUI. This code crashes the Xcode Previews window. I cannot find the problem. Can you help?

... after which we would copy-paste the code below the prompt.

Here is the response we get – a lot more helpful than what we received from the Swift compiler:

![[Screenshot 2024-12-03 at 9.33.59 PM.png]]

### Extend a tutorial

It's quite likely that you will try to learn how to use an Apple-provided framework provided following a tutorial.

Tutorials only go so far, though.

If you find a tutorial that helps you get started, see if you can use a large language model to help you get further toward what you need within the app you are contributing to.

### Keep the prompts

However you end up using a large language model, whether it is ChatGPT, GitHub Copilot, Claude Anthropic, or some other service – please keep the prompts you used. We can learn from one another as we find new ways to use this promising technology.