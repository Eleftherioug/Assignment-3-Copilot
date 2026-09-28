# Project Reflection

## 1. What did I ask Copilot to help me build? How did I break down the problem?

I asked Copilot to help me build a simple Todo List web application where users can add tasks, mark them complete, and delete them. I broke the project into smaller steps instead of asking for the whole application at once. First, I created the basic HTML with a title, task input, Add Task button, and an empty list. Next, I added CSS to center the interface and style the controls and completed tasks. Then I added JavaScript for adding, completing, and deleting tasks. I also asked Copilot to check that the CSS and JavaScript were connected correctly, and later to help write the README and this reflection.

## 2. How did my approach to asking questions change as I worked?

At first, I focused on one part of the app at a time and asked for beginner-friendly steps. As the project took shape, my questions became more specific. For example, I asked Copilot to check the exact stylesheet and script paths in my HTML, then requested project documentation based on the application we had actually built. I learned that giving the current project context and describing one clear goal made it easier to get useful help.

## 3. What parts of the development process with GitHub Copilot surprised me?

I was surprised that Copilot could explain the code while helping build it, instead of only producing a finished application. The project was created in small pieces, and each new part used IDs, classes, and file paths from the earlier steps. I also saw why it matters to check the project structure: my HTML, CSS, and JavaScript files were inside folders named after the file types, so the links needed to account for that layout.

## 4. What did I learn about the technology I used that I didn't know before?

I learned how HTML, CSS, and JavaScript each have a different role. HTML provides elements such as the form and task list; CSS controls the layout and the `.completed` appearance; and JavaScript responds to form submissions and clicks. I also learned that JavaScript can create elements, update their text, toggle a CSS class, and remove elements from the page. Using `event.preventDefault()` keeps the form from reloading the page, and `textContent` lets the app display the task text safely. I learned that tasks added this way are temporary and disappear when the page is refreshed unless the app saves them somewhere.

## 5. What would I do differently if I had to build this again?

If I built the app again, I would start by choosing a simpler folder structure, with `index.html`, `style.css`, and `script.js` as files in the project root. That would make the links easier to understand. I would also sketch the interface and decide on the task behaviors before coding, then build and check one feature at a time. After the basic version worked, I would add saving with browser storage so tasks remain after a refresh, and improve the task controls for keyboard and screen reader users.
