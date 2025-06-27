import os
import json
import re

def extract_data(directory_path):
    regex = r"(\d{4}-\d{1,2}-\d{1,2})-(.*)\.md"

    data = []
    for filename in os.listdir(directory_path):
        match = re.match(regex, filename)
        if match:
            date, title = match.groups()
            title = title.replace('-', ' ')
            data.append({"date": date, "title": title, "filename": filename})

    return data

def write_json(data, json_file):
    with open(json_file, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == "__main__":
    directory_path = "./blog-posts/"
    json_file = "./blog-post.json"
    
    data = extract_data(directory_path)
    write_json(data, json_file)
