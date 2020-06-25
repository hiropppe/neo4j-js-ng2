FROM ubuntu:18.04

RUN sed -i.bak -e "s%http://archive.ubuntu.com/ubuntu/%http://ftp.jaist.ac.jp/pub/Linux/ubuntu/%g" /etc/apt/sources.list

ENV TZ Asia/Tokyo
ENV LANG ja_JP.UTF-8
ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt install -y build-essential wget curl git vim language-pack-ja-base

RUN apt install -y npm nodejs
RUN npm install -g n
RUN n latest
RUN n lts
RUN apt purge -y nodejs npm
RUN apt autoremove -y
RUN node -v
RUN npm -v
RUN n --version
# exit

RUN npm -v
RUN n ls-remote --all
RUN n 6.17.1

RUN npm -v
# 3.10.10
RUN node -v
# v6.17.1
RUN n --version
# 6.5.1

WORKDIR /root

RUN git clone http://192.168.88.180:18080/gitbucket/git/RD/neo4j-js-ng2.git && \
    cd neo4j-js-ng2 && \
    git checkout kgedit && \
    npm install

COPY docker-entrypoint.sh /
RUN chown root:root /docker-entrypoint.sh && chmod 700 /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["app"]
