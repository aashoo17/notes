# curl

verbose mode with the -v option:
curl -v http://example.com

To ask for both verbose mode and that curl follows HTTP redirects:
curl -vL http://example.com
curl http://example.com -Lv		//both are same


When you use the short options with arguments, you can, in fact, also write the data without
the space separator:
curl -darbitrary http://example.com

## POST operation

Send the JSON string
curl -d '{ "name": "Darth" }' http://example.com

When specifying a numerical address,
use the dotted version for IPv4 addresses:
curl http://127.0.0.1/
…and for IPv6 addresses the numerical version needs to be within square brackets:
curl http://[::1]/

specifying ports
curl http://127.0.0.1:8080/


