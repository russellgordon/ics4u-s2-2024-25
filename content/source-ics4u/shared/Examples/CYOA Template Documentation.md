---
tags:
created: 2025-05-21T07:00:00.000-0400
createdForSectionTwo: 2025-05-21T00:34:55.000-0400
draft: false
draftSectionTwo: false
---

> [!NOTE]
> 
> Mr. Gordon generated this documentation using the Claude Anthropic large language model.

## Overview

This Swift and SwiftUI app implements a "Choose Your Own Adventure" style interactive story experience. The app connects to a Supabase database to retrieve story content, track reader progress, and store user preferences. This document explains how the various components work together to create this interactive reading experience.

## Data Models

### Page
The `Page` struct represents a single page in the adventure book.

```swift
struct Page: Identifiable, Codable {
    var id: Int                  // Unique identifier for the page
    var narrative: String        // The story text for this page
    var image: String?           // Optional image filename
    var endingContext: String?   // Optional context text if this page is an ending
    var endingTypeId: Int?       // Optional reference to ending type (if this page is an ending)
    
    // Computed property to determine if this page is an ending to the story
    var isAnEndingOfTheStory: Bool {
        return endingTypeId != nil
    }
}
```

### Edge
The `Edge` struct represents the connections between pages, essentially the choices a reader makes.

```swift
struct Edge: Identifiable, Codable {
    var id: Int          // Unique identifier for the edge
    var prompt: String   // The text shown to the reader as a choice
    var fromPage: Int    // The page this edge originates from
    var toPage: Int      // The page this edge leads to
}
```

### EndingType
The `EndingType` struct categorizes different types of story endings.

```swift
struct EndingType: Identifiable, Codable {
    var id: Int          // Unique identifier for the ending type
    var label: String    // Descriptive label for this ending type
    var color: String    // Color associated with this ending type
}
```

### Reader
The `Reader` struct stores information about the reader, including preferences and progress.

```swift
struct Reader: Identifiable, Codable {
    var id: Int?             // Unique identifier for the reader
    var name: String?        // Reader's name (optional)
    var prefersDarkMode: Bool // Whether reader prefers dark mode
    var lastPageReadId: Int? // ID of the last page read (for resuming)
}
```

## State Management

### BookStore
The `BookStore` class manages the state of the book as it's being read.

```swift
@Observable
class BookStore: Observable {
    var reader: Reader        // Stores reader preferences and state
    var currentPageId: Int?   // ID of the current page being viewed
    var firstPageId: Int?     // ID of the first page of the book
    
    // Computed properties to check book state
    var isNotReadyToRead: Bool
    var isBeingRead: Bool
    
    // Functions to:
    // - Get the first page from the database
    // - Show the cover page
    // - Restore reader state from the database
    // - Begin reading from the first page
    // - Advance to a specific page
    // - Get details of the current page
    // - Save reader state to the database
    // - Get edges (choices) for the current page
}
```

## View Models

### PageViewModel
Manages data related to displaying a single page.

```swift
@Observable
class PageViewModel: Observable {
    var page: Page?  // Details of the current page being read
    
    // Initializer loads the current page details from the database
}
```

### EdgesViewModel
Manages data related to displaying the choices for the current page.

```swift
@Observable
class EdgesViewModel: Observable {
    var edges: [Edge]?  // List of possible choices from the current page
    
    // Initializer loads the edges for the current page from the database
}
```

## Views

### AppEntryView
The entry point of the app that manages authentication.

```swift
struct AppEntryView: View {
    @State var isAuthenticated = false  // Tracks authentication state
    
    // Shows either BookView (if authenticated) or AuthView (if not)
    // Monitors Supabase authentication state changes
}
```

### AuthView
Handles anonymous authentication with Supabase.

```swift
struct AuthView: View {
    @State var result: Result<Void, Error>?  // Tracks authentication result
    
    // Tries to restore an existing session or create a new anonymous session
    // Shows progress while authenticating
}
```

### BookView
The main view that orchestrates the reading experience.

```swift
struct BookView: View {
    @State private var book = BookStore()  // Tracks overall reading state
    @State private var showingStatsView = false    // Controls statistics view
    @State private var showingSettingsView = false // Controls settings view
    
    // Shows either CoverView or PageView based on reading state
    // Provides toolbar buttons for statistics and settings
    // Responds to app lifecycle events to save/restore state
    // Applies dark/light mode based on reader preference
}
```

### CoverView
Displays the book cover and start button.

