from flask import Flask,render_template # Add render_template

app = Flask(__name__, template_folder='template')

@app.route('/', methods=['GET'])
def root():
    return render_template('/home/api/template/index.html') # Return index.html 

if __name__=="__main__":
    app.run()
