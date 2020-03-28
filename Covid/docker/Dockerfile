EXPOSE 8080
RUN  \
  cd /opt  && \
  wget http://nodejs.org/dis/v0.10.28/node-v0.10.28-linux-x64.tar.gz && \
  tar -xfz node-v0.10.28-linux-x64.tar.gz && \
  mv node-v0.10.28-linux-x64 node && \
  	cd usr/local/bin && \
  	ln -s /opt/node/bin/* . && \
  	rm -f /opt/node-v0.10.28-linux-x64.tar.gz

WORKDIR /src
CMD ["/bin/bash"]
RUN  \
	apt-get -y --qq install python
RUN  \
	node ./database/incoming.js
RUN  \
	python ./app.py	
RUN  \
	python ./listener.py	
RUN  \
	node ./models/data.js

