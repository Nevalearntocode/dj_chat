import os

from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

django_application = get_asgi_application()

from backend import urls
from chat.middleware import JWTMiddleware

application = ProtocolTypeRouter(
    {
        "http": django_application,
        "websocket": JWTMiddleware(URLRouter(urls.websocket_urlpatterns)),
    }
)
