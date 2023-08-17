# Add render_template
from flask import Flask, send_from_directory,  request, jsonify, Response, json
import os.path

app = Flask(__name__)

books = [
    {'title': 'Little Women', 'id': 1},
    {'title': 'The Wonderful Wizard of Oz', 'id': 2},
    {'title': 'Pride and Prejudice', 'id': 3}
]


@app.route('/api/books', methods=['GET'])
def getBooks():
    return jsonify(books)

# Handle Angular Routing


@app.route('/', defaults={'path': ''})
@app.route('/<string:path>')
@app.route('/<path:path>')
def static_proxy(path):
    # if "index.html" not in request.path:
    if os.path.isfile('public/' + path):
        # If request is made for a file by angular for example main.js
        # condition will be true, file will be served from the public directory
        print("Not index.html - path: " + request.path + '\n')
        return send_from_directory('public', path)
    elif len(path) == 0:
        # If request is made for a file by angular for example main.js
        # condition will be true, file will be served from the public directory
        print("EmptyPath " + request.path + '\n')
        return send_from_directory('public', 'index.html')


if __name__ == "__main__":
    app.run(debug=True)
