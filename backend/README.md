# [NTNUICalisthenics](../README.md) > Backend

This folder the NTNUI Calisthenics backend. Implemented using Django.

## Getting Started

Set up environment
```bash
python3 -m venv env
env\scripts\activate
pip install -r requirements.txt
```

If running Mac use `source env/bin/activate` instead of `env\scripts\activate`. Remember to apply migrations. If you do not apply migrations a warning will be displayed when starting the application.

## Starting App

```bash
env\scripts\activate
python manage.py runserver
```

If running Mac use `source env/bin/activate` instead of `env\scripts\activate`. Remember to activate 

This will launch the app at [http://localhost:8000](http://localhost:8000). Django admin panel available at [http://localhost:8000/admin](http://localhost:8000/admin).

## Migrations

To apply migrations run
```bash
python manage.py migrate
```

To create a superuser (Initial admin account) run
```bash
python manage.py createsuperuser
```
This account can be used to log in to the admin panel for the first time.

If you change or add a model, you have to make and apply migrations. You can do this using
```bash
python manage.py makemigrations
python manage.py migrate
```

## Further Reading

 - [Django](https://www.djangoproject.com/start/)
 - [Django Testing](https://docs.djangoproject.com/en/3.1/topics/testing/overview/)
