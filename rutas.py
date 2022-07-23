from flask import Flask,render_template,request

app = Flask(__name__)

@app.route('/')  ##le estoy diciendo a flask cuando el usuario entre a esta ruta ejecuta esta funcion
def inicio():
    return render_template('index.html')

@app.route('/citas/')
def citas():
    return render_template('citas.html')

if __name__ == '__main__':
    app.run() 