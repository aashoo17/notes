```golang
package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"
)

func main() {
    //creating a channel of buffer size 1
    // Set up channel on which to send signal notifications.
	// We must use a buffered channel or risk missing the signal
	// if we're not ready to receive when the signal is sent.
	//we can omit 1 cause default is one in making channel
    ch := make(chan os.Signal, 1)
    //Notify takes care that all the signals will come over this channel
	signal.Notify(ch, os.Interrupt,
		syscall.SIGHUP,
		syscall.SIGINT,
		syscall.SIGTERM,
		syscall.SIGQUIT)
    //wait on the channel to receive os.Signal type
    s := <-ch
    //press control C to send the signal
	fmt.Println(s, " => did you press control C")
}

```