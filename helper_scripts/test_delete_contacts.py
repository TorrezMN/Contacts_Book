import requests
import random
import os


n_posts = 30


def get_random_posts():



    response = requests.get("http://localhost:3000/contacts")
    data = response.json()
    global ids
    ids = [i["_id"] for i in data["data"]]


def random_delete():
    for i in ids:
        delete_url = f"http://localhost:3000/contacts/{i}"
        response = requests.delete(delete_url)

        # Check if the request was successful
        if response.status_code == 200:
            print("Success!")
            print("Message:", response.json()["message"])
            print("Status:", response.status_code)
            print("Other relevant information:", response.json())
        else:
            raise Exception(response.json()["message"])


if __name__ == "__main__":
    get_random_posts()
    print("\n" * 44)
    random_delete()
