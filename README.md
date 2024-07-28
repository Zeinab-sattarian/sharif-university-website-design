# Sharif University of Technology Website Design
![Screenshot (415)](https://github.com/user-attachments/assets/9923dd63-adc8-4c0e-bb26-3cf2d03977c7)
![Screenshot (416)](https://github.com/user-attachments/assets/432bd12c-454c-4f44-a6c1-147583a4684f)
![Screenshot (417)](https://github.com/user-attachments/assets/7c9ed96c-e2ff-464a-8655-7f3ed99a28d3)



## Introduction

This repository contains the source code for the Sharif University of Technology website, developed using the Django web framework. The project aims to provide an intuitive and informative platform for students, faculty, and visitors to access information about the university, its departments, news, events, and resources.

## Prerequisites

- Python 3.x
- Django 3.x or higher
- PostgreSQL or SQLite (for development)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your_username/sut-website.git
   cd sut-website
   ```

2. **Create a Virtual Environment**:

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   ```

3. **Install Dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the Database**:

   Update the `DATABASES` setting in `sut_website/settings.py` to match your database configuration. For development, you can use SQLite as provided.

   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.sqlite3',
           'NAME': BASE_DIR / 'db.sqlite3',
       }
   }
   ```

5. **Apply Migrations**:

   ```bash
   python manage.py migrate
   ```

6. **Create a Superuser**:

   ```bash
   python manage.py createsuperuser
   ```

7. **Run the Development Server**:

   ```bash
   python manage.py runserver
   ```



## Project Structure

```
sut-website/
│
├── sut_website/          # Project configuration and settings
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
├── main_app/             # Main application for the website
│   ├── migrations/       # Database migrations
│   ├── static/           # Static files (CSS, JavaScript, Images)
│   ├── templates/        # HTML templates
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
│
├── manage.py             # Django management script
│
└── requirements.txt      # Python dependencies
```




## Acknowledgments

- Developed by Zeinab Sattarian

---

For any issues, contributions, or feature requests, please open an issue or submit a pull request.