```swift
struct CoverView: View {
    @Environment(BookStore.self) var book  // Access to book state
    
    // Shows loading indicator or book cover with "Begin reading" button
    // Begins reading when button is tapped
}
```

### PageView
Displays the content of a single page in the story.

```swift
struct PageView: View {
    @Environment(BookStore.self) var book  // Access to book state
    let viewModel: PageViewModel           // View model for the page
    
    // Shows loading indicator while page loads
    // Displays page narrative text with Markdown formatting
    // Shows page image if available
    // Shows "The End" for ending pages
    // Otherwise displays EdgeView for available choices
}
```

### EdgesView
Displays the choices available from the current page.

```swift
struct EdgesView: View {
    @Environment(BookStore.self) var book  // Access to book state
    let viewModel: EdgesViewModel          // View model for edges
    @State private var showingQuizView = false    // Controls quiz display
    @State private var quizResult: QuizResult = .quizNotActive  // Tracks quiz result
    
    // Shows loading indicator while edges load
    // Displays prompts for available choices
    // Navigates to new page when choice is tapped
    // Shows vocabulary quiz when appropriate
}
```

### VocabularyQuizView
Displays vocabulary quizzes that can occur during reading.

```swift
struct VocabularyQuizView: View {
    @Binding var showing: Bool          // Controls whether view is showing
    @Binding var result: QuizResult     // Tracks quiz result
    
    // In the starter code, this simulates a quiz with buttons for correct/incorrect answers
}
```

### StatsView
Displays reading statistics.

```swift
struct StatsView: View {
    @Binding var showing: Bool  // Controls whether view is showing
    
    // Shows statistics about reading progress
    // Includes "Done" button to dismiss the view
}
```

### SettingsView
Allows readers to adjust app settings.

```swift
struct SettingsView: View {
    @Binding var showing: Bool          // Controls whether view is showing
    @Environment(BookStore.self) var book  // Access to book state
    
    // Provides toggle for dark mode preference
    // Includes "Done" button to dismiss the view
}
```

## Database Integration

The app uses Supabase for data storage and authentication:

```swift
let supabase = SupabaseClient(
  supabaseURL: URL(string: "REDACTED")!,
  supabaseKey: "REDACTED"
)
```

The database contains the following tables:
- `page`: Stores page content (narrative text, images, ending information)
- `edge`: Stores connections between pages (choices)
- `ending_type`: Stores types of story endings
- `reader`: Stores reader preferences and state

## Flow of Operation

1. **App Launch**:
   - `AppEntryView` checks if user is authenticated
   - If not, `AuthView` creates anonymous authentication

2. **Reading Begins**:
   - `BookView` shows `CoverView` initially
   - User taps "Begin reading" to start
   - `BookStore.beginReading()` sets current page to first page
   - `BookView` transitions to show `PageView`

3. **Reading a Page**:
   - `PageViewModel` loads current page details from database
   - `PageView` displays narrative text and optional image
   - `EdgesViewModel` loads available choices from database
   - `EdgesView` displays these choices as tappable prompts

4. **Making Choices**:
   - User taps a choice in `EdgesView`
   - If choice triggers a quiz, `VocabularyQuizView` appears
   - Otherwise, `BookStore.read()` updates current page ID
   - Views refresh to show new page content

5. **Story Endings**:
   - If current page has an `endingTypeId`, it's an ending
   - `PageView` shows "The End" instead of choices
   - User can tap to return to cover

6. **Settings & Stats**:
   - User can access `SettingsView` to toggle dark mode
   - User can view `StatsView` to see reading statistics
   - Changes to settings are saved to database

7. **State Persistence**:
   - When app becomes inactive, state is saved to database
   - When app becomes active, state is restored from database
   - Allows reader to continue where they left off

## Quiz Feature

The app has a vocabulary quiz feature:
- Triggered by specific edges (those with "Turn to the next page" prompt)
- `VocabularyQuizView` displays questions (simulated in starter code)
- Reader can only proceed after answering correctly

## Custom Features

The starter code includes several features that enhance the digital experience beyond a traditional printed book:
- Dark mode toggle
- Progress tracking
- Multimedia content (images)
- Quiz integration
- Statistics tracking

## Markdown Support

The app supports Markdown in narrative text and prompts:
```swift
Text(
    try! AttributedString(
        markdown: page.narrative,
        options: AttributedString.MarkdownParsingOptions(
            interpretedSyntax: .inlineOnlyPreservingWhitespace
        )
    )
)
```
This allows for rich text formatting within the story content.
