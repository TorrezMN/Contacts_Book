import requests
import random


def get_random_posts(address):
    print("FILTERING BY THIS ADDRESS -> ", address)
    base_url = f"http://localhost:3000/contacts/filter_by_address/{address}"
    print("REQUESTING THIS URL -> ", base_url)
    response = requests.post(base_url)
    data = response.json()
    for i in data["data"]:
        print(i["address"])


if __name__ == "__main__":
    get_random_posts("Mc")
