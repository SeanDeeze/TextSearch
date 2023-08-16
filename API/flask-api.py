from flask import Flask, send_from_directory, request, jsonify  # Add render_template
import os.path

app = Flask(__name__)

# Serving static files


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
    else:
        # Otherwise index.html will be served,
        # angular router will handle the rest
        return app.send_static_file("index.html")


books = [
    {'title': 'Little Women', id: 1}, {
        'title': 'The Wonderful Wizard of Oz', id: 2},
    {'title': 'Pride and Prejudice', id: 3}
]


@app.route('/books', methods=['GET'])
def get_incomes():
    return jsonify(books)


if __name__ == "__main__":
    app.run()
