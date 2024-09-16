from rest_framework.permissions import IsAuthenticated


class ChannelPermission(IsAuthenticated):
    def has_permission(self, request, view):
        return super().has_permission(request, view)