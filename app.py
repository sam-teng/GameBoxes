from flask import Flask, request, jsonify, render_template, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
#from sqlalchemy.sql import func
from datetime import datetime
#from .mint_nft import mint_nft_to  # 匯入 NFT 發送功能
from functools import lru_cache, wraps
import random
import secrets
import os

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = os.urandom(16)

# 使用 SQLite 資料庫
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')#'postgresql://nft_lottery_user:8xe9YrUS4OIBWkODLomjKWUGDZ2a50mC@dpg-d0122q24d50c73cp87q0-a/nft_lottery'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy(app)

# 管理員帳密（可改為環境變數）
ADMIN_USERNAME = os.environ.get('ADMIN_USERNAME')#'TYAI'
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD')#'21330419'
RETRY_LIMIT = 5
MAX_GRAND_PRIZES = 20
GRAND_PRIZE_PROB = 0.01
OTHER_PRIZE_PROB = 0.40

# 玩家資料表
# class Player(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     phone_suffix = db.Column(db.String(3), nullable=False)
#     lottery_number = db.Column(db.String(6), nullable=False)
#     is_winner = db.Column(db.Boolean, default=False)
#     prize = db.Column(db.String(12), nullable=True)
#     created_at = db.Column(db.DateTime, default=datetime.now())

# 登入 Token 暫存（簡易版）
sessions = {}
#app.config['SESSION_COOKIE_SECURE'] = True
app.config['SESSION_COOKIE_NAME'] = "session"
app.config['PERMANENT_SESSION_LIFETIME'] = 900
#app.config['SESSION_USE_SIGNER'] = True

#@app.before_first_request
def create_tables():
    with app.app_context():
        db.create_all()

# @app.route("/")
# def index():
#     return render_template("index.html")

def URLs():
     URLs = random.sample(range(0,10), k=10)
    return URLs

@app.route("/", methods=["GET"])
def home():
    URLs = random.sample(range(0,10), k=10)
    
    return render_template("home.html", URLs=URLs)
    # return redirect(url_for("home"))z

@app.route("/cookie", methods=["GET"])
def home():
    URL = str(URLs())
    PHP = """
        <?php
        $correct_username = "admin";
        $correct_password = "password123";
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = $_POST['username'];
            $password = $_POST['password'];
            if ($username === $correct_username && $password === $correct_password) {
                echo "<h1>登入成功！</h1>";
                echo "<p>恭喜你！這是你的旗標：<b>flag{easy_brute_force}</b></p>";
            } else {
                echo "<h1>登入失敗！</h1>";
                echo "<p>帳號或密碼錯誤，請再試一次。</p>";
            }
        }
        
        ?>
    """
    return render_template("login.html", URLs=URL, PHP=PHP)

@app.route("/pwn"), methods=["GET"])
def login():
    URL = str(URLs())
    PHP = """
        <?php
        $correct_username = "admin";
        $correct_password = "password123";
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = $_POST['username'];
            $password = $_POST['password'];
            if ($username === $correct_username && $password === $correct_password) {
                echo "<h1>登入成功！</h1>";
                echo "<p>恭喜你！這是你的旗標：<b>flag{easy_brute_force}</b></p>";
            } else {
                echo "<h1>登入失敗！</h1>";
                echo "<p>帳號或密碼錯誤，請再試一次。</p>";
            }
        }
        
        ?>
    """
    
    return render_template("home.html", URLs=URL, PHP=PHP)

# @app.route("/get-number", methods=["POST"])
# def get_number():
#     data = request.get_json()
#     phone_suffix = data.get("phone", "").strip()

#     if len(phone_suffix) != 3 or not phone_suffix.isdigit():
#         return jsonify({"error": "請輸入正確的手機末三碼"}), 400

#     # 查看是否已領取
#     existing = Player.query.filter_by(phone_suffix=phone_suffix).first()
#     if existing:
#         return jsonify({"number": existing.lottery_number, "prize": existing.prize})

#     lottery_number = f"{random.randint(100000, 999999)}"
#     grand_prize_count = Player.query.filter(Player.prize == "頭獎 🎉").count()
#     roll = random.random()

#     if roll < 0.01 and grand_prize_count < MAX_GRAND_PRIZES:
#         prize = "頭獎 🎉"
#     elif roll < 0.41:
#         prize = f"安慰獎 #{random.randint(1, 38)}"
#     else:
#         prize = "未中獎"

