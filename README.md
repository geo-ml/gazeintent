# E14ACNND3
Harvard Extension School | E14A CNN + D3

# Hosted Site
https://gazeintent.herokuapp.com/

# Setup
1. pyenv app
2. source app/bin/activate
3. cd app
4. pip install -r requirements.txt
5. cd static && npm i webgazer --save && cd ../
6. export SLACK_WEBHOOK_URL=$(heroku config:get SLACK_WEBHOOK_URL -a gazeintent)
7. export DATABASE_URL=$(heroku config:get DATABASE_URL -a gazeintent)
8. export SECRET_KEY=$(heroku config:get SECRET_KEY -a gazeintent)
9. python routes.py

# Heroku
1. These
2. Steps will be
3. Added, soon.
