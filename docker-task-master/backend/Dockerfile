# Zaczynamy od obrazu Pythona
FROM python:3.8

WORKDIR /backend

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY ["app.py", "mongo_functions.py", "./"]

EXPOSE 5001

CMD ["python", "app.py"]