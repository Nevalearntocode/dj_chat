from django.apps import AppConfig


class ServerConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'server'

    def ready(self) -> None:
        import server.signals