from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/ai-projects')
def ai_projects():
    return render_template('portfolio.html', category='ai')

@app.route('/frontend-projects')
def frontend_projects():
    return render_template('portfolio.html', category='web')

@app.route('/fullstack-projects')
def fullstack_projects():
    return render_template('portfolio.html', category='fullstack')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
