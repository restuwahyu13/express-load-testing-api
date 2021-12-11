from locust import HttpUser, task, between

class BruteForceRequest(HttpUser):
    wait_time = between(1, 3)

    @task
    def fetchRequest(self):
        self.client.get("/")
        self.client.get("/comments")
        self.client.get("/albums")
        self.client.get("/photos")
        self.client.get("/todos")
        self.client.get("/users")