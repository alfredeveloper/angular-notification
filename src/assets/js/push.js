export function upNotification(){
  Push.create("Notificacion", {
    body: "Notificacion de prueba",
    icon: 'assets/image/call.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
  });
}
