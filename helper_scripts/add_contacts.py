import requests
import random
from datetime import datetime

from faker import Faker


def convert_date_to_mongo(date_str):
    """
    Converts a date string to a MongoDB date object.

    Args:
        date_str: The date string to convert.

    Returns:
        A string representing the date.
    """
    try:
        date_obj = datetime.strptime(date_str, "%d/%m/%Y")
        return date_obj.strftime("%Y-%m-%d")  # Convert to YYYY-MM-DD format
    except ValueError:
        raise ValueError(f"Invalid date string: {date_str}")


for i in range(500):
    f = Faker()
    contact = {
        "name": f.name(),
        "lastName": f.last_name(),
        "age": random.randint(10, 50),
        "dateOfBirth": f.date(),
        "address": f.address(),
        "phoneNumber": f.phone_number(),
        "role": random.choice(["friend", "family", "coworker"]),
    }

    # Send a POST request to the endpoint to create the new POST
    response = requests.post("http://localhost:3000/contacts/", json=contact)

    # Check if the request was successful
    if response.status_code != 201:
        raise Exception("Failed to create post")

    # Print the ID of the new post
    print(response.json()["_id"])
