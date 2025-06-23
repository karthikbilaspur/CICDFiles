import unittest
from TodoList.app import app

class TestTodoListApp(unittest.TestCase):
    def test_get_todos(self):
        tester = app.test_client()
        response = tester.get("/todos")
        self.assertEqual(response.status_code, 200)

    def test_create_todo(self):
        tester = app.test_client()
        response = tester.post("/todos", json={"title": "New todo"})
        self.assertEqual(response.status_code, 201)

    def test_delete_todo(self):
        tester = app.test_client()
        tester.post("/todos", json={"title": "New todo"})
        response = tester.delete("/todos/1")
        self.assertEqual(response.status_code, 200)

    def test_update_todo(self):
        tester = app.test_client()
        tester.post("/todos", json={"title": "New todo"})
        response = tester.put("/todos/1", json={"title": "Updated todo"})
        self.assertEqual(response.status_code, 200)

if __name__ == "__main__":
    unittest.main()