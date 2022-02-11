from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def principal():
    return render_template ('home.html')    


@app.route('/about')
def about():
    return render_template ('about.html')

@app.route('/skills')
def skills():
    return render_template ('skills.html')
    
@app.route('/works')
def works ():
    return render_template ('works.html')

@app.route('/contact')
def contact ():
    return render_template ('contact.html')


    
if __name__== '__main__':
    app.run(debug=True, port=8000)