import requests
import random


def get_random_posts(name):
    print("FILTERING BY THIS NAME -> ", name)
    base_url = f"http://localhost:3000/contacts/filter_by_name/{name}"
    print("REQUESTING THIS URL -> ", base_url)
    response = requests.post(base_url)
    data = response.json()
    for i in data["data"]:
        print(i["name"])


if __name__ == "__main__":
    get_random_posts("Mar")
