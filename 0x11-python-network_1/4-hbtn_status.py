#!/usr/bin/python3
"""fetches https://intranet.hbtn.io/status."""
import requests

if __name__ == "__main__":
    url = "https://intranet.hbtn.io/status"
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an HTTPError for bad responses
        print("Body response:")
        print("\t- type: {}".format(type(response.text)))
        print("\t- content: {}".format(response.text))
    except requests.exceptions.RequestException as e:
        print(f"Error fetching {url}: {e}")

