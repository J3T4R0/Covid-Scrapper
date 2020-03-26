(ns functions.core
	(:gen-class))

(defn -main
	"Entrypoint"
	[& args]
	(let [msg (str "Hello, " (read-line) "...From the cloud!")]
		(println msg)))