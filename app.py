import os

from flask import Flask, render_template, request

app = Flask(__name__)
app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'change-this-development-secret')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template(
        'contact.html',
        web3forms_access_key=os.environ.get('WEB3FORMS_ACCESS_KEY', ''),
    )

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/case-studies/xai-powered-deepfake-detection')
def case_study_deepfake_detection():
    return render_template('case-studies/case_study-xai-powered-deepfake-detection.html')

@app.route('/case-studies/cartoon-face-emotion-detection')
def case_study_cartoon_face_emotion_detection():
    return render_template('case-studies/case_study-cartoon-face-and-emotion-detection.html')

@app.route('/case-studies/kidney-stone-detection')
def case_study_kidney_stone_detection():
    return render_template('case-studies/case_study-kidney-stone-detection.html')

@app.route('/case-studies/face-recognition-attendance-system')
def case_study_face_recognition_attendance_system():
    return render_template('case-studies/case_study-face-recognition-attendance-system.html')

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

@app.route('/terms-and-conditions')
def terms_and_conditions():
    return render_template('terms-and-conditions.html')


@app.route('/privacy-policy')
def privacy_policy():
    return render_template('privacy-policy.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
