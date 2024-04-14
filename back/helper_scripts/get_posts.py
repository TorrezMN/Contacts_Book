#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Author: Torrez, Milton N.
import requests

BASE_URL = "http://localhost:3000/posts/"


req = requests.get(BASE_URL)
print("=" * 33)
print("STATUS CODE  ", req.status_code)
print("CONTENT  ", req.content)
print("TEXT  ", req.text)
print("=" * 33)
