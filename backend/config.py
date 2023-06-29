class Config:
    pass


class DevelopmentConfig(Config):
    DEBUG=True

#Diccionario
config = {
    'development': DevelopmentConfig,
    'default': DevelopmentConfig
}