export async function loadUserInfo() {
  try {
    const res = await fetch("api/get_user_info.php");
    const data = await res.json();

    const userContent = document.getElementById("userContent");
    const userFooter = document.getElementById("userFooter");
    const userName = document.getElementById("userName");
    const avatarImg = document.querySelector(".user-header .avatar");

    const headerLoginBtn = document.getElementById("header-login-btn");
    const headerUser = document.getElementById("header-user");
    const headerAvatar = document.getElementById("header-avatar");
    const headerUserName = document.getElementById("header-user-name");
    const headerDropdownMenu = document.getElementById("header-dropdown-menu");
    const headerLogoutBtn = document.getElementById("header-logout-btn");

    if (!userContent || !userFooter || !userName || !avatarImg) return;

    if (data.success && data.user) {
      if (headerLoginBtn && headerUser) {
          headerLoginBtn.classList.add("hidden");
          headerUser.classList.remove("hidden");

          headerAvatar.src = "api/get_avatar.php";

          const fullName = data.user.HoTen.trim();
          const parts = fullName.split(/\s+/);
          const shortName = parts.slice(-2).join(" ");
          headerUserName.textContent = shortName;

          document.getElementById("header-dropdown").onclick = () => {
              headerDropdownMenu.classList.toggle("hidden");
          };

          headerLogoutBtn.onclick = async () => {
              await fetch("api/logout.php", { method: "POST" });
              location.reload();
          };
      }

      const fullName = data.user.HoTen.trim();
      const parts = fullName.split(/\s+/);
      const shortName = parts.slice(-3).join(" ");

      const userInfo = document.querySelector('.user-info');
      userInfo.classList.add('logged-in');
      
      userInfo.innerHTML = `
        <p class="user-name"><b>${shortName}</b></p>
        <p class="user-email">${data.user.Email}</p>
      `;

      avatarImg.src = "api/get_avatar.php";

      userContent.innerHTML = `
        <div class="user-menu">
          <a href="profile.php" class="menu-item">
            <i class="bi bi-person"></i> <p class="text-gradient">Thông tin cá nhân</p>
          </a>
          <a href="history.php" class="menu-item">
            <i class="bi bi-clock-history"></i> <p class="text-gradient">Lịch sử đặt vé</p>
          </a>
          <a href="booking-guide.php" class="menu-item">
            <i class="bi bi-book"></i> <p class="text-gradient">Hướng dẫn đặt vé</p>
          </a>
        </div>
      `;

      userFooter.innerHTML = `
        <div class="logout-section">
          <a href="#" id="logout-btn" class="logout">
            <i class="bi bi-box-arrow-right"></i>
            <span>Đăng xuất</span>
          </a>
        </div>
      `;
      userFooter.classList.add('logged-in');

      document.getElementById("logout-btn").addEventListener("click", async () => {
        await fetch("api/logout.php", { method: "POST" });
        location.reload();
      });
    } else {
      if (headerLoginBtn && headerUser) {
          headerLoginBtn.classList.remove("hidden");
          headerUser.classList.add("hidden");

          headerLoginBtn.onclick = () => {
              window.location.href = "login.html";
          };
      }
      
      const userInfo = document.querySelector('.user-info');
      userInfo.classList.remove('logged-in');

      userInfo.innerHTML = `<p>Xin chào, <span id="userName">Khách</span></p>`;
      avatarImg.src = "images/default-avatar.jpeg";

      userContent.innerHTML = `
        <button class="signin-btn" id="signin-btn">Đăng nhập</button>
        <p>Chưa có thông tin.</p>
      `;
      userFooter.innerHTML = "";
      userFooter.classList.remove('logged-in');

      document.getElementById("signin-btn").addEventListener("click", () => {
        window.location.href = "login.html";
      });
    }

  } catch (err) {
    console.error("Lỗi tải thông tin người dùng:", err);
  }
}