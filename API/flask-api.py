from flask import Flask,send_from_directory # Add render_template
import os.path

app = Flask(__name__)

# Serving static files
@app.route('/', defaults={'path': ''})
@app.route('/<string:path>')
@app.route('/<path:path>')
def static_proxy(path):
    if os.path.isfile('public/' + path):
        # If request is made for a file by angular for example main.js
        # condition will be true, file will be served from the public directory
        return send_from_directory('public', path)
    else:
        # Otherwise index.html will be served,
        # angular router will handle the rest
        return app.send_static_file("index.html")

if __name__=="__main__":
    app.run()
