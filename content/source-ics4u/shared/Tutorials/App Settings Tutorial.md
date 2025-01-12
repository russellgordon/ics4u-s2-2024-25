---
draft: false
draftSectionTwo: false
created: 2025-01-13T07:00:00.000-0400
createdForSectionTwo: 2025-01-13T07:00:00.000-0400
tags:
---
> [!NOTE]
> 
> Mr. Gordon generated this tutorial using ChatGPT (here are the [prompts given and responses received](https://chatgpt.com/share/6783f5a1-97a0-800b-8d2c-2b530f3e15d9)).
> 
> He then reviewed and edited the results for clarity and accuracy, and added screenshots.
> 
> This page is intended as a reference (please bookmark for future use).

In this tutorial, you’ll learn how to enhance a simple SwiftUI app by adding a settings sheet. The settings sheet will let the user toggle whether the globe icon is shown on the main screen. We'll also persist the user's choice using the `@AppStorage` property wrapper, so the setting is remembered even if the app is closed.

## Prerequisites
This tutorial assumes you have basic familiarity with SwiftUI and Xcode. If you’ve created a simple SwiftUI app before, you’re ready to follow along!

---

### Step 1: Starting Point
Here is the code we’ll start with:

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Hello, world!")
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
```

This app displays a globe icon and some text:

![[Screenshot 2025-01-12 at 11.56.02 AM.png]]

Next, we’ll add a settings sheet.

---

### Step 2: Add a Gear Icon and Sheet
We want to show a settings sheet when the user taps a gear icon in the top-right corner of the screen.

1. Wrap the `ContentView` in a `NavigationStack`. This adds a navigation bar to the app.
2. Add a gear icon as a button in the top-right corner of the navigation bar.
3. Use the `.sheet` modifier to show the settings sheet when the button is tapped.

Here’s the updated code:

```swift
import SwiftUI

struct ContentView: View {
    @State private var isShowingSettings = false

    var body: some View {
        NavigationStack {
            VStack {
                Image(systemName: "globe")
                    .imageScale(.large)
                    .foregroundStyle(.tint)
                Text("Hello, world!")
            }
            .padding()
            .navigationTitle("Main Screen")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button(action: {
                        isShowingSettings = true
                    }) {
                        Image(systemName: "gearshape")
                    }
                }
            }
            .sheet(isPresented: $isShowingSettings) {
                SettingsView()
            }
        }
    }
}

struct SettingsView: View {
    var body: some View {
        Text("Settings")
            .font(.title)
            .padding()
    }
}

#Preview {
    ContentView()
}
```

Run the app:

![[Screenshot 2025-01-12 at 11.58.21 AM.png]]

 Tapping the gear icon opens a sheet displaying the word "Settings":

![[Pasted image 20250112115904.png]]

---

### Step 3: Add a Setting to Toggle the Globe Icon
The goal is to let the user toggle whether the globe icon is displayed on the main screen.

1. Add a `@State` property in `SettingsView` to represent the toggle.
2. Use a `Toggle` view in `SettingsView` to let the user turn the setting on or off.

Update the `SettingsView` code as follows:

```swift
struct SettingsView: View {
    @AppStorage("showGlobe") private var showGlobe = true

    var body: some View {
        VStack {
            Text("Settings")
                .font(.title)
                .padding()

            Toggle("Show Globe Icon", isOn: $showGlobe)
                .padding()
        }
    }
}
```

Run the app. You will now see this:

![[Screenshot 2025-01-12 at 11.59.47 AM.png]]

#### Explanation of `@AppStorage`
The `@AppStorage` property wrapper automatically saves and retrieves the value of `showGlobe` from the app’s user defaults. The key "showGlobe" identifies this setting. This means the user's choice is remembered even after the app is closed.

---

### Step 4: Use the Setting to Control the Globe Icon
Now, we’ll modify `ContentView` to conditionally show the globe icon based on the `showGlobe` setting.

1. Add a `@AppStorage` property to `ContentView`.
2. Use an `if` statement to show the globe icon only if `showGlobe` is `true`.

Here’s the updated `ContentView`:

```swift
struct ContentView: View {
    @AppStorage("showGlobe") private var showGlobe = true
    @State private var isShowingSettings = false

    var body: some View {
        NavigationStack {
            VStack {
                if showGlobe {
                    Image(systemName: "globe")
                        .imageScale(.large)
                        .foregroundStyle(.tint)
                }
                Text("Hello, world!")
            }
            .padding()
            .navigationTitle("Main Screen")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button(action: {
                        isShowingSettings = true
                    }) {
                        Image(systemName: "gearshape")
                    }
                }
            }
            .sheet(isPresented: $isShowingSettings) {
                SettingsView()
            }
        }
    }
}
```

The project will look something like this:

![[Pasted image 20250112120205.png]]

---

### Step 5: Test the App
Run the app and test the following:

1. The globe icon appears on the main screen by default.
2. Tap the gear icon to open the settings sheet.
3. Toggle the "Show Globe Icon" switch off and close the sheet. The globe icon should disappear.
4. Reopen the app to confirm the setting is remembered.

---

### Recap
In this tutorial, you learned how to:
- Add a sheet to a SwiftUI app.
- Use `@AppStorage` to persist user settings.
- Conditionally display a view based on a setting.

This is a powerful pattern for creating customizable apps. Keep experimenting to build more features!

