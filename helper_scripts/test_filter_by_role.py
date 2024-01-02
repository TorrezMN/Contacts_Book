import requests
import random


def get_random_posts(role):
    print("FILTERING BY THIS ADDRESS -> ", role)
    base_url = f"http://localhost:3000/contacts/filter_by_role/{role}"
    print("REQUESTING THIS URL -> ", base_url)
    response = requests.post(base_url)
    data = response.json()
    for i in data["data"]:
        print(i)


if __name__ == "__main__":
    get_random_posts("family")
