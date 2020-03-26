FROM clojure:lein-2.7.1-alpine

WORKDIR /app/

COPY project.clj .
RUN lein deps

COPY . .
RUN mv "$(lein uberjar | sed -n 's/^Created \(.*standalone\.jar\)/\1/p')" app-standalone.jar

CMD ["java", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseCGroupMemoryLimitForHeap", "-XX:MaxRAMFraction=2", "-jar", "/app/app-standalone.jar"]
