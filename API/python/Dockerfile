FROM python:3.7-slim
COPY ./python /home/api
WORKDIR /home/api
ENV PYTHONUNBUFFERED 1RUN pip3 install -r /code/requirements.txtCMD ["python","hello.py"]