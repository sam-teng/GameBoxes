
// 玩家輸入抽獎號碼
async function getLuckyNumber() {
  const lastThree = document.getElementById("lastThree").value;
  if (lastThree.length !== 3) {
    alert("請輸入正確的手機末三碼");
    return;
  }
  const res = await fetch("https://nft-lottery.onrender.com/get-number", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone: lastThree })
  });
  const data = await res.json();
  document.getElementById("result").innerText = data.message || `你的抽獎號碼是：${data.number}［${data.prize}］`;
}

// 後台登入
async function adminLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("https://nft-lottery.onrender.com/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (data.success) {
    localStorage.setItem("Authorization", data.token);
    location.href = "https://nft-lottery.onrender.com/admin";
  } else if (data.error) {
    document.getElementById("loginStatus").innerText = data.error;
  } else {
    document.getElementById("loginStatus").innerText = "登入失敗，請確認帳密";
  }
}
