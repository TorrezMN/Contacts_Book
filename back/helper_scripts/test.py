#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Author: Torrez, Milton N.

import string
import random
import requests
from faker import Faker
from requests.auth import HTTPBasicAuth

BASE_URL = "http://localhost:3000/posts/"

PASSWORD = "la_re_contrasena"
USERNAME = "soy_yo"


def get_post():
    f = Faker()
    post = {
        "title": "".join(
            random.choice(string.ascii_uppercase + string.digits) for _ in range(10)
        ),
        "body": f.paragraph(),
        "author": f.name(),
    }
    return post


for i in range(0, 100):
    #  req = requests.post(
    #  BASE_URL, data=get_post(), auth=HTTPBasicAuth(USERNAME, PASSWORD)
    #  )

    req = requests.post(BASE_URL, data=get_post())

    print("=" * 33)
    print("STATUS CODE  ", req.status_code)
    print("CONTENT  ", req.content)
    print("TEXT  ", req.text)
    print("=" * 33)
