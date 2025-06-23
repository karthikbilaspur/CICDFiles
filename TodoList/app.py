
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

from typing import List, Dict, Any

# Sample in-memory todo list
todos: List[Dict[str, Any]] = [
    {"id": 1, "title": "Buy milk", "done": False},
    {"id": 2, "title": "Walk the dog", "done": False}
]

# Home Page
@app.route("/")
def home():
    return render_template("home.html")

# Todo List Page
@app.route("/todos")
def todo_list():
    return render_template("todo_list.html", todos=todos)

# Add new todo item
@app.route("/todos/add", methods=["POST"])
def add_todo():
    new_todo: Dict[str, Any] = {
        "id": len(todos) + 1,
        "title": request.form["title"],
        "done": False
    }
    todos.append(new_todo)
    return redirect(url_for("todo_list"))

# Todo Details Page
@app.route("/todos/<int:todo_id>")
def todo_details(todo_id: int):
    todo = next((todo for todo in todos if todo["id"] == todo_id), None)
    if todo is None:
        return "Todo not found", 404
    return render_template("todo_details.html", todo=todo)

# Update todo item
@app.route("/todos/<int:todo_id>/update", methods=["POST"])
def update_todo(todo_id: int):
    todo = next((todo for todo in todos if todo["id"] == todo_id), None)
    if todo is None:
        return "Todo not found", 404
    todo["title"] = request.form["title"]
    todo["done"] = "done" in request.form
    return redirect(url_for("todo_list"))

# Delete todo item
@app.route("/todos/<int:todo_id>/delete")
def delete_todo(todo_id: int):
    todo = next((todo for todo in todos if todo["id"] == todo_id), None)
    if todo is None:
        return "Todo not found", 404
    todos.remove(todo)
    return redirect(url_for("todo_list"))

if __name__ == "__main__":
    app.run(debug=True)