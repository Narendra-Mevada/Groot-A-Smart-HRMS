// Groot HRMS – Client-side authentication helpers
// NOTE: passwords are stored with btoa() for this demo.
// A real deployment must use a server-side backend with proper password hashing.

var USERS_KEY = 'groot_hrms_users';
var SESSION_KEY = 'groot_hrms_session';

function _initUsers() {
  if (!localStorage.getItem(USERS_KEY)) {
    var defaults = {
      'root': {
        password: btoa('root123'),
        role: 'root',
        displayName: 'Root Admin'
      },
      'admin-lead': {
        password: btoa('adminlead123'),
        role: 'admin-lead',
        displayName: 'Admin Lead'
      }
    };
    localStorage.setItem(USERS_KEY, JSON.stringify(defaults));
  }
}

function login(username, password) {
  _initUsers();
  var users = JSON.parse(localStorage.getItem(USERS_KEY));
  var user = users[username];
  if (user && user.password === btoa(password)) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      username: username,
      role: user.role,
      displayName: user.displayName
    }));
    return true;
  }
  return false;
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.href = 'login.html';
}

function getCurrentUser() {
  var raw = sessionStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

// Redirect to login if no valid session.
// If requiredRole is provided, also redirect to dashboard if the role doesn't match.
function requireAuth(requiredRole) {
  var user = getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  if (requiredRole && user.role !== requiredRole) {
    alert('Access denied. This page requires ' + requiredRole + ' privileges.');
    window.location.href = 'dashboard.html';
    return null;
  }
  return user;
}

// Reset the password for targetUsername.
// The caller must supply valid admin-lead (or root) credentials.
function resetPassword(adminUsername, adminPassword, targetUsername, newPassword) {
  _initUsers();
  var users = JSON.parse(localStorage.getItem(USERS_KEY));

  // Verify the requesting user's credentials
  var adminUser = users[adminUsername];
  if (!adminUser || adminUser.password !== btoa(adminPassword)) {
    return { success: false, message: 'Invalid credentials.' };
  }

  // Only root or admin-lead roles may perform resets
  if (adminUser.role !== 'admin-lead' && adminUser.role !== 'root') {
    return { success: false, message: 'Permission denied.' };
  }

  // admin-lead may only reset the root account
  if (adminUser.role === 'admin-lead' && targetUsername !== 'root') {
    return { success: false, message: 'Admin Lead can only reset the root password.' };
  }

  if (!users[targetUsername]) {
    return { success: false, message: 'User not found.' };
  }

  users[targetUsername].password = btoa(newPassword);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return { success: true, message: 'Password reset successfully.' };
}
