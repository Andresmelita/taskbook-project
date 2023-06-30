from decouple import config


class DevelopmentConfig(config):
    DEBUG=True

config = {
    'development': DevelopmentConfig
}