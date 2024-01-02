import requests
import random

# Create a list of 500 random titles
titles = []
for i in range(500):
    titles.append(f"Test Post {i}")

# Create a list of 500 random bodies
bodies = []
for i in range(500):
    bodies.append(f"This is the body of test post {i}")

# Create a list of 500 random authors
authors = []
for i in range(500):
    authors.append(f"Author {i}")

# Create a new post for each title, body, and author
for i in range(500):
    post = {"title": titles[i], "body": bodies[i], "author": authors[i]}

    # Send a POST request to the endpoint to create the new post
    response = requests.post("http://localhost:3000/posts/", json=post)

    # Check if the request was successful
    if response.status_code != 201:
        raise Exception("Failed to create post")

    # Print the ID of the new post
    print(response.json()["_id"])
