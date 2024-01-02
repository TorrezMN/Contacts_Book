import requests
import random


def get_random_posts(d1,d2):
    base_url = f"http://localhost:3000/contacts/filter_by_dob/{d1}/{d2}"
    print("REQUESTING THIS URL -> ", base_url)
    response = requests.post(base_url)
    data = response.json()
    for i in data["data"]:
        print(i['dateOfBirth'])


if __name__ == "__main__":
    get_random_posts("2019-07-26T00:00:00.000Z", "2021-12-14T00:00:00.000Z")
