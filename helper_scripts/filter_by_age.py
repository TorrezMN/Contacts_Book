import requests
import random


def get_random_posts(a1,a2):
    base_url = f"http://localhost:3000/contacts/filter_by_age/{a1}/{a2}"
    print("REQUESTING THIS URL -> ", base_url)
    response = requests.post(base_url)
    data = response.json()
    for i in data["data"]:
        print(i['age'])


if __name__ == "__main__":
    get_random_posts(20,25)
