# Todo List

A simple, responsive Todo List web application built with HTML, CSS, and vanilla JavaScript. Add tasks, mark them complete, and remove them through a clean, focused interface.

## Features

- Add tasks using the input field and **Add task** button.
- Mark a task as complete by clicking its text. Completed tasks are crossed out and visually muted.
- Delete individual tasks with the **Delete** button.
- Prevent empty or whitespace-only tasks from being added.
- Use the app directly in a modern web browser; no framework or build tools are required.

## Technologies

- **HTML5** for the page structure and task form.
- **CSS3** for layout, responsive sizing, and visual styling.
- **Vanilla JavaScript** for adding, completing, and deleting tasks.

## Project structure

```text
.
├── index.html/
│   └── index.html
├── script.js/
│   └── script.js
├── style.css/
│   └── style.css
└── README.md
```

The source files are stored in folders named after their file types. The HTML links to the stylesheet and script using relative paths, so keep this folder structure intact when moving the project.

## Installation

No installation or dependencies are required. Clone or download the repository, then open the project folder.

```bash
git clone <repository-url>
cd <repository-folder>
```

Replace `<repository-url>` and `<repository-folder>` with the repository URL and the folder created by Git.

## Run the application

Open `index.html/index.html` in a modern web browser. You can also open that file through your editor's local preview or a simple static web server.

## Usage

1. Enter a task in the **What do you need to do?** field.
2. Select **Add task** to place it in the list.
3. Click the task text to toggle its completed state.
4. Select **Delete** beside a task to remove it.

Tasks are held in the current page only. Refreshing or closing the page clears the list.
