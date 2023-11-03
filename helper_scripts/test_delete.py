import requests
import random


n_posts=30


def get_random_posts():
    response = requests.get(f'http://localhost:3000/posts/random_n_posts/{n_posts}')
    data = response.json()['data']
    global ids
    ids = [i['_id'] for i in data]

def random_delete():

    for i in ids:
        delete_url = f'http://localhost:3000/posts/{i}'
        response = requests.delete(delete_url)

        # Check if the request was successful
        if response.status_code == 200:
            print('Success!')
            print('Message:', response.json()['message'])
            print('Status:', response.status_code)
            print('Other relevant information:', response.json())
        else:
            raise Exception( response.json()['message'])


if __name__ == "__main__":
    get_random_posts()
    random_delete()