#     #lottery_number = 
        
#     new_player = Player(phone_suffix=phone_suffix, lottery_number=lottery_number, prize=prize)
#     db.session.add(new_player)
#     db.session.commit()
#     return jsonify({"number": lottery_number})

def login_blocker(func):
    #token = request.headers.get("Authorization")
    @lru_cache(maxsize=10)
    def counter(token, returnable=False):
        if not returnable:
            return -1
        return counter(token) + 1
        
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = session.get("username")
        if not sessions.get(token, False) or not token:
            return jsonify({"error": "未授權"}), 403
            #pass
        retry_count = counter(token, True)
        if retry_count > RETRY_LIMIT:
            return jsonify({"error": "超過嘗試次數，請15分鐘後再試一次"}), 403
        return func()
    return wrapper

@app.route("/admin/login", methods=["POST"])
@login_blocker
def admin_login():
    data = request.get_json()
    if data.get("username") == ADMIN_USERNAME and data.get("password") == ADMIN_PASSWORD:
        #token = secrets.token_hex(16)
        #token = request.headers.get("Authorization")
        token = session.get("username")
        sessions[token] = True
        return jsonify({"success": True, "token": token})
    return jsonify({"success": False}), 401

@app.route("/admin/data", methods=["GET"])
def admin_data():
    #token = request.headers.get("Authorization")
    token = session.get("username")
    if not (token or sessions.get(token, False)):
        return jsonify({"error": "未授權"}), 403
        #pass
    players = Player.query.all()
    return jsonify([
        {"phone": p.phone_suffix, "number": p.lottery_number, "is_winner": p.is_winner, "prize": p.prize}
        for p in players
    ])

@app.route("/admin-login")
def admin_login_page():
    token = secrets.token_hex(16)
    session['username'] = token
    return render_template("admin-login.html")

@app.route("/admin")
def admin():
    token = session.get("username") #token = request.headers.get("Authorization") 
    if not token or sessions.get(token, False):
        return jsonify({"error": "未授權"}), 403
        #pass
    query_suffix = request.args.get("phone_suffix", "")
    if query_suffix:
        records = Player.query.filter_by(phone_suffix=query_suffix).order_by(Player.id.desc()).all()
    else:
        try:
            records = Player.query.order_by(Player.id.desc()).all()
        except:
            records = {"id": "", "phone_suffix": "", "lottery_number": "", "prize": "", "created_at": ""}
    return render_template("admin.html", records=records)
    #return render_template("admin.html")

@app.route("/admin/add", methods=["POST"])
def admin_add():
    token = session.get("username") #token = request.headers.get("Authorization") 
    if not token or sessions.get(token, False):
        return redirect(url_for("admin-login"))
        #pass

    phone_suffix = request.form.get("phone_suffix")
    if not phone_suffix or not phone_suffix.isdigit() or len(phone_suffix) != 3:
        flash("請輸入正確的手機末三碼")
        return redirect(url_for("admin"))

    # 統計頭獎數量（不能超過 20）
    jackpot_count = 0
    try:
        jackpot_count = Player.query.filter_by(prize="頭獎 🎉").count()
    except:
        pass
        #jackpot_count = 0
    # 機率抽獎邏輯
    roll = random.random()
    if roll < 0.01 and jackpot_count < 20:
        prize = "頭獎 🎉"
    elif roll < 0.41:
        prize = f"安慰獎 #{random.randint(1, 38)}"
    else:
        prize = "未中獎"

    # 隨機產生抽獎序號（六位數）
    lottery_number = f"{random.randint(100000, 999999)}"

    new_record = Player(
        phone_suffix=phone_suffix,
        lottery_number=lottery_number,
        prize=prize
    )
    #flash(Player.__table__)
    try:
        db.session.add(new_record)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        #flash(f"新增失敗：{str(e)}")
        create_tables()
        return redirect(url_for("admin"))
    # db.session.add(new_record)
    # db.session.commit()
    #flash(f"已抽出：{prize}")

    return redirect(url_for("admin"))
    
@app.route("/healthz", methods=["GET"])
def health():
    return jsonify({"success": True}), 200    

if __name__ == "__main__":
    with app.app_context():
        db.drop_all()
        db.create_all()
        
    app.run(debug=True)


