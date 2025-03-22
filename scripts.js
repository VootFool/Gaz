// Переключение вкладок
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function () {
      // Убираем активный класс у всех кнопок и вкладок
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
  
      // Добавляем активный класс к выбранной кнопке и вкладке
      const tabId = this.getAttribute('data-tab');
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });