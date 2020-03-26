(defproject helloj "0.1.0-SNAPSHOT"
	:description "Hello World for Fn Project"
	:dependencies [[org.clojure/clojure "1.9.0"]]
	:main ^:skip-aot helloj.core
	:profiles {:uberjar {:aot :all}} )