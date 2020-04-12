#This is a sample Image 
FROM ubuntu

MAINTAINER nightendkumar@outlook.com

RUN apt-get update 
RUN apt-get -y install  apache2
RUN apt-get -y install  apache2-utils
RUN apt-get clean

EXPOSE 80 
CMD ["apache2ctl", "-D", "FOREGROUND"]


# To create image: docker build -t mywebserver:0.1 .
# To make container from the image: docker run -d -p 80:81 mywebserver:0.1  